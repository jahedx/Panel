export interface TableData {
    id: string;
    name: string;
    email: string;
    status: 'active' | 'inactive' | 'pending';
    role: string;
    lastLogin: string;
}

export const mockTableData: TableData[] = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        status: 'active',
        role: 'Admin',
        lastLogin: '2024-03-15T10:30:00'
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        status: 'inactive',
        role: 'User',
        lastLogin: '2024-03-10T15:45:00'
    },
    {
        id: '3',
        name: 'Bob Johnson',
        email: 'bob.johnson@example.com',
        status: 'pending',
        role: 'Editor',
        lastLogin: '2024-03-14T09:20:00'
    },
    {
        id: '4',
        name: 'Alice Brown',
        email: 'alice.brown@example.com',
        status: 'active',
        role: 'Viewer',
        lastLogin: '2024-03-16T11:15:00'
    },
    {
        id: '5',
        name: 'Charlie Wilson',
        email: 'charlie.wilson@example.com',
        status: 'inactive',
        role: 'User',
        lastLogin: '2024-03-01T14:30:00'
    }
];

export const tableColumns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status' },
    { key: 'role', label: 'Role' },
    { key: 'lastLogin', label: 'Last Login' },
    { key: 'actions', label: 'Actions' }
]; 