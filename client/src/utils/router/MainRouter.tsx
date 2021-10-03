/* React */
import React from 'react';

/* React Router */
import {
    Switch,
    Route,
    Redirect
} from 'react-router';

/* Ionic */
import { IonRouterOutlet } from '@ionic/react';

/* Util(s) */
import SplitPaneWrapper from 'src/utils/wrapper/SplitPaneWrapper';

/* Page(s) */
import HomePage from 'src/pages/home/HomePage';

const MainRouter: React.FC = () => {
    return (
        <SplitPaneWrapper>
            <React.Fragment>
                <IonRouterOutlet id="main-menu">
                    <Switch>
                        <Route path="/home">
                            <HomePage/>
                        </Route>
                        <Route path="/">
                            <Redirect push to="/home"/>
                        </Route>
                    </Switch>
                </IonRouterOutlet>
            </React.Fragment>
        </SplitPaneWrapper>
    );
};

export default MainRouter;