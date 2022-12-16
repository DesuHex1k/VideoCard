import React from 'react';
import { useState } from 'react';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

function Rem({setmodal, order}) {
    const [Order, setOrder] = useState({ Name: '', Fio: '', Adress: '', Num: '' })

    const CreateNewOrder = () => {
        const NewOrder = {
            ...Order, id: Date.now()
        }

        order(NewOrder)
    
        setOrder({ Name: '', Fio: '', Adress: '', Num: ''})
      }

      const click = () => {
            setmodal(false)
            alert('Заказ успешный')
            CreateNewOrder()
      }

    return ( 
        <div className='a' >

            <h4 className='txt'>Название товара</h4>   

            <MyInput
            
                value={Order.Name}
                onChange={e => setOrder({...Order, Name: e.target.value})}
                required="required"
                placeholder="Название товара"
            />

            <h4 className='txt'>Имя Фамилия</h4>

            <MyInput
            value={Order.Fio}
            onChange={e => setOrder({...Order, Fio: e.target.value})}
                required="required"
                placeholder="Имя Фамилия"
            />

            <h4 className='txt'>Номер телефона</h4> 

            <MyInput
            value={Order.Num}
            onChange={e => setOrder({...Order, Num: e.target.value})}
                required="required"
                placeholder="Номер телефона"
            />

            <h4 className='txt'>Адрес доставки</h4> 

            <MyInput
                value={Order.Adress}
                onChange={e => setOrder({...Order, Adress: e.target.value})}
                required
                placeholder="Адрес доставки"
            />                 

            <MyButton onClick={click}>
                Заказать
            </MyButton>
        </div>
     );
}

export default Rem;