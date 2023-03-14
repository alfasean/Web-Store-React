import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Product = () => {
    const url = 'https://fakestoreapi.com/products';
    const [product, setProduct] = useState([]);

    const getData =  async () => {
        const response = await fetch(url);
        const dataProduct = await response.json();
        setProduct(dataProduct);  
    }
    useEffect ( ()=> {
        getData();
    })
    return (
        <div className='container'>
            <div className='row'>
            <h1>My Product</h1>
            {product.map ((produk) => {
              return (
                <div className='col-3'>
                <Cardproduct 
                key={produk.id} 
                title={produk.title} 
                price={produk.price}
                desc={produk.desc}
                image={produk.image}/>
                </div>)}
              )} 
            </div>
        </div>
    )
}

function Cardproduct(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} style={{height : 'auto'}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
          <p>Price : {props.price}$</p>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;