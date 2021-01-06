import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL } from './type'

const initialState = {
    isLoading: false,
    error: null,
    data: null,
}

export const fetchAllNeko = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                isLoading: true,
                error: null,
                data: [],
            }
        case FETCH_DATA_SUCCESS:
            return {
                isLoading: false,
                error: null,
                data: action.payload.data,
            }
        case FETCH_DATA_FAIL:
            return {
                isLoading: false,
                error: null,
                data: action.payload.error,
            }
        default:
            return state;
    }
}