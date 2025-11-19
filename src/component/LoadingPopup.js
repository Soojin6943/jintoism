import { QRCodeCanvas } from 'qrcode.react';
import './LoadingPopup.css';

export default function LoadingPopup({ visible, qrUrl }) {
    if (!visible) return null;

    return (
        <div className='popup-overlay'>
            <div className='popup-box'>
                {!qrUrl ? (
                    <>
                        <div className='spinner'></div>
                        <p className='popup-message'>QR을 생성하고 있어요</p>
                    </>
                ) : (
                    <>
                        <p className='popup-message'>QR이 생성되었습니다.</p>
                        <QRCodeCanvas
                            value={qrUrl}
                            size={150}
                            bgColor={"#ffffff"}
                            fgColor={"#000000"}
                            level={"M"}
                            className='qr-image'
                        />
                    </>
                )}
            </div>
        </div>
    )
}
