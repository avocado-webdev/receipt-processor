/* React */
import React, { useRef, useState, useEffect } from 'react';

/* React-Redux */
import { 
    useSelector 
} from 'react-redux';

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

import { 
    chevronUpOutline 
} from 'ionicons/icons';

/* Model(s) */
import { 
    ImagePaneState 
} from 'src/redux/store';

/* Component(s) */
import ImagePreview from 'src/components/tesseract/image-preview/ImagePreview';
import ResultsContainer from 'src/components/tesseract/results-container/ResultsContainer';
import ImageController from 'src/components/tesseract/image-controller/ImageController';
import ProcessorModal from 'src/components/tesseract/processor-modal/ProcessorModal';

/* Stylesheet */
import styles from './TesseractPage.module.scss';

const TesseractPage: React.FC = () => {
    const imageState: ImagePaneState = useSelector((state: ImagePaneState) => state.imagePane);
    const contentRef = useRef<HTMLIonContentElement | null>(null);

    // isScrolling
    const [isScrolling, setIsScrolling] = useState<boolean>(false);

    // showProcessorModal
    const [showProcessorModal, setShowProcessorModal] = useState<boolean>(false);

    const handleProcessorModal = (value: boolean) => {
        setShowProcessorModal(value);
    };

    useEffect(() => {
        if (imageState.image !== '') {
            contentRef.current?.scrollToBottom(700);
        }
    }, [imageState.image]);

    const scrollToTop = () => {
        contentRef.current?.scrollToTop(700);
    };

    return (
        <React.Fragment>
            {/* modal for processing images */}
            <ProcessorModal
                image={imageState.image}
                showProcessorModal={showProcessorModal}
                handleProcessorModal={handleProcessorModal}
            />
            <IonPage>
                <IonContent
                    ref={contentRef}
                    className={styles.content_container}
                    scrollEvents={true}
                    onIonScroll={
                        () => {
                            setIsScrolling(true);
                        }
                    }
                    onIonScrollEnd={
                        () => {
                            setIsScrolling(false);
                        }
                    }>
                    {/* grid-layout */}
                    <IonGrid className={styles.grid_container}>
                        <IonRow className={styles.row}>
                            <IonCol
                                className={`${styles.col} ${styles.preview_col}`}
                                sizeXs="12"
                                sizeXl="6">
                                <ImagePreview 
                                    image={imageState.image}
                                    handleProcessorModal={handleProcessorModal}
                                />
                            </IonCol>
                            <IonCol
                                className={`${styles.col} ${styles.results_col}`}
                                sizeXs="12"
                                sizeXl="6">
                                <ResultsContainer image={imageState.image} />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonContent>
                {/* component ImageController to use camera of capacitor */}
                <ImageController />
                {imageState.image && !isScrolling && (
                    <IonFab
                        className={styles.fab_container}
                        vertical="top"
                        horizontal="end">
                        <IonFabButton
                            className={styles.fab_btn}
                            onClick={() => scrollToTop()}>
                            <IonIcon icon={chevronUpOutline} />
                        </IonFabButton>
                    </IonFab>
                )}
            </IonPage>
        </React.Fragment>
    );
};

export default TesseractPage;