import {Component} from "react";
import RowProduct from './RowProduct';


class TableForm extends Component<any>{ 

    constructor(props:any){
        super(props);
        this.state = {

        }
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
                    <RowProduct id = {1} name = "aaaz11z11" price = {1000}/>
                    <RowProduct id = {2} name = "xxx" price = {1020}/>

                    </tbody>
                </table>
            </div>
        )
    }
}
export default TableForm;
