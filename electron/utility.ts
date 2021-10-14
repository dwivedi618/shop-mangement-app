// import imagemin from 'imagemin';
// import imageminJpegtran from 'imagemin-jpegtran';
// import imageminPngquant from 'imagemin-pngquant';
const sharp = require('sharp');

// export class UtilityService {

    // async compress() {
    //     const files = await imagemin(['images/*.{jpg,png}'], {
    //         destination: 'build/images',
    //         plugins: [
    //             imageminJpegtran(),
    //             imageminPngquant({
    //                 quality: [0.6, 0.8]
    //             })
    //         ]
    //     });
    // }

    export async function compress(data: string, heigth: number, width: number){
        return data;
        let buffer = Buffer.from(data, 'base64');
        console.log('BBBBBBEEEEEEEEEEEEFFFFFFFFFORRRRRRRRREEEEE', buffer)
        try {
            let compressed = await sharp(buffer).resize(heigth, width).toBuffer();
            console.log('AAAAAAAAAAAAFFFFFFFFFFFFFFFFFFFFFFFFF', compressed.toString('base64'))
            return compressed;
        } catch (err) {
            console.log('this is error from compress function:', err);
            return data;
        }

    }
// }