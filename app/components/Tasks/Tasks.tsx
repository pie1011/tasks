"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";
import CreateContent from "../Modals/CreateContent";
import TaskItem from "../TaskItem/TaskItem";
import { plus } from "@/app/utils/icons";

interface Props {
  title: string;
  tasks: any[];
}

function Tasks({ title, tasks }: Props) {
  const { theme } = useGlobalState();

  return (
    <TaskStyled theme={theme}>
      <h2>{title}</h2>
      <div className="tasks grid"></div>
        {tasks.map((task) => (
          <TaskItem 
            key={task.id}
            title={task.title}
            date={task.date}
            description={task.description}
            isCompleted={task.isCompleted}
            id={task.id}
          />
        ))}
        <button className="create-task">
          {plus}
        </button>
      <CreateContent />
    </TaskStyled>
  );
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

export default Tasks;
