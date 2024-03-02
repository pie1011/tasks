"use client";
import React from 'react';
import { edit, trash } from '@/app/utils/icons';

interface Props {
    title: string;
    description: string;
    date: string;
    isCompleted: boolean;
    id: string;
}

function TaskItem({ title, description, date, isCompleted, id }: Props) {
  return (
    <div key={id}>
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{description}</p>
        <p>{isCompleted}</p>
        <div className='task-footer'>
            { isCompleted ? <button>Completed</button> : <button>Not Completed</button>}
            <button className='edit'>{edit}</button>
            <button className='delete'>{trash}</button>
        </div>
    </div>
  )
}

export default TaskItem