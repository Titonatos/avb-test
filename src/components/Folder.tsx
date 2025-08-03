import AddTask from './AddTask';
import Task from './Task';

interface Props {
  header: string;
  tasks: string[];
}

export default function Folder({ header, tasks }: Props) {
  return (
    <div className='flex flex-col w-[300px] h-[350px] py-5 px-6 bg-white rounded-3xl'>
      <div className='text-lg mb-4 font-semibold'>{header}</div>
      <div className='flex flex-col gap-2 overflow-y-auto flex-1 min-h-0'>
        {tasks.map((task, index) => (
          <Task key={index} name={task} />
        ))}
      </div>
      <div className='flex-shrink-0 mt-4'>
        <AddTask />
      </div>
    </div>
  );
}
