"use client"


import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/tooltip';
import React, { ReactNode } from 'react';

const VoteButton = ({ icon: Icon, count }: { icon: ReactNode, count: number }) => {
    return (



        <div className="flex items-center bg-black rounded-full">
            <Tooltip content='Up Vote Recipe!'  >
                <Button className="bg-black text-white" radius="full" size="sm">
                    {Icon}
                </Button>
            </Tooltip>
            <p className="text-white px-1 mr-4">{count}</p>
        </div>



    );
};

export default VoteButton;