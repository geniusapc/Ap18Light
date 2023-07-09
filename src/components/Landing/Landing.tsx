import React from 'react';
import tw, { styled } from 'twin.macro';
import { Button } from '@/components/Button';
import Image from 'next/image';

function Landing() {
  return (
    <TopSectionContainer >
      <LeftContainer>
        <Slogan>{`Lighting store`}</Slogan>
        <Description>
          Brighten with confidence. Trust our light bulbs to deliver exceptional luminosity,
          creating a captivating ambiance.
        </Description>
        <ButtonsContainer>
          <Button text="Buy Light Bulb" theme='outlined' />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <StandaloneLight>
          <Image src="/images/light.svg" alt="bulb" width={200} height={200} />
        </StandaloneLight>
      </RightContainer>
    </TopSectionContainer>
  );
}

export default Landing;

const TopSectionContainer = styled.div`
  ${tw`
    w-full
    mt-4
    md:mt-12
    lg:mt-16
    max-h-96
    max-w-screen-2xl
    flex
    justify-between
    select-none
  `};
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `};
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    xl:text-6xl
    sm:text-3xl
    md:text-5xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-4
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-12
    text-gray-800
  `};
`;


const StandaloneLight = styled.div`
${tw`
 w-auto
 h-full
 max-w-fit
 ml-auto
 absolute
//  -right-8
 md:-right-16
 md:-top-20

 sm:h-[16em]
 md:h-[22em]
 lg:h-[26em]
 xl:h-[30em]


`}

  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }

`;

const ButtonsContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `};
`;
