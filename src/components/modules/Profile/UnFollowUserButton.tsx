'use client'

import { useUnFollowUser } from '@/src/hooks/followHooks';
import { Button } from '@nextui-org/button';
import React, { useEffect } from 'react';
import { toast } from 'sonner';

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
            <Button onClick={() => unFollowUser(unFollowUserId)} className="py-2 px-6">UnFollow</Button>
        </>
    );
};

export default UnFollowUserButton;