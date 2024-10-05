export interface IRecipe {
    _id: string
    title: string
    description: string
    image: string
    ingredients: string[]
    cookingTime: number
    author: string
    totalRatings: number
    averageRating: number
    upVoteCount: number
    downVoteCount: number
    totalComment: number
    isPremium: boolean
    isPublished: boolean
    isDeleted: boolean
    createdAt: string
    updatedAt: string
}
