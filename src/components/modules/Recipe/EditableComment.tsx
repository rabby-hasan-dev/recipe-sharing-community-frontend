
import { useState } from 'react';
import { Button } from '@nextui-org/button';
import { IComment } from '@/src/types/comment.types';
import { Textarea } from '@nextui-org/input';

interface EditableCommentProps {
    comment: IComment;
    onUpdate: (id: string, updatedComment: string) => void;
    onDelete: (id: string) => void;
    onReply: (id: string, reply: string) => void;
}

const EditableComment: React.FC<EditableCommentProps> = ({ comment, onUpdate, onDelete, onReply }) => {


    const [isEditing, setIsEditing] = useState(false);
    const [newComment, setNewComment] = useState(comment.comment);
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState('');

    const handleEdit = () => {
        if (newComment !== comment.comment) {

            onUpdate(comment._id, newComment);
        }

        setIsEditing(false);
    };

    const handleReply = () => {
        onReply(comment._id, replyText);
        setReplyText('');
        setIsReplying(false);
    };

    return (
        <article className="border-b border-gray-300 py-2">
            <div className="flex justify-between">
                <p className="text-sm font-medium ">{comment.userId.username}</p>
                <p className="text-xs ">{new Date(comment.createdAt).toLocaleDateString()}</p>
            </div>

            {isEditing ? (
                <>
                    <Textarea value={newComment} onChange={(e) => setNewComment(e.target.value)} className="w-full border-gray-300 rounded-md" />
                    <textarea name="" id=""></textarea>
                    <div className="flex justify-end space-x-2 mt-2">
                        <Button className="bg-green-500 text-white" onClick={handleEdit}>Save</Button>
                        <Button className="bg-red-500 text-white" onClick={() => setIsEditing(false)}>Cancel</Button>
                    </div>
                </>
            ) : (
                <div className="flex justify-between items-center">
                    <p className="text-sm ">{comment.comment}</p>
                    <div className="flex space-x-2">
                        <Button className="text-blue-500" onClick={() => setIsEditing(true)}>Edit</Button>
                        <Button className="text-red-500" onClick={() => onDelete(comment._id)}>Delete</Button>
                        <Button className="text-green-500" onClick={() => setIsReplying(!isReplying)}>Reply</Button>
                    </div>
                </div>
            )}

            {isReplying && (
                <>

                    <Textarea value={replyText} onChange={(e) => setReplyText(e.target.value)} className="w-full border-gray-300 rounded-md" placeholder="Write a reply..." />
                    <Button size='sm' className="bg-blue-500 text-white mt-2" onClick={handleReply}>Submit Reply</Button>
                </>
            )}
        </article>
    );
};

export default EditableComment;

