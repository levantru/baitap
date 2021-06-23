import {Component} from "react";
import  ProductList  from "../Product/ProductList";
import  NewProduct  from "../Product/NewProduct";
import { ProductState } from "../Product/ProductState";

  interface State{
      productList:Array<ProductState>;
      product:ProductState;
  }
  class Container extends Component<any,State> {
    constructor (props:any){
        super(props)
        this.state ={
            productList:[],
            product:{
            id:"",
            name:"",
            price:0,
            description:"",
            } as ProductState
        }
    }
    addProduct = (product:any) =>{
        this.setState({
            productList: [...this.state.productList,product]
        });
    }
    deleteProduct = (id:string) =>{
        var newProductList = [...this.state.productList];
        newProductList = newProductList.filter(function(product){
            return product.id !== id
        })
        this.setState({
            productList:[...newProductList]
        })
    }
   editProduct = (productItem : any) =>{
        this.setState({
            product : productItem
        });
    }
    render(){
        return(
            <div className="row">
                <div className="col-md-6">
                    <ProductList productList = {this.state.productList} deleteProduct = {this.deleteProduct}  editProduct = {this.editProduct}/>
                </div>
                <div className="col-md-6">
                    <NewProduct product = {this.state.product} addProduct = {this.addProduct}/>
                </div>
            </div>
        )
    }
}
export default Container;