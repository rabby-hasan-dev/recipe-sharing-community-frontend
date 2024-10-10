'use client'

import { useFollowUser } from "@/src/hooks/followHooks";
import { Button } from "@nextui-org/button";


const FollowUserButton = ({ followUserId }: { followUserId: string }) => {
    const { mutate: followUser, data } = useFollowUser();

    return (
        <>
            <Button onClick={() => followUser(followUserId)} className="py-2 px-6">Follow</Button>
        </>
    );
};

export default FollowUserButton;