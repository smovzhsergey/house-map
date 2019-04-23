import { call, put } from 'redux-saga/effects';

import { actions } from '../../store/actions';

import { urlTemplate } from '../../helpers';

export function* getTemplatesWorker () {

    try {

        const response = yield call(fetch, urlTemplate, {
            method: 'GET'
        });

        if (response.status !== 200) {
            throw new Error("Resource isn't available");
        }

        const templates = yield call([response, response.json]);

        yield put(actions.getTemplatesSuccess(templates));

        yield put(actions.geData());

    }
    catch ({ message }) {
        yield put(actions.getTemplatesFail(message));
    }
}