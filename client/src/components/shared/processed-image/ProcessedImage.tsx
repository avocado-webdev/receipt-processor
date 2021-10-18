/* React */
import React from 'react';

/* Ionic */
import {
    IonIcon
} from '@ionic/react';

import {
    imagesOutline
} from 'ionicons/icons';

/* Stylesheet */
import styles from './ProcessedImage.module.scss';

/* Interface(s) */
interface ProcessedImageProps {
    processedImage: string;
}

const ProcessedImage: React.FC<ProcessedImageProps> = ({ processedImage }) => {
    return (
        <div className={styles.processed_image_container}>
            {processedImage ?
                <img src={processedImage} alt="Processed Preview" />
                :
                <div className={styles.default_label_container}>
                    <div className={styles.label}>Bearbeitete-Ansicht</div>
                    <IonIcon className={styles.icon} icon={imagesOutline} />
                </div>
            }
        </div>
    );
};

export default ProcessedImage;