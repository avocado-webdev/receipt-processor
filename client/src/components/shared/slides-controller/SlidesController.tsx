/* React */
import React from 'react';

/* Ionic */
import {
    IonButton,
    IonIcon
} from '@ionic/react';

import {
    chevronBackOutline,
    chevronForwardOutline
} from 'ionicons/icons';

/* Stylesheet */
import styles from './SlidesController.module.scss';

/* Interface(s) */
// interface SlidesControllerProps {
//     reachedStart: boolean;
//     reachedEnd: boolean;
// }

interface SlidesControllerProps {
    reachedStart: boolean;
    reachedEnd: boolean;
    handleIsProcessing: Function;
}

const SlidesController: React.FC<SlidesControllerProps> = ({
    reachedStart,
    reachedEnd,
    handleIsProcessing
}) => {
    return (
        <div className={styles.slides_controller_container}>
            <IonButton
                className={`${styles.btn} ${styles.back_btn}`}
                disabled={reachedStart}>
                <IonIcon icon={chevronBackOutline} />
            </IonButton>
            <IonButton
                className={styles.process_btn}
                onClick={
                    () => {
                        handleIsProcessing(true);
                    }}>
                Bearbeiten
            </IonButton>
            <IonButton
                className={`${styles.btn} ${styles.forward_btn}`}
                disabled={reachedEnd}>
                <IonIcon icon={chevronForwardOutline} />
            </IonButton>
        </div>
    );
};

export default SlidesController;