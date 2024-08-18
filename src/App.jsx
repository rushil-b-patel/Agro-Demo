import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompanyStats from "./components/CompanyStats";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import ProductCardSlider from "./components/ProductCardSlider";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
function App() {

  const images = [
    'https://images.pexels.com/photos/1595108/pexels-photo-1595108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  const products = [
    {
        name: "Pulses & Lentils",
        description: "We provide a wide variety of bags for...",
        image: "https://images.pexels.com/photos/7421117/pexels-photo-7421117.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name: "Flour",
        description: "Although companies are beginning to rely...",
        image: "https://images.pexels.com/photos/7420512/pexels-photo-7420512.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name: "Spices",
        description: "Sustainable and recyclable packaging...",
        image: "https://images.pexels.com/photos/20116387/pexels-photo-20116387/free-photo-of-close-up-of-a-sunflower-on-a-sunflower-field-under-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name: "Rice",
        description: "We provide",
        image: "https://images.pexels.com/photos/7421117/pexels-photo-7421117.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={
        <>
          <ImageSlider images={images} />
          <ProductCardSlider products={products} />
          <CompanyStats />
          <CustomerReviews />
        </>
      } />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App