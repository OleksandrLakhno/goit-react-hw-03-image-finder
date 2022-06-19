import React from "react";
import PropTypes from 'prop-types';
import ImgGalleryItem from "components/ImgGalleryItem";

export default function ImgGallery({images,largeImageClick,toggleModal})  { 
    return (
        <ul className="ImageGallery">
            {images.map(({ id, tags, largeImageURL, webformatURL }) => ( 
                 <ImgGalleryItem
                    key={id}
                    tags={tags}
                    largeImageURL={largeImageURL}
                    normalImgUrl={webformatURL}
                    largeImageClick={largeImageClick}
                    toggleModal={ toggleModal}
                />
            ))}
        </ul>
    )
        
};

ImgGallery.propType = {
    largeImageClick: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    images: PropTypes.shape({
        id: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        webformatURL:PropTypes.string.isRequired,
    })
};

