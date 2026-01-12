import React, { useState, useEffect } from "react";
import { IoChevronBack, IoChevronForward, IoClose, IoExpand } from "react-icons/io5";

import imageGallery from '../../data/imageGallery';

const GalleryCarousel = () => {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  const [imageError, setImageError] = useState({});

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imageGallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imageGallery.length - 1 : prevIndex - 1
    );
  };

  const openLightbox = (index) => {
    console.log('index', index);
    setLightboxIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const goToNextLightbox = () => {
    setLightboxIndex((prevIndex) => 
      prevIndex === imageGallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousLightbox = () => {
    setLightboxIndex((prevIndex) => 
      prevIndex === 0 ? imageGallery.length - 1 : prevIndex - 1
    );
  };

  const handleImageLoad = (id) => {
    setImageLoaded(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (id) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      
      if (e.key === "ArrowLeft") {
        goToPreviousLightbox();
      } else if (e.key === "ArrowRight") {
        goToNextLightbox();
      } else if (e.key === "Escape") {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen]);

  return (
    // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
    <div className="gallery_wrapper px-4">

      
        <div 
          className="flex items-center justify-center animate-fadeIn relative"
           id="gallery-carousel"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
           
          >
        


          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPreviousLightbox();
            }}
            className="bg-green absolute left-4 top-1/2  -translate-y-1/2  text-white rounded-full p-4 transition-all duration-200 hover:scale-110 active:scale-95 z-10"
            aria-label="Previous image"
          >
            <IoChevronBack className="text-3xl" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNextLightbox();
            }}
            className="bg-green absolute right-4 top-1/2 -translate-y-1/2   text-white rounded-full p-4 transition-all duration-200  active:scale-95 z-10"
            aria-label="Next image"
          >
            <IoChevronForward className="text-3xl" />
          </button>

          <div 
            className="relative max-w-7xl max-h-[90vh] w-full mx-4"
            
          >
            <div className="relative">
              {!imageLoaded[imageGallery[lightboxIndex].id] && !imageError[imageGallery[lightboxIndex].id] && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center rounded-lg">
                  <div className="text-white text-xl">Loading...</div>
                </div>
              )}
              {imageError[imageGallery[lightboxIndex].id] ? (
                <div className="bg-gray-800 rounded-lg p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-6xl mb-4">📷</div>
                    <div className="text-white text-xl">Image unavailable</div>
                  </div>
                </div>
              ) : (
                <img 
                  src={imageGallery[lightboxIndex].url}
                  alt={imageGallery[lightboxIndex].title}
                  className="w-full h-full max-h-[80vh] object-contain rounded-lg shadow-2xl animate-scaleIn"
                  onLoad={() => handleImageLoad(imageGallery[lightboxIndex].id)}
                  onError={() => handleImageError(imageGallery[lightboxIndex].id)}
                  onClick={() => openLightbox(currentIndex)}    
                />
              )}
            </div>

            {/* <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {imageGallery[lightboxIndex].title}
              </h3>
              <p className="text-gray-300 mb-4">
                {imageGallery[lightboxIndex].description}
              </p>
              <div className="text-gray-400">
                {lightboxIndex + 1} / {imageGallery.length}
              </div>
            </div> */}
          </div>
        </div>

              {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center animate-fadeIn"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all duration-200 hover:scale-110 active:scale-95 z-10"
            aria-label="Close lightbox"
          >
            <IoClose className="text-3xl" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPreviousLightbox();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-200 hover:scale-110 active:scale-95 z-10"
            aria-label="Previous image"
          >
            <IoChevronBack className="text-3xl" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNextLightbox();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-4 transition-all duration-200 hover:scale-110 active:scale-95 z-10"
            aria-label="Next image"
          >
            <IoChevronForward className="text-3xl" />
          </button>

          <div 
            className="relative max-w-7xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              {!imageLoaded[imageGallery [lightboxIndex].id] && !imageError[imageGallery [lightboxIndex].id] && (
                <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center rounded-lg">
                  <div className="text-white text-xl">Loading...</div>
                </div>
              )}
              {imageError[imageGallery [lightboxIndex].id] ? (
                <div className="bg-gray-800 rounded-lg p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-white text-6xl mb-4">📷</div>
                    <div className="text-white text-xl">Image unavailable</div>
                  </div>
                </div>
              ) : (
                <img 
                  src={imageGallery [lightboxIndex].url}
                  alt={imageGallery [lightboxIndex].title}
                  className="w-full h-full max-h-[80vh] object-contain rounded-lg animate-scaleIn"
                  onLoad={() => handleImageLoad(imageGallery [lightboxIndex].id)}
                  onError={() => handleImageError(imageGallery [lightboxIndex].id)}
                />
              )}
            </div>

            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {imageGallery [lightboxIndex].title}
              </h3>
              <p className="text-gray-300 mb-4">
                {imageGallery [lightboxIndex].description}
              </p>
              <div className="text-gray-400">
                {lightboxIndex + 1} / {imageGallery .length}
              </div>
            </div>
          </div>
        </div>
      )}
      

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default GalleryCarousel;