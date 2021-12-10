import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Api from "../Api";

class ViewProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product: {
                _id:"",
                "category": "",
                "name": "",
                "price": "",
                "quantity":"",
                "st": true
            }
        }
    }
    async componentDidMount() {
        const idProduct =this.props.ProductId;
        console.log(idProduct);
        const res = await fetch(`${Api.RUTA_API}/${idProduct}`);
        const product = await res.json();
        console.log(product);
        this.setState({
            product: product[0],
        });

    }
    render(){
        return (
            <>
                <h2>View </h2>
                <p>{this.state.product.name}</p>
                <p>{this.state.product.category}</p>
                <p>{this.state.product.price}</p>
                <p>{this.state.product.quantity}</p>
                <p>{(this.state.product.st) ? "🟢" : "🔴" }</p>
                <Link to="/products"> Back</Link>
            </>
        )
    }
}
function GetId() {
    const { id } = useParams();
    return (
        <ViewProduct ProductId={id} />
    );
}
export default GetId; 