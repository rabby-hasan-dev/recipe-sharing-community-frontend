
import RecipeFeed from "@/src/components/modules/Recipe/RecipeFeed";
import Searchbar from "@/src/components/modules/Recipe/Searchbar";
import Container from "@/src/components/UI/Container";
import { getRecipe } from "@/src/services/Recipe";




export default async function Home() {
    const { data } = await getRecipe();


    return (
        <Container >
            <div className="max-w-3xl mx-auto sticky">
                <Searchbar />

            </div>
            <div className="flex" >

                <RecipeFeed initialData={data} />
                {/* <div>Search</div> */}
            </div>
        </Container>



    );
}

[]