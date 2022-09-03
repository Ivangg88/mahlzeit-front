import jwt_decode from "jwt-decode";

const decodeToken = (token: string) => {
  const payloadToken: {
    userName: string;
  } = jwt_decode(token);

  return {
    userName: payloadToken.userName,
    token: token,
  };
};

export default decodeToken;
