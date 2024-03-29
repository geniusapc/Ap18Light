import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Button } from '@/components/Button';

interface IBulbProps {
  name: string;
  thumbnailSrc: string;
  price: number;
  discountedPrice: number
}

const BulbCard = (props: IBulbProps) => {
  const { name, thumbnailSrc, price, discountedPrice } = props;

  return (
    <BulbContainer>
      <BulbThumbnail>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={thumbnailSrc} alt="car" />
      </BulbThumbnail>
      <BulbName>{name}</BulbName>
      <PricesContainer>
        <Price>
          ₦{discountedPrice}
        </Price>
        <Price>
          ₦{price}
        </Price>
      </PricesContainer>
      <Seperator />
      <BuyButton text="Buy now" />
    </BulbContainer>
  );
};

export default BulbCard;

const BulbContainer = styled.div`
  width: 16.5em;
  min-height: 23em;
  max-height: 23em;
  box-shadow: 0 1.3px 17px -2px rgba(0, 0, 0, 0.4);
  ${tw`
      flex
      flex-col
      items-center
      p-3
      pb-4
      bg-white
      rounded-md
      m-1
      sm:m-3
      md:m-6
    `};
`;

const BulbThumbnail = styled.div`
  width: 100%;
  height: auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

const BulbName = styled.h3`
  ${tw`
      text-base
      font-bold
      text-black
      mt-1
      mb-1
    `};
`;

const PricesContainer = styled.div`
  ${tw`
      w-full
      flex
      justify-start
      mt-3
    `};
`;

const SmallText = styled.p`
  color: inherit;
  ${tw`
      inline-flex
      text-xs
      font-thin
    `};
`;

const Price = styled.h5`
  ${tw`
      text-red-500
      font-bold
      text-sm
      mr-3
    `};
`;

const MonthlyPrice = styled.h5`
  ${tw`
      text-gray-500
      font-bold
      text-sm
    `};
`;

const SmallIcon = styled.span`
  ${tw`
      text-gray-400
      text-sm
      mr-1
    `};
`;


const Seperator = styled.div`
  min-width: 100%;
  min-height: 1px;
  ${tw`
      flex
      bg-gray-300
      mt-2
      mb-2
    `};
`;

const BuyButton = styled(Button)`
  ${tw`
      min-w-full
      mt-5
    `};
`;
