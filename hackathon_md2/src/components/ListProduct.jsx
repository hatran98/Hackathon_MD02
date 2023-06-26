import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function ListProduct({ products, setProducts, cart, setCart }) {
  const handleChange = (e, index) => {
    const newValue = e.target.value;
    setProducts(() => {
      const updatedValues = [...products];
      updatedValues[index].value = Number(newValue);
      return updatedValues;
    });
  };

  const handleClick = (e, index) => {
    const selectedProduct = products[index];
    const existingProduct = cart.find((item) => item.id === selectedProduct.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) => {
        if (item.id === selectedProduct.id) {
          return {
            ...item,
            quantity: item.quantity + selectedProduct.value,
            totalamount: item.totalamount + selectedProduct.value * item.price,
          };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const newProduct = {
        id: selectedProduct.id,
        name: selectedProduct.name,
        image: selectedProduct.image_url,
        quantity: selectedProduct.value,
        price: selectedProduct.price,
        totalamount: selectedProduct.value * selectedProduct.price,
      };
      setCart([...cart, newProduct]);
    }
  };
  return (
    <div>
      <div
        style={{
          fontWeight: "bold",
          fontSize: "20px",
          marginBottom: "1rem",
          marginTop: "2rem",
        }}
      >
        List products
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", marginLeft: "5%" }}>
        {products.map((product, index) => (
          <Card style={{ width: "25rem" }} key={index}>
            <Card.Img variant="top" src={product.image_url} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Title>{product.price}$</Card.Title>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <input
                  type="number"
                  style={{ width: "40%" }}
                  value={product.value}
                  onChange={(e) => handleChange(e, index)}
                ></input>
                <Button
                  variant="primary"
                  style={{ backgroundColor: "red" }}
                  onClick={(e) => handleClick(e, index)}
                >
                  Add to cart
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ListProduct;
