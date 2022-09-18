import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    show: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    showFinal: false,
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        showR(state, action) {
            state.show = action.payload;
        },
        showR2(state, action) {
            state.show2 = action.payload;
        },
        showR3(state, action) {
            state.show3 = action.payload;
        },
        showR4(state, action) {
            state.show4 = action.payload;
        },
        showR5(state, action) {
            state.show5 = action.payload;
        },
        showRFinal(state, action) {
            state.showFinal = action.payload;
        }
    }
})

export default UserSlice.reducer;