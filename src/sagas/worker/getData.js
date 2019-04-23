import { call, put } from 'redux-saga/effects';

import { actions } from '../../store/actions';

import { urlData } from '../../helpers';

export function* getDataWorker () {

    try {

        const response = yield call(fetch, urlData, {
            method: 'GET'
        });

        if (response.status !== 200) {
            throw new Error("Resource isn't available");
        }

        const { data } = yield call([response, response.json]);

        yield put(actions.getDataSuccess(data));

    }
    catch ({ message }) {
        yield put(actions.getDataFail());
    }
}