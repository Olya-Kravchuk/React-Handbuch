import React from "react";
import "./BooksList.css";
import PropTypes from "prop-types";
import Rating from "../Rating";

const BooksListItem = ({ book, onRate }) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.author ? book.author : "Unbekannt"}</td>
      <td>{book.isbn}</td>
      <td>
        <Rating item={book} onRate={onRate} />
      </td>
      {/* <td>{book.rating && <span>{"*".repeat(book.rating)}</span>}</td> */}
    </tr>
  );
};
BooksListItem.prototypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isbn: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
  onRate: PropTypes.func.isRequired,
};

export default BooksListItem;
