import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import Carousel from '@itseasy21/react-elastic-carousel';
import BulbCard from './BulbCard';

export function TopBulbs() {
  const [current, setCurrent] = useState(0);

  const lightBulb = [
    {
      name: 'Indian Bulb',
      thumbnailSrc: 'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
      price: 1600,
      discountedPrice: 1600,
    },
    {
      name: 'HONDA cITY 5 Seater Car',
      thumbnailSrc: 'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
      price: 1500,
      discountedPrice: 1500,
    },
    {
      name: 'HONDA cITY 5 Seater Car',
      thumbnailSrc: 'https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg',
      price: 1500,
      discountedPrice: 1500,
    },
  ];

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>

      <CarsContainer>
        <Carousel isRTL={true}>
          {lightBulb.map((item) => (
            <BulbCard
              name={item.name}
              price={item.price}
              thumbnailSrc={item.thumbnailSrc}
              discountedPrice={item.discountedPrice}
            />
          ))}
        </Carousel>
      </CarsContainer>
    </TopCarsContainer>
  );
}

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    bg-green-200
    flex
    flex-col
    items-center
    justify-center
    mx-auto
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
