import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/_layout/devices/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/devices/"!</div>
}
