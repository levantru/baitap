import React, { Component } from 'react';

interface Props {
    id : string;
    name : string;
    price : number;
    index : number;
    description? : string;
    deleteProduct? : any;
    editProduct? : any;
}
class Product extends Component<Props> {
    constructor(props: Props){
        super(props)
        this.state = {
        };
    }
    deleteProduct = () =>{
        this.props.deleteProduct(this.props.id);
    }

    editProduct = () => {
        this.props.editProduct({
            id : this.props.id,
            description : this.props.description,
            name : this.props.name,
            price : this.props.price,
        });
    }

    render() {
        return (
            <tr>
                <th scope="row">{this.props.index}</th>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
                <td>
                    <button type="button" className="btn btn-primary" onClick = {this.editProduct}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick = {this.deleteProduct}>Delete</button>
                </td>
            </tr>
        );
    }
}
export default Product;