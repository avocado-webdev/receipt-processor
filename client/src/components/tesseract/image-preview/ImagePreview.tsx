/* React */
import React, { useState, useEffect } from 'react';

/* Ionic */
import { IonIcon } from '@ionic/react';

import { documentOutline } from 'ionicons/icons';

/* Stylesheet */
import styles from './ImagePreview.module.scss';

/* Interface(s) */
interface ImagePreviewProps {
    image: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ image }) => {

    // preview
    const [preview, setPreview] = useState<string>('');

    useEffect(() => {
        if (image) {
            setPreview(image);
        }
    }, [image])

    return (
        <div className={styles.image_preview_container}>
            {/* <div className={styles.image} style={{backgroundImage: `url(${preview})`}}/> */}
            {image ?
                <img className={styles.image} src={preview} alt="Receipt Preview" />
                :
                <div className={styles.label_container}>
                    <div className={styles.block_container}>
                        <div className={styles.label}>
                            Kassenbeleg-Ansicht
                        </div>
                        <IonIcon icon={documentOutline} />
                    </div>
                </div>
            }
        </div>
    );
};

export default ImagePreview;