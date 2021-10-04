/* React */
import React from 'react';

/* Ionic */
import {
    IonPage
} from '@ionic/react';

/* React-Redux */
import { useSelector } from 'react-redux';

/* Model(s) */
import { ImagePaneState } from 'src/redux/store';

/* Component(s) */
import ImageUploader from 'src/components/tesseract/image-uploader/ImageUploader';

const TesseractPage: React.FC = () => {
    const imageState: ImagePaneState = useSelector((state: ImagePaneState) => state.imagePane);

    return (
        <IonPage>
            <ImageUploader />
        </IonPage>
    );
};

export default TesseractPage;