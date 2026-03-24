import React, { useEffect, useRef, useState } from "react"

const InstagramCarousel: React.FC = () => {
  const [media, setMedia] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [current, setCurrent] = useState(0)
  const [slidesPerView, setSlidesPerView] = useState(3)

  const startX = useRef(0)
  const isDragging = useRef(false)

  const acess = 'IGAAO1m4SCswNBZAFppZAl9TTXRtR3J6ZATBSTmpGTTA1blVtTTFMVE8yT0VWUHBJRVhleGh6ZAi1LRFpoajVtV0EyQjdoUERCNjc4aTlCaDJRenV2OVVaVjlMS0otMFJOaDJyMFhmejhHbE1PWnVhc1ktYXNYTGMzMzBoRVNjV0NKVQZDZD';

  useEffect(() => {
    const fetchMedia = async () => {
      setLoading(true)
      try {
        const res = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${acess}`
        )
        const data = await res.json()
        if (data.data) setMedia(data.data.slice(0, 8)) // Pegando 8 posts para renderizar legal
      } catch (error) {
        console.error("Erro ao buscar mídia:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchMedia()
  }, [])

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth < 768) setSlidesPerView(1)
      else if (window.innerWidth < 1024) setSlidesPerView(2)
      else setSlidesPerView(3)
    }
    updateSlides()
    window.addEventListener("resize", updateSlides)
    return () => window.removeEventListener("resize", updateSlides)
  }, [])

  const maxIndex = Math.max(0, media.length - slidesPerView)

  const nextSlide = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1))
  const prevSlide = () => setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1))

  // Funções de Toque / Arraste
  const handleStart = (x: number) => {
    startX.current = x
    isDragging.current = true
  }

  const handleEnd = (x: number) => {
    if (!isDragging.current) return
    const diff = startX.current - x
    if (diff > 50) nextSlide()
    else if (diff < -50) prevSlide()
    isDragging.current = false
  }

  const arrowStyle: React.CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
    zIndex: 10,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px'
  }


  return (
    <section id="instagram" className="py-1" style={{ backgroundColor: "#44599f" }}>

      <div className="container text-center mb-4" data-aos="fade-right">
        <h2 className="mt-5 display-5 custom-font">Acompanhe nosso Instagram</h2>
        <p className="lead mx-auto inter-regular">Fique por dentro das nossas notícias e ações diárias</p>
      </div>

      <div className="container position-relative px-md-5">
        {loading && <div className="text-center">Carregando mídias...</div>}

        {!loading && media.length > 0 && (
          <>
            <button className="d-none d-md-flex" style={{ ...arrowStyle, left: '0px' }} onClick={prevSlide}>❮</button>
            <button className="d-none d-md-flex" style={{ ...arrowStyle, right: '0px' }} onClick={nextSlide}>❯</button>

            <div
              style={{ overflow: "hidden", touchAction: "pan-y" }}
              onMouseDown={(e) => handleStart(e.clientX)}
              onMouseUp={(e) => handleEnd(e.clientX)}
              onTouchStart={(e) => handleStart(e.touches[0].clientX)}
              onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
              // Animação de zoom no container inteiro do carrossel
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  transition: "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
                  transform: `translateX(-${current * (100 / slidesPerView)}%)`,
                }}
              >
                {media.map((post) => (
                  <div
                    key={post.id}
                    style={{
                      flex: `0 0 calc(${100 / slidesPerView}% - ${(15 * (slidesPerView - 1)) / slidesPerView}px)`,
                      height: "400px",
                      borderRadius: "15px",
                      overflow: "hidden",
                      backgroundColor: "#f0f0f0"
                    }}
                  >
                    <a href={post.permalink} target="_blank" rel="noopener noreferrer" draggable="false">
                      {post.media_type === "VIDEO" ? (
                        <video
                          src={post.media_url}
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          muted playsInline autoPlay loop
                        />
                      ) : (
                        <img
                          src={post.media_url}
                          alt="Post Instagram"
                          draggable="false"
                          style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        />
                      )}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Pontinhos com animação de subida suave */}
            <div className="d-flex justify-content-center mt-4 gap-2" data-aos="fade-up" data-aos-offset="0">
              {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  style={{
                    width: current === idx ? '25px' : '8px',
                    height: '8px',
                    borderRadius: '10px',
                    backgroundColor: current === idx ? '#007bff' : '#ccc',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default InstagramCarousel