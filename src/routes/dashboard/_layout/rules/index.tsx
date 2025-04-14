import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/_layout/rules/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/rules/"!</div>
}
