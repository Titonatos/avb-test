'use client';

import AddTask from './AddTask';
import Task from './Task';
import { useTaskContext } from '@/contexts/TaskContext';
import ThemeToggle from './ThemeToggle';
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function Main() {
  const { tasks } = useTaskContext();

  return (
    <ThemeProvider> 
    <main>
      <div className='max-w-[1200px] mx-auto'>
        <div className='content-center h-[80px] text-4xl'>Список задач</div>
        
      <ThemeToggle />
        <AddTask />
        <div className='flex flex-col gap-2 overflow-y-auto flex-1 min-h-0'>
          {Object.entries(tasks).map(([key, value]) => (
            <Task key={key} taskId={key} name={value as string} />
          ))}
        </div>
      </div>
    </main>
    </ThemeProvider>
  );
}
