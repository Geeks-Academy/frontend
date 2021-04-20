import { DefaultLogo } from 'components/atoms/SocialButton/SocialButton.model';
import { FC } from 'react';
import SocialButton from '../../components/atoms/SocialButton/SocialButton';

interface LoginPageProps {
  signIn: (provider: string) => void;
}

const LoginPage: FC<LoginPageProps> = ({ signIn }): JSX.Element => {
  return (
    <div>
      <h1>Temporary login page</h1>
      <SocialButton
        logo={DefaultLogo.GITHUB}
        userRole="developer"
        onClick={() => signIn('google')}
      />
      <SocialButton
        logo={DefaultLogo.GOOGLE}
        userRole="non-developer"
        onClick={() => signIn('github')}
      />
    </div>
  );
};

export default LoginPage;
