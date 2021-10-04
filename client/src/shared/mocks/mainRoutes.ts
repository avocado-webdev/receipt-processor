/* mainRoutes.ts */

/* Ionic */
import {
    homeOutline
} from 'ionicons/icons'; 

/* Util(s) */
import generateRandomID from 'src/utils/helper/generateRandomID';

/* Model(s) */
export default interface MainRoutesModel {
    id: string;
    name: string;
    path: string;
    icon: string;
}

export const MAIN_ROUTES: MainRoutesModel[] = [
    {
        id: generateRandomID(),
        name: 'Home',
        path: '/home',
        icon: homeOutline
    }
];