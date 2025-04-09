import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { Input, useInput } from 'input-master';
import { useUsersLogin } from '../../../../services/iot-cloud-AAA/Authentication/useIotCloudAAAAuthentication';
import { inputConfigs } from '@/lib/input_default_settings';
import ValidationComponent from '@/components/ValidationComponent';
export const Route = createFileRoute('/auth/_layout/login/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { useRegister, submit } = useInput();
  const query = useUsersLogin();

  const handleLogin = () => {
    console.log('first');
    submit(data => {
      query.mutate(
        {
          username: data.username,
          password: data.password,
        },
        {
          onSuccess() {
            console.log('first');
          },
        }
      );
    });
  };

  return (
    <div>
      <div>
        <h1>Login</h1>

        <div className="w-80 mx-auto border p-3 rounded-md ">
          <Input
            {...inputConfigs(true)}
            type="text"
            title="Username"
            minLength={2}
            name="username"
            required
            notValidClassName="border !border-rose-500/50"
            validationOn="submit"
            register={useRegister}
          />
          <Input
            {...inputConfigs()}
            type="password"
            title="Password *"
            required
            minLength={2}
            name="password"
            togglePasswordVisibilityClassName="absolute top-2.5 left-2 z-50 cursor-pointer"
            className="pr-5"
            notValidClassName="border !border-rose-500/50"
            validationComponent={ValidationComponent}
            validationOn="submit"
            register={useRegister}
          />
          <Button variant={'default'} onClick={handleLogin}>
            ورود
          </Button>
        </div>
      </div>
    </div>
  );
}
