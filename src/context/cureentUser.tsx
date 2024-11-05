import { useContext } from "react";

import { UserContext } from "./user.provider";

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("User must be use within the useProvider context");
  }

  return context;
};
