import {Component} from "react";
import { Tracing } from "trace_events";

interface Props{
    name:string;
    price:number;
    descriptsion?:string;
}
class ProductComponent extends Component<Props>{
   static defaultProps = {
    name:"121111",
    price:"10000",
    descriptsion:"Ha noi"
   }
    render(){
        return (
        <div className="App">
            <h1>ssss</h1>
            <p>{this.props.name}</p>
            <p>{this.props.price}</p>
            <p>{this.props.descriptsion}</p>
        </div>
        );
    }
}
export default ProductComponent;