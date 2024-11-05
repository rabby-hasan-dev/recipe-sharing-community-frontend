import * as React from "react";

import { IconSvgProps } from "@/src/types";

export const upVoteIcon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    className="lucide lucide-arrow-big-up"
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 18v-6H5l7-7 7 7h-4v6H9z" />
  </svg>
);
