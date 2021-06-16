import {Component} from "react";
interface State {
    id:number,
    name:string,
    price:number,
    description?:string,
}
class FormProduct extends Component<any,State>{ 
    constructor(props:any){
        super(props)
        this.state = {
            id:1,
            name:"string",
            price:1000,
            description:"x", 
        };
    }
    // static defaultProps ={
    //     id:0,
    //     name:"xxx",
    //     price:1000,
    //     description:"zzz",
    // }
    changeState = () => {
        this.setState({
            name:"xxx",
            price:1020,
        });
    }
    showButton = (num:number) =>{
        switch (num) {
            case 1:
                  return <a href="javascript:void(0)"  id="link_update" title="Cập nhật">Cập nhật</a>
                break;
            case 2:
                 return <a href="javascript:void(0)" id="link_save" title="Cập nhật">Thêm sản phẩm</a>
                break;
            case 3:
                 return <a href="javascript:void(0)" onClick = {() => this.changeState()} title="">Change State</a>
                break;
            default:
                break;
            }
    }
    render(){
        let check = true;
        let button = this.showButton(2);
        return (
            <div className="col-6">
                <div className="text-center">
                    <h1>Nhập thông tin sản phẩm</h1>
                </div>
                <div className="form">
                    <input value = {this.state.name} type="text" className="hmdrequired form-control mb-3" id="name_product" placeholder="Tên sản phẩm"/>
                    <input  value = {this.state.price} type="text" className="hmdrequired form-control mb-3" id="price_product" placeholder="Giá sản phẩm"/>
                   {/* <a className="d-none" href="javascript:void(0)"  id="link_update" title="Cập nhật">Cập nhật</a>
                 <a href="javascript:void(0)" id="link_save" title="Cập nhật">Thêm sản phẩm</a>
                <a href="javascript:void(0)" onClick = {() => this.changeState()} title="">Change State</a> */}
                {button}
                {
                    check  && <a  id="link_cancel" title="Thôi">Reset</a>
                }
                    
                </div>
            </div>
        );
    }
}
export default FormProduct;