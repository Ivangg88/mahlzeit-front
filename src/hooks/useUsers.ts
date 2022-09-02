import { User } from "../types/interfaces";

const useUsers = () => {
  const sendUserToAPI = async (user: User, apiUrl: string) => {
    let response: Response;
    try {
      response = await fetch(`${apiUrl}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin":
            "https://igarcia-final-project-202207.netlify.app/",
        },
        body: JSON.stringify(user),
      });

      if (response.status !== 201) {
        throw new Error();
      }
    } catch (error) {
      return 400;
    }

    return response.status;
  };

  return { sendUSerToAPI: sendUserToAPI };
};

export default useUsers;
