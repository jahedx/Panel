import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/about/"!</div>;
}
