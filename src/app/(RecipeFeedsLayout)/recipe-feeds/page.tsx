
import RecipeFeed from "@/src/components/modules/Recipe/RecipeFeed";

import { getPublicRecipe } from "@/src/services/Feed";



const RecipeFeedsHomePage = async () => {

    const publicFeedData = await getPublicRecipe();
    const publicFeed = publicFeedData?.data;

    return (
        <div>

            <RecipeFeed initialPublicFeed={publicFeed} />
        </div>
    );
}


export default RecipeFeedsHomePage;

