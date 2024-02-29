'use client'
import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider';

function Sidebar() {
    const { theme } = useGlobalState();
    console.log(theme)
  return (
    <div>
      <h1>Sidebar</h1>
    </div>
  );
}

const SidebarStyled = styled.nav`
`;

export default Sidebar;
