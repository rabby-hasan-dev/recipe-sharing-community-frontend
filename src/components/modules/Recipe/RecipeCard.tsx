
import { IRecipe } from "@/src/types/recipe.types";
import { Card as NextUiCard, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Heart, MessageSquare } from "lucide-react";
import { Avatar } from "@nextui-org/avatar";
import VoteButton from "./Button/VoteButton";
import CommentButton from "./Button/CommentButton";
import DetailButton from "./Button/DetailButton";
import Link from "next/link";
const RecipeCard = ({ recipe }: { recipe: IRecipe }) => {
    const { title, description, author, upVoteCount, downVoteCount, averageRating, totalComment, image, _id } = recipe || {};
    return (
        <NextUiCard className="relative w-full max-w-2xl mx-auto border border-gray-200 shadow-sm rounded-lg overflow-hidden lg:flex lg:flex-row">
            {/* Main Content Section */}
            <div className="flex-1 p-4">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                        <Link href={`/profiles/${author}`}>
                            <Avatar
                                src={author?.profilePicture}
                                alt={author?.username}
                                className="w-8 h-8 rounded-full mr-2"
                            />
                        </Link>
                        <span className="text-sm font-semibold">{recipe?.author?.username}</span>
                    </div>
                    <span className="text-xs ">{new Date(recipe?.createdAt).toLocaleString()}</span>
                </div>
                <div className="flex justify-between  items-center space-x-1">
                    <h2 className="text-lg font-bold mb-1">{title}</h2>

                    <div className="flex items-center justify-center">
                        <span className="text-sm">{averageRating}</span>
                        <Heart className="text-red-500" />
                    </div>
                </div>
                <p className=" mb-4 hidden lg:block">{description.slice(0, 100)}...</p>

                {image && (
                    <Image
                        alt="Recipe Image"
                        src={image}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                )}

                <CardFooter className="flex justify-between items-center pt-4">
                    <div className="flex items-center space-x-4">
                        <VoteButton recipeId={_id} upVote={upVoteCount} downVote={downVoteCount} />
                        <CommentButton icon={<MessageSquare />} count={totalComment} />
                    </div>
                    <DetailButton id={_id} />
                </CardFooter>
            </div>
        </NextUiCard>
    );
};

export default RecipeCard;

