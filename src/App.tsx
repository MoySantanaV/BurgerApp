import React from 'react';
import { CustomProvider } from 'rsuite';
import './App.css';
import { CurrentOrderItem } from './FrontEnd/CurrentOrder/CurrentOrderItem';
import { CurrentOrderList } from './FrontEnd/CurrentOrder/CurrentOrderList';
import { NavigatorBar } from './FrontEnd/NavBar/NavigatorBar';
import { OrderRecordsItem } from './FrontEnd/OrderRecords/OrderRecordsItem';
import { OrderRecordsList } from './FrontEnd/OrderRecords/OrderRecordsList';
import { PorductList } from './FrontEnd/Product/PorductList';
import { ProductItem } from './FrontEnd/Product/ProductItem';

function App() {
  return (
    <div className="App">
      <CustomProvider theme='dark'>
     <NavigatorBar/>
     <PorductList>
        <ProductItem/>
     </PorductList>
     <CurrentOrderList>
        <CurrentOrderItem/>
     </CurrentOrderList>
     <OrderRecordsList>
        <OrderRecordsItem/>
     </OrderRecordsList>
     </CustomProvider>
    </div>
  );
}

export default App;
