import * as fs from 'fs';
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';

export class Utility {

    async compress() {
        const files = await imagemin(['images/*.{jpg,png}'], {
            destination: 'build/images',
            plugins: [
                imageminJpegtran(),
                imageminPngquant({
                    quality: [0.6, 0.8]
                })
            ]
        });
    }

    async writeFile(buffer) {
        fs.writeFileSync('electron/images',buffer)
    }
}