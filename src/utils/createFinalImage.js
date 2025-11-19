export async function createFinalImage(photos, frameUrl) {
    return new Promise(async (resolve) => {

        const canvas = document.createElement('canvas');
        canvas.width = 482;
        canvas.height = 732;
        const ctx = canvas.getContext('2d');

        const slots = [
            { x: 36, y: 60 },
            { x: 250, y: 60 },
            { x: 36, y: 360 },
            { x: 250, y: 360 }
        ];

        const slotWidth = 196;
        const slotHeight = 282;

        for (let i=0; i < photos.length; i++) {
            const img = await loadImage(photos[i]);
            const cropped = cropToSlot(img, slotWidth, slotHeight);
            const slot = slots[i];
            ctx.drawImage(cropped, 0, 0, slotWidth, slotHeight, slot.x, slot.y, slotWidth, slotHeight);
        }

        if (frameUrl) {
            const frameImg = await loadImage(frameUrl);
            ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);
        }

        const finalImage = canvas.toDataURL('image/png', 0.9);
        resolve(finalImage);
    });
}

function loadImage(src){
    return new Promise((resolve) => {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.onload = () => {
            resolve(img);
        };
        img.src = src;
    })
}

function cropToSlot(img, slotWidth, slotHeight) {
    const inputRatio = img.width / img.height;
    const slotRatio = slotWidth / slotHeight;

    const canvas = document.createElement('canvas');
    canvas.width = slotWidth;
    canvas.height = slotHeight;
    const ctx = canvas.getContext('2d');

    let sx, sy, sw, sh;

    if (inputRatio > slotRatio) {
        sh = img.height;
        sw = sh * slotRatio;
        sx = (img.width - sw) / 2;
        sy = 0;
    } else {
        sw = img.width;
        sh = sw / slotRatio;
        sx = 0;
        sy = (img.height - sh) / 2;
    }

    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, slotWidth, slotHeight);
    return canvas;
}