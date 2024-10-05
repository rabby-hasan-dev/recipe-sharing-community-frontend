
import { IRecipe } from "@/src/types/recipe.types";
import { Card as NextUiCard, CardHeader, CardFooter, } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Heart, MessageSquare, } from "lucide-react";
import VoteButton from "./Button/VoteButton";
import CommentButton from "./Button/CommentButton";
import DetailButton from "./Button/DetailButton";



const RecipeCard = ({ recipe }: { recipe: IRecipe }) => {
    const { title, upVoteCount, downVoteCount, averageRating, totalComment, image, _id } = recipe || {};

    return (
        <NextUiCard isFooterBlurred className="h-[300px] w-full">
            <CardHeader className="absolute top-1 z-10 flex-col items-start">
                <p className="absolute -top-0 right-1 rounded-full bg-black/30 px-2 text-tiny uppercase text-white/90">
                    <div className="absolute top-1 right-2 flex items-center">
                        {averageRating} <Heart className="ml-1" />
                    </div>
                </p>
                <h4 className="mt-2 rounded bg-black /30 p-1 text-2xl font-medium text-white">
                    {title}
                </h4>
            </CardHeader>

            <Image
                removeWrapper
                alt="Card example background"
                className="scale-120 z-0 h-full w-full -translate-y-6 object-cover"
                src={image}
            />
            <CardFooter className="absolute bottom-0 z-10 justify-between border-t-1 border-zinc-100/50 bg-white/30">
                <div className="flex items-center space-x-5">
                    <VoteButton upVote={upVoteCount} downVote={downVoteCount} />
                    <CommentButton icon={<MessageSquare />} count={totalComment} />
                </div>
                <DetailButton id={_id} ></DetailButton>
            </CardFooter>
        </NextUiCard >
    );
};

export default RecipeCard;