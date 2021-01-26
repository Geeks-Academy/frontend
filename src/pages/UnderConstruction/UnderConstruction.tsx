import Link from "next/link";
import { Text, Href } from "./constants";
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
} from "./UnderConstruction.styled";

const UnderConstructionPage = (): JSX.Element => {
  return (
    <StyledPage>
      <StyledMainWrapper>
        <StyledHeading> {Text.HEADING} </StyledHeading>
        <StyledParagraph> {Text.PARAGRAPH} </StyledParagraph>
        <div>
          <Link href={Href.FACEBOOK}>
            <a><FacebookIcon /></a>
          </Link>
          <Link href={Href.LINKEIN}>
            <a><LinkedinIcon /></a>
          </Link>
          <Link href={Href.BEHANCE}>
            <a><BehanceIcon /></a>
          </Link>
          <Link href={Href.GITHUB}>
            <a><GithubIcon /></a>
          </Link>
        </div>
      </StyledMainWrapper>
    </StyledPage>
  );
};

export default UnderConstructionPage; 