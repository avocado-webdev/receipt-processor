/* React */
import React from 'react';

/* Stylsheet */
import styles from './ProcessingContainer.module.scss';

const ProcessingContainer: React.FC = () => {
    return (
        <div className={styles.processing_container}>
            <div className={styles.block_container}>
                <img
                    className={styles.img}
                    src="/assets/icon/glass.svg"
                    alt="empty_icon"
                />
                <div className={styles.message_container}>
                    <h1 className={styles.message}>
                        processing
                    </h1>
                    <div className={styles.dot_container} >
                        <img
                            className={`${styles.dot} ${styles.dot1}`}
                            src="/assets/icon/dot.svg"
                            alt="Dot 1"
                        />
                        <img
                            className={`${styles.dot} ${styles.dot2}`}
                            src="/assets/icon/dot.svg"
                            alt="Dot 2"
                        />
                        <img
                            className={`${styles.dot} ${styles.dot3}`}
                            src="/assets/icon/dot.svg"
                            alt="Dot 3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessingContainer;