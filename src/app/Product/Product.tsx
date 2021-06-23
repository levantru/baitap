import React, { Component } from 'react';

interface Props {
    id : string;
    name : string;
    price : number;
    index : number;
    description? : string;
    deleteProduct?:any;
    editProduct?:any;
}
class Product extends Component<Props> {
    constructor(props: Props){
        super(props)
        this.state = {
        };
    }
    
    editProduct = () =>{
        this.props.editProduct({
            id : this.props.id,
            description : this.props.description,
            name : this.props.name,
            price : this.props.price,
        })
       
    }
    deleteProduct = () =>{
        this.props.deleteProduct(this.props.id)
    }
    render() {
        return (
            <tr>
                <th>{this.props.index}</th>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>
                    <button onClick = {this.editProduct}  type="button" className="btn btn-primary">Edit</button>
                    <button onClick = {this.deleteProduct} type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}
export default Product;