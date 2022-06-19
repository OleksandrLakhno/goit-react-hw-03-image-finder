import React from "react";


function ImgGalleryItem({ tags, toggleModal,largeImageClick, normalImgUrl,largeImageURL }) {
    return (
        <li className="ImageGalleryItem">
            <img className="ImageGalleryItem-image" src={normalImgUrl} alt={tags}
                onClick={() => { toggleModal(); largeImageClick(largeImageURL) }}
            />
        </li>
    )
};

 
export default ImgGalleryItem;