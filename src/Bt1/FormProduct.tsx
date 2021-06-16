import {Component} from "react";
interface State {
    id:number,
    name:string,
    price:number,
    description?:string,
}
class FormProduct extends Component<any,any>{ 
    constructor(props:any){
        super(props)
        this.state = {
            id:1,
            name:"string",
            price:1000,
            description:"", 
        }
    }
    changeState = () => {
        this.setState({
            name:"xxx",
            price:1020,
        })
    }
    render(){
        let page = 1;
        // var button = ``;
        // switch (page) {
        //     case 1:
        //         button = `<a className="d-none" href="javascript:void(0)"  id="link_update" title="Cập nhật">Cập nhật</a>`
        //         break;
        //     case 2:
        //          button = `<a href="javascript:void(0)" id="link_save" title="Cập nhật">Thêm sản phẩm</a>`
        //         break;
        //     case 3:
        //          button = `<a href="javascript:void(0)" onClick = {this.changeState} title="">Change State</a>`
        //         break;
        //     default:
        //         break;
        //     }
        return (
            <div className="col-6">
                <div className="text-center">
                    <h1>Nhập thông tin sản phẩm</h1>
                </div>
                <div className="form">
                    <input value={this.state.name} type="text" className="hmdrequired form-control mb-3" id="name_product" placeholder="Tên sản phẩm"/>
                    <input  value={this.state.price} type="text" className="hmdrequired form-control mb-3" id="price_product" placeholder="Giá sản phẩm"/>
                    {/* {
                      button
                    } */}
                    <a href="javascript:void(0)" id="link_cancel" title="Thôi">Reset</a>
                </div>
            </div>
        );
    }
}
export default FormProduct;