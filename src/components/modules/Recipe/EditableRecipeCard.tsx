
import { IRecipe } from "@/src/types/recipe.types";
import { Card as NextUiCard, CardFooter } from "@nextui-org/card";

import { Heart, MessageSquare } from "lucide-react";
import { Avatar } from "@nextui-org/avatar";

import Link from "next/link";
import VoteButton from "./Button/VoteButton";
import CommentButton from "./Button/CommentButton";
import DetailButton from "./Button/DetailButton";
import ImagePreview from "../../UI/ImagePreview";
import UpdateRecipeModal from "@/src/app/(WithAuthLayout)/_components/module/modal/UpdateRecipeModal";
import EditableRecipeDelelteButton from "../Dashboard/EditableRecipeDelelteButton";

const EditableRecipeCard = ({ recipe }: { recipe: IRecipe }) => {
    const { title, description, isPremium, author, upVoteCount, downVoteCount, totalRatings, totalComment, images, _id } = recipe || {};

    return (
        <NextUiCard className="relative w-full max-w-2xl mx-auto border border-gray-200 shadow-sm rounded-lg overflow-hidden lg:flex lg:flex-row">
            {/* Main Content Section */}
            {isPremium ? <span className="inline-block absolute right-0 top-0 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                Premium
            </span> : <></>}
            <div className="flex-1 p-4 mt-2">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                        <Link href={`/profiles/${author?._id}`}>
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
                        <span className="text-sm">{totalRatings}</span>
                        <Heart className="text-red-500" />
                    </div>
                </div>
                <p className=" mb-4 hidden lg:block">{description.slice(0, 100)} ...</p>

                <ImagePreview images={images} />

                <CardFooter className="flex justify-between items-center pt-4">
                    <div className="flex items-center space-x-4 ">
                        <VoteButton recipeId={_id} upVote={upVoteCount} downVote={downVoteCount} />
                        <CommentButton icon={<MessageSquare />} count={totalComment} />
                        <UpdateRecipeModal recipeId={_id} />
                        <EditableRecipeDelelteButton recipeId={_id} />
                        <DetailButton id={_id} />
                    </div>
                </CardFooter>
            </div>
        </NextUiCard>
    );
};

export default EditableRecipeCard;



