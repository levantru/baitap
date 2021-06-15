// import ProductComponent from './Example/ProductComponent';
import "./css/css.css";
import TableForm from './Bt1/TableForm';
import FormProduct from './Bt1/FormProduct';

function App() {
  let price : number = 1000;
  let id : number = 1;
  return (
    <div className="container">
      <div className="row">
        <TableForm id = {id} name = "xxx" price = {price}/>
        <FormProduct/>
        {/* <ProductComponent name = "ip6" price = {price} descriptsion = "zzzzzz"/> */}
        {/* <ProductComponent name = "ip7 pro s" price = {price}/> */}
      </div>
    </div>
  );
}

export default App;
