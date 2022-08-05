import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { CurrentOrderList } from './FrontEnd/CurrentOrder/CurrentOrderList';
import { NavigatorBar } from './FrontEnd/NavBar/NavigatorBar';
import { OrderRecordsItem } from './FrontEnd/OrderRecords/OrderRecordsItem';
import { ProductList } from './FrontEnd/Product/ProductList';
import { NotFoundPage } from "./FrontEnd/NotFount/NotFoundPage";
import { Welcome } from "./FrontEnd/Index/Welcome";
import { useAppSelector } from "./App/hooks";
import { ToastContainer } from 'react-toastify';
import { CustomProvider } from 'rsuite';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const mode = useAppSelector((state) => state.mode.mode);
  return (
    <BrowserRouter>
      <div className="App">
        <CustomProvider theme={mode ? "dark" : "light"}>
          <NavigatorBar  />
          <Routes>
            <Route path="/" element={<Welcome  />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/currentorders" element={<CurrentOrderList />} />
            <Route path="/ordersrecords" element={<OrderRecordsItem />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ToastContainer />
        </CustomProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;

