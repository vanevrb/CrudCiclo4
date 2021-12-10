import React from "react";
import Api from "../Api";
import {Table} from "react-bootstrap";
import RowProduct from "./RowProduct";
class ListProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
        }
    }
    async componentDidMount(){
        const res = await fetch(`${Api.RUTA_API}`)
        const products = await res.json();
        console.log(products);
        this.setState({
            products: products,
        });
    }
    render(){
        return(
        <>
            <h2>List products</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>quantity</th>
                            <th>Category</th>
                            <th>State</th>
                            <th>Ver</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map(product => {
                                return <RowProduct key={product._id} product={product}></RowProduct>;
                            })
                        }
                    </tbody>
                </Table>
        </>
        )
    }
}
export default ListProduct;