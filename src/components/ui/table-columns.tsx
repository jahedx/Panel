'use client';

import * as React from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from './button';
import { MoreVerticalIcon } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './dropdown-menu';

interface ActionColumnOptions<TData> {
  onEdit?: (data: TData) => void;
  onDelete?: (data: TData) => void;
}

export const getActionColumn = <TData extends { id: string | number }>({
  onEdit,
  onDelete,
}: ActionColumnOptions<TData> = {}): ColumnDef<TData> => ({
  id: 'actions',
  cell: ({ row }) => (
    <DropdownMenu key={`${row.original.id}_actions`}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex size-8 text-muted-foreground data-[state=open]:bg-muted"
          size="icon"
        >
          <MoreVerticalIcon />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        {onEdit && <DropdownMenuItem onClick={() => onEdit(row.original)}>ویرایش</DropdownMenuItem>}
        <DropdownMenuSeparator />
        {onDelete && (
          <DropdownMenuItem onClick={() => onDelete(row.original)}>حذف</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  ),
});
