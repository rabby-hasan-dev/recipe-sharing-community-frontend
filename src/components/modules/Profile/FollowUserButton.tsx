"use client";

import { Button } from "@nextui-org/button";
import { useEffect } from "react";
import { toast } from "sonner";

import { useFollowUser } from "@/src/hooks/followHooks";

const FollowUserButton = ({ followUserId }: { followUserId: string }) => {
  const { mutate: followUser, data } = useFollowUser();

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
      <Button className="py-2 px-6" onClick={() => followUser(followUserId)}>
        Follow
      </Button>
    </>
  );
};

export default FollowUserButton;
