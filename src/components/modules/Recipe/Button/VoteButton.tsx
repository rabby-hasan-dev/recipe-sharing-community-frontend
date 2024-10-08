"use client"

import { useUser } from '@/src/context/cureentUser';
import { useCreateVote } from '@/src/hooks/votesHooks';
import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/tooltip';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';

const VoteButton = ({ recipeId, upVote, downVote }: { recipeId: string, upVote: number, downVote: number }) => {

    const { mutate: createVote, error } = useCreateVote();
    const hadnleVote = (recipeId: string, voteType: string) => {
        createVote({ id: recipeId, voteData: { type: voteType } })

    }

    return (

        <div className="flex items-center bg-black rounded-full">
            <Tooltip content='UpVote'  >
                <Button onClick={() => hadnleVote(recipeId, 'upvote')} className="bg-black text-white" radius="full" size="sm">
                    <ArrowBigUp className='mr-2' />{upVote}
                </Button>
            </Tooltip>
            <Tooltip content='DownVote '  >
                <Button onClick={() => hadnleVote(recipeId, 'downvote')} className="bg-black text-white" radius="full" size="sm">
                    <ArrowBigDown className='mr-2' />{downVote}
                </Button>
            </Tooltip>

        </div>


    );
};

export default VoteButton;