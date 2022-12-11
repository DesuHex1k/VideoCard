import React from 'react'
import '../src/App.css'
import Order from './components/Order';
import { useState } from 'react';
import MyInput from './UI/input/MyInput';
import { useMemo } from 'react';
import MyModal from './UI/MyModal/MyModal';
import MyButton from './UI/button/MyButton';
import Rem from './components/Rem';


function App() {
  const [product, setproduct] = useState ([

    {id: 1, Name: 'Gigabyte Gtx 1060 3gb' , price: '3000', img:require('./img/gtx1060.jpg')},

    {id: 2, Name: 'Sapphire Rx570 4gb' , price: '2800', img:require('./img/Rx570.jpg')},

    {id: 3, Name: 'Gigabyte Rtx 3060 ti 8gb' , price: '20000', img:require('./img/rtx3060.jpg')},

    {id: 4, Name: 'ASRock RX 6600 8gb' , price: '14000', img:require('./img/rx6600.jpg')},

    {id: 5, Name: 'Gigabyte Gtx 1060 3gb' , price: '3000', img:require('./img/gtx1060.jpg')},

    {id: 6, Name: 'Sapphire Rx570 4gb' , price: '2800', img:require('./img/Rx570.jpg')},

    {id: 7, Name: 'Gigabyte Rtx 3060 ti 8gb' , price: '20000', img:require('./img/rtx3060.jpg')},

    {id: 8, Name: 'ASRock RX 6600 8gb' , price: '14000', img:require('./img/rx6600.jpg')},

    {id: 9, Name: 'Gigabyte Gtx 1060 3gb' , price: '3000', img:require('./img/gtx1060.jpg')},

    {id: 10, Name: 'Sapphire Rx570 4gb' , price: '2800', img:require('./img/Rx570.jpg')},

    {id: 11, Name: 'Gigabyte Rtx 3060 ti 8gb' , price: '20000', img:require('./img/rtx3060.jpg')},

    {id: 12, Name: 'ASRock RX 6600 8gb' , price: '14000', img:require('./img/rx6600.jpg')},

  ])

  const [SearchQuery, setSerchQuery] = useState('')
  const [modal, setmodal] = useState(false)

  const searchProduct = useMemo(() => {
      return product.filter(product => product.Name.toLocaleLowerCase().includes(SearchQuery))
  }, [SearchQuery, product])

  return (
    <div className="App">

        <MyModal visible={modal} setvisible={setmodal} > <Rem/> </MyModal>

        <div>
        <h1 className='Head'>VideoCardShop</h1>
        </div>


        <div className="search">
          <h1 className='txt'>Поиск</h1>
        <MyInput value={SearchQuery} onChange={(e) => setSerchQuery(e.target.value)} placeholder="Поиск (нижним регистром)"/>
        </div>
        

        <div className='ban_all'>
          
        {searchProduct.map((product) => 

            <Order setmodal={() => setmodal(true)} product={product} key={product.id}/>

        )}

        </div>
        
    </div>
  );
}

export default App;