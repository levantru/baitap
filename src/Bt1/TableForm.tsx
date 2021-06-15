import {Component} from "react";

interface Product {
    id:number,
    name:string,
    price:number,
    description?:string,
}
class TableForm extends Component<Product>{ 
    static defaultProps ={
        id:0,
        name:"xxx",
        price:1000,
        description:"zzz",
    }
    render(){
        return(
            <div className="col-6">
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.props.id}</td>
                            <td>{this.props.name}</td>
                            <td>{this.props.price}</td>
                            <td className="actions">
                                <a href="javascript:void(0)" title="Sửa" ><i className="fa fa-pencil" aria-hidden="true"></i></a>
                                <a href="javascript:void(0)" title="Xóa"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TableForm;