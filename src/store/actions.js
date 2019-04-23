export const types = {
    GET_DATA:               "GET_DATA",
    GET_DATA_SUCCESS:       "GET_DATA_SUCCESS",
    GET_DATA_FAIL:          "GET_DATA_FAIL",
    GET_TEMPLATES:          "GET_TEMPLATES",
    GET_TEMPLATES_SUCCESS:  "GET_TEMPLATES_SUCCESS",
    GET_TEMPLATES_FAIL:     "GET_TEMPLATES_FAIL",
    CHANGE_TYPE_OF_VIEW:    "CHANGE_TYPE_OF_VIEW",
}

export const actions = {
    geData: () => ({
        type: types.GET_DATA,
    }),
    getDataSuccess: (data) => ({
        type: types.GET_DATA_SUCCESS,
        payload: data,
    }),
    getDataFail: () => ({
        type: types.GET_DATA_FAIL,
    }),
    getTemplates: () => ({
        type: types.GET_TEMPLATES,
    }),
    getTemplatesSuccess: (data) => ({
        type: types.GET_TEMPLATES_SUCCESS,
        payload: data,
    }),
    getTemplatesFail: () => ({
        type: types.GET_TEMPLATES_FAIL,
    }),
    changeTypeOfView: (current) => ({
        type: types.CHANGE_TYPE_OF_VIEW,
        payload: current,
    }),
}