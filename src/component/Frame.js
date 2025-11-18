import { useLocation } from 'react-router-dom';
import PreviewFrame from './PreviewFrame';
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import './Frame.css';


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

    return (
        <div className='frame-select-wrapper'>
            <PreviewFrame photos={photos} frameUrl={selectedFrame.url} />

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
        </div>
    )
}