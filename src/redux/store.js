import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

//configureStore method is called to make the file a store, it is available only inside redux toolkit
export const store = configureStore({
    //reducer can only update value of state in store
    //reducer key is predefined (its an object that can hold more than one reducer)
    reducer:{
        //reducer is coming from counterslice since we  export reducer as export default
        counter:counterSlice
    }
})