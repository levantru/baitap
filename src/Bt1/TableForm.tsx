import {Component} from "react";
import RowProduct from './RowProduct';


class TableForm extends Component<any>{ 

    constructor(props:any){
        super(props);
        this.state = {

        }
    }
    render(){
        let listPro = [
            {
                id:1,
                name:"sp1",
                price:1000,
            }, {
                id:2,
                name:"sp2",
                price:2000,
            }, {
                id:3,
                name:"sp3",
                price:3000,
            }, {
                id:4,
                name:"sp3",
                price:30,
            }
        ]
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
                        {
                            listPro.map((item)=>{
                                return (item.price > 100)?<RowProduct id = {item.id}  key = {item.id} name = {item.name} price = {item.price}/>:''
                            })
                        }
                    {/* <RowProduct id = {1} name = "aaaz11z11" price = {1000}/> */}
                    {/* <RowProduct id = {2} name = "xxx" price = {1020}/> */}

                    </tbody>
                </table>
            </div>
        )
    }
}
export default TableForm;
