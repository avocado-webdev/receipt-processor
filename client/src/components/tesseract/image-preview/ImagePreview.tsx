/* React */
import React, { useState, useEffect } from 'react';

/* Ionic */
import {
    IonIcon 
} from '@ionic/react';

import { 
    documentOutline 
} from 'ionicons/icons';

/* Stylesheet */
import styles from './ImagePreview.module.scss';

/* Interface(s) */
interface ImageContainerProps {
    image: string;
    handleProcessorModal: Function;
}

const ImagePreview: React.FC<ImageContainerProps> = ({ image, handleProcessorModal }) => {

    // preview
    const [preview, setPreview] = useState<string>('');

    useEffect(() => {
        if (image) {
            setPreview(image);
        }
    }, [image]);

    return (
        <div className={styles.image_preview_container}>
            {image ?
                <img 
                    className={styles.image} 
                    src={preview} alt="Receipe Preview" 
                    onClick={
                        () => {
                            handleProcessorModal(true);
                        } 
                    }/>
                :
                <div className={styles.label_container}>
                    <div className={styles.block_container}>
                        <div className={styles.label}>
                            Kassenbeleg-Ansicht
                        </div>
                        <IonIcon className={styles.icon} icon={documentOutline} />
                    </div>
                </div>
            }
        </div>
    );
};

export default ImagePreview;