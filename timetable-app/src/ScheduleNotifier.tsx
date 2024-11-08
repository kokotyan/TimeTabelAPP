import React from 'react';
import { useTasks } from './hooks/useTasks';
import { TaskList } from './TaskList';

const ScheduleNotifier: React.FC = () => {
  const { tasks } = useTasks();

  return (
    <div>
      <h2>タスク一覧</h2>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default ScheduleNotifier;
