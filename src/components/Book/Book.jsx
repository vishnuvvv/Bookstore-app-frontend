
import "./Book.css";
import { Button } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Book = (props) => {

  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;


  
  const deleteHandler = async() => {
    await axios
      .delete(`https://bookstore-dbif.onrender.com/books/${_id}`)
      .then((res) => res.data)
      .then(() => history.push("/books"));
  };


  return (
    <div className="card">
      <img src={image} alt={image} />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>{price}</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: "auto" }}>
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{ mt: "auto" }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
