/* React */
import React from 'react';

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
import ResultContainer from 'src/components/tesseract/result-container/ResultContainer';
import ImageUploader from 'src/components/tesseract/image-uploader/ImageUploader';

/* Stylesheet */
import styles from './TesseractPage.module.scss';

const TesseractPage: React.FC = () => {
    const imageState: ImagePaneState = useSelector((state: ImagePaneState) => state.imagePane);

    return (
        <IonPage>
            <IonContent>
                <IonGrid className={styles.grid_container}>
                    <IonRow>
                        <IonCol className={styles.preview_col}>
                            <ImagePreview image={imageState.value} />
                        </IonCol>
                        <IonCol className={styles.result_col}>
                            <ResultContainer image={imageState.value}/>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <ImageUploader />
            </IonContent>
        </IonPage>
    );
};

export default TesseractPage;