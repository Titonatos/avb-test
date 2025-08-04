import { Checkbox } from '@/shared/ui/checkbox';
import { useTaskContext } from '@/contexts/TaskContext';
import DeleteIcon from '@/shared/icons/DeleteIcon';

interface Props {
  name: string;
  taskId: string;
}

export default function Task({ name, taskId }: Props) {
  const { deleteTask } = useTaskContext();
  const date = new Date(parseInt(taskId)).toLocaleString('ru-RU');

  return (
    <div className='flex min-h-[40px] px-2 gap-4 items-center bg-muted/40 rounded-lg text-clip flex-shrink-0'>
      <Checkbox />
      <div className='flex-1 flex flex-col py-2'>
        <span className='text-sm text-foreground'>{name}</span>
        <span className='text-xs text-muted-foreground'>{date}</span>
      </div>
      <button
        onClick={() => deleteTask(taskId)}
        className='w-6 h-6 flex items-center justify-center hover:bg-destructive/10 rounded transition-colors'
        title='Удалить задачу'
      >
        <DeleteIcon width={16} height={16} />
      </button>
    </div>
  );
}
