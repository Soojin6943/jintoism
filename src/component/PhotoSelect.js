import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import './PhotoSelect.css';
import { useState } from "react";
import PreviewFrame from "./PreviewFrame";

export default function PhotoSelect() {
    const location = useLocation();
    const navigate = useNavigate();
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

    const previewImages = selectedPhotos.map(i => photos[i]);

    function goNext() {
        navigate('/frame', { state: { photos: previewImages}});
    }
    return (
        <div className="photo-select-wrapper">
            <PreviewFrame photos={previewImages} />
            
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

            <button className={`next-btn ${selectedPhotos.length === 4 ? 'active' : ''}`}
                disabled={selectedPhotos.length !== 4}
                onClick={goNext}
            > ✔️ </button>
        </div>
    );
}