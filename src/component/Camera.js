import Webcam from "react-webcam";
import './Camera.css';

export default function Camera() {
    return (
        <>
            <div className="camera">
                <Webcam />
            </div>
        </>
    )
}