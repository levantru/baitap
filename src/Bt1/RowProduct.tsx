import {Component} from "react";

interface Product {
    id:number,
    name:string,
    price:number,
    description?:string,
}
function RowProduct(product:Product) { 
    // static defaultProps ={
    //     id:0,
    //     name:"xxx",
    //     price:1000,
    //     description:"zzz",
    // }
        return(
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="actions">
                    <a  title="Sửa" ><i className="fa fa-pencil" aria-hidden="true"></i></a>
                    <a  title="Xóa"><i className="fa fa-trash-o" aria-hidden="true"></i></a>
                </td>
            </tr>
        )
}
export default RowProduct;