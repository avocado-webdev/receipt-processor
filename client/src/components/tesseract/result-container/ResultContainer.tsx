/* React */
import React from 'react';

/* Ionic */
import { IonIcon } from '@ionic/react';

import { analyticsOutline } from 'ionicons/icons';

/* Component(s) */
import OCRContainer from 'src/components/tesseract/ocr-container/OCRContainer';

/* Stylesheet */
import styles from './ResultContainer.module.scss';

/* Interface(s) */
interface ResultContainerProps {
    image: string;
}

const ResultContainer: React.FC<ResultContainerProps> = ({ image }) => {
    return (
        <div className={styles.results_container}>
            {image ?
                <div className={styles.results}>
                    <OCRContainer image={image}/>
                </div>
                :
                <div className={styles.label_container}>
                    <div className={styles.block_container}>
                        <div className={styles.label}>
                            Result Preview
                        </div>
                        <IonIcon icon={analyticsOutline}/>
                    </div>
                </div>
            }
        </div>
    );
};

export default ResultContainer;