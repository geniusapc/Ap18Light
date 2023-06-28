'use client';
import { Navbar } from '@/components/Navbar';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';




export default function Home() {
  return (
    <AppContainer>
      <Navbar />

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
