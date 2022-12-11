import React from 'react'
import MyButton from '../UI/button/MyButton';

function Order(props) {
    return ( <div className='a'>

        <img src={props.product.img} alt="" className='ban_img'/>

        <h2 className="txt">{props.product.Name}</h2>
        
        <h2 className="txt">Цена: {props.product.price}</h2>

        <MyButton onClick={props.setmodal}>Заказать</MyButton>

    </div> );
}

export default Order;