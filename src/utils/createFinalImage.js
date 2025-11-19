export async function createFinalImage(photos, frameUrl) {
    const DPR = Math.min(window.devicePixelRatio || 2, 3); // 최대 3배
    const BASE_WIDTH = 2400;
    const BASE_HEIGHT = 3600;

    const canvas = document.createElement("canvas");
    canvas.width = BASE_WIDTH * DPR;
    canvas.height = BASE_HEIGHT * DPR;

    const ctx = canvas.getContext("2d");
    ctx.scale(DPR, DPR);

    const slots = [
        { x: 160,  y: 160,  w: 985, h: 1493 },  
        { x: 1255, y: 160,  w: 985, h: 1493 },  
        { x: 160,  y: 1663, w: 985, h: 1493 },  
        { x: 1255, y: 1663, w: 985, h: 1493 },      
    ];


    // 각 사진 넣기
    for (let i = 0; i < photos.length; i++) {
        const img = await loadImage(photos[i]);
        const s = slots[i];

        const scale = 1.1;

        const dw = s.w * scale;
        const dh = s.h * scale;
        const dx = s.x - (dw - s.w) / 2;
        const dy = s.y - (dh - s.h) / 2;

        ctx.drawImage(img, dx, dy, dw, dh);
        }

    // 프레임 덮기
    const frame = await loadImage(frameUrl);
    ctx.drawImage(frame, 0, 0, BASE_WIDTH, BASE_HEIGHT);

    return canvas.toDataURL("image/jpeg", 0.92);
}

function loadImage(src) {
    return new Promise(resolve => {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.onload = () => resolve(img);
        img.src = src;
    });
}
