import React from "react";
import BookList from "../containers/book-list";
import BookDetail from "../containers/book-detail";

const App = () => {
  return (
    <div className="row">
      <BookList />
      <BookDetail />
    </div>
  );
};

export default App;
