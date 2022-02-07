import React from 'react';
import Link from 'next/link';
import tw from 'tailwind-styled-components';

const Wrapper = tw.div`
bg-gray-200 h-screen `;
const ButtonContainer = tw.div`
bg-white px-4
`;
const BackButton = tw.img``;

const InputContainer = tw.div`bg-white flex items-center px-4 mb-2`;
const FromToIcons = tw.div` w-5 flex flex-col items-center`;
const Circle = tw.img` w-2.5 `;
const Square = tw.img`w-2.5`;
const VerticalBar = tw.img`h-10 `;
const PickupInput = tw.input`bg-gray-200 h-10 my-2 p-4 rounded-md outline-none border-none`;
const DropoffInput = tw.input`bg-gray-200 h-10 my-2 p-4 rounded-md outline-none border-none`;
const Destination = tw.div` flex flex-col flex-1`;
const AddRide = tw.div`
w-10 h-10 rounded-full bg-gray-200 ml-3
`;
const AddIcon = tw.img``;

const SavedPlaces = tw.div`flex items-center bg-white px-4 py-2 mb-3 `;
const StarIcon = tw.img` bg-gray-400 w-10  h-10 p-2 rounded-full mr-2`;
const ConfirmButtonContainer = tw.div`
px-3
`;
const ConfirmButton = tw.button`
bg-black text-white w-full text-center py-2 mr-2

`;

const Search = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/" passHref>
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>

      <InputContainer>
        <FromToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png" />
          <VerticalBar src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
          <Square src="https://img.icons8.com/windows/50/000000/square-full.png" />
        </FromToIcons>

        <Destination>
          <PickupInput placeholder="Enter pickup location" />
          <DropoffInput placeholder="Where to?" />
        </Destination>

        <AddRide>
          <AddIcon src=" https://img.icons8.com/ios/50/000000/plus-math.png" />
        </AddRide>
      </InputContainer>

      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        saved places
      </SavedPlaces>

      <ConfirmButtonContainer>
        <ConfirmButton>Confirm Locations</ConfirmButton>
      </ConfirmButtonContainer>
    </Wrapper>
  );
};

export default Search;
