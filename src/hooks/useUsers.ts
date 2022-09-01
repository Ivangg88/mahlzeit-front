import { User } from "../types/interfaces";

const useUsers = () => {
  const sendUserToAPI = async (user: User, apiUrl: string) => {
    try {
      const response = await fetch(apiUrl + "/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (response.status !== 201) {
        throw new Error();
      }
    } catch (error) {
      return false;
    }
    return true;
  };

  return { sendUSerToAPI: sendUserToAPI };
};

export default useUsers;
