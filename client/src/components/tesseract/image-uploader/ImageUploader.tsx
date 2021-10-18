/* React */
import React from 'react';

/* React-Redux */
import { 
    useDispatch 
} from 'react-redux';

import { 
    setImage 
} from 'src/redux/features/imageSlice';

/* Ionic */
import { 
    IonFab,
    IonFabButton,
    IonIcon
} from '@ionic/react';

import { 
    cameraOutline 
} from 'ionicons/icons';

/* Capacitor */
import { 
    Camera,
    CameraResultType,
    CameraSource
} from '@capacitor/camera';

/* Stylesheet */
import styles from './ImageUploader.module.scss';

const ImageUploader: React.FC = () => {
    const dispatch = useDispatch();

    const captureImage = async () => {
        try {
            const image = await Camera.getPhoto({
                resultType: CameraResultType.DataUrl,
                source: CameraSource.Camera,
                quality: 100
            });
    
            if(image.dataUrl) {
                dispatch(setImage(image.dataUrl));
            }
        } catch(error: any) {
            console.log(error.message);
        }
    };


    return (
        <div className={styles.image_uploader_container}>
            <IonFab
                className={styles.fab_container}
                vertical="bottom"
                horizontal="end">
                <IonFabButton 
                    className={styles.fab_btn}
                    onClick={
                        () => {
                            captureImage();
                        }
                    }>
                    <IonIcon icon={cameraOutline}/>
                </IonFabButton>
            </IonFab>
        </div>
    );
};

export default ImageUploader;