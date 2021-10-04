/* React */
import React, { useEffect } from 'react';

/* React-Redux */
import { useDispatch } from 'react-redux';
import { hideSplitPane } from 'src/redux/features/splitPaneSlice';

/* Stylesheet */
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hideSplitPane());
    }, [dispatch]);

    return (
        <div className={styles.home_page_container}>
            
        </div>
    );
};

export default HomePage;