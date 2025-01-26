import jwt_decode from "jwt-decode";

const decodeToken = (token: string) => {
  const payloadToken: {
    userName: string;
    id: string;
  } = jwt_decode(token);

  return {
    userName: payloadToken.userName,
    id: payloadToken.id,
    token: token,
  };
};

export default decodeToken;
