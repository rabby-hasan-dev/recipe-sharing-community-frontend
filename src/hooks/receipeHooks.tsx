import { useQuery } from "@tanstack/react-query"
import { getRecipe } from "../services/Recipe"



export const useGetRecipe = () => {

    return useQuery<any, Error, any, string[]>({
        queryKey: ["GET_RECIPE"],
        queryFn: async () => await getRecipe(),

    })
}