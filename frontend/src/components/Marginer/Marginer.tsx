import React from 'react';
import styled from 'styled-components';

export interface IMarginerProps {
  margin: number | string;
  direction?: 'horizontal' | 'vertical';
}

function Marginer(props: IMarginerProps) {
  const { direction = "horizontal" } = props;

  if (direction === 'horizontal') return <HorizontalMargin {...props} />;
  else {
    return <VerticalMargin {...props} />;
  }
}


export default Marginer;

const HorizontalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-width: ${({ margin }) => (typeof margin === 'string' ? margin : `${margin}px`)};
`;

const VerticalMargin = styled.span<IMarginerProps>`
  display: flex;
  min-height: ${({ margin }) => (typeof margin === 'string' ? margin : `${margin}px`)};
`;
