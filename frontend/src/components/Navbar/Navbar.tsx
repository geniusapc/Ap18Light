import React from 'react';
import { styled } from 'twin.macro';
import Logo from './Logo';
import tw from 'twin.macro';
import { NavItems } from './NavItems';

type Props = {};


function Navbar(props: Props) {
    return (
        <NavbarContainer>
            <LogoContainer>
                <Logo />
            </LogoContainer>
            <NavItems />
        </NavbarContainer>
    );
}

export default Navbar;


const NavbarContainer = styled.div`
  min-height: 68px;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    flex-row
    items-center
    container
    mx-auto
    justify-between
  `};
`;

const LogoContainer = styled.div``;
