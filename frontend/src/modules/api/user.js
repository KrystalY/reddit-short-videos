import request from './request';

export const getUserList = async () => {
  const result = await request.post('/users');
  return result;
};
