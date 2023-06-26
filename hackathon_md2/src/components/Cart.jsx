import { useState } from "react";
import Table from "react-bootstrap/Table";

function Cart({ cart, setCart }) {
  const [editedQuantities, setEditedQuantities] = useState({});

  const handleDelete = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleUpdate = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const editedQuantity = editedQuantities[id] || item.quantity;
        const totalAmount = item.price * editedQuantity;
        return { ...item, quantity: editedQuantity, totalamount: totalAmount };
      }
      return item;
    });
    setCart(updatedCart);
    setEditedQuantities({});
  };

  const handleQuantityChange = (event, id) => {
    const { value } = event.target;
    setEditedQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: parseInt(value, 10),
    }));
  };

  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      console.log(item.totalamount);
      total += item.totalamount;
    });

    return total;
  };

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>IMAGE</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>TotalAmount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <img
                    src={item.image}
                    style={{ width: "100px" }}
                    alt={item.name}
                  />
                </td>
                <td>
                  <input
                    style={{ width: "30%" }}
                    type="number"
                    value={editedQuantities[item.id] || item.quantity}
                    onChange={(event) => handleQuantityChange(event, item.id)}
                  />
                </td>
                <td>{item.price}$</td>
                <td>
                  {item.price * (editedQuantities[item.id] || item.quantity)}$
                </td>
                <td>
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    <button
                      style={{
                        backgroundColor: "yellow",
                        color: "black",
                        borderRadius: "10px",
                      }}
                      onClick={() => handleUpdate(item.id)}
                    >
                      Update
                    </button>
                    <button
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "10px",
                      }}
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5"></td>
            <td>{calculateTotalAmount()}$</td>
            <td></td>
          </tr>
        </tfoot>
      </Table>
    </div>
  );
}

export default Cart;
