import { useEffect, useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import NavArrows from './NavArrows.jsx';
import NavBullets from './NavBullets.jsx';
//
//image slider that take a list of items [{original: "image url" , link:"target link", thumbnail: "thumbnail image url"}, ...]
//can be modified with: showBullets = bolean | default false, show the bullets at the bottom
//                      showArrow = bolean | default false, shows the left and right navigation arrows
//                      autoPlay = bolean | default true, auto slides the images every 5 sec
//                      showThumbnails = bolean | default false, shows img thumbnails under the container
//                      className = can take a className that styles the root element/container
//

const defaultItems = [
  { original: '/assets/img/slider/3.jpeg' },
  { original: '/assets/img/slider/2.jpeg' },
  { original: '/assets/img/slider/1.jpeg' },
];

const ImageSlider = ({
  galleryImages,
  items = defaultItems,
  showBullets = false,
  showNav = false,
  className = '',
  autoPlay = true,
  showThumbnails = false,
}) => {
  const [images, setImages] = useState(null);

  const imageGalleryRef = useRef(null);

  const getSlide = () => imageGalleryRef.current?.getCurrentIndex();

  const setSlide = (index) => imageGalleryRef?.current.slideToIndex(index);

  useEffect(() => {
    if (galleryImages?.[0]?.file) {
      let array = [];
      galleryImages.map((val) => {
        array.push({
          original: `https://betaapi.distedavim.com/${val.file}`,
          originalClass: '  h-60 md:h-64 lg:h-72 ',
        });
      });
      setImages(array);
    } else {
      setImages(items);
    }
  }, []);

  return (
    images && (
      <ImageGallery
        className="  "
        ref={imageGalleryRef}
        autoPlay={autoPlay}
        showNav={false}
        additionalClass={className}
        items={images}
        showThumbnails={showThumbnails}
        showFullscreenButton={false}
        useBrowserFullscreen={false}
        showPlayButton={false}
        onClick={(e) => {
          const imgSrc = e.target.currentSrc;
          const item = items.filter((c) => c.original === imgSrc)[0];
          if (item?.link) {
            window.open(item.link, item.target ?? '_blank');
          }
        }}
        renderCustomControls={() => (
          <>
            {showBullets && (
              <NavBullets
                getslide={getSlide}
                setslide={setSlide}
                count={images.length}
                width={18}
                height={18}
              />
            )}
            {showNav && <NavArrows getSlide={getSlide} setSlide={setSlide} />}
          </>
        )}
      />
    )
  );
};

export default ImageSlider;
