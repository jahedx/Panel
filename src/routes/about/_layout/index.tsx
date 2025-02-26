import { createFileRoute } from "@tanstack/react-router";
import Sidebar from "./_sidebar/-components/Sidebar";

export const Route = createFileRoute("/about/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Sidebar />
      Hello "/about/"!
    </div>
  );
}
