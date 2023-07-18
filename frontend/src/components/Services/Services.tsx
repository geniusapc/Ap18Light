import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCarSide, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

type Props = {}

export default function Services() {
    return (
        <Container>
            <Title>Our Services</Title>
            <ServicesContainer>
                <ServiceContainer>
                    <Service>
                        <ServiceIcon>
                            <FontAwesomeIcon icon={faMapMarkedAlt} />
                        </ServiceIcon>
                    </Service>
                    <ServiceTitle>Rent Bulbs</ServiceTitle>
                    <ServiceDescription>Rent you beautify light bulbs for occassions.</ServiceDescription>
                </ServiceContainer>
                <ServiceContainer>
                    <Service>
                        <ServiceIcon>
                            <FontAwesomeIcon icon={faCalendarAlt} />
                        </ServiceIcon>
                    </Service>
                    <ServiceTitle>Home service</ServiceTitle>
                    <ServiceDescription>Fix or replace your light bulb.</ServiceDescription>
                </ServiceContainer>
                <ServiceContainer>
                    <Service>
                        <ServiceIcon>
                            <FontAwesomeIcon icon={faCarSide} />
                        </ServiceIcon>
                    </Service>
                    <ServiceTitle>Delivery</ServiceTitle>
                    <ServiceDescription>Have your amazing light bulb delivered to you</ServiceDescription>
                </ServiceContainer>
            </ServicesContainer>
        </Container>
    );
};


const Container = styled.div`
  ${tw`
      w-full
      flex
      flex-col
      items-center
      pt-3
      pb-3
      lg:pt-6
      lg:pb-6
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

const ServicesContainer = styled.div`
  ${tw`
      flex
      justify-evenly
      flex-wrap
      mt-7
      lg:mt-16
    `};
`;

const ServiceContainer = styled.div`
  ${tw`
      flex
      flex-col
      md:w-96
      items-center
      transition-colors
      hover:text-red-500
      m-3
    `};
`;

const Service = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`
      flex
      rounded-lg
      items-center
      justify-center
      p-6
    `};
`;

const ServiceTitle = styled.h4`
  ${tw`
      text-black
      text-lg
      font-semibold
      mt-4
    `};
`;

const ServiceDescription = styled.p`
  ${tw`
      w-10/12
      text-xs
      md:text-sm
      text-center
      text-gray-600
    `};
`;

const ServiceIcon = styled.span`
  ${tw`
      text-red-500
      text-3xl
    `};
`;
