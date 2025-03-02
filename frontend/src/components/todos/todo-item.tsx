'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { Todo } from '@shared/todo';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

interface TodoItemProps {
  todo: Todo;
  onUpdate: (id: string, completed: boolean) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export default function TodoItem({ todo, onUpdate, onDelete }: TodoItemProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const handleToggle = async (checked: boolean) => {
    setIsCompleted(checked);
    
    startTransition(async () => {
      await onUpdate(todo.id, checked);
      router.refresh();
    });
  };

  const handleDelete = async () => {
    startTransition(async () => {
      await onDelete(todo.id);
      router.refresh();
    });
  };

  return (
    <Card className={cn(`${isPending ? 'opacity-50' : ''}`, 'shadow-none')}>
      <div className="flex items-center gap-4 px-4">
        <Checkbox
          checked={isCompleted}
          onCheckedChange={handleToggle}
          disabled={isPending}
        />
        <div className="flex-1">
          <h3 className={`font-medium ${isCompleted ? 'line-through text-muted-foreground' : ''}`}>
            {todo.title}
          </h3>
          {todo.description && (
            <p className={`text-sm ${isCompleted ? 'text-muted-foreground' : 'text-muted-foreground'}`}>
              {todo.description}
            </p>
          )}
        </div>
        <Button
          size="sm"
          className='bg-red-400 hover:bg-red-300'
          onClick={handleDelete}
          disabled={isPending}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
} 