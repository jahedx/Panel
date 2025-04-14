'use client';

import * as React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
} from '@tanstack/react-table';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './table';
import { Button } from './button';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ColumnsIcon } from 'lucide-react';
import { Skeleton } from './skeleton';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from './dropdown-menu';

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  isLoading?: boolean;
  isError?: boolean;
  onAddNew?: () => void;
  addNewLabel?: string;
  // Server-side pagination props
  pageCount?: number;
  pageIndex?: number;
  pageSize?: number;
  onPaginationChange?: (pageIndex: number, pageSize: number) => void;
  onSortingChange?: (sorting: SortingState) => void;
  onColumnFiltersChange?: (filters: ColumnFiltersState) => void;
  onGlobalFilterChange?: (value: string) => void;
}

export function DataTable<TData>({
  columns,
  data,
  isLoading = false,
  isError = false,
  pageCount = -1,
  pageIndex = 1,
  pageSize = 10,
  onPaginationChange,
  onSortingChange,
  onColumnFiltersChange,
}: DataTableProps<TData>) {
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const columnsWithRowNumber = React.useMemo(() => {
    return [
      {
        id: 'rowNumber',
        header: () => <div className="pr-2">#</div>,
        cell: ({ row }) => {
          return <div className="pr-2">{(pageIndex - 1) * pageSize + row.index + 1}</div>;
        },
        size: 10,
        enableHiding: false,
      },
      ...columns,
    ];
  }, [columns, pageIndex, pageSize]);

  const table = useReactTable({
    data,
    columns: columnsWithRowNumber,
    state: {
      columnVisibility,
      columnFilters,
      sorting,
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    pageCount,
    manualPagination: true,
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: updater => {
      const newFilters = typeof updater === 'function' ? updater(columnFilters) : updater;
      setColumnFilters(newFilters);
      onColumnFiltersChange?.(newFilters);
    },
    onSortingChange: updater => {
      const newSorting = typeof updater === 'function' ? updater(sorting) : updater;
      setSorting(newSorting);
      onSortingChange?.(newSorting);
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const handlePageChange = (newPageIndex: number) => {
    onPaginationChange?.(newPageIndex, pageSize);
  };

  if (isError) {
    return (
      <div className="rounded-md border p-8 flex justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-2">Error loading data</p>
          <p className="text-sm text-gray-500">Please try again</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 mt-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="sm">
            انتخاب ستون ها
            <ColumnsIcon className="mr-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {table
            .getAllColumns()
            .filter(column => column.getCanHide())
            .map(column => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  className="capitalize"
                  checked={column.getIsVisible()}
                  onCheckedChange={value => column.toggleVisibility(!!value)}
                  onSelect={e => e.preventDefault()}
                >
                  {typeof column.columnDef.header === 'string'
                    ? column.columnDef.header
                    : column.id}
                </DropdownMenuCheckboxItem>
              );
            })}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="rounded-lg overflow-hidden border">
        <Table>
          <TableHeader className="bg-primary-100">
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id} className="hover:bg-transparent">
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      size={header.column.columnDef.size}
                    >
                      {header.isPlaceholder ? null : (
                        <div>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                      )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody className="[&>tr:nth-child(even)]:bg-card [&>tr:nth-child(odd)]:bg-muted/5 [&>tr]:h-12">
            {isLoading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <TableRow key={`loading-${index}`}>
                  {table.getAllColumns().map((column, cellIndex) => (
                    <TableCell key={`loading-cell-${cellIndex}`} size={column.columnDef.size}>
                      <Skeleton className="h-2 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results found
                </TableCell>
              </TableRow>
            ) : (
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  className="hover:bg-transparent"
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id} size={cell.column.columnDef.size}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center gap-4">
        <label htmlFor="pageSize">تعداد رکورد در صفحه</label>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              {table.getState().pagination.pageSize}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onPaginationChange?.(pageIndex, 10)}>
              10
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onPaginationChange?.(pageIndex, 20)}>
              20
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onPaginationChange?.(pageIndex, 30)}>
              30
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onPaginationChange?.(pageIndex, 40)}>
              40
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(1)}
            disabled={table.getState().pagination.pageIndex === 1}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(table.getState().pagination.pageIndex - 1)}
            disabled={table.getState().pagination.pageIndex === 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <span className="text-sm">
            صفحه {table.getState().pagination.pageIndex} از {table.getPageCount()}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(table.getState().pagination.pageIndex + 1)}
            disabled={table.getState().pagination.pageIndex === table.getPageCount()}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handlePageChange(table.getPageCount())}
            disabled={table.getState().pagination.pageIndex === table.getPageCount()}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
