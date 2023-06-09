import React from 'react'
import  { useEffect, useState } from 'react'
import { useGetMenuItemsQuery } from '../../../apis/menuItemApi';
import { menuitemModel } from '../../../Interface';
import MenuItemCard from './MenuItemCard';
import {useDispatch} from "react-redux";
import { setMenuItem } from '../../../Storage/Redux/menuItemSlice';
import { is } from 'immer/dist/internal';
import { MainLoader } from '../common';

function MenuItemList() {
    //const [menuItems,setMenuItems] = useState<menuitemModel[]>([]);
    const dispatch =useDispatch();
const {data,isLoading} = useGetMenuItemsQuery(null);

    useEffect(()=>{
      if(!isLoading){
dispatch(setMenuItem(data.result));
      }
  

},[isLoading]);

if(isLoading){
  return <MainLoader />;
}

  return (
    <div className='container row'>
      {
        data.result.length>0 && data.result.map((menuItem: menuitemModel,index: number)=>
        (<MenuItemCard menuItem={menuItem} key={index}/>
        ))
      }
    </div>
  );
}

export default MenuItemList;