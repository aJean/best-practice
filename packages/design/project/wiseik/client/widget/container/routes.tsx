import * as React from 'react';
import {Route} from 'react-router-dom';
import ResultView from './resultView/resultView';
import CaseView from './caseView/caseView';
import FeedbackView from './feedbackView/feedbackView';

/**
 * @file 结果页路由
 */

export default (
    <div>
        <Route exact path="/wiseik/p_result" render={() => <ResultView/>}/>
        <Route exact path="/wiseik/p_case" render={() => <CaseView/>}/>  
        <Route exact path="/wiseik/p_feedback" render={() => <FeedbackView/>}/>  
    </div>
);