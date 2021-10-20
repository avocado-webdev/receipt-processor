/* React */
import React, { useEffect } from 'react';

/* Utils */
import ProcessorModalWrapper from 'src/utils/wrapper/processor-modal/ProcessorModalWrapper';

/* Model(s) */
// import { OpenCVService } from 'src/shared/services/opencv-service';

/* Component(s) */
import ModalTitle from 'src/components/shared/modal-title/ModalTitle';
import ProcessedImage from 'src/components/shared/processed-image/ProcessedImage';
import ProcessingContainer from 'src/components/shared/processing-container/ProcessingContainer';

/* Stylesheet */
import styles from './Binarization.module.scss';

/* Inteface(s) */
interface BinarizationProps {
    title: string;
    image: string;
    // openCVService: OpenCVService;
    processedImage: string;
    handleProcessedImage: Function;
    isProcessing: boolean;
    handleIsProcessing: Function;
}

const Binarization: React.FC<BinarizationProps> = ({
    title,
    image,
    // openCVService,
    processedImage,
    handleProcessedImage,
    isProcessing,
    handleIsProcessing
}) => {

    // useEffect(() => {
    //     if (isProcessing) {
    //         handleProcessedImage(openCVService.binarization(image));
    //         handleIsProcessing(false);
    //     }
    // }, [image, openCVService, isProcessing, handleProcessedImage, handleIsProcessing]);

    return (
        <React.Fragment>
            <ModalTitle title={title} />
            <div className={styles.binarization_container}>
                <ProcessorModalWrapper>
                    <img
                        className={styles.image}
                        src={image}
                        alt="Original Receipe"
                    />
                    <ProcessedImage processedImage={processedImage} />
                    {isProcessing && (
                        <ProcessingContainer />
                    )}
                </ProcessorModalWrapper>
            </div>
        </React.Fragment>
    );
};

export default Binarization;