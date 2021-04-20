import { signIn, signOut, useSession } from 'next-auth/client';
import LoginPage from 'pages/LoginPage';
import React, { FC, createContext } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextValue {
  user: any; // Temporary any
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  logOut: () => () => null,
});

export const AuthProvider: FC<AuthProviderProps> = ({ children }): JSX.Element => {
  const [session] = useSession();

  return (
    <AuthContext.Provider
      value={{
        user: session?.user,
        logOut: signOut,
      }}
    >
      {session?.user ? children : <LoginPage signIn={signIn} />}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextValue => React.useContext(AuthContext);
