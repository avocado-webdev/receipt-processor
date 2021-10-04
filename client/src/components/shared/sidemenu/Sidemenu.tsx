/* React */
import React from 'react';

/* Ionic */
import {
    IonMenu,
    IonContent
} from '@ionic/react';

const Sidemenu: React.FC = () => {
    return (
        <IonMenu 
            menuId="main-menu"
            contentId="main-content">
            <IonContent id="main-content">

            </IonContent>
        </IonMenu>
    );
};

export default Sidemenu;