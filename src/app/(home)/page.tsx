import Main from '@/components/Main';
import { TaskProvider } from '@/contexts/TaskContext';

export default function Home() {
  return (
    <TaskProvider>
      <Main />
    </TaskProvider>
  );
}
