import { GetSingleUser } from "../services/User";

export const isPreemium = async (userId: string) => {
  const { data: user } = await GetSingleUser(userId);

  if (!user.isPremium) {
    return false;
  }

  return true;
};
