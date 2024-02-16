import { configureStore } from "@reduxjs/toolkit";
 import ToDoReducer from "./slices/ToDoSlice";



 
 const Store = configureStore ({
    reducer : {
        todo : ToDoReducer,
    },
 });
   
 export default Store