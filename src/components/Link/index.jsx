/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const LinkA = styled.a`
  text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }
`;

export default function Link({ children, href, ...props }) {
  return (
    <NextLink href={href} passHref>
      <LinkA {...props}>
        {children}
      </LinkA>
    </NextLink>
  );
}
