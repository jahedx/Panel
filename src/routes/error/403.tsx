import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/error/403")({
  component: ForbiddenComponent,
});

function ForbiddenComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">403</h1>
        <p className="mt-2 text-xl text-gray-600">Access Denied</p>
        <p className="mt-1 text-gray-500">You don't have permission to access this page.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
