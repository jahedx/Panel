import ValidationComponent from "@/components/ValidationComponent";
import { inputConfigs } from "@/configs/input/default";
import { createFileRoute } from "@tanstack/react-router";
import { Input, useInput } from "input-master";

export const Route = createFileRoute("/dashboard/_layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { useRegister } = useInput();

  return (
    <div>
      Hello "/about/"!
      <Input
        {...inputConfigs()}
        type="integer"
        separator=","
        title="Price"
        minLength={2}
        // maxLength={20}
        name="price"
        className="!pr-10"
        notValidClassName="border !border-rose-500/50"
        validationComponent={ValidationComponent}
        validationOn="submit"
        register={useRegister}
      />
      <Input
        {...inputConfigs()}
        type="calendar"
        locale="english"
        title="Price"
        name="price"
        beforeClassName="absolute left-3 top-3 z-20"
        className="!pl-10"
        titleClassName="default-input-title !pl-10"
        notValidClassName="border !border-rose-500/50"
        validationComponent={ValidationComponent}
        validationOn="submit"
        register={useRegister}
      />
      <Input
        type="select"
        options={[
          { label: "male", value: 1 },
          { label: "female", value: 2 },
        ]}
        title="Gender"
        placeholder=""
        name="gender"
        register={useRegister}
      />
    </div>
  );
}
