
import RecipeFeed from "@/src/components/modules/Recipe/RecipeFeed";
import { getPrimiumRecipe, getPublicRecipe } from "@/src/services/Feed";


const HomePage = async () => {
    const publicFeedData = await getPublicRecipe();
    // const premiumFeedData = await getPrimiumRecipe();
    // console.log('check preimum data', premiumFeedData)

    const publicFeed = publicFeedData.data;
    // const premiumFeed = premiumFeedData.data;
    const premiumFeed: [] = []

    return (

        <RecipeFeed initialPublicFeed={publicFeed} initialPremiumFeed={premiumFeed} />
    );
}


export default HomePage;

