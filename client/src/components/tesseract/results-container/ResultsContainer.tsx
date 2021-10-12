/* React */
import React, { useState } from 'react';

/* Ionic */
import {
    IonIcon,
    IonContent
} from '@ionic/react';

import { analyticsOutline } from 'ionicons/icons';

/* Tesseract */
import { RecognizeResult } from 'tesseract.js';

/* Model(s) */
import ResultsInformationModel from 'src/shared/models/resultsInformation';

/* Component(s) */
import OCRContainer from 'src/components/tesseract/ocr-container/OCRContainer';
import ProcessingContainer from 'src/components/shared/processing-container/ProcessingContainer';
import ResultsLabel from 'src/components/tesseract/results-label/ResultsLabel';

/* Stylesheet */
import styles from './ResultsContainer.module.scss';

/* Interface(s) */
interface ResultContainerProps {
    image: string;
}

const ResultsContainer: React.FC<ResultContainerProps> = ({ image }) => {

    // isProcessing
    const [isProcessing, setIsProcessing] = useState<boolean>(false);

    const handleIsProcessing = (value: boolean) => {
        setIsProcessing(value);
    };

    // results
    const [results, setResults] = useState<RecognizeResult>();

    const handleResults = (value: RecognizeResult) => {
        setResults(value);
    };

    // resultsInformation
    const defaultResultsInformation: ResultsInformationModel = {
        time: '',
        confidence: 0
    };

    const [resultsInformation, setResultsInformation] = useState<ResultsInformationModel>(defaultResultsInformation);

    const handleInformation = (value: ResultsInformationModel) => {
        setResultsInformation(value);
    };

    return (
        <div className={styles.results_container}>
            <IonContent>
                {isProcessing && (
                    <ProcessingContainer />
                )}
                {image ?
                    <div className={styles.results}>
                        <OCRContainer
                            image={image}
                            handleIsProcessing={handleIsProcessing} 
                            handleResults={handleResults} 
                            handleInformation={handleInformation}/>
                    </div>
                    :
                    <div className={styles.label_container}>
                        <div className={styles.block_container}>
                            <div className={styles.label}>
                                Ergebnis-Ansicht
                            </div>
                            <IonIcon icon={analyticsOutline} />
                        </div>
                    </div>
                }
                {!isProcessing && results && (
                    <ResultsLabel resultsInformation={resultsInformation}/>
                )}
            </IonContent>
        </div>
    );
};

export default ResultsContainer;