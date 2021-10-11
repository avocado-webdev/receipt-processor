/* React */
import React, { useState } from 'react';

/* React-Redux */
// import { useDispatch } from 'react-redux';
// import { setResults } from 'src/redux/features/resultsSlice';

/* Ionic */
import {
    IonButton,
    IonIcon
} from '@ionic/react';

import { analyticsOutline } from 'ionicons/icons';

/* Tesseract */
import { createWorker, RecognizeResult } from 'tesseract.js';

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
    // const dispatch = useDispatch();

    // processing
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    // results
    const [results, setResults] = useState<RecognizeResult>();

    const processing = async () => {
        setIsProcessing(true);
        await worker.load();
        await worker.loadLanguage('deu');
        await worker.initialize('deu');
        const results = await worker.recognize(image);
        console.log(results);
        // dispatch(setResults(results));
        setResults(results);
        await worker.terminate();
    }

    return (
        <div className={styles.ocr_container}>
            <div className={styles.flex_container}>
                {isProcessing && (
                    <ProcessingContainer />
                )}
                {!isProcessing && !results && (
                    <div className={styles.btn_container}>
                        <div className={styles.title}>
                            Click button below for <span>processing image</span>
                        </div>
                        <IonButton
                            className={styles.btn}
                            expand="block"
                            onClick={
                                () => {
                                    processing().then(() => {
                                        setIsProcessing(false);
                                    });
                                }
                            }>
                            <IonIcon slot="start" icon={analyticsOutline} />
                            Processing
                        </IonButton>
                    </div>
                )}
            </div>
            {!isProcessing && results && (
                <div className={styles.results_container}>
                    {results.data.text}
                </div>
            )}
        </div>
    );
};

export default OCRContainer;