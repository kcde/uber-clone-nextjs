import React from 'react';
import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
flex items-center justify-between
`;

const CarInfo = tw.div`
flex items-center
`;
const CarName = tw.div` font-semibold`;
const RideDetail = tw.div` ml-3`;
const ETA = tw.div` text-blue-600 text-xs`;
const Price = tw.div` font-medium text-sm`;

const CarImage = tw.img`
h-1/5 w-1/5
`;

const Ride = ({ name, img }) => {
  return (
    <Wrapper>
      <CarInfo>
        <CarImage src={img} />

        <RideDetail>
          <CarName>
            <p>{name}</p>
          </CarName>
          <ETA>
            <p>5 min away</p>
          </ETA>
        </RideDetail>
      </CarInfo>

      <Price>
        <p>$5.00</p>
      </Price>
    </Wrapper>
  );
};

export default Ride;
