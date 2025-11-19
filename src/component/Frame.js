import { useLocation } from 'react-router-dom';
import PreviewFrame from './PreviewFrame';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import './Frame.css';
import LoadingPopup from './LoadingPopup';
import { createFinalImage } from '../utils/createFinalImage';


const FRAME_OPTIONS = [
    { id: 'basic', name: '기본', url: '/frames/frame-basic.png' },
    { id: 'test1', name: '기본', url: '/frames/frame-basic.png' },
    { id: 'test2', name: '기본', url: '/frames/frame-basic.png' },
]

const FRAME_THUMBNAILS = [
    { id: 'basic', url: '/thumbnails/thumb-basic.png' },
    { id: 'test1', url: '/thumbnails/thumb-basic.png' },
    { id: 'test2', url: '/thumbnails/thumb-basic.png' },

]

export default function Frame() {
    const location = useLocation();
    const photos = location.state.photos;

    const [selectedFrameId, setSelectedFrameId] = useState('basic');
    const selectedFrame = FRAME_OPTIONS.find(frame => frame.id === selectedFrameId);

    const settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    function thumbnailClick(frameId) {
        setSelectedFrameId(frameId);
    }

    const [popupVisible, setPopupVisible] = useState(false);
    const [qrUrl, setQrUrl] = useState(null);

    function goNext() {
        setPopupVisible(true);

        createFinalImage(photos, selectedFrame.url).then((finalImageBase64) => {

            console.log("최종 이미지 base64:", finalImageBase64);

                    // 모의 API 호출
            setTimeout(() => {
                // QR 코드 이미지 URL (모의)
                const generatedQrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example';
                setQrUrl(generatedQrUrl);
            }, 2000);
        })


    }

    return (
        <div className='frame-select-wrapper'>
            <PreviewFrame photos={photos} frameUrl={selectedFrame.url} />

            <LoadingPopup visible={popupVisible} qrUrl={qrUrl} />

            <Slider {...settings}>
                {FRAME_OPTIONS.map(frame => {
                    const isSelected = selectedFrameId === frame.id;
                    const thumbnail = FRAME_THUMBNAILS.find(thumb => thumb.id === frame.id);
                    
                    return (
                        <div key={frame.id} className='frame-wrapper'>
                            <img
                                src={thumbnail.url}
                                width="160px"
                                height="160px"
                                className={`frame-thumbnail ${selectedFrameId === frame.id ? 'selected' : ''}`}
                                onClick={() => thumbnailClick(frame.id)}
                            />

                            {isSelected && (
                                <div className='selected'></div>
                            )}

                        </div>
                    )
                })}
            </Slider>

            <button
                className={`check-btn ${selectedFrameId ? 'active' : ''}`}
                disabled={!selectedFrameId}
                onClick={goNext} 
            > ✔️ </button>
        </div>
    )
}