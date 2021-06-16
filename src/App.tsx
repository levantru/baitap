import "./css/css.css";
import TableForm from './Bt1/TableForm';
import FormProduct from './Bt1/FormProduct';
import Header from './Bt1/Header';
import Footer from './Bt1/Footer';

// import ProductComponent from './Example/ProductComponent';

function App() {
  let price : number = 1000;
  let id : number = 1;
  return (
    <div className="container">
          <Header/>
      <div className="row">
        <TableForm id = {id} name = "aaazz11" price = {price}/>
        <FormProduct/>
        {/* <ProductComponent name = "ip6" price = {price} descriptsion = "zzzzzz"/> */}
        {/* <ProductComponent name = "ip7 pro s" price = {price}/> */}
      </div>
      <div>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
