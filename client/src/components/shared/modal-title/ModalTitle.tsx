/* React */
import React from 'react';

/* Stylesheet */
import styles from './ModalTitle.module.scss';

/* Interface(s) */
interface ModalTitleProps {
    title: string;
};

const ModalTitle: React.FC<ModalTitleProps> = ({ title }) => {
    return (
        <div className={styles.modal_title_container}>
            <h1 className={styles.title}>{title}</h1>
        </div>
    );
};

export default ModalTitle;