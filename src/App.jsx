import "./Styles.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Places } from "./pages/Places";
import { Navigation } from "./components/Navigation";
import { Profile } from "./pages/Profile";
import { UserLogin } from "./pages/UserLogin";
import { Footer } from "./components/Footer";
import { Liked } from "./pages/Liked";
import { Search } from "./pages/Search";

const placeList = [
  {
    id: 1,
    name: `Country-Inn`,
    category: "Hotels",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur molestias ipsam vitae aspernatur eligendi accusantium eos nostrum, eveniet nulla sequi, optio magnam eius rem perferendis, eaque saepe. Expedita, accusantium.`,
    inWishlist: false,
    location: ``,
    imgUrl: `https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
  },
  {
    id: 2,
    name: `Foodies`,
    category: "Restaurants",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur molestias ipsam vitae aspernatur eligendi accusantium eos nostrum, eveniet nulla sequi, optio magnam eius rem perferendis, eaque saepe. Expedita, accusantium.`,
    inWishlist: false,
    location: ``,
    imgUrl: `https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
  },
  {
    id: 3,
    name: `Hawa Mahal`,
    category: "Tourist Spots",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur molestias ipsam vitae aspernatur eligendi accusantium eos nostrum, eveniet nulla sequi, optio magnam eius rem perferendis, eaque saepe. Expedita, accusantium.`,
    inWishlist: false,
    location: `https://maps.app.goo.gl/5f194z3DafDf7KCJ6`,
    imgUrl: `https://images.unsplash.com/photo-1545126178-862cdb469409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGF3YSUyMG1haGFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`,
  },
  {
    id: 4,
    name: `Eat n Repeat`,
    category: "Restaurants",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur molestias ipsam vitae aspernatur eligendi accusantium eos nostrum, eveniet nulla sequi, optio magnam eius rem perferendis, eaque saepe. Expedita, accusantium.`,
    inWishlist: false,
    location: ``,
    imgUrl: `https://images.unsplash.com/photo-1585518419759-7fe2e0fbf8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1448&q=80`,
  },
  {
    id: 5,
    name: `Jal Mahal`,
    category: "Tourist Spots",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur molestias ipsam vitae aspernatur eligendi accusantium eos nostrum, eveniet nulla sequi, optio magnam eius rem perferendis, eaque saepe. Expedita, accusantium.`,
    inWishlist: false,
    location: `https://maps.app.goo.gl/n64QnmwXnbduQAMT6`,
    imgUrl: `https://images.unsplash.com/photo-1504705759706-c5ee7158f8bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
  },
  {
    id: 6,
    name: `Jaipur Palace`,
    category: "Hotels",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur molestias ipsam vitae aspernatur eligendi accusantium eos nostrum, eveniet nulla sequi, optio magnam eius rem perferendis, eaque saepe. Expedita, accusantium.`,
    inWishlist: false,
    location: ``,
    imgUrl: `https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
  },
  {
    id: 7,
    name: `Hotel Bliss`,
    category: "Hotels",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur molestias ipsam vitae aspernatur eligendi accusantium eos nostrum, eveniet nulla sequi, optio magnam eius rem perferendis, eaque saepe. Expedita, accusantium.`,
    inWishlist: false,
    location: ``,
    imgUrl: `https://images.unsplash.com/photo-1606402179428-a57976d71fa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80`,
  },
  {
    id: 8,
    name: `Lettuce Eat`,
    category: "Restaurants",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur molestias ipsam vitae aspernatur eligendi accusantium eos nostrum, eveniet nulla sequi, optio magnam eius rem perferendis, eaque saepe. Expedita, accusantium.`,
    inWishlist: false,
    location: ``,
    imgUrl: `https://images.unsplash.com/photo-1586999768265-24af89630739?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80`,
  },
  {
    id: 9,
    name: `Nahargarh Fort`,
    category: "Tourist Spots",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil consectetur molestias ipsam vitae aspernatur eligendi accusantium eos nostrum, eveniet nulla sequi, optio magnam eius rem perferendis, eaque saepe. Expedita, accusantium.`,
    inWishlist: false,
    location: `https://maps.app.goo.gl/uRCLMtah51QtfsjK9`,
    imgUrl: `https://images.unsplash.com/photo-1648466384249-ee84acdc323c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
  },
];


function App() {
const [places, setPlaces] = useState(placeList);
const [filteredCategory, setFilteredCategory] = useState();
const [searchPlaces, setSearchPlaces] = useState([]);

const handleCategoryFilter = (categoryName) =>{
  setFilteredCategory(categoryName);
}

const handleLike = (userId) => {
  setPlaces(places.map((cur) => {
    if (cur.id == userId) {
      cur.inWishlist=!cur.inWishlist;
      return cur;
    } else {
      return cur;
    }
  }));
  
};
const navigate = useNavigate();

const handleSearch = (event) =>{
  const key = event.target.value;
  setSearchPlaces(placeList.filter(({name})=> name.toLowerCase().includes(key.toLowerCase())));
  event.target.value == '' ? navigate('/') : navigate('/search');
}

  return (
    <>
      <Navigation handleSearch={handleSearch} places={places}/>
      <Routes>
        <Route path="/" element={<Home handleCategoryFilter={handleCategoryFilter} />} />
        <Route path="/places" element={<Places places={places} filteredCategory={filteredCategory} handleLike={handleLike}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/liked" element={<Liked places={places} handleLike={handleLike}/>} />
        <Route path="/search" element={<Search searchPlaces={searchPlaces} handleLike={handleLike} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
