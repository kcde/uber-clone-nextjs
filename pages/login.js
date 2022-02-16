import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import Link from 'next/link';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider, app } from '../firebase';
import { useRouter } from 'next/router';

const loginHandler = () => {
  signInWithPopup(auth, provider);
};

const Wrapper = tw.div`
px-4 bg-gray-100 h-screen
`;

const Logo = tw.img`

`;

const LogoContainer = tw.div`
 w-20 pt-10
`;

const LoginText = tw.p`
text-gray-500 text-5xl mt-10
`;

const LoginImageContainer = tw.div``;
const LoginImage = tw.img``;
const LoginButton = tw.button`
py-2.5 bg-black text-white w-full mt-4 rounded-sm
`;

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        router.push('/');
      }
    });
  }, []);
  return (
    <Wrapper>
      <LogoContainer>
        <Logo src="https://i.ibb.co/n6LWQM4/Post.png" alt="uber logo" />
      </LogoContainer>

      <LoginText>Log in to access your account</LoginText>

      <LoginImageContainer>
        <LoginImage src="https://i.ibb.co/CsV9RYZ/login-image.png" alt="login image" />
      </LoginImageContainer>

      <LoginButton onClick={loginHandler}>Log in with google</LoginButton>
    </Wrapper>
  );
};

export default Login;
