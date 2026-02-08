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
}