import React, { useState, useEffect } from 'react';
import { getVideoList } from '../../api/video';
// import ActionBar from '../../components/ActionBar/ActionBar';

import { Carousel, Card, Button } from 'antd';
import './Video.css';

const { Meta } = Card;

function VideoList() {
  const [list, setList] = useState(null);

  const fetchData = async () => {
    const result = await getVideoList();
    console.log('??1', result);
    setList(result);
  };

  useEffect(() => {
    fetchData();
    console.log('??', list);
  }, []);
  return (
    <>
      <Carousel effect="fade">
        {list &&
          list.map((item) => (
            <Card
              key={item.id}
              hoverable
              cover={
                <video
                  onContextMenu={() => false}
                  id={item.id}
                  controls
                  autoplautoplay="true"
                >
                  <source src={item.video_url} type="video/mp4" />
                </video>
              }
            >
              <Meta title={item.title} description={item.created_at} />
            </Card>
          ))}
      </Carousel>
      <div className="actionbar">
        <Button type="text">prev</Button>
        <Button type="text">Like</Button>
        <Button type="text">Hate</Button>
        <Button type="text">next</Button>
      </div>
    </>
  );
}

export default VideoList;
