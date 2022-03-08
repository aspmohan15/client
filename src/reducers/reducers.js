import { REGISTRATION_FAILED, REGISTRATION_SUCCESS, REGISTRATION_REQUESTED } from '../actions/actions'

const initialState = {
    user: {},
    isAuthenticate: false,
    loading: false,
    success: false,
    status: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTRATION_FAILED:
            return { ...initialState, status: action.payload.status }
        case REGISTRATION_SUCCESS:
            return {
                ...initialState, isAuthenticate: true, user: { ...action.payload.name }
            }
        default:
            return state
    }

}


export default userReducer;