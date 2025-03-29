import { ComponentDescriptor } from "input-master";
import { LoadingIcon } from "@/assets/Icons";

const cs = (): ComponentDescriptor => {
  return {
    type: "wrapper",
    children: [
      {
        type: "title",
      },
      {
        type: "other",
        props: {
          className: "default-inside-wrapper",
        },
        children: [
          {
            type: "other",
            props: {
              className: "default-input-row",
            },
            children: [
              {
                type: "input",
              },
              {
                type: "loading",
              },
              {
                type: "after",
              },
            ],
          },
          {
            type: "validation",
          },
        ],
      },
    ],
  };
};

const checkboxCs: ComponentDescriptor = {
  type: "wrapper",
  children: [
    { type: "before" },
    {
      type: "other",
      props: {
        className: "default-leftside-wrapper-checkbox w-full",
      },
      children: [
        {
          type: "other",
          props: {
            className: "default-inside-wrapper-checkbox",
          },
          children: [
            {
              type: "input",
            },
            {
              type: "title",
            },
          ],
        },
        {
          type: "validation",
        },
      ],
    },
  ],
};
export const inputConfigs = () => {
  return {
    fullWidth: true,
    classNamePrefix: "default-input-select",
    loadingClassName: "default-input-loading",
    disabledClassName: "default-input-disabled opacity-50",
    wrapperClassName: "default-input-wrapper",
    notValidClassName: "default-input-not-valid",
    afterClassName: "default-input-after",
    beforeClassName: "",
    titleClassName: "default-input-title",
    validationOn: "submit",
    portal: document.querySelector("body"),
    componentStructure: cs(),
    loadingObject: <LoadingIcon className="mr-4 text-gray-900 animate-spin" />,
    noOptionsMessage: (
      <div className="opacity-50 text-sm py-2">
        {"مقداری برای انتخاب وجود ندارد"}
      </div>
    ),
  };
};

export const checkboxConfigs = () => {
  return {
    classNamePrefix: "default-checkbox-select",
    loadingClassName: "default-checkbox-loading",
    disabledClassName: "default-checkbox-disabled opacity-50 ",
    wrapperClassName: "default-checkbox-wrapper",
    notValidClassName: "default-checkbox-not-valid",
    afterClassName: "default-checkbox-after",
    beforeClassName: "default-checkbox-before",
    titleClassName: "default-checkbox-title",
    validationOn: "submit",
    portal: document.querySelector("body"),
    componentStructure: checkboxCs,
    loadingObject: <LoadingIcon className="mr-4 text-gray-900 animate-spin" />,
    noOptionsMessage: (
      <div className="opacity-50 text-sm py-2">
        {"مقداری برای انتخاب وجود ندارد"}
      </div>
    ),
  };
};
