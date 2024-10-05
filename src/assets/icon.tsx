import * as React from "react";

import { IconSvgProps } from "@/src/types";


export const upVoteIcon: React.FC<IconSvgProps> = ({
    size = 36,
    width,
    height,
    ...props
}) => (
    <svg xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-arrow-big-up">
        <path d="M9 18v-6H5l7-7 7 7h-4v6H9z" />
    </svg>
);


