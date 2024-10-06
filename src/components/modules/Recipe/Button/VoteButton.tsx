"use client"

import { useCreateVote } from '@/src/hooks/votesHooks';
import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/tooltip';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';


const VoteButton = ({ recipeId, upVote, downVote }: { recipeId: string, upVote: number, downVote: number }) => {
    const { mutate: createVote, data } = useCreateVote();

    console.log("votes==>", data)

    const hadnleVote = (recipeId: string, voteType: string) => {
        createVote({ id: recipeId, voteData: { type: voteType } })

    }

    return (

        <div className="flex items-center bg-black rounded-full">
            <Tooltip content='UpVote'  >
                <Button onClick={() => hadnleVote(recipeId, 'upvote')} className="bg-black text-white" radius="full" size="sm">
                    <ArrowBigUp />
                </Button>
            </Tooltip>
            <p className="text-white px-1 mr-4">{upVote}</p>
            <Tooltip content='DownVote '  >
                <Button onClick={() => hadnleVote(recipeId, 'downvote')} className="bg-black text-white" radius="full" size="sm">
                    <ArrowBigDown />
                </Button>
            </Tooltip>
            <p className="text-white px-1 mr-4">{downVote}</p>
        </div>


    );
};

export default VoteButton;