import React, { Component } from 'react';
import { v4 } from "uuid";
import {ProductState} from "./ProductState";

interface State {
    id : string;
    name : string;
    description : string;
    price? : number;
}

interface Props {
    addProduct? : any;
    product : ProductState;
    setProduct?: any;
}

class NewProduct extends Component<Props,State> {
    constructor(props: Props){
        super(props)
        this.state = {
            id :  "",
            name : "",
            description : "",
            price : 0,
        };
    }
    onChange = (event: {target: { name:any;value:any;}}) =>{
        this.setState({[event.target.name]: event.target.value} as Pick<State, keyof State>)
    };
    saveProduct = () =>{
        this.setState({
            id:v4()
        })
        this.props.addProduct(this.state);
    }
    // static getDerivedStateFromProps(nextProps:any, prevState:any){
    //     if(nextProps.product.id!==prevState.product.id){
    //       return { 
    //         name:nextProps.product.name,
    //         price:nextProps.product.price,
    //         description:nextProps.product.description,
    //       };
    //    }
    //     return null;
    //   }
      
    
    componentWillReceiveProps(nexProps:any){
        this.setState({
            name:nexProps.product.name,
            price:nexProps.product.price,
            description:nexProps.product.description,

        })
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
                        <input onChange = {this.onChange} id="productName" type="text" name="name" placeholder="" value ={this.state.name} className="form-control" />
                        <input id="productId" value ={this.props.product.id}  type="hidden" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label>Price :</label>
                    </div>
                    <div className="form-group col-md-6">
                        <input  onChange = {this.onChange} type="number" id="productPrice" name="price" value = {this.state.price} placeholder="" className="form-control" />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-md-3">
                        <label>Description :</label>
                    </div>
                    <div className="form-group col-md-6">
                        <textarea onChange = {this.onChange} id="productDescription" name = "description" value = {this.state.description} className="form-control"></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <button onClick = {this.saveProduct} type="button" className="btn btn-primary" >Save</button>
                    <button type="button" className="btn btn-secondary">Clear</button>
                </div>
            </form>
            </div>
            
        );
     }
}
export default NewProduct;