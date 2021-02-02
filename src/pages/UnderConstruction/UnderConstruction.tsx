import Link from "next/link";
import {
  FacebookIcon,
  LinkedinIcon,
  BehanceIcon,
  GithubIcon
} from 'assets/svg'
import {
  StyledMainWrapper,
  StyledParagraph,
  StyledHeading,
  StyledPage
} from "styles/UnderConstruction.styled";

const UnderConstructionPage = (): JSX.Element => {
  return (
    <StyledPage>
      <StyledMainWrapper>
        <StyledHeading>geeks.academy</StyledHeading>
        <StyledParagraph>is currently under construction. Stay tuned:</StyledParagraph>
        <div>
          <Link href='https://www.facebook.com/Geeksacademy-106394014777915/'>
            <a><FacebookIcon /></a>
          </Link>
          <Link href='https://www.linkedin.com/company/geekscademy/'>
            <a><LinkedinIcon /></a>
          </Link>
          <Link href='#'>
            <a><BehanceIcon /></a>
          </Link>
          <Link href='https://github.com/Programmers-Only-Group'>
            <a><GithubIcon /></a>
          </Link>
        </div>
      </StyledMainWrapper>
    </StyledPage>
  );
};

export default UnderConstructionPage; 