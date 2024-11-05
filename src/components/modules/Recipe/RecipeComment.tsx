"use client";

import { Button } from "@nextui-org/button";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "sonner";

import RSForm from "../../form/RSForm";
import RSTextarea from "../../form/RSTextarea";

import EditableComment from "./EditableComment";

import {
  useCreateComment,
  useDeleteComments,
  useEditComment,
  useGetComments,
} from "@/src/hooks/commentHooks";
import { IComment } from "@/src/types/comment.types";

interface RecipeCommentProps {
  recipeId: string;
}

const RecipeComment: React.FC<RecipeCommentProps> = ({ recipeId }) => {
  const { mutate: createComment } = useCreateComment();
  const {
    data: comments,
    error,
    isPending,
    data: createData,
  } = useGetComments(recipeId);
  const { mutate: updateComment, data: editData } = useEditComment();
  const { mutate: deleteComment, data: deleteData } = useDeleteComments();

  const handleCommentSubmit: SubmitHandler<FieldValues> = (data) => {
    createComment({ id: recipeId, commentData: data });
  };

  const handleUpdateComment = (id: string, newComment: string) => {
    updateComment({ id, editCommentData: { comment: newComment } });
  };

  const handleDeleteComment = (id: string) => {
    deleteComment({ recipeId, commentId: id });
  };


  const handleReplyComment = (_id: string, _reply: string) => {
    // Implement  reply functionality here next time
  };

  useEffect(() => {
    if (createData && createData?.success) {
      toast.success(createData?.message as string);
    } else if (createData && !createData?.success) {
      toast.error(createData?.message as string);
    } else if (editData && editData?.success) {
      toast.success(editData?.message as string);
    } else if (editData && !editData?.success) {
      toast.error(editData?.message as string);
    } else if (deleteData && deleteData?.success) {
      toast.success(deleteData?.message as string);
    } else if (deleteData && !deleteData?.success) {
      toast.error(deleteData?.message as string);
    }
  }, [createData, editData, deleteData]);

  if (error) return <p className="text-red-500">Failed to load comments.</p>;

  return (
    <section className="mb-6">
      <h3 className="text-xl font-semibold mb-2">Comments</h3>

      {/* Comment Form */}
      <RSForm onSubmit={handleCommentSubmit}>
        <RSTextarea
          required
          name="comment"
          placeholder="Add a comment..."
          type="text"
          variant="bordered"
        />
        <Button
          className="my-3 w-full rounded-md bg-default-900 text-default"
          color="default"
          type="submit"
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
            {comments.data.map((comment: IComment) => (
              <EditableComment
                key={comment._id}
                comment={comment}
                onDelete={handleDeleteComment}
                onReply={handleReplyComment}
                onUpdate={handleUpdateComment}
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
