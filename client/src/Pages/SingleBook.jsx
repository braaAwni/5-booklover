import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import BookDetails from '../Components/BookDetails/BookDetails'
import Subscribe from "../Components/Subscribe/Subscribe"
import Login from '../Components/Login/Login';
import Footer from '../Components/Footer/Footer';
const SingleBook = (props) => {
  const { id } = props.match.params;
  const {
    addToCart,
    isLogin,
    nameSeller,
    handleLogout,
    displayModal,
    passwordSeller,
    handleChange,
    handleLogin,
    handleLoginSeller,
    isBooksPage,
    errorLogin,
    cart,
    books
  } = props;
  return (
    <div>
      <Navbar
        isLogin={isLogin}
        nameSeller={nameSeller}
        handleLogout={handleLogout}
        handleChange={handleChange}
        handleLogin={handleLogin}
        isBooksPage={isBooksPage}
        cart={cart}
      />
      <Login
        displayModal={displayModal}
        nameSeller={nameSeller}
        passwordSeller={passwordSeller}
        handleChange={handleChange}
        handleLogin={handleLogin}
        handleLoginSeller={handleLoginSeller}
        errorLogin={errorLogin}
      />
      <BookDetails isLogin={isLogin} id={id} addToCart={addToCart} books={books} />
      <Subscribe />
      <Footer/>
    </div>
  );
};

export default SingleBook
