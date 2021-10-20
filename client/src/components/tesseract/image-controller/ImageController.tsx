/* React */
import React, { useState } from 'react';

/* React-Redux */
import {
    useDispatch
} from 'react-redux';

import {
    clearImage
} from 'src/redux/features/imageSlice';

/* Ionic */
import {
    IonFab,
    IonFabButton,
    IonIcon,
    IonFabList
} from '@ionic/react';

import {
    ellipsisVerticalOutline,
    trashOutline
} from 'ionicons/icons';

/* Component(s) */
import CapacitorCamera from 'src/components/tesseract/capacitor-camera/CapacitorCamera';

/* Stylesheet */
import styles from './ImageController.module.scss';

const ImageController: React.FC = () => {
    const dispatch = useDispatch();

    // showFabList
    const [showFabList, setShowFabList] = useState<boolean>(false);

    const handleShowFabList = (value: boolean) => {
        setShowFabList(value);
    };

    return (
        <IonFab
            className={
                showFabList ? `${styles.slide_left}` : `${styles.slide_right} ${styles.fab_container}`
            }
            vertical="bottom"
            horizontal="end">
            <IonFabButton 
                className={styles.open_list_fab}
                onClick={
                    () => {
                        handleShowFabList(!showFabList);
                    }
                }>
                <IonIcon icon={ellipsisVerticalOutline}/>
            </IonFabButton>
            <IonFabList 
                className={styles.fab_list}
                side="top">
                <CapacitorCamera handleShowFabList={handleShowFabList} />
                <IonFabButton 
                    className={styles.trash_fab} onClick={
                        () => {
                            handleShowFabList(false);
                            dispatch(clearImage());
                        }
                    }>
                    <IonIcon className={styles.icon} icon={trashOutline}/>
                </IonFabButton>
            </IonFabList>
        </IonFab>
    );
};

export default ImageController;