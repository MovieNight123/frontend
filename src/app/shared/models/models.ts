export interface IMovie {
    name: string;
    title: string;
    description: string;
  }

  export interface IAuthResponse {
    token: string;
    is_admin: boolean;
    name: string;
  }