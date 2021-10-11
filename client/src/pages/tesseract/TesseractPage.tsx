/* React */
import React, { useRef, useEffect } from 'react';

/* Ionic */
import {
    IonPage,
    IonContent,
    IonGrid,
    IonRow,
    IonCol
} from '@ionic/react';

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

    useEffect(() => {
        if(imageState.value !== '') {
            contentRef.current?.scrollToBottom(700);
        }
    }, [imageState.value]);

    return (
        <IonPage>
            <IonContent 
                ref={contentRef} 
                className={styles.content_container}>
                <IonGrid className={styles.grid_container}>
                    <IonRow>
                        <IonCol 
                            className={styles.preview_col}
                            sizeXs="12"
                            sizeMd="6">
                            <ImagePreview image={imageState.value} />
                        </IonCol>
                        <IonCol 
                            className={styles.result_col}
                            sizeXs="12"
                            sizeMd="6">
                            <ResultsContainer image={imageState.value}/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
            <ImageUploader />
        </IonPage>
    );
};

export default TesseractPage;