"use client"

import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/tooltip';
import React, { ReactNode } from 'react';

const CommentButton = ({ icon: Icon, count }: { icon: ReactNode, count: number }) => {
    return (



        <div className="flex items-center bg-black rounded-full">

            <Tooltip content='Total Comment'  >
                <Button className="bg-black text-white" radius="full" size="sm">
                    {Icon}{count}
                </Button>
            </Tooltip>
        </div>



    );
};

export default CommentButton;