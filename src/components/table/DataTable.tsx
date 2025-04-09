import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Input, useInput } from 'input-master';
import { inputConfigs } from '@/lib/input_default_settings';
import { Skeleton } from '../ui/skeleton';

type DataTableProps<T> = {
  columns: ColumnDef<T>[];
  data: T[];
  isLoading?: boolean;
  isError?: boolean;
};

export default function DataTable<T>({
  columns,
  data,
  isLoading = false,
  isError = false,
}: DataTableProps<T>) {
  const [globalFilter, setGlobalFilter] = useState('');
  const { useRegister } = useInput();
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (isError) {
    return (
      <div className="rounded-md border p-8 flex justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-2">خطا در بارگذاری اطلاعات</p>
          <p className="text-sm text-gray-500">لطفا مجددا تلاش کنید</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Input
          {...inputConfigs()}
          name="search"
          register={useRegister}
          type="text"
          placeholder="جستجو..."
          defaultValue={globalFilter}
          onChange={e => setGlobalFilter(e.target.value)}
          className="max-w-sm"
          disabled={isLoading}
        />
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {isLoading ? (
              // Skeleton loading state
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={`loading-${index}`}>
                  {Array.from({ length: columns.length }).map((_, cellIndex) => (
                    <TableCell key={`loading-cell-${cellIndex}`}>
                      <Skeleton className="h-8 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  داده‌ای برای نمایش وجود ندارد
                </TableCell>
              </TableRow>
            ) : (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={isLoading || !table.getCanPreviousPage()}
        >
          <ChevronLeft className="w-4 h-4" />
          قبلی
        </Button>
        <span className="text-sm">
          {isLoading ? (
            <Skeleton className="h-6 w-24" />
          ) : (
            `صفحه ${table.getState().pagination.pageIndex + 1} از ${table.getPageCount()}`
          )}
        </span>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={isLoading || !table.getCanNextPage()}
        >
          <ChevronRight className="w-4 h-4" />
          بعدی
        </Button>
      </div>
    </div>
  );
}
