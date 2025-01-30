import Header from "./../pages/Main/Header";
import Footer from "../pages/Main/Footer";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
       <Footer />
    </div>
  );
};


export default Layout;
