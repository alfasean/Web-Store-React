import {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cart from './../Assets/cart.svg'
import './../CSS/style.css';


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
            {product.map ((produk) => {
              return (
                <div className='col-3 items'>
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
    <Card className='items' style={{ width: '15rem', marginTop : '20px'}}>
      <Card.Img variant="top" src={props.image} style={{height : '10rem', padding : '20px'}}/>
      <Card.Body>
        <Card.Title className='title'>{props.title}</Card.Title>
        <Card.Text>
          {props.desc}
          <p className='harga'>${props.price}</p>
        </Card.Text>
        <Button className='button-cart'>
          <img src= {cart}></img>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;