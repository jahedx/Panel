import { Button } from '@/components/ui/button';

import { createFileRoute } from '@tanstack/react-router';
import toast from 'react-hot-toast';

export const Route = createFileRoute('/dashboard/_layout/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <Button
        onClick={() => {
          toast.success('teset toast');
        }}
      >
        132
      </Button>
    </div>
  );
}
