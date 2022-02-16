import { useEffect, useState } from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import Map from '../components/map';
import { signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useRouter } from 'next/router';
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
w-12 h-12 rounded-full border bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5
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
  const router = useRouter();
  const [userData, setUserData] = useState();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserData({
          imgUrl: user.photoURL,
          name: user.displayName.split(' ')[0],
        });
      }
    });
  }, []);
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>{userData && userData.name}</Name>
            <UserImage onClick={() => signOut(auth)} src={userData && userData.imgUrl} />
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
