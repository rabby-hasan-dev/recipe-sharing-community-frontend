'use client'

import { useUnFollowUser } from '@/src/hooks/followHooks';
import { Button } from '@nextui-org/button';
import React from 'react';

const UnFollowUserButton = ({ unFollowUserId }: { unFollowUserId: string }) => {
    const { mutate: unFollowUser } = useUnFollowUser();
    return (
        <>
            <Button onClick={() => unFollowUser(unFollowUserId)} className="py-2 px-6">UnFollow</Button>
        </>
    );
};

export default UnFollowUserButton;