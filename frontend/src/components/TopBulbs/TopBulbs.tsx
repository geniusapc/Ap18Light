import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Carousel from '@itseasy21/react-elastic-carousel';
// import { useMediaQuery } from 'react-responsive';
// import { SCREENS } from '@/components/responsive';


export function TopBulbs() {
  const [current, setCurrent] = useState(0);
  // const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const lightBulb = [
    {
      name: 'Audi S3 Car',
      mileage: '10k',
      thumbnailSrc: 'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
      dailyPrice: 70,
      monthlyPrice: 1600,
      gearType: 'Auto',
      gas: 'Petrol',
    },
    {
      name: 'HONDA cITY 5 Seater Car',
      mileage: '20k',
      thumbnailSrc: 'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
      dailyPrice: 50,
      monthlyPrice: 1500,
      gearType: 'Auto',
      gas: 'Petrol',
    },
    {
      name: 'HONDA cITY 5 Seater Car',
      mileage: '20k',
      thumbnailSrc: 'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
      dailyPrice: 50,
      monthlyPrice: 1500,
      gearType: 'Auto',
      gas: 'Petrol',
    },
  ];

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>

      <CarsContainer>
        <Carousel>
          {lightBulb.map(item => <div key={item.name}>{item.name}</div>)}
        </Carousel>

      </CarsContainer>

    </TopCarsContainer>
  );
}

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;
