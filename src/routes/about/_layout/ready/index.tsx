import { createFileRoute } from "@tanstack/react-router";
import { DataTable } from "@/components/DataTable";
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
} from "@tanstack/react-table";

// Define the type for our data
type Person = {
  id: number;
  name: string;
  age: number;
  role: string;
};

// Create mock data
const mockData: Person[] = [
  { id: 1, name: "علی محمدی", age: 25, role: "توسعه دهنده" },
  { id: 2, name: "سارا احمدی", age: 30, role: "طراح" },
  { id: 3, name: "محمد رضایی", age: 28, role: "مدیر پروژه" },
  { id: 4, name: "زهرا حسینی", age: 27, role: "توسعه دهنده" },
  { id: 5, name: "امیر کاظمی", age: 32, role: "طراح" },
];

export const Route = createFileRoute("/about/_layout/ready/")({
  component: RouteComponent,
});

function RouteComponent() {
  const columnHelper = createColumnHelper<Person>();

  const columns = [
    columnHelper.accessor("id", {
      header: "شناسه",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("name", {
      header: "نام",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("age", {
      header: "سن",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("role", {
      header: "نقش",
      cell: (info) => info.getValue(),
    }),
  ];

  const table = useReactTable({
    data: mockData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">جدول نمونه</h1>
      <DataTable table={table} />
    </div>
  );
}
