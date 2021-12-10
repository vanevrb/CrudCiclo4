import React from 'react';
import Api from "../Api";
import {Link,useParams} from "react-router-dom";
import {Form, Button} from "react-bootstrap";
class EditProduct extends React.Component {
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
        this.handleChange = this.handleChange.bind(this);
        this.handleSend = this.handleSend.bind(this);
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
            <h2>Edit product</h2>
            <Form onSubmit={this.handleSend}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label >Name</Form.Label>
                    <Form.Control type="text"  onChange={this.handleChange} value={this.state.product.name} placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" onChange={this.handleChange} value={this.state.product.price} placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="number" onChange={this.handleChange} value={this.state.product.quantity} placeholder="Enter Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="number" onChange={this.handleChange} value={this.state.product.category} placeholder="Enter Name" />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="st">
              
                    <Form.Check type="checkbox" checked={this.state.checked} onChange={this.handleChange} value={ this.state.ifcheck} label="State" />
                </Form.Group> */}
                <Button variant="success" type="submit">
                    Edit Product
                </Button>
                <Link to="/products"> Back</Link>
            </Form>
        </>
        );
    }
    async handleSend(event){
        event.preventDefault();
        const prUtil= JSON.stringify(this.state.product);
        const res = await fetch(`${Api.RUTA_API}/`,{
            method: "PUT",
            body: prUtil,
            headers:{
                "Content-Type": "application/json",
            }
        });
        
    }
    async handleChange(event){
        const key=event.target.id;
        let value = event.target.value;
        this.setState(state =>{
            const productChange = state.product;
            if (key !=="name") {
                value = parseFloat(value);
            }
            productChange[key] = value;
            return {
                product: productChange,
            }
        });
    }
}
function GetId() {
    const { id } = useParams();
    console.log(id);
    return (
        <EditProduct ProductId={id} />
    );
}
export default GetId; 