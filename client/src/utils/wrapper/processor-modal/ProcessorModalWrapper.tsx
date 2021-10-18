/* React */
import React from 'react';

/* Ionic */
import {
    IonContent,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';

/* Stylesheet */
import styles from './ProcessorModalWrapper.module.scss';

/* Interface(s) */
interface ProcessorModalWrapperProps {
    children: React.ReactNode[];
}

const ProcessorModalWrapper: React.FC<ProcessorModalWrapperProps> = ({ children }) => {
    return (
        <IonContent>
            <IonGrid className={styles.grid_container}>
                <IonRow className={styles.row}>
                    <IonCol
                        className={`${styles.col}`}
                        sizeXs="12"
                        sizeLg="6">
                        {children[0]}
                    </IonCol>
                    <IonCol
                        className={`${styles.col}`}>
                        {children[1]}
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default ProcessorModalWrapper;