import './PreviewFrame.css';

export default function PreviewFrame({ photos, frameUrl}) {
    return (
        <div className="preview-frame">
            {photos.map((photo, index) => (
                <div key={index} className={`frame-slot slot-${index}`}>
                    <img src={photo} width="196px" />
                </div> 
            ))}

            {frameUrl && (
                <img className="frame-overlay" src={frameUrl} />
            )}
        </div>
    )
}