import { useState } from 'react';
import Product from '../components/Product';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

var arr = [];    

export default function Heading() {
    const [item, setItem] = useState(Product)
    

    function addCard(name,price){
        arr.push({"name":name,"price":price})
        // arr.push(name,price);
        console.log(arr);
        console.log(name,price);
    }
    
    function removeCart(name,price){
        const result = arr.filter(data => {
                  return data.name !== name 
                  
        })
        arr = []
        {
            result.map((data)=>{
                arr.push(data)
            })
        }
        console.log(arr);
    }

    return (
        <div>
    
          {item['data'].map((curItem,index) => (
            <div key={index}>
              <h2 style={{marginRight:"80rem"}}>{curItem.name}</h2>
              <hr/><br/>
              
           
              <div>
              <Row xs={1} md={2} className="g-2">
                {curItem.productList.map((data, i) => (
                    
                    <Col>
                    <Card style={{ width: '18rem', marginLeft: "15px" }}>
                    <Card.Body>
                        <Card.Title>Name : {data.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Price : {data.price}</Card.Subtitle>
                        <Button variant="primary"  onClick={() => addCard(data.name,data.price)}>Add To The Cart</Button>{' '}
                        <br/><br/>
                        <Button variant="primary" onClick={() => removeCart(data.name,data.price)}>Remove From Cart</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    
                ))}
                </Row>
              </div>
            </div>
          ))}
         
        </div>
      );
 }

 
