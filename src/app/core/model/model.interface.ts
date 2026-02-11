export type Role = 'USER' | 'ADMIN';
export type AuthProvider = 'GOOGLE' | 'GITHUB' | 'FACEBOOK' | 'LOCAL';
export enum Roles {
    USER = 'USER',
    ADMIN = 'ADMIN'
}
export interface UserResponse {
    id: number;
    name: string;//complete name
    email: string;
    provider: AuthProvider;
    rol:Role;
}

export interface ToastParams {
  message: string;
  action?: string;
  duration?: number; //10 segundos -> en ms
  type?: 'alert' | 'error' | 'success' | 'info';
  horizontalPosition?: 'start' | 'center' | 'end' | 'left' | 'right';
  verticalPosition?: 'top' | 'bottom';
}
export interface ShorUrlRequest{
    longUrl:string;
    expiredDate:Date;//ejm 2019-08-24T14:15:22Z
    userId:string;
}
export interface LinkDTO{
    longUrl:string;
    shortCode:string;
    createdDate:Date;//YYYY-MM-DD HH:MI:SS
    expiredDate:Date;
}
