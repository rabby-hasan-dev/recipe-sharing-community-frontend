import envConfig from "@/src/config/envConfig"



export const getRecipe = async () => {
    const res = await fetch(`${envConfig.baseApi}/recipes`);
    return res.json();

}

