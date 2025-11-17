import './PreviewFrame.css';

export default function PreviewFrame({ photos}) {
    return (
        <div className="preview-frame">
            {photos.map((photo, index) => (
                <div key={index} className={`frame-slot slot-${index}`}>
                    <img src={photo} width="196px" />
                </div> 
            ))}
        </div>
    )
}