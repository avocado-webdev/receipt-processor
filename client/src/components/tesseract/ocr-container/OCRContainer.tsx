/* React */
import React, { useState } from 'react';

/* Ionic */
import {
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';

import { analyticsOutline } from 'ionicons/icons';

/* Tesseract */
import { createWorker } from 'tesseract.js';

/* Component(s) */
import ProcessingContainer from 'src/components/shared/processing-container/ProcessingContainer';

/* Stylesheet */
import styles from './OCRContainer.module.scss';

/* Interface(s) */
interface ORCContainerProps {
    image: string;
}

const OCRContainer: React.FC<ORCContainerProps> = ({ image }) => {
    const worker = createWorker();

    // processing
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const processing = async () => {
        setIsProcessing(true);
        await worker.load();
        await worker.loadLanguage('deu');
        await worker.initialize('deu');
        const results = await worker.recognize(image);
        console.log(results);
        await worker.terminate();
    }

    return (
        <div className={styles.ocr_container}>
            <React.Fragment>
            {isProcessing && (
                <ProcessingContainer />
            )}
            <IonFab 
                className={styles.fab_container}
                vertical="bottom"
                horizontal="start">
                <IonFabButton 
                    className={styles.fab_btn} 
                    onClick={
                        () =>{
                            processing().then(() => {
                                setIsProcessing(false);
                            })
                        }
                    }>
                    <IonIcon icon={analyticsOutline} />
                </IonFabButton>
            </IonFab>
            </React.Fragment>

        </div>
    );
};

export default OCRContainer;