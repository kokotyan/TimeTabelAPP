import React from "react";
import { Task } from "./types";
import { ProgressBar } from "./ProgressBar";

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => (
  <>
    {tasks.map((task) => (
      <div key={task.id}>
        <h3>{task.name}</h3>
        <ProgressBar progress={task.completed} />
      </div>
    ))}
  </>
);
