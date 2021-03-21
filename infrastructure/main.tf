terraform {
  backend "s3" {
    profile = "default"
    bucket  = "trstates"
    region  = "eu-central-1"
    key     = "states/apps/dev/services/geeks_frontend/terraform.tfstate"
  }
}

data "terraform_remote_state" "project-core" {
  backend = "s3"
  config = {
    bucket = "trstates"
    region = "eu-central-1"
    key    = "states/core/terraform.tfstate"
  }
}

module "geeks_academy" {
  source = "github.com/Geeks-Academy/terraform/modules/ecs_service"

  account_number     = var.account_number
  service_name       = "geeks_academy"
  task_def_file_path = "infrastructure/frontend_task_definiotion.json"
  ecs_role_name      = aws_iam_role.ecs_role.name
  cluster_name       = "GeeksAcademy"
  region             = "eu-central-1"
  container_port     = "3000"
  vpc_id             = data.terraform_remote_state.project-core.outputs.vpc_common_id
  
  tags = map("repository", "git@github.com:Geeks-Academy/frontend.git")
}

### Below to be moved to project-iam
resource "aws_iam_role" "ecs_role" {
  name               = "ecs_role"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy" "ecs_service_role_policy" {
  name     = "ecs_service_role_policy"
  role     = aws_iam_role.ecs_role.id
  policy   = <<-EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ecr:*",
        "ssm:GetParameters",
        "ssm:GetParameter",
        "ssm:DescribeParameters",
        "secretsmanager:GetSecretValue"
      ],
      "Resource": [
        "*"
      ]
    }
  ]
}
EOF
}
