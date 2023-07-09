'use client';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { Landing } from '@/components/Landing';
import { Navbar } from '@/components/Navbar';
import { OurServices } from '@/components/Services';
import { Marginer } from '@/components/Marginer';


export default function Home() {
  return (
    <AppContainer>
      <Navbar />
      <Landing />
      <Marginer margin={"8em"} direction='vertical' />
      <OurServices />


    </AppContainer>
  );
}

const AppContainer = styled.main`
  ${tw`
    h-full
    container
    overflow-x-hidden
    relative
    px-2
    mx-auto
  `};
`;
