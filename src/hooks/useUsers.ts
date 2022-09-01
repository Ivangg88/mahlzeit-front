import UserRegister from "../types/interfaces";

const useUser = () => {
  const sendUserToAPI = async (user: UserRegister, apiUrl: string) => {
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

export default useUser;
