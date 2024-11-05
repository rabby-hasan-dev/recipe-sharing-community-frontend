import { Textarea } from "@nextui-org/input";
import { useFormContext, useWatch } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  type?: string;

  defaultValue?: string;
}

export default function RSTextarea({
  name,
  label,
  variant = "bordered",
  placeholder,

  defaultValue,
}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // const currentValue = useWatch({ name });

  return (
    <Textarea
      {...register(name)}
      defaultValue={defaultValue}
      errorMessage={errors.root?.message}
      label={label}
      minRows={6}
      placeholder={placeholder}
      variant={variant}
    />
  );
}
