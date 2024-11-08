import { Task } from '../types'
import { isToday, isTomorrow } from '../utils/dateUtils';
import { sendNotification } from '../utils/notification'; 


export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, name: "プレゼン準備", date: "2024-11-01", completed: 50 },
    { id: 2, name: "会議", date: "2024-11-02", completed: 20 },
  ]);

  useEffect(() => {
    tasks.forEach((task) => {
      if (isToday(task.date)) {
        sendNotification(`${task.name} の日です！`, "タスクの期限日です。");
      } else if (isTomorrow(task.date)) {
        sendNotification(
          `${task.name} は明日です！`,
          "タスクの準備を始めましょう。"
        );
      }
    });
  }, [tasks]);

  return { tasks };
};
