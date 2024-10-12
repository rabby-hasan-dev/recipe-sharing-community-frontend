
import { IRecipe } from "@/src/types/recipe.types";
import { Card as NextUiCard, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { MessageSquare } from "lucide-react";
import { Avatar } from "@nextui-org/avatar";
import VoteButton from "./Button/VoteButton";
import CommentButton from "./Button/CommentButton";
import DetailButton from "./Button/DetailButton";
import Link from "next/link";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import ImagePreview from "../../UI/ImagePreview";
const RecipeCard = ({ recipe }: { recipe: IRecipe }) => {
    const { title, isPremium, description, author, upVoteCount, downVoteCount, totalComment, images, _id } = recipe || {};

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


                        <div className="flex gap-2 items-center my-2">
                            <Rating style={{ maxWidth: 120 }} value={recipe?.averageRating} readOnly />

                        </div>

                    </div>
                </div>
                <p className=" mb-4 hidden lg:block">{description.slice(0, 100)} ...</p>


                <ImagePreview images={images} />


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



