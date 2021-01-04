import request from './request';

export const getUserList = async () => {
  const result = await request.get('/users');
  return result;
};
