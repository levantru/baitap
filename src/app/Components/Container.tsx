import {Component} from 'react';
import NewProduct from "../Product/NewProduct";
import ProductList from "../Product/ProductList";
import {ProductState} from "../Product/ProductState";
import productAPI from "../API/ProductAPI";
// import Loading from "./Loading"

interface State {
    productList : Array<ProductState>;
    product : ProductState;
    loading : boolean;
}

class Container extends Component<any,State> {
    constructor(props: any){
        super(props)
        this.state = {
            productList : [],
            product : {
                id : "",
                name : "",
                desciption : "",
                price : NaN
            } as ProductState,
            loading : false,
        }
    }

    fetchProduct = async () => {
        this.setState({
            // loading : true
        });
        const response = await productAPI.getAll();
        this.setState({
            productList : [...response.data],
            // loading : false
        });
    }
    componentDidMount () {
        this.fetchProduct();
    }

    addProduct = async (product : ProductState) => {
        this.setState({
            // loading : true
        });
        await productAPI.create(product);
        this.fetchProduct();
    }

    deleteProduct = async (id : string) => {
        this.setState({
            // loading : true
        });
        await productAPI.delete(id);
        this.fetchProduct();
    }
    editProduct = (productItem : any) =>{
        this.setState({
            product : productItem
        });
    }

    render() {
        return (
            <div className="row">
                {/* {this.state.loading && <Loading/>} */}
                <div className="col-md-6">
                    <ProductList productList = {this.state.productList} deleteProduct = {this.deleteProduct} editProduct = {this.editProduct}/>
                </div>
                <div className="col-md-6">
                    <NewProduct product = {this.state.product} addProduct = {this.addProduct}/>
                </div>
            </div>
        )
    }
}
export default Container;