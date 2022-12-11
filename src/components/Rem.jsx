import React from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

function Rem() {
    return ( 
        <div className='a' >

            <h3 className='txt'>Название товара</h3>   

            <MyInput
                placeholder="Название товара"
            />


            <h3 className='txt'>Имя Фамилия</h3>

            <MyInput
                placeholder="Имя Фамилия"
            />


            <h3 className='txt'>Номер телефона</h3> 

            <MyInput
                placeholder="Номер телефона"
            />


            <h3 className='txt'>Адрес доставки</h3> 

            <MyInput
                placeholder="Адрес доставки"
            />                 

            <MyButton>
                Заказать
            </MyButton>
        </div>
     );
}

export default Rem;