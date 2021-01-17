import React from 'react';
import Image from 'next/image'
// import GithubLogo from '../../assets/gh.svg'
// import GoogleLogo from '../../assets/google.svg'

import { SocialButtonParagraph, SocialButtonStyled } from './SocialButton.styled';
import { DefaultLogo, DefaultRole, Logo, Role } from './SocialButton.model';

// If we want to deliver some static files with "src" we have to keep files in a public directory.
// I don't know why you had troubles with sizes of images (: ?
// But I think that if we will have some images(for example course image) we should store them on an external server and then the <Image> feature will be a good solution for optimizing our application.
// For Images from the external server, Next has a special configuration to the delivery path for "src"
// I have troubles with absolute imports for SVG images :|




export interface IProps {
    logo: Logo;
    userRole: Role;
    className?: string;
    onClick?: () => void;
}

const SocialButton = ({ className, logo, userRole, onClick }: IProps): JSX.Element => {
    return (
        <div>
            <SocialButtonStyled className={className} onClick={onClick}>
                {/*{logo === DefaultLogo.GITHUB && <GithubLogo/>}*/}
                {/*{logo === DefaultLogo.GOOGLE && <GoogleLogo/>}*/}

                {logo === DefaultLogo.GITHUB && <Image src="/icons/gh.svg" alt="GH" width="24" height="24" />}
                {logo === DefaultLogo.GOOGLE && <Image src="/icons/google.svg" alt="Google" width="24" height="24" />}
                {userRole === 'developer' && (
                    <SocialButtonParagraph>{DefaultRole.DEVELOPER}</SocialButtonParagraph>
                )}
                {userRole === 'non-developer' && (
                    <SocialButtonParagraph>{DefaultRole.NONDEVELOPER}</SocialButtonParagraph>
                )}
            </SocialButtonStyled>
        </div>
    );
};

export default SocialButton;