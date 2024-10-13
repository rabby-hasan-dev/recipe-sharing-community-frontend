"use client"

import { useCreateVote } from '@/src/hooks/votesHooks';
import { Button } from '@nextui-org/button';
import { Tooltip } from '@nextui-org/tooltip';
import { ArrowBigDown, ArrowBigUp } from 'lucide-react';
import { useEffect } from 'react';
import { toast } from 'sonner';


const VoteButton = ({ recipeId, upVote, downVote }: { recipeId: string, upVote: number, downVote: number }) => {

    const { mutate: createVote, data } = useCreateVote();
    const hadnleVote = (recipeId: string, voteType: string) => {
        createVote({ id: recipeId, voteData: { type: voteType } })

    }


    useEffect(() => {
        if (data && data?.success) {
            toast.success(data?.message as string);
        }
        if (data && !data?.success) {
            toast.error(data?.message as string);
        }

    }, [data]);


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