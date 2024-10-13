'use client'

import { useFollowUser } from "@/src/hooks/followHooks";
import { Button } from "@nextui-org/button";
import { useEffect } from "react";
import { toast } from "sonner";


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
            <Button onClick={() => followUser(followUserId)} className="py-2 px-6">Follow</Button>
        </>
    );
};

export default FollowUserButton;