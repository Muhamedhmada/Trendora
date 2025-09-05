import "./CatSlider.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from "../../Assets/Images/womenProd1.png";
import img2 from "../../Assets/Images/womenProd2.png";
import img3 from "../../Assets/Images/womenProd3.png";
import img4 from "../../Assets/Images/womenProd4.png";

import img5 from "../../Assets/Images/menProd1.png";
import img6 from "../../Assets/Images/menProd2.png";
import img7 from "../../Assets/Images/menProd3.png";
import img8 from "../../Assets/Images/menProd4.png";

import img9 from "../../Assets/Images/kidsprod1.png";
import img10 from "../../Assets/Images/kidsprod2.png";
import img11 from "../../Assets/Images/kidsprod3.png";
import img12 from "../../Assets/Images/kidsprod4.png";
import ProductCard from "../../Components/ProductCard/ProductCard";
function CatSlider() {
  const products = [
    // === Women Products ===
    {
      id: 1,
      type: "Women",
      nameOfProduct: "Soft Cotton Baby Dress",
      collectionType: "Summer Collection",
      isBestSeller: true,
      colors: ["#f8f8f8", "#e2b4ff", "#fdd835"],
      price: 1500,
      oldPrice: 1700,
      offer: "Buy 2 Get 20% OFF",
      img: img1,
    },
    {
      id: 2,
      type: "Women",
      nameOfProduct: "Soft Flowy Skirt",
      collectionType: "Summer Collection",
      isBestSeller: false,
      colors: ["#5e3c1c", "#000000", "#c0c0c0"],
      price: 780,
      oldPrice: 950,
      offer: "30% OFF",
      img: img2,
    },
    {
      id: 3,
      type: "Women",
      nameOfProduct: "Linen Modest Dress",
      collectionType: "Winter Collection",
      isBestSeller: true,
      colors: ["#1a4d2e", "#30475e", "#6d597a"],
      price: 1199,
      oldPrice: 1500,
      offer: "Buy 2 Get 20% OFF",
      img: img3,
    },
    {
      id: 4,
      type: "Women",
      nameOfProduct: "Soft Chic Blouse",
      collectionType: "Summer Collection",
      isBestSeller: true,
      colors: ["#7b2cbf", "#9d4edd", "#e0aaff"],
      price: 599,
      oldPrice: 755,
      offer: "30% OFF",
      img: img4,
    },
    {
      id: 5,
      type: "Women",
      nameOfProduct: "Pleated Maxi Skirt",
      collectionType: "Fall Collection",
      isBestSeller: false,
      colors: ["#6a994e", "#a7c957"],
      price: 880,
      oldPrice: 1100,
      offer: null,
      img: img1,
    },
    {
      id: 6,
      type: "Women",
      nameOfProduct: "Elegant Silk Top",
      collectionType: "Spring Collection",
      isBestSeller: false,
      colors: ["#ffffff", "#d8bfd8"],
      price: 650,
      oldPrice: 750,
      offer: null,
      img: img2,
    },
    {
      id: 7,
      type: "Women",
      nameOfProduct: "Classic Black Dress",
      collectionType: "All Seasons",
      isBestSeller: true,
      colors: ["#000000"],
      price: 1350,
      oldPrice: 1600,
      offer: "Free Delivery",
      img: img3,
    },
    {
      id: 8,
      type: "Women",
      nameOfProduct: "Striped Shirt Dress",
      collectionType: "Summer Collection",
      isBestSeller: false,
      colors: ["#f0e5cf", "#b8b8ff"],
      price: 700,
      oldPrice: 900,
      offer: "15% OFF",
      img: img4,
    },

    // === Men Products ===
    {
      id: 9,
      type: "Men",
      nameOfProduct: "Casual Cotton Shirt",
      collectionType: "Summer Collection",
      isBestSeller: true,
      colors: ["#ffffff", "#4a4e69", "#2c2c2c"],
      price: 850,
      oldPrice: 1000,
      offer: "Buy 2 Get 20% OFF",
      img: img5,
    },
    {
      id: 10,
      type: "Men",
      nameOfProduct: "Slim Fit Jeans",
      collectionType: "All Seasons",
      isBestSeller: false,
      colors: ["#000000", "#2f4f4f"],
      price: 990,
      oldPrice: 1150,
      offer: null,
      img: img6,
    },
    {
      id: 11,
      type: "Men",
      nameOfProduct: "Formal Blazer",
      collectionType: "Winter Collection",
      isBestSeller: true,
      colors: ["#2c3e50", "#34495e"],
      price: 1600,
      oldPrice: 2000,
      offer: "Free Delivery",
      img: img7,
    },
    {
      id: 12,
      type: "Men",
      nameOfProduct: "Polo T-shirt",
      collectionType: "Summer Collection",
      isBestSeller: false,
      colors: ["#1abc9c", "#2ecc71"],
      price: 600,
      oldPrice: 700,
      offer: "10% OFF",
      img: img8,
    },
    {
      id: 13,
      type: "Men",
      nameOfProduct: "Denim Jacket",
      collectionType: "Fall Collection",
      isBestSeller: false,
      colors: ["#3b5998", "#34495e"],
      price: 1200,
      oldPrice: 1400,
      offer: null,
      img: img5,
    },
    {
      id: 14,
      type: "Men",
      nameOfProduct: "Chino Pants",
      collectionType: "Spring Collection",
      isBestSeller: true,
      colors: ["#f5deb3", "#deb887"],
      price: 950,
      oldPrice: 1100,
      offer: "15% OFF",
      img: img6,
    },
    {
      id: 15,
      type: "Men",
      nameOfProduct: "Oversized Hoodie",
      collectionType: "Winter Collection",
      isBestSeller: false,
      colors: ["#8e44ad", "#5d3a9b"],
      price: 1050,
      oldPrice: 1250,
      offer: null,
      img: img7,
    },
    {
      id: 16,
      type: "Men",
      nameOfProduct: "Graphic T-shirt",
      collectionType: "Summer Collection",
      isBestSeller: true,
      colors: ["#ff6b6b", "#ffe66d"],
      price: 499,
      oldPrice: 650,
      offer: "Buy 2 Get 1 FREE",
      img: img8,
    },

    // === Kids Products ===
    {
      id: 17,
      type: "Kids",
      nameOfProduct: "Cartoon T-shirt",
      collectionType: "Summer Collection",
      isBestSeller: true,
      colors: ["#ffcccb", "#add8e6"],
      price: 300,
      oldPrice: 400,
      offer: "Free Delivery",
      img: img10,
    },
    {
      id: 18,
      type: "Kids",
      nameOfProduct: "Colorful Shorts",
      collectionType: "Summer Collection",
      isBestSeller: false,
      colors: ["#ffa07a", "#f0e68c"],
      price: 250,
      oldPrice: 300,
      offer: null,
      img: img9,
    },
    {
      id: 19,
      type: "Kids",
      nameOfProduct: "Cute Pajama Set",
      collectionType: "Winter Collection",
      isBestSeller: true,
      colors: ["#ffe4e1", "#e6e6fa"],
      price: 400,
      oldPrice: 500,
      offer: "10% OFF",
      img: img11,
    },
    {
      id: 20,
      type: "Kids",
      nameOfProduct: "Baby Romper",
      collectionType: "All Seasons",
      isBestSeller: false,
      colors: ["#fffacd", "#f5f5dc"],
      price: 270,
      oldPrice: 320,
      offer: null,
      img: img12,
    },
    {
      id: 21,
      type: "Kids",
      nameOfProduct: "Mini Hoodie",
      collectionType: "Fall Collection",
      isBestSeller: true,
      colors: ["#d3d3d3", "#c0c0c0"],
      price: 380,
      oldPrice: 450,
      offer: "5% OFF",
      img: img9,
    },
    {
      id: 22,
      type: "Kids",
      nameOfProduct: "Mini Hoodie",
      collectionType: "Fall Collection",
      isBestSeller: true,
      colors: ["#d3d3d3", "#c0c0c0"],
      price: 380,
      oldPrice: 450,
      offer: "5% OFF",
      img: img10,
    },
    {
      id: 23,
      type: "Kids",
      nameOfProduct: "Mini Hoodie",
      collectionType: "Fall Collection",
      isBestSeller: true,
      colors: ["#d3d3d3", "#c0c0c0"],
      price: 380,
      oldPrice: 450,
      offer: "5% OFF",
      img: img11,
    },
  ];

  function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
  const chunkedCards = chunkArray(products, 16);

  return (
    <>
      <div className='catSlider-container content'>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{type: "fraction"}}
          spaceBetween={20}
          slidesPerView={1} // صفحة واحدة في كل مرة
        >
          {chunkedCards.map((group, index) => (
            <SwiperSlide key={index}>
              <div className='categoryCard'>
                {group.map((card) => (
                  <ProductCard key={card.id} {...card} />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default CatSlider;
