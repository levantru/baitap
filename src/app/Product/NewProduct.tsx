import React, { Component } from 'react';
import { v4 } from "uuid";///npm install uuidv4
import {ProductState} from "./ProductState";

interface State {
    id : string;
    name : string;
    price? : number;
    description : string;
}

interface Props {
    addProduct? : any;
    product : ProductState;
    setProduct?: any;
}

class NewProductComponent extends Component<Props,State> {
    constructor(props: Props){
        super(props)
        this.state = {
            id :  "",
            name : "",
            description : "",
            price : 0,
        };
    }
    
    componentWillReceiveProps(nextProps :any) {
        this.setState({
            name: nextProps.product.name,
            price: nextProps.product.price,
            description: nextProps.product.description,
        })
    }
       
    onChange = (event: { target: { name: any; value: any; }; }) => {
        this.setState({ [event.target.name]:  event.target.value } as Pick<State, keyof State>);
    };
    
    saveProduct = () => {
        this.setState({
            id : v4()
        });
        this.props.addProduct(this.state);
    }
    
    clearData = ()=> {
        this.setState({
            price : Number.NaN,
            name : "",
            description : "",
        });
    }

    setProduct = (product : any) =>{
        this.setState({
            id: product.id,
            name: product.name,
        });
    }

    render() {
        return (
            <div>
                <div>
                    <h5 className="title">Product form</h5>
                </div>
                <form>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label>Name :</label>
                    </div>
                    <div className="form-group col-md-6">
                        <input id="productName" type="text" name="name" placeholder="" value ={this.state.name} onChange = {this.onChange} className="form-control" />
                        <input id="productId" value ={this.props.product.id} type="hidden" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label>Price :</label>
                    </div>
                    <div className="form-group col-md-6">
                        <input type="number" id="productPrice" name="price" value = {this.state.price} onChange = {this.onChange} placeholder="" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label>Description :</label>
                    </div>
                    <div className="form-group col-md-6">
                        <textarea id="productDescription" name = "description" value = {this.state.description} onChange = {this.onChange} className="form-control"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <button type="button" className="btn btn-primary" onClick = {this.saveProduct}>Save</button>
                    <button type="button" className="btn btn-secondary" onClick = {this.clearData}>Clear</button>
                </div>
            </form>
            </div>
            
        );
     }
}
export default NewProductComponent;