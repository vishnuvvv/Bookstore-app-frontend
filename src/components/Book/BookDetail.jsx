import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box } from "@mui/system";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";

const BookDetail = () => {
  const [formInputs, setFormInputs] = useState({});
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://bookstore-dbif.onrender.com/books/${id}`)
        .then((res) => res.data)
        .then((data) => setFormInputs(data.book));
    };
    fetchHandler();
  }, [id]);


  const sendRequest = async() =>{
    await axios.put(`https://bookstore-dbif.onrender.com/books/${id}`,{
      name: String(formInputs.name),
      author: String(formInputs.author),
      price: Number(formInputs.price),
      description: String(formInputs.description),
      image: String(formInputs.image),
      availabe: Boolean(checked)
    }).then(res => res.data)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(()=> history("/books"))
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
    console.log(e);
  };

  console.log(formInputs);

  return (
    <div>
      {formInputs && (<form onSubmit={handleSubmit}>
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
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
            label="Available"
          />
          <Button variant="content" type="submit">
            Update Book
          </Button>
        </Box>
        </form>)}
    </div>
  );
};

export default BookDetail;
