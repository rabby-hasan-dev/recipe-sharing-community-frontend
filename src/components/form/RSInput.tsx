"use client";

import { IInput } from "@/src/types";
import { Input } from "@nextui-org/input";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";



interface IProps extends IInput {
  defaultvalue?: string;
  endContent?: ReactNode;
}

export default function RSInput({
  variant = "bordered",
  size = "md",
  required = false,
  type = "text",
  label,
  name,
  placeholder,
  className,
  defaultvalue,
  endContent,

}: IProps) {

  const { register, formState: { errors }, } = useFormContext();
  const errorMessage = errors ? (errors[name]?.message as string) : ''; // Get the error message for the specific field
  const isInvalid = !!errorMessage; // Check if there's an error

  return (
    <Input
      endContent={endContent}
      {...register(name)}
      errorMessage={errorMessage}
      isInvalid={isInvalid}
      variant={variant}
      size={size}
      required={required}
      type={type}
      label={label}
      defaultValue={defaultvalue}
      placeholder={placeholder}
      className={className}
    />
  );
}