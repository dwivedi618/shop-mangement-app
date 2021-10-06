import * as path from 'path';

export class AppConfig {
    static iconPath: string = path.join(__dirname, '../../..', 'dist/shop-management-app/assets/images/Platonic_4_-_Bucky0002.png');
    static indexURL: string = 'file://' + path.join(__dirname,'../../..','dist/shop-management-app/index.html');
    static preloadPath: string = path.join(__dirname, '..', 'preload.js')
}