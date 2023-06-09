import React from 'react'
import { menuitemModel } from '../../../Interface'
import { Link } from 'react-router-dom';
import { useUpdateShoppingCartMutation } from '../../../apis/shoppingCartApi';
import { useState } from 'react';
import { MiniLoader } from '../common';

interface Props {
    menuItem: menuitemModel;
}

function MenuItemCard(props:Props) {
  const [quantity, setQuantity] =useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
const [updateShoppingCart]= useUpdateShoppingCartMutation();

const handleAddToCart = async (menuItemId: number) =>{
  setIsAddingToCart(true)
  const response = await updateShoppingCart({
    menuItemId:menuItemId,
    updateQuantityBy: 1,
    userId:"1d484426-7636-4364-bfec-2f4612995825"
  
  });
  console.log(response);
  setIsAddingToCart(false);
  };
  return (
    <div className="col-md-4 col-12 p-4">
      <div
        className="card"
        style={{ boxShadow: "0 1px 7px 0 rgb(0 0 0 / 50%)" }}
      >
        <div className="card-body pt-2">
          <div className="row col-10 offset-1 p-4">
            <Link to={`/menuItemDetails/${props.menuItem.id}`}>
            <img
            src={props.menuItem.image}
              style={{ borderRadius: "50%" }}
              alt=""
              className="w-100 mt-5 image-box"
            />
            </Link>
          </div>
{props.menuItem.specialTag && props.menuItem.specialTag.length>0 &&(<i
            className="bi bi-star btn btn-success"
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
              padding: "5px 10px",
              borderRadius: "3px",
              outline: "none !important",
              cursor: "pointer",
            }}
          >
            &nbsp; {props.menuItem.specialTag}
          </i>)}
          
{isAddingToCart? (
  <div style={{
    position: "absolute",
    top: "15px",
    right: "15px",

  }}
  >
<MiniLoader />
  </div>
): ( <i onClick={()=>handleAddToCart(props.menuItem.id)}
            className="bi bi-cart-plus btn btn-outline-danger"
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              padding: "5px 10px",
              borderRadius: "3px",
              outline: "none !important",
              cursor: "pointer",
            }}
          ></i>
          )
        }
          

          <div className="text-center">
          <Link to={`/menuItemDetails/${props.menuItem.id}`}
            style={{textDecoration: "none" ,color: "green"}}>
            <p className="card-title m-0 text-success fs-3">{props.menuItem.name}
          
            </p>
            </Link>
            <p className="badge bg-secondary" style={{ fontSize: "12px" }}>
              {props.menuItem.category}
            </p>
          </div>
          <p className="card-text" style={{ textAlign: "center" }}>
            {props.menuItem.description}
          </p>
          <div className="row text-center">
            <h4>${props.menuItem.price}</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuItemCard