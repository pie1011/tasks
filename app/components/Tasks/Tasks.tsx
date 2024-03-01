'use client'
import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from '@/app/context/globalProvider';

function Tasks() {
    const { theme } = useGlobalState();
  return (
    <TaskStyled theme={theme}>Tasks</TaskStyled>
  )
}

const TaskStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1rem;
    padding: 1rem;
    background-color: ${(props) => props.theme.colorBg2};
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default Tasks