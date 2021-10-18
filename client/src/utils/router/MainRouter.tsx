/* React */
import React from 'react';

/* React Router */
import {
    Switch,
    Route,
    Redirect
} from 'react-router';

/* Ionic */
import { 
    IonRouterOutlet 
} from '@ionic/react';

/* Utils */
import SplitPaneWrapper from 'src/utils/wrapper/SplitPaneWrapper';

/* Page(s) */
import HomePage from 'src/pages/home/HomePage';
import TesseractPage from 'src/pages/tesseract/TesseractPage';

/* Component(s) */
import Sidemenu from 'src/components/shared/sidemenu/Sidemenu';

const MainRouter: React.FC = () => {
    return (
        <SplitPaneWrapper>
            <React.Fragment>
                <Sidemenu />
                <IonRouterOutlet id="main-menu">
                    <Switch>
                        <Route path="/home">
                            <HomePage />
                        </Route>
                        <Route path="/tesseract">
                            <TesseractPage />
                        </Route>
                        <Route path="/">
                            <Redirect push to="/home" />
                        </Route>
                    </Switch>
                </IonRouterOutlet>
            </React.Fragment>
        </SplitPaneWrapper>
    );
};

export default MainRouter;