import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';

const KEY = 'AIzaSyCig063PBvMTT_7xBOPjeVrac7YXiXfVMg';
const CHANNEL_ID = 'UC7c6zwLrLbuqVa4sjUn20Jg';

const YouTubeCarousel: React.FC = () => {
  const [videos, setVideos] = useState<any[]>([]);
  const [channel, setChannel] = useState<any>(null);

  useEffect(() => {
    const fetchChannelAndVideos = async () => {
      try {
        const channelRes = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
          params: { part: 'snippet,statistics', id: CHANNEL_ID, key: KEY },
        });
        setChannel(channelRes.data.items[0]);

        const searchRes = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            key: KEY,
            channelId: CHANNEL_ID,
            part: 'id',
            maxResults: 20,
            type: 'video',
            order: 'date',
          },
        });

        const videoIds = searchRes.data.items.map((item: any) => item.id.videoId).join(',');

        const videosRes = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: { key: KEY, id: videoIds, part: 'snippet,statistics' },
        });

        const sortedVideos = videosRes.data.items
          .sort((a: any, b: any) => b.statistics.viewCount - a.statistics.viewCount)
          .slice(0, 6);

        setVideos(sortedVideos);
      } catch (err) {
        console.error('Erro ao buscar dados:', err);
      }
    };

    fetchChannelAndVideos();
  }, []);

  if (!channel || videos.length === 0) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(videos.length, 3),
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="container my-5">
      {/* Canal clicável */}
      <a
        href={`https://www.youtube.com/channel/${CHANNEL_ID}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-decoration-none text-dark"
      >
        <div className="card shadow card-custom d-flex flex-column align-items-center p-4 mb-4" style={{ maxWidth: 600, margin: '0 auto' }}>
          <img
            src={channel.snippet.thumbnails.high.url}
            alt="Thumbnail canal"
            style={{ width: 120, height: 120, borderRadius: '50%' }}
            className="mb-3"
          />
          <h2 className="custom-font mb-2">{channel.snippet.title}</h2>
          <div className="d-flex justify-content-center gap-4 mb-3" style={{ fontWeight: '600', color: '#555' }}>
            <div>{Number(channel.statistics.subscriberCount).toLocaleString()} inscritos</div>
            <div>{Number(channel.statistics.videoCount).toLocaleString()} vídeos</div>
          </div>
          <p className="text-center" style={{ color: '#666' }}>
            {channel.snippet.description}
          </p>
        </div>
      </a>

      {/* Carrossel vídeos */}
      <h3 className="text-center custom-font mb-4">🔥 Vídeos mais vistos</h3>
      <Slider {...settings}>
        {videos.map((video) => (
          <div key={video.id} className="px-2">
            <div className="card shadow-sm">
              <iframe
                width="100%"
                height="215"
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.snippet.title}
                allowFullScreen
                className="rounded-top"
              />
              <div className="p-3">
                <h6 className="fw-bold mb-1">{video.snippet.title}</h6>
                <small className="text-muted">
                  {Number(video.statistics.viewCount).toLocaleString()} visualizações
                </small>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default YouTubeCarousel;
