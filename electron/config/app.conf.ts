import * as path from 'path';

export class AppConfig {
    static iconPath: string = `/home/polestar/projects/shop-mangement-app/dist/shop-management-app/assets/images/Platonic_4_-_Bucky0002.png`;
    static indexURL: string = `file:///home/polestar/projects/shop-mangement-app/dist/shop-management-app/index.html`;
    static preloadPath: string = path.join('/home/polestar/projects/shop-mangement-app/electron/dist/preload.js')
}