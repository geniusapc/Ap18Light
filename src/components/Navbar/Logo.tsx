import Image from 'next/image';
import React from 'react';
import tw from 'twin.macro';
import { styled } from 'twin.macro';

type Props = {};

function Logo(props: Props) {
  return (
    <LogoContainer>
      <Image src="/images/logo.svg" height={42} width={42} alt="logo" />
      <LogoText>AP18Light.</LogoText>
    </LogoContainer>
  );
}

export default Logo;

const LogoContainer = styled.div`
  ${tw`
  flex
  items-center
`}
`;

const LogoText = styled.div`
  ${tw`
    text-sm
    md:text-3xl
    font-bold
    text-black
  `}
`;
