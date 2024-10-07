import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};



export interface ICurrentUser {
  userId: string;
  name: string
  username: string;
  email: string;
  role: string;
  profilePicture?: string;
  status: string;
  phoneNumber: string;

}




export interface IUser {
  _id: string;
  username: string;
  name: string;
  role: string;
  email: string;
  status: string;
  password: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  isVerified: boolean;
  profilePicture: string;
  bio: string;
  phone: string;
  address: string;
  followerCount: number;
  followingCount: number;
  isPremium: boolean;
  premiumExpiresAt: Date;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}



export interface IInput {
  variant?: "flat" | "bordered" | "faded" | "underlined";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  type?: string;
  label?: string;
  name: string;
  disabled?: boolean;
  placeholder?: string;
}