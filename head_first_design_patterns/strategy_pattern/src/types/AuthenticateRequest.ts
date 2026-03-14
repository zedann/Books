export interface AuthUser {
  id: string;
}
export interface AuthenticateRequest extends Request {
  user?: AuthUser;
}
