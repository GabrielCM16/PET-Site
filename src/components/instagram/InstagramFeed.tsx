import React, { useEffect, useState } from 'react';

const InstagramBasicFeed: React.FC = () => {
  const [media, setMedia] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const accessToken = '';

  useEffect(() => {
    const fetchMedia = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${accessToken}`
        );
        const data = await res.json();
        if (data.data) {
          setMedia(data.data.slice(0, 6));
        }
      } catch (error) {
        console.error('Erro ao buscar mídia:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMedia();
  }, []);

  return (
    <div className="container my-4">
      {loading && <p>Carregando posts...</p>}

      <div className="row g-3 justify-content-center">
        {media.map((post) => (
          <div key={post.id} className="col-12 col-sm-6 col-md-4" style={{ maxWidth: 350 }}>
            <a
              href={post.permalink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-dark"
            >
              {(post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM') && (
                <img
                  src={post.media_url}
                  alt={post.caption}
                  className="img-fluid rounded"
                  style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover' }}
                />
              )}
              {post.media_type === 'VIDEO' && (
                <video
                  controls
                  src={post.media_url}
                  className="rounded"
                  style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover' }}
                />
              )}
              <p
                className="mt-2 fw-semibold text-truncate"
                title={post.caption || 'Sem legenda'}
                style={{ maxWidth: '100%' }}
              >
                {post.caption || 'Sem legenda'}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramBasicFeed;
