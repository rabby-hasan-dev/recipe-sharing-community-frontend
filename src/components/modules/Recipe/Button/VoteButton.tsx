"use client"


import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/tooltip';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';


const VoteButton = ({ upVote, downVote }: { upVote: number, downVote: number }) => {

    return (

        <div className="flex items-center bg-black rounded-full">
            <Tooltip content='UpVote'  >
                <Button className="bg-black text-white" radius="full" size="sm">
                    <ArrowBigUp />
                </Button>
            </Tooltip>
            <p className="text-white px-1 mr-4">{upVote}</p>
            <Tooltip content='DownVote '  >
                <Button className="bg-black text-white" radius="full" size="sm">
                    <ArrowBigDown />
                </Button>
            </Tooltip>
            <p className="text-white px-1 mr-4">{downVote}</p>
        </div>


    );
};

export default VoteButton;