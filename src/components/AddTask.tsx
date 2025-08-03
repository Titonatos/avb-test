'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/shared/ui/form';
import { useTaskContext } from '@/contexts/TaskContext';

const formSchema = z.object({
  addTaskName: z.string().min(2, {
    message: 'Task name must be at least 2 characters.'
  }).max(50, {
    message: 'Task name must be less than 50 characters.'
  })
});

export default function AddTask() {
  const { addTask } = useTaskContext();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      addTaskName: ''
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    addTask(values.addTaskName);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-2'
      >
        <div className='flex gap-4 items-center'>
          <FormField
            control={form.control}
            name='addTaskName'
            render={({ field }) => (
              <FormItem className='flex-1'>
                <FormControl>
                  <Input
                    placeholder='Task name'
                    className='bg-white'
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit' className='flex-shrink-0'>
            Add
          </Button>
        </div>
        <FormField
          control={form.control}
          name='addTaskName'
          render={() => (
            <FormItem>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
