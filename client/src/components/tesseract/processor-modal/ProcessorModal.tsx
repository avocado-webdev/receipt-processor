/* React */
import React, { useState, useRef, useEffect } from 'react';

/* Ionic */
import {
    IonModal,
    IonSlides,
    IonSlide,
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';

import {
    analyticsOutline
} from 'ionicons/icons';

/* OpenCV */
import cv, { Mat } from 'opencv-ts';

/* Service(s) */
// import { ServiceLoader } from 'src/shared/services/service-loader';

/* Model(s) */
// import { OpenCVService } from 'src/shared/services/opencv-service';

/* Component(s) */
// import Binarization from 'src/components/tesseract/binarization/Binarization';
// import SlidesController from 'src/components/shared/slides-controller/SlidesController'

/* Stylesheet */
import styles from './ProcessorModal.module.scss';

/* Interface(s) */
interface ProcessModalProps {
    image: string;
    showProcessorModal: boolean;
    handleProcessorModal: Function;
}

const ProcessorModal: React.FC<ProcessModalProps> = ({ image, showProcessorModal, handleProcessorModal }) => {
    const slideRef = useRef(document.createElement('ion-slides'));
    const imgRef = useRef(document.createElement('img'));
    const canvasRef = useRef(document.createElement('canvas'));

    // results 
    const [results, setResults] = useState<string>();

    const binarization = () => {
        const src = cv.imread(imgRef.current);
        const dst = new cv.Mat();
        cv.cvtColor(src, src, cv.COLOR_RGBA2GRAY, 0);
        // cv.adaptiveThreshold(src, dst, 177, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 3, 2);
        cv.threshold(src, dst, 160, 220, cv.THRESH_BINARY)
        cv.imshow(canvasRef.current, dst);
        setResults(canvasRef.current.toDataURL());
        return canvasRef.current.toDataURL();
    }

    // isProcessing
    // const [isProcessing, setIsProcessing] = useState<boolean>(false);

    // const handleIsProcessing = (value: boolean) => {
    //     setIsProcessing(value);
    // };

    // processingDone
    // const [processingDone, setIsProcessingDone] = useState<boolean>(false);

    // lockSwipeToNext
    // const [lockSwipeToNext, setLockSwipeToNext] = useState(true);

    // reachedStart
    // const [reachedStart, setReachedStart] = useState<boolean>(false);

    // reachedEnd
    // const [reachedEnd, setReachedEnd] = useState<boolean>(false);

    const lockSwipe = () => {
        // slideRef.current.lockSwipeToNext(true);
    };

    // processedImage
    // const [processedImage, setProcessedImage] = useState<string>('');

    // const handleProcessedImage = (value: string) => {
    //     setProcessedImage(value);
    // };

    // 

    return (
        <IonModal
            cssClass={styles.process_modal_container}
            isOpen={showProcessorModal}
            onDidDismiss={
                () => {
                    handleProcessorModal(false);
                }
            }>
            <IonSlides
                className={styles.slide_container}
                ref={slideRef}
                onIonSlidesDidLoad={
                    () => {
                        slideRef.current.update();
                        lockSwipe();
                        // setReachedStart(true);
                    }
                }
            // onIonSlidePrevStart={
            //     () => {
            //         setReachedEnd(false);  
            //     }
            // }
            // onIonSlideNextEnd= {
            //     () => {
            //         setReachedStart(false);
            //     }
            // }
            // onIonSlideReachStart={
            //     () => {
            //         setReachedStart(true);
            //     }
            // }
            // onIonSlideReachEnd={
            //     () => {
            //         setReachedEnd(true);
            //     }
            // }>
            >
                <IonSlide className={styles.slide}>
                    {/* <Binarization
                        title={'Binarisierung'}
                        image={image}
                        // openCVService={openCVService}
                        processedImage={processedImage}
                        handleProcessedImage={handleProcessedImage}
                        isProcessing={isProcessing}
                        handleIsProcessing={handleIsProcessing}
                    /> */}

                        <img ref={imgRef} src={image} alt="" />
                        <canvas ref={canvasRef} />
                        <img src={results} alt=""  />
                </IonSlide>
                <IonSlide className={styles.slide}>

                </IonSlide>
            </IonSlides>
            {/* <SlidesController 
                reachedStart={reachedStart}
                reachedEnd={reachedEnd}
                handleIsProcessing={handleIsProcessing} 
            /> */}
            <IonFab
                vertical="bottom"
                horizontal="end">
                <IonFabButton
                    style={{ '--background': 'var(--ion-color-primColor)' }}
                    onClick={
                        () => {
                            return (
                                <img src={binarization()} alt=""/>
                            )
                        }
                    }>
                    <IonIcon icon={analyticsOutline} />
                </IonFabButton>
            </IonFab>
        </IonModal>
    );
};

export default ProcessorModal;