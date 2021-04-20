import Link from 'next/link';
import { FacebookIcon, GithubIcon, LinkedinIcon } from 'assets/svg';
import {
  StyledAnchor,
  StyledHeading,
  StyledMainWrapper,
  StyledPage,
  StyledParagraph,
} from 'styles/UnderConstruction.styled';
import { useAuth } from 'contexts/AuthContext/AuthContext';

const UnderConstructionPage = (): JSX.Element => {
  const { user } = useAuth();
  return (
    <StyledPage>
      <StyledMainWrapper>
        <StyledHeading>{`Hello ${user?.name}`}</StyledHeading>
        <StyledHeading>geeks.academy</StyledHeading>
        <StyledParagraph>is currently under construction. Stay tuned:</StyledParagraph>
        <div>
          <Link passHref href="https://www.facebook.com/Geeksacademy-106394014777915/">
            <StyledAnchor>
              <FacebookIcon />
            </StyledAnchor>
          </Link>
          <Link passHref href="https://www.linkedin.com/company/geekscademy/">
            <StyledAnchor>
              <LinkedinIcon />
            </StyledAnchor>
          </Link>
          <Link passHref href="https://github.com/Geeks-Academy">
            <StyledAnchor>
              <GithubIcon />
            </StyledAnchor>
          </Link>
        </div>
      </StyledMainWrapper>
    </StyledPage>
  );
};

export default UnderConstructionPage;
