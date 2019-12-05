import React, { useCallback, useState } from "react";
import DisplayGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import './styles.css';

const Gallery = (props = {}) => {
  const { images } = props;
  const [currentImage, setCurrentImage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setModalIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setModalIsOpen(false);
  };

  return (
    <div>
      <DisplayGallery photos={images} onClick={openLightbox} />
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel currentIndex={currentImage} views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}
export default Gallery;
