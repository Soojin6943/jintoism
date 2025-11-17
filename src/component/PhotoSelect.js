import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import './PhotoSelect.css';

export default function PhotoSelect() {
    const location = useLocation();
    const photos = location.state.photos;

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className="photo-select-wrapper">
            <Slider {...settings}>
                {photos.map((photo, index) => (
                    <div >
                        <img key={index} src={photo} width="160px" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}