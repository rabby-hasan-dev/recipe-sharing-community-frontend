import { Textarea } from "@nextui-org/input";
import { useFormContext, useWatch } from "react-hook-form";

import { IInput } from "@/src/types";

interface IProps extends IInput {
  type?: string;
  value?: string;


}

export default function RSTextarea({
  name,
  label,
  variant = "bordered",
  placeholder,
  value,

}: IProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const currentValue = useWatch({ name });
  return (
    <Textarea {...register(name)}
      label={label}
      placeholder={placeholder}
      minRows={6}
      variant={variant}
      value={currentValue || ''} />
  );
}