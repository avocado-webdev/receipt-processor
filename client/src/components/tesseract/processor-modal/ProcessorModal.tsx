/* React */
import React, { useState, useRef } from 'react';

/* Ionic */
import {
    IonModal,
    IonSlides,
    IonSlide
} from '@ionic/react';

/* Component(s) */
import Binarization from 'src/components/tesseract/binarization/Binarization';
import SlidesController from 'src/components/shared/slides-controller/SlidesController'

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

    // isProcessing
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const handleIsProcessing = (value: boolean) => {
        setIsProcessing(value);
    };

    // processingDone
    // const [processingDone, setIsProcessingDone] = useState<boolean>(false);

    // lockSwipeToNext
    // const [lockSwipeToNext, setLockSwipeToNext] = useState(true);

    // reachedStart
    const [reachedStart, setReachedStart] = useState<boolean>(false);

    // reachedEnd
    const [reachedEnd, setReachedEnd] = useState<boolean>(false);

    const lockSwipe = () => {
        // slideRef.current.lockSwipeToNext(true);
    };

    // processedImage
    const [processedImage, setProcessedImage] = useState<string>('');

    const handleProcessedImage = (value: string) => {
        setProcessedImage(value);
    };

    return (
        <IonModal
            cssClass={styles.process_modal_container}
            isOpen={showProcessorModal}>
            <IonSlides
                className={styles.slide_container}
                ref={slideRef}
                onIonSlidesDidLoad={
                    () => {
                        lockSwipe();
                        setReachedStart(true);
                    }
                }
                onIonSlidePrevStart={
                    () => {
                        setReachedEnd(false);  
                    }
                }
                onIonSlideNextEnd= {
                    () => {
                        setReachedStart(false);
                    }
                }
                onIonSlideReachStart={
                    () => {
                        setReachedStart(true);
                    }
                }
                onIonSlideReachEnd={
                    () => {
                        setReachedEnd(true);
                    }
                }>
                <IonSlide className={styles.slide}>
                    <Binarization
                        title={'Binarisierung'}
                        image={image}
                        processedImage={processedImage}
                        handleProcessedImage={handleProcessedImage}
                        isProcessing={isProcessing}
                    />
                </IonSlide>
                <IonSlide className={styles.slide}>

                </IonSlide>
            </IonSlides>
            <SlidesController 
                reachedStart={reachedStart}
                reachedEnd={reachedEnd}
                handleIsProcessing={handleIsProcessing} 
            />
        </IonModal>
    );
};

export default ProcessorModal;