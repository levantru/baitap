import { Component } from 'react';
import Product from "./Product"
import {ProductState} from "./ProductState";
interface Props {
    productList:Array<ProductState>;
    deleteProduct?:any;
    editProduct?:any;
}
class ProductList extends Component<Props>{
    constructor (props:Props){
        super(props)
        this.state ={

        };
    }
    static defaultProps = {
        productList : []
    }
    deleteProduct = (id:string) => {
        this.props.deleteProduct(id)

    }
    editProduct = (product:any)=>{
        this.props.editProduct(product)
    }
    render(){
        return(
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody id="bodyTable">
                   {
                       this.props.productList.map((product) =>{
                           return <Product index = {this.props.productList.indexOf(product) + 1}
                           id = {product.id}
                           key = {product.id}
                           name = {product.name}
                           price = {product.price}
                           deleteProduct = {this.deleteProduct}
                            editProduct = {this.editProduct}
                           />
                       })
                   }
                </tbody>
            </table>
        )
    }
}
export default ProductList;