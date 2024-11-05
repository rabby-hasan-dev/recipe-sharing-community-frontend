"use client";

import { Button } from "@nextui-org/button";
import React, { useEffect } from "react";
import { toast } from "sonner";

import { useUnFollowUser } from "@/src/hooks/followHooks";

const UnFollowUserButton = ({ unFollowUserId }: { unFollowUserId: string }) => {
  const { mutate: unFollowUser, data } = useUnFollowUser();

  useEffect(() => {
    if (data && data?.success) {
      toast.success(data?.message as string);
    }
    if (data && !data?.success) {
      toast.error(data?.message as string);
    }
  }, [data]);

  return (
    <>
      <Button
        className="py-2 px-6"
        onClick={() => unFollowUser(unFollowUserId)}
      >
        UnFollow
      </Button>
    </>
  );
};

export default UnFollowUserButton;
