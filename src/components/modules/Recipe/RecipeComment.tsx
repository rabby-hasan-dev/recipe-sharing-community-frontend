"use client"

import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import React, { useState } from 'react';

const RecipeComment = () => {
    const [comments, setComments] = useState<string[] | []>([]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const commentText = e.target.comment.value;
        if (commentText) {
            setComments((prev) => [...prev, commentText]);
            e.target.reset();
        }
    };
    return (
        <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Comments:</h3>
            <form onSubmit={handleCommentSubmit} className="flex flex-col mb-4">
                <Input
                    name="comment"
                    placeholder="Add a comment..."
                    required
                    className="mb-2"
                />
                <Button type="submit" color='default' >Submit</Button>
            </form>
            <div className="bg-gray-100 p-4 rounded-lg">
                {comments.length > 0 ? (
                    comments.map((comment, index) => (
                        <p key={index} className="border-b border-gray-300 py-2">{comment}</p>
                    ))
                ) : (
                    <p>No comments yet.</p>
                )}
            </div>
        </div>
    );
};

export default RecipeComment;
