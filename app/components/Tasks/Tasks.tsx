'use client'
import React from 'react';
import styled from 'styled-components';

function Tasks() {
  return (
    <TaskStyled>Tasks</TaskStyled>
  )
}

const TaskStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: ${(props) => props.theme.colorBg1};
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export default Tasks