import request from './request';

export const getVideoList = async () => {
  const result = await request.get('/videos');
  return result.data;
};
