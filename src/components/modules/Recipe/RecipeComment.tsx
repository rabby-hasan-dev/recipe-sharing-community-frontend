"use client";

import { Button } from '@nextui-org/button';
import RSForm from '../../form/RSForm';

import { FieldValues, SubmitHandler } from 'react-hook-form';
import { useCreateComment, useDeleteComments, useEditComment, useGetComments } from '@/src/hooks/commentHooks';
import RSTextarea from '../../form/RSTextarea';

import EditableComment from './EditableComment';
import { IComment } from '@/src/types/comment.types';

interface RecipeCommentProps {
    recipeId: string;
}



const RecipeComment: React.FC<RecipeCommentProps> = ({ recipeId }) => {
    const { mutate: createComment } = useCreateComment();
    const { data: comments, error, isPending } = useGetComments(recipeId);
    const { mutate: updateComment } = useEditComment();
    const { mutate: deleteComment } = useDeleteComments();

    const handleCommentSubmit: SubmitHandler<FieldValues> = (data) => {
        createComment({ id: recipeId, commentData: data });
    };

    const handleUpdateComment = (id: string, newComment: string) => {
        updateComment({ id, editCommentData: { comment: newComment } });
    };

    const handleDeleteComment = (id: string) => {
        deleteComment({ recipeId, commentId: id });
    };

    const handleReplyComment = (id: string, reply: string) => {
        // Implement  reply functionality here
        console.log(`Replying to comment ${id}: ${reply}`);
    };



    if (error) return <p className="text-red-500">Failed to load comments.</p>;

    return (
        <section className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Comments</h3>

            {/* Comment Form */}
            <RSForm onSubmit={handleCommentSubmit}>
                <RSTextarea
                    name="comment"
                    type="text"
                    variant="bordered"
                    required
                    placeholder="Add a comment..."
                />
                <Button
                    type="submit"
                    className="my-3 w-full rounded-md bg-default-900 text-default"
                    color="default"
                >
                    Submit
                </Button>
            </RSForm>

            {/* Comments Section */}
            <div className="p-4 rounded-lg">
                {isPending ? (
                    <p>Loading comments...</p>
                ) : comments?.data?.length ? (
                    <div className="space-y-4">
                        {comments.data.map((comment: IComment, index: number) => (
                            <EditableComment
                                key={comment._id}
                                comment={comment}
                                onUpdate={handleUpdateComment}
                                onDelete={handleDeleteComment}
                                onReply={handleReplyComment}
                            />
                        ))}
                    </div>
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </section>
    );
};

export default RecipeComment;
