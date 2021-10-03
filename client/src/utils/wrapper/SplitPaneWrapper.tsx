/* React */
import React from 'react';

/* React-Redux */
import { useSelector } from 'react-redux';

/* Ionic */
import { IonSplitPane } from '@ionic/react';

/* Model(s) */
import { SplitPaneState } from 'src/redux/store';

/* Interface(s) */
interface SplitPaneWrapperProps {
    children: React.ReactNode;
}

const SplitPaneWrapper: React.FC<SplitPaneWrapperProps> = ({ children }) => {
    const splitPaneState: SplitPaneState = useSelector((state: SplitPaneState) => state.splitPane);

    const renderSplitPane = () => {
        if(splitPaneState.value) {
            return (
                <IonSplitPane contentId="main-menu">
                    {children}
                </IonSplitPane>
            )
        } else {
            return (
                <React.Fragment>{children}</React.Fragment>
            )
        }
    }

    return (
        <React.Fragment>
            {renderSplitPane()}
        </React.Fragment>
    );
};

export default SplitPaneWrapper;