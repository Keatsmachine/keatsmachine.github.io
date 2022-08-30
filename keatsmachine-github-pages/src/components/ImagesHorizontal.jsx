import React from "react";

function ImagesHorizontal(props) {

    const images = props.images;

    return (
        <div>
            {images.map((image, index)=> {
                return (
                <img
                    key={index}
                    style={{
                    height: null,
                    flex: 1,
                    width: 100 / images.length + "%",
                    maxWidth: 1000 / images.length + "px",
                    }}
                    src={image.image}
                    alt={image.imageAlt}
                />
                );
            })}
        </div>
    );
}

export default ImagesHorizontal;
