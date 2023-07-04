'use client';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { Landing } from '@/components/Landing';
import { Navbar } from '@/components/Navbar';


export default function Home() {
  return (
    <AppContainer>
      <Navbar />
      <Landing />

    </AppContainer>
  );
}

const AppContainer = styled.main`
  ${tw`
    w-full
    h-full
    min-h-screen
    flex
    flex-col
    items-center
    overflow-x-hidden
  `};
`;
