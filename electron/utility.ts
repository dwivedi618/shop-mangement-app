// import imagemin from 'imagemin';
// import imageminJpegtran from 'imagemin-jpegtran';
// import imageminPngquant from 'imagemin-pngquant';
import sharp from 'sharp';

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

    export async function compress(data: any, heigth: number, width: number){
        return data;
        return await sharp.resize(heigth, width).toBuffer();
    }
// }