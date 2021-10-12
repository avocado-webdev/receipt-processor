/* React */
import React from 'react';

/* Ionic */
import { IonContent } from '@ionic/react';

/* ResultsInformationModel */
import ResultsInformationModel from 'src/shared/models/resultsInformation';

/* Stylesheet */
import styles from './ResultsLabel.module.scss';

/* Interface(s) */
interface ResultsLabelProps {
    resultsInformation: ResultsInformationModel; 
}

const ResultsLabel: React.FC<ResultsLabelProps> = ({ resultsInformation }) => {
    return (
        <div className={styles.results_label_container}>
            <IonContent>

            </IonContent>
        </div>
    );
};

export default ResultsLabel;