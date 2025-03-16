import { ValidationComponentProps } from "input-master";

const ValidationComponent = (_: ValidationComponentProps) => {
  if (_.errors)
    return _.errors.map((err: string, index: number) => (
      <div
        className="text-white left-2 text-xs mt-1 p-2 rounded-md w-full bg-orange-500"
        key={index}
      >
        {err === "You have to fill this field" ? "این فیلد را پر کنید" : err}
      </div>
    ));
};

export default ValidationComponent;
