import React, { useState, useEffect } from 'react';
import { getVideoList } from '../../api/video';

function VideoList() {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const result = await getVideoList();
    setList(result);
    return result;
  };

  useEffect(() => {
    fetchData();
  }, []);
  // return <div>{list.map((item) => item)}</div>;
  return <div>fuck</div>;
}

export default VideoList;
