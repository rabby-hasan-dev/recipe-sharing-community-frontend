
import RecipeFeed from "@/src/components/modules/Recipe/RecipeFeed";

import { getPrimiumRecipe, getPublicRecipe } from "@/src/services/Feed";



const HomePage = async () => {

    // const premiumFeedData = await getPrimiumRecipe();
    const publicFeedData = await getPublicRecipe();
    const publicFeed = publicFeedData.data;
    // const premiumFeed = premiumFeedData.data;
    const premiumFeed: [] = []

    return (

        <RecipeFeed initialPublicFeed={publicFeed} initialPremiumFeed={premiumFeed} />
    );
}


export default HomePage;

