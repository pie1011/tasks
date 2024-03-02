"use client";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";

function CreateContent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [completed, setCompleted] = useState(false);
  const [important, setImportant] = useState(false);

  const { theme  } = useGlobalState();

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
        case "title":
            setTitle(e.target.value);
            break;
        case "description":
            setDescription(e.target.value);
            break;
        case "date":
            setDate(e.target.value);
            break;
        case "completed":
            setCompleted(e.target.checked);
            break;
        case "important":
            setImportant(e.target.checked);
            break;
        default:
            break;
    }
  } 

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log({ title, description, date, completed, important });
        const task = { title, description, date, completed, important };

        try {
            const res = await axios.post("/api/tasks", task);
            if (res.data.error) {
                toast.error(res.data.error);
            }
            toast.success("Task created successfully!");
        } catch (error) {
            toast.error("Error creating task");
            console.log("ERROR CREATING TASK: ", error);
        }
    }

  return (
    <CreateContentStyled onSubmit={handleSubmit} theme={theme}>
      <h1>Create a Task</h1>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          name="title"
          onChange={handleChange("title")}
          placeholder="e.g, Watch a video from Fireship."
        />
      </div>
      <div className="input-control">
        <label htmlFor="description">Description</label>
        <textarea
          value={description}
          onChange={handleChange("description")}
          name="description"
          id="description"
          rows={4}
          placeholder="e.g, Watch a video about Next.js Auth"
        ></textarea>
      </div>
      <div className="input-control">
        <label htmlFor="date">Date</label>
        <input
          value={date}
          onChange={handleChange("date")}
          type="date"
          name="date"
          id="date"
        />
      </div>
      <div className="input-control toggler">
        <label htmlFor="completed">Toggle Completed</label>
        <input
          value={completed.toString()}
          onChange={handleChange("completed")}
          type="checkbox"
          name="completed"
          id="completed"
        />
      </div>
      <div className="input-control toggler">
        <label htmlFor="important">Toggle Important</label>
        <input
          value={important.toString()}
          onChange={handleChange("important")}
          type="checkbox"
          name="important"
          id="important"
        />
      </div>

      <div className="submit-btn flex justify-end">
        <button type="submit">
            Create Task
        </button>
      </div>
    </CreateContentStyled>
  );
}

export default CreateContent;

const CreateContentStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colorBg2};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  .input-control {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    label {
      font-size: 1.2rem;
      font-weight: 500;
    }
    input,
    textarea {
      padding: 0.5rem;
      border-radius: 0.5rem;
      border: 1px solid ${(props) => props.theme.borderColor1};
      background-color: ${(props) => props.theme.colorBg2};
      color: ${(props) => props.theme.colorGrey1};
      font-size: 1.2rem;
      font-weight: 500;
    }
  }
  .toggler {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    input {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
  .submit-btn {
    button {
      color: ${(props) => props.theme.colorGrey3};
    }
  }
`;