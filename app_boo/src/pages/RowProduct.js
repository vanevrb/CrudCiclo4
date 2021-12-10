import React from "react";
import Api from "../Api";
import {Link} from "react-router-dom";
class RowProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            delete:false,
        };
        this.deleteProduct = this.deleteProduct.bind(this);

    }
    async deleteProduct(){
        console.log("ELiminando ...");
        const res = await fetch(`${Api.RUTA_API}/${this.props.product._id}`,{
            method: "DELETE",
        });
        const send = await res.json();
        console.log(send);
        if (send) {
            this.setState({
                delete:true,
            }
            );
        }
        else{
            console.error("Ocurrio un error inesperado");
        }
    }    
    render(){
        if (this.state.delete){
            return null;
        }
        return (
                    <tr>
                        <td>{this.props.product.name}</td>
                        <td>{this.props.product.price}</td>
                        <td>{this.props.product.quantity}</td>
                        <td>{this.props.product.category}</td>
                        <td>{(this.props.product.st) ? "🟢" : "🔴" }</td>
                        <td>
                            <Link to={`/products/view/${this.props.product._id}`}>View</Link>
                        </td>
                        <td>
                            <Link to={`/products/edit/${this.props.product._id}`}>Edit</Link>
                        </td>
                        <td>
                            <button onClick={this.deleteProduct}>Delete</button>
                        </td>
                    </tr>
        );
    }

}
export default RowProduct;