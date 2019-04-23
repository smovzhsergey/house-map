import { all, takeEvery } from 'redux-saga/effects';

import { types } from '../store/actions'
import { getDataWorker } from './worker/getData';
import { getTemplatesWorker } from './worker/getTemplates';

function *getDataWatcher(){
    yield takeEvery(types.GET_DATA, getDataWorker);
}

function *getTemplatesWatcher(){    
    yield takeEvery(types.GET_TEMPLATES, getTemplatesWorker);
}

export function* saga () {
    yield all([
        getDataWatcher(),
        getTemplatesWatcher(),
    ]);
}



