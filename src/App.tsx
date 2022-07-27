import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { CustomProvider } from 'rsuite';
import { CurrentOrderList } from './FrontEnd/CurrentOrder/CurrentOrderList';
import { NavigatorBar } from './FrontEnd/NavBar/NavigatorBar';
import { OrderRecordsItem } from './FrontEnd/OrderRecords/OrderRecordsItem';
import { OrderRecordsList } from './FrontEnd/OrderRecords/OrderRecordsList';
import { PorductList } from './FrontEnd/Product/PorductList';
import {NotFoundPage} from "./FrontEnd/NotFount/NotFoundPage";
import { Welcome } from "./FrontEnd/Index/Welcome";
import { Menu } from "./FrontEnd/Product/Menu";
import './App.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomProvider theme='dark'>
          <NavigatorBar />
          <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="/products" element={<PorductList/>}/>
            <Route path="/currentorders" element={<CurrentOrderList/>}/>
            <Route path="/ordersrecords" element={<OrderRecordsList><OrderRecordsItem /></OrderRecordsList>}/>
            <Route path="*" element={<NotFoundPage />}/>
          </Routes>
        </CustomProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

