import { createSlice } from "@reduxjs/toolkit";

//createSlice method is used to make the file a slice, its available inside redux toolkit
export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0 //value is name of state , initial value is assigned as 0
    },
    //actions are created inside reducers key as objets
    reducers:{
       //logics to update state

       //function to incerment number
       increment:(state,action)=>{
        //if its a argument function then it can only be accessed by action and value in payload
        //we can get the value sent only at payload of action
        state.value += action.payload;
       } ,

       //functio to decrement number
       decrement:(state,action)=>{
        state.value -= action.payload;
       } ,

       //function to reset 
       reset:(state)=>{
        state.value = 0
       }
    }
})

//action is requited by component inorder to update state 
export const {increment,decrement,reset} = counterSlice.actions

//reducer is required by store to change the state value
export default counterSlice.reducer