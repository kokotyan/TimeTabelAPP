import React, { useState, useEffect } from 'react';

// 通知用の関数に型を指定
const sendNotification = (title: string, body: string) => {
  if (Notification.permission === 'granted') {
    new Notification(title, { body });
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification(title, { body });
      }
    });
  }
};

// Task型を定義して型安全にする
interface Task {
  id: number;
  name: string;
  date: string;
  completed: number;
}

// サンプルコンポーネント
const ScheduleNotifier: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: 'プレゼン準備', date: '2024-11-01', completed: 50 },
    { id: 2, name: '会議', date: '2024-11-02', completed: 20 },
  ]);

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowDate = tomorrow.toISOString().split('T')[0];

    tasks.forEach(task => {
      if (task.date === today) {
        sendNotification(`${task.name} の日です！`, 'タスクの期限日です。');
      } else if (task.date === tomorrowDate) {
        sendNotification(`${task.name} は明日です！`, 'タスクの準備を始めましょう。');
      }
    });
  }, [tasks]);

  return (
    <div>
      <h2>タスク一覧</h2>
      {tasks.map(task => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <ProgressBar progress={task.completed} />
        </div>
      ))}
    </div>
  );
};

// ProgressBarコンポーネントに型を追加
interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <div style={{ border: '1px solid #ddd', borderRadius: '8px', width: '100%', margin: '8px 0' }}>
    <div
      style={{
        height: '16px',
        width: `${progress}%`,
        backgroundColor: progress >= 100 ? 'green' : 'blue',
        borderRadius: '8px',
      }}
    />
  </div>
);

export default ScheduleNotifier;
