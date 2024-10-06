
import RecipeFeed from "@/src/components/modules/Recipe/RecipeFeed";
import Container from "@/src/components/UI/Container";
import { getRecipe } from "@/src/services/Recipe";


export default async function Home() {
    const { data } = await getRecipe();


    return (
        <Container>
            <div >
                <RecipeFeed initialData={data} />
            </div>
        </Container>



    );
}

[]