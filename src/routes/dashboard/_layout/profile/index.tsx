import { DataTable } from '@/components/ui/new-data-table';
import { mockTableData, TableData } from '@/mock/tableData';
import { createFileRoute } from '@tanstack/react-router';
import { ColumnDef } from '@tanstack/react-table';
import { getActionColumn } from '@/components/ui/table-columns';

export const Route = createFileRoute('/dashboard/_layout/profile/')({
  component: RouteComponent,
});

function RouteComponent() {
  const handleEdit = (data: TableData) => {
    console.log('Edit profile:', data);
    // Add your edit logic here
  };

  const handleDelete = (data: TableData) => {
    console.log('Delete profile:', data);
    // Add your delete logic here
  };

  const columns: ColumnDef<TableData>[] = [
    {
      accessorKey: 'name',
      header: 'نام',
    },
    {
      accessorKey: 'email',
      header: 'نام خانوادگی',
    },
    {
      accessorKey: 'status',
      header: 'وضعیت',
    },
    {
      accessorKey: 'role',
      header: 'نقش',
    },
    {
      accessorKey: 'lastLogin',
      header: 'آخرین ورود',
    },
    getActionColumn<TableData>({
      onEdit: handleEdit,
      onDelete: handleDelete,
    }),
  ];

  return (
    <div className="">
      <DataTable columns={columns} data={mockTableData} />
    </div>
  );
}
