import { DataTable } from '@/components/ui/data-table';
import { IFilter } from '@/constants/interfaces/filter';
import { IListParams } from '@/constants/interfaces/request.interface';
import { useUsersList } from '@/services/iot-cloud-AAA/Users/useIotCloudAAAUsers';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { userTableColumns } from '@/constants/columns/users-table-columns';
import { TableFilter } from '@/components/TableFilter';

export const Route = createFileRoute('/dashboard/_layout/users/')({
  component: RouteComponent,
});

function RouteComponent() {
  const [pageIndex, setPageIndex] = useState(1); // 1-based index
  const [pageSize, setPageSize] = useState(10);
  const [filters, setFilters] = useState<IFilter[]>([]);

  const listParams: IListParams = {
    pagination: { page: pageIndex, page_size: pageSize },
    filters,
  };
  const query = useUsersList(listParams);
  const handlePaginationChange = (newPageIndex: number, newPageSize: number) => {
    setPageIndex(newPageIndex);
    setPageSize(newPageSize);
  };

  const filterFields = [
    { name: 'first_name', label: 'نام' },
    { name: 'last_name', label: 'نام خانوادگی' },
    { name: 'username', label: 'نام کاربری' },
    { name: 'phone', label: 'شماره تماس' },
    { name: 'email', label: 'ایمیل' },
  ];

  return (
    <>
      <TableFilter filterFields={filterFields} onFilterChange={setFilters} />
      <DataTable
        columns={userTableColumns}
        pageIndex={query.data?.data?.pagination?.current_page}
        pageSize={query.data?.data?.pagination?.page_size}
        pageCount={query.data?.data?.pagination?.total_pages}
        data={query.data?.data?.users ?? []}
        isError={query.isError}
        isLoading={query.isLoading}
        onPaginationChange={handlePaginationChange}
      />
    </>
  );
}
