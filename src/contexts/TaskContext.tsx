'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface TaskContextType {
  tasks: Record<string, string>;
  addTask: (taskName: string) => void;
  deleteTask: (taskId: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<Record<string, string>>({});

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '{}');
    setTasks(savedTasks);
  }, []);

  const addTask = (taskName: string) => {
    const taskId = Date.now().toString();
    const newTasks = { ...tasks, [taskId]: taskName.trim() };
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const deleteTask = (taskId: string) => {
    const newTasks = { ...tasks };
    delete newTasks[taskId];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
} 