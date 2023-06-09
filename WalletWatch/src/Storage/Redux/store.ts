import { configureStore } from "@reduxjs/toolkit";
import { type } from "os";
import { menuItemReducer } from "./menuItemSlice";
import { menItemApi, shoppingCartApi } from "../../apis";
import menuItemApi from "../../apis/menuItemApi";
const store = configureStore({
    reducer:{
        menuItemStore: menuItemReducer,
        [menuItemApi.reducerPath]: menItemApi.reducer,
        [shoppingCartApi.reducerPath]: shoppingCartApi.reducer
    },
    middleware: (getDefaultMiddlewere)=>
    getDefaultMiddlewere().concat(menItemApi.middleware).concat(shoppingCartApi.middleware),
    
});

export type RootState = ReturnType<typeof store.getState>;
export default store;