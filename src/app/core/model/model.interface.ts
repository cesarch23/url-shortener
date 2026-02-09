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