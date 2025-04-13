import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { Input, useInput } from 'input-master';
import { useUsersToken } from '../../../../services/iot-cloud-AAA/Authentication/useIotCloudAAAAuthentication';
import { inputConfigs } from '@/lib/input_default_settings';
import ValidationComponent from '@/components/ValidationComponent';
import banner from '@/assets/images/login-banner.png';

export const Route = createFileRoute('/auth/_layout/login/')({
  component: RouteComponent,
});

function RouteComponent() {
  const { useRegister, submit } = useInput();
  const query = useUsersToken();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(data => {
      query.mutate({
        username: data.username,
        password: data.password,
      });
    });
  };

  return (
    <div className="w-full grid lg:grid-cols-3 min-h-screen">
      <div className="flex items-center justify-center lg:col-span-1">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 w-96 mx-auto h-64 my-auto px-8 py-4"
        >
          <Input
            {...inputConfigs(true)}
            type="text"
            title="نام کاربری"
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
            title="کلمه عبور*"
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
          <Button type="submit" className="mt-auto mb-8" variant={'default'}>
            ورود
          </Button>
        </form>
      </div>
      <div className="lg:flex hidden h-screen col-span-2 border">
        <img src={banner} alt="Login Banner" className="object-cover" />
      </div>
    </div>
  );
}
