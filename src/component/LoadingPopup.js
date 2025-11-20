import { QRCodeCanvas } from 'qrcode.react';
import './LoadingPopup.css';
import { Link } from 'react-router-dom';

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
                        <p className='popup-message'>아이폰에서 이미지를 길게 눌러 사진을 저장하세요.</p>
                        <Link to="/"><button style={{ fontSize:'18px', margin: '10px', padding: '7px 15px' }}>홈으로</button></Link>
                    </>
                )}
            </div>
        </div>
    )
}
