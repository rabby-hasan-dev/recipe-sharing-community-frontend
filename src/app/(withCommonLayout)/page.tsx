
import RecipeFeed from "@/src/components/modules/Recipe/RecipeFeed";

import { getPublicRecipe } from "@/src/services/Feed";



const HomePage = async () => {


    const publicFeedData = await getPublicRecipe();
    const publicFeed = publicFeedData.data;

    return (

        <RecipeFeed initialPublicFeed={publicFeed} />
    );
}


export default HomePage;

