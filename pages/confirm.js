import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import tw from 'tailwind-styled-components';
import Map from '../components/map';
import { getCoords, getRouteDuration } from '../utils/utils.js';
import Ride from '../components/ride';
import carlist from '../utils/carlist.json';
const { cars } = carlist;

const Wrapper = tw.div`
h-screen flex flex-col
`;

const RideContainer = tw.div`
flex-1 bg-white flex flex-col  h-1/2
`;

const Title = tw.div`
text-center text-gray-500 text-xs  border-b py-0.5 bg-gray-100
`;

const ConfirmButtonContainer = tw.div`border-t border-gray-300 p-3 bg-gray-100`;
const ConfirmButton = tw.div`
bg-black text-white text-xl text-center py-2 rounded-sm `;
const RideSelector = tw.div` p-4 flex-1 flex flex-col  space-y-6  overflow-scroll  `;

const BackButtonContainer = tw.div`
absolute bg-white top-6 left-3 z-10 rounded-full cursor-pointer
`;
const BackButton = tw.img`
`;

const Confirm = () => {
  const [pickupCoords, setPickupCoords] = useState();
  const [dropofCoords, setDropofCoords] = useState();
  const [duration, setDuration] = useState();
  const router = useRouter();
  const { pickup, dropof } = router.query;

  async function getPickupCoords(city) {
    const coords = await getCoords(city);
    setPickupCoords(coords);
  }

  async function getDropofCoords(city) {
    const coords = await getCoords(city);
    setDropofCoords(coords);
  }

  async function getDuration(pickupCoords, dropofCoords) {
    const duration = await getRouteDuration(pickupCoords, dropofCoords);
    setDuration(duration);
  }

  useEffect(() => {
    getPickupCoords(pickup);
    getDropofCoords(dropof);
  }, []);

  useEffect(() => {
    if (pickupCoords && dropofCoords) getDuration(pickupCoords, dropofCoords);
  }, [pickupCoords, dropofCoords]);

  return (
    <Wrapper>
      <BackButtonContainer>
        <Link href="/search" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </BackButtonContainer>
      <Map pickup={pickupCoords} dropof={dropofCoords} />

      <RideContainer>
        <Title>Choose a ride, or swipe up for more</Title>
        <RideSelector>
          {cars.map((car) => (
            <Ride
              key={car.id}
              name={car.name}
              img={car.imgUrl}
              multiplier={car.multiplier}
              rideDuration={duration / 100}
            />
          ))}
        </RideSelector>
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;
