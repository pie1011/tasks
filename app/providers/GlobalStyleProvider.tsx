'use client'
import React from 'react';
import styled from 'styled-components';


interface Props{
    children: React.ReactNode;
}

function GlobalStyleProvider({ children }: Props) {
  return (
    <GlobalStyles>
        {children}
    </GlobalStyles>
  )
}

const GlobalStyles = styled.div`
    background-color: #f5f5f5;
    padding: 2.5rem;
    display: flex;
    gap: 2.5rem;
    
`;

export default GlobalStyleProvider