import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import Map from '../components/map';

const Wrapper = tw.div`
flex flex-col  h-screen

`;

const ActionItems = tw.div`
flex-1  p-4

`;

const Header = tw.div`
flex justify-between items-center

`;

const UberLogo = tw.img`
h-28
`;

const Profile = tw.div`
flex space-between items-center `;

const Name = tw.div`
mr-4 w-10 text-sm
`;
const UserImage = tw.img`
w-12 h-12 rounded-full border border-gray-200 p-px
`;

const ActionButtons = tw.div`
flex
`;
const ActionButton = tw.button`
bg-gray-200 flex-1 m-1 h-32 rounded-lg flex flex-col items-center justify-center transform hover:scale-105 transition text-xl`;

const ActionButtonImage = tw.img`
h-3/5
`;

const InputButton = tw.div`

bg-gray-200 h-20 text-2xl p-4 flex items-center mt-8 rounded-lg

`;

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>keside</Name>
            <UserImage src="https://picsum.photos/id/1074/200" />
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              <p>gfg</p>
            </ActionButton>
          </Link>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />2 wheels
            </ActionButton>
          </Link>
          <Link href="/search">
            <ActionButton>
              <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
              reserve
            </ActionButton>
          </Link>
        </ActionButtons>
        <Link href="/search" passHref>
          <InputButton>Where to?</InputButton>
        </Link>
      </ActionItems>
    </Wrapper>
  );
}