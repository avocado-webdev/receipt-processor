/* React */
import React, { useRef, useState, useEffect } from 'react';

/* Ionic */
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';

import { chevronUpOutline } from 'ionicons/icons';

/* React-Redux */
import { useSelector } from 'react-redux';

/* Model(s) */
import { ImagePaneState } from 'src/redux/store';

/* Component(s) */
import ImagePreview from 'src/components/tesseract/image-preview/ImagePreview';
import ResultsContainer from 'src/components/tesseract/results-container/ResultsContainer';
import ImageUploader from 'src/components/tesseract/image-uploader/ImageUploader';

/* Stylesheet */
import styles from './TesseractPage.module.scss';

const TesseractPage: React.FC = () => {
    const imageState: ImagePaneState = useSelector((state: ImagePaneState) => state.imagePane);
    const contentRef = useRef<HTMLIonContentElement | null>(null);

    // reachedBottom
    const [reachedBottom, setReachedBottom] = useState<boolean>(false);

    useEffect(() => {
        if (imageState.value !== '') {
            contentRef.current?.scrollToBottom(700).then(() => {
                setReachedBottom(true);
            });
        }

    }, [imageState.value]);

    const scrollToTop = () => {
        contentRef.current?.scrollToTop(700);
    };

    return (
        <IonPage>
            <IonContent
                ref={contentRef}
                scrollEvents={true}
                className={styles.content_container}>
                <IonGrid className={styles.grid_container}>
                    <IonRow className={styles.row}>
                        <IonCol
                            className={`${styles.col} ${styles.preview_col}`}
                            sizeXs="12"
                            sizeMd="6">
                            <ImagePreview image={imageState.value} />
                        </IonCol>
                        <IonCol
                            className={`${styles.col} ${styles.results_col}`}
                            sizeXs="12"
                            sizeMd="6">
                            <ResultsContainer image={imageState.value} />
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <ImageUploader />
            {reachedBottom && (
                <IonFab 
                    className={styles.fab_container}
                    vertical="top"
                    horizontal="end">
                    <IonFabButton 
                        className={styles.fab_btn} 
                        size="small"
                        onClick={() => scrollToTop()}>
                        <IonIcon icon={chevronUpOutline} />
                    </IonFabButton>
                </IonFab>
            )}
        </IonPage>
    );
};

export default TesseractPage;