import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <main>
      <Navbar />
      {children}
     <Footer />
    </main>
  );
}                       

export default Layout;