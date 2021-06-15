import {Component} from "react";
function FormProduct(){
    return (
        <div className="col-6">
            <div className="text-center">
                <h1>Nhập thông tin sản phẩm</h1>
            </div>
            <div className="form">
                <input type="text" className="hmdrequired form-control mb-3" id="name_product" placeholder="Tên sản phẩm"/>
                <input type="text" className="hmdrequired form-control mb-3" id="price_product" placeholder="Giá sản phẩm"/>
                <a className="d-none" href="javascript:void(0)"  id="link_update" title="Cập nhật">Cập nhật</a>
                <a href="javascript:void(0)" id="link_save" title="Cập nhật">Thêm sản phẩm</a>
                <a href="javascript:void(0)" id="link_cancel" title="Thôi">Reset</a>
            </div>
        </div>
    );
}
export default FormProduct;