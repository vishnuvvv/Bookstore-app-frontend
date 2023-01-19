import axios from "axios";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";

const AddBook = () => {
  const history = useNavigate();
  const [formInputs, setFormInputs] = useState({
    name: "",
    author: "",
    price: "",
    description: "",
    image: "",
  });

  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const sendRequest = async () => {
    await axios.post("https://bookstore-dbif.onrender.com/books", {
      name: String(formInputs.name),
      author: String(formInputs.author),
      price: Number(formInputs.price),
      description: String(formInputs.description),
      image: String(formInputs.image),
      availabe: Boolean(checked)
    }).then(res=>res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs, checked);
    sendRequest().then(()=>history("/books"));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        maxWidth="500px"
        alignSelf="center"
        marginLeft="auto"
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={formInputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
        <FormLabel>Author</FormLabel>
        <TextField
          value={formInputs.author}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="author"
        />
        <FormLabel>Description</FormLabel>
        <TextField
          value={formInputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          value={formInputs.price}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
          type="number"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={formInputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Available"
        />
        <Button variant="content" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
