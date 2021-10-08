/* React */
import React from 'react';

/* Ionic */
import {
    IonMenu,
    IonContent
} from '@ionic/react';

/* Stylesheet */
import styles from './Sidemenu.module.scss';

const Sidemenu: React.FC = () => {
    return (
        <IonMenu 
            menuId="main-menu"
            contentId="main-content">
            <IonContent id="main-content" className={styles.content_container}>

            </IonContent>
        </IonMenu>
    );
};

export default Sidemenu;