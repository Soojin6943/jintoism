import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import './PhotoSelect.css';
import { useState } from "react";

export default function PhotoSelect() {
    const location = useLocation();
    const photos = location.state.photos;
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    console.log(photos)

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    function photoClick(index) {
        setSelectedPhotos(prev => {
            if (prev.includes(index)) {
                return prev.filter(i => i !== index);
            }

            if (prev.length > 3) {
                alert("최대 4장까지만 선택할 수 있습니다.");
                return prev;
            }

            return [...prev, index];
        });
        console.log("사진 선택됨" + index);
    }

    return (
        <div className="photo-select-wrapper">
            <Slider {...settings}>
                {photos.map((photo, index) => {
                    const isSelected = selectedPhotos.includes(index);
                    const order = selectedPhotos.indexOf(index) + 1;
                    
                    return (
                    <div key={index} className="photo-wrapper">
                        <img 
                            src={photo} 
                            width="160px" 
                            className={`photo-img ${isSelected ? 'selected' : ''}`}
                            onClick={() =>photoClick(index)}
                        />

                        {isSelected && (
                            <div className="select-number">{order}</div>
                        )}
                    </div>
                )})}
            </Slider>
        </div>
    );
}