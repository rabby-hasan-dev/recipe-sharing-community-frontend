
import Card from "@/src/components/UI/Card";
import Container from "@/src/components/UI/Container";
import { getRecipe } from "@/src/services/Recipe";





export default async function Home() {
  const { data: recipes } = await getRecipe();

  return (
    <Container>
      <div className="grid grid-cols-2 gap-4 items-center   mx-auto">
        {
          recipes.map((item) => <Card key={item?._id} recipe={item}></Card>)
        }

      </div>
    </Container>
  );
}
