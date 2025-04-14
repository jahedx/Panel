import { ColumnDef } from '@tanstack/react-table';
import { User } from '@/types/user';

export const userTableColumns: ColumnDef<User>[] = [
    {
        header: 'نام',
        accessorKey: 'name',
        size: 150,
    },
    {
        header: 'نام خانوادگی',
        accessorKey: 'last_name',
        size: 150,
    },
    {
        header: 'نام کاربری',
        accessorKey: 'username',
        size: 120,
    },
    {
        header: 'شماره تماس',
        accessorKey: 'phone',
        size: 120,
    },
    {
        header: 'ایمیل',
        accessorKey: 'email',
        size: 200,
    },
]; 
