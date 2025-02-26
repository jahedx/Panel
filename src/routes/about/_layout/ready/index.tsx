import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/_layout/ready/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="">456</div>;
}
