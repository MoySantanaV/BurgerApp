import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { CustomProvider } from 'rsuite';
import { CurrentOrderList } from './FrontEnd/CurrentOrder/CurrentOrderList';
import { NavigatorBar } from './FrontEnd/NavBar/NavigatorBar';
import { OrderRecordsItem } from './FrontEnd/OrderRecords/OrderRecordsItem';
import { OrderRecordsList } from './FrontEnd/OrderRecords/OrderRecordsList';
import { PorductList } from './FrontEnd/Product/ProductList';
import { NotFoundPage } from "./FrontEnd/NotFount/NotFoundPage";
import { Welcome } from "./FrontEnd/Index/Welcome";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomProvider theme='dark'>
          <NavigatorBar />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/products" element={<PorductList />} />
            <Route path="/currentorders" element={<CurrentOrderList />} />
            <Route path="/ordersrecords" element={<OrderRecordsList />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ToastContainer />
        </CustomProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

