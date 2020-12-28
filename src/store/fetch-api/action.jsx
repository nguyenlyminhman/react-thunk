import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from './type'

import fetchNekoDataService from './service';

const fetchNeko = () => ({ type: FETCH_DATA });
const fetchNekoSuccess = data => ({ type: FETCH_DATA_SUCCESS, payload: data });
const fetchNekoFail = error => ({ type: FETCH_DATA_FAIL, payload: error })

export default () => {
    return dispatch => {
        dispatch(fetchNeko());
        fetchNekoDataService()
            .then(data => dispatch(fetchNekoSuccess(data)))
            .catch(error => dispatch(fetchNekoFail(error)))
    }
}