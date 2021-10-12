/* React */
import React from 'react';

/* Ionic */
import {
    IonButton,
    IonIcon,
    IonLabel
} from '@ionic/react';

import { analyticsOutline } from 'ionicons/icons';

/* Tesseract */
import {
    createWorker,
    RecognizeResult
} from 'tesseract.js';

/* Stylesheet */
import styles from './OCRContainer.module.scss';

/* Interface(s) */
interface ORCContainerProps {
    image: string;
    handleIsProcessing: Function;
    handleResults: Function;
    handleInformation: Function;
}

const OCRContainer: React.FC<ORCContainerProps> = ({ 
        image, 
        handleIsProcessing, 
        handleResults,
        handleInformation
    }) => {
    
    const worker = createWorker();

    const processing = async () => {
        handleIsProcessing(true);
        const startTime: number = performance.now();

        await worker.load();
        await worker.loadLanguage('deu');
        await worker.initialize('deu');

        const results: RecognizeResult = await worker.recognize(image);
        console.log(results);
        handleResults(results);

        await worker.terminate();

        const endTime: number = performance.now();
        const time: number = (endTime - startTime) / 1000;
        console.log(`Processing time: ${time} seconds`);
        handleInformation({time: time});
    };

    return (
        <div className={styles.ocr_container}>
            <div className={styles.flex_container}>
                <div className={styles.btn_container}>
                    <div className={styles.title}>
                        <IonLabel>Klicken Sie auf den Button um die <span>Bildverarbeitung</span> zu starten</IonLabel>
                    </div>
                    <IonButton
                        className={styles.btn}
                        expand="block"
                        onClick={
                            () => {
                                processing().then(() => {
                                    handleIsProcessing(false);
                                });
                            }
                        }>
                        <IonIcon slot="start" icon={analyticsOutline} />
                        <IonLabel>Analysieren</IonLabel>
                    </IonButton>
                </div>
                {/* {!isProcessing && results && (
                    <div className={styles.results_container}>
                        <div className={styles.label_container}>
                            <IonIcon className={styles.icon} icon={documentTextOutline} />
                            <IonLabel className={`${styles.label}`}>Ergebnis (unbehandelt)</IonLabel>
                        </div>
                        <div className={styles.text_container}>
                            <IonLabel>{results.data.text}</IonLabel>
                        </div>
                        <div className={styles.additional_information}>
                            <div className={styles.label}>Informationen:</div>
                            <hr/>
                            <IonGrid className={styles.grid_container}>
                                <IonRow>
                                    <IonCol>
                                        <span>Benötigte Zeit:</span>
                                    </IonCol>
                                    <IonCol>
                                        {time} Sekunden
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol>
                                        <span>Genauigkeit:</span>
                                    </IonCol>
                                    <IonCol>
                                        {results.data.confidence} Prozent
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                    </div>
                )} */}
            </div>
        </div >
    );
};

export default OCRContainer;