import Webcam from "react-webcam";
import './Camera.css';
import { useRef, useCallback, useEffect, useState } from "react";

const videoConstraints = {
    width: 820,
    height: 1180,
    facingMode: "user"
}

export default function Camera() {

    const webcamRef = useRef(null);
    const [timeLeft, setTimeLeft] = useState(7*1000);
    const [flash, setFlash] = useState(false);

    const capture = useCallback(
        () => {
            setFlash(true);
            setTimeout(() => setFlash(false), 150);

            const imageSrc = webcamRef.current.getScreenshot();
            console.log(imageSrc);
        },
        [webcamRef]
    )

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1000);
        }, 1000);

        if (timeLeft <= 0) {
            clearInterval(timer);
            capture();
            console.log("success");
        }

        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
        <>
            <div className="camera">
                <Webcam 
                    audio={false} 
                    screenshotFormat="image/jpeg" 
                    ref={webcamRef}
                    videoConstraints={videoConstraints} 
                    mirrored={true} >
                </Webcam>
                <div className="countdown">
                    {Math.ceil(timeLeft / 1000)}
                </div>

                {flash && <div className="flash-effect"></div>}
            </div>
        </>
    )
}