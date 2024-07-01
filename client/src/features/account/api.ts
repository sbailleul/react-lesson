export interface User{
  firsname: string;
}
export function getUserInfo(): Promise<User> {
  return Promise.resolve({firsname: 'Bob'});
}
