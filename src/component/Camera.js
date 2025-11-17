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
    const [potos, setPotos] = useState([]);
    const [count, setCount] = useState(0);
    const timeRef = useRef(null);

    const capture = useCallback(
        () => {
            setFlash(true);
            setTimeout(() => setFlash(false), 150);

            const imageSrc = webcamRef.current.getScreenshot();
            setPotos(prev => [...prev, imageSrc]);
            
            console.log("촬영됨");
        },
        [webcamRef]
    )
    useEffect(() => {
         timeRef.current = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1000);
        }, 1000);

        return () => clearInterval(timeRef.current);
    }, []);

    useEffect(() => {

        if (count >= 6) {
            clearInterval(timeRef.current);
            console.log(potos[0]);
            console.log(potos[1]);
            return;
        }

        if (timeLeft <= 0) {
            capture();
            setCount(count + 1);
            setTimeLeft(7*1000);
        }

    }, [timeLeft, count]);

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
                <div className="poto-count">
                    {count} / 6
                </div>

                {flash && <div className="flash-effect"></div>}
            </div>
        </>
    )
}