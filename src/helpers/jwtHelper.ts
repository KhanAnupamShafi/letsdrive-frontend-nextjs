import jwt, { JwtPayload, Secret } from 'jsonwebtoken';

const verifyToken = (token: string, secret: Secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};

const decodeToken = (token: string): JwtPayload => {
  return jwt.decode(token) as JwtPayload;
};

export const jwtHelpers = { verifyToken, decodeToken };
