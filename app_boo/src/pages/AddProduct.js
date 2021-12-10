import React from 'react';
import Api from "../Api";
import {Form, Button} from "react-bootstrap";
class AddProduct extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            product: {
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
    render(){
        return (
            <>
                <h2>New product</h2>
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
                        Add Product
                    </Button>
                </Form>
            </>
        )
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
    async handleSend(event) {
        event.preventDefault();

        const prUtil= JSON.stringify(this.state.product);

        const res = await fetch(`${Api.RUTA_API}`,{
            method: "POST",
            body: prUtil,
            headers:{
                "Content-Type":"application/json",
            }
        });
        const send = await res.json();
        console.log(send)
        if (send) {
            this.setState({
                product:{
                    category: "",
                    name: "",
                    price: "",
                    quantity:"",
                    st: true
                }
            }
            )
        }
        else{
            console.error("Ocurrio un error inesperado");
        }

    }
}
export default AddProduct;