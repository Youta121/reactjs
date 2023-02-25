import Form from 'react-bootstrap/Form';
import React from "react";
const Adress = () => {
return  (
<Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Adress </Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
)

}
export default Adress ;