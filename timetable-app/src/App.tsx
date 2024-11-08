// App.tsx
import React from "react";
import ScheduleNotifier from "./ScheduleNotifier";

const App: React.FC = () => {
  return (
    <div>
      <h1>タスク通知アプリ</h1>
      <ScheduleNotifier />
    </div>
  );
};

export default App;
