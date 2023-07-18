import Image from 'next/image';
import React from 'react';
import tw from 'twin.macro';
import { styled } from 'twin.macro';

type Props = {};

function Logo(props: Props) {
  return (
    <LogoContainer>
      <Image src="/images/logo.svg" height={120} width={120} alt="logo" />
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
