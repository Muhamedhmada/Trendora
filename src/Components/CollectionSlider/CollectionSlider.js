import './CollectionSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import ProductCard from '../../Components/ProductCard/ProductCard'
import img1 from '../../Assets/Images/womenProd1.png'
import img2 from '../../Assets/Images/womenProd2.png'
import img3 from '../../Assets/Images/womenProd3.png'
import img4 from '../../Assets/Images/womenProd4.png'

import img5 from '../../Assets/Images/menProd1.png'
import img6 from '../../Assets/Images/menProd2.png'
import img7 from '../../Assets/Images/menProd3.png'
import img8 from '../../Assets/Images/menProd4.png'

import img9 from '../../Assets/Images/kidsprod1.png'
import img10 from '../../Assets/Images/kidsprod2.png'
import img11 from '../../Assets/Images/kidsprod3.png'
import img12 from '../../Assets/Images/kidsprod4.png'
import { Next, Prev } from '../../Assets/SVGs';
import './CollectionSlider.css'
import { useNavigate } from 'react-router-dom';
import {motion } from 'framer-motion'
function CollectionSlider({category}){
  const nav = useNavigate()
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
      currentColor: "#f8f8f8",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "M",
      stock: 25,
      description: {
        text: "A wonderfully soft and comfortable cotton baby dress, perfect for keeping your little one cool and stylish during the summer. This dress features a gentle, breathable fabric that is kind to delicate skin.",
        list: [
          "Lightweight and breathable fabric",
          "Gentle on skin",
          "Ideal for warm weather",
          "Easy to put on and take off",
          "Stylish and comfortable design"
        ]
      },
      composition: {
        text: "Made from a high-quality blend of cotton and a touch of polyester for durability and a soft feel.",
        list: [
          "Cotton: 95%",
          "Polyester: 5%"
        ]
      },
      modalParameter: ["High-quality stitching", "Fade-resistant colors", "Machine washable"],
      productCare: ["Machine wash cold with like colors", "Tumble dry low", "Do not bleach", "Iron on low heat if needed"]
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
      currentColor: "#000000",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "L",
      stock: 12,
      description: {
        text: "This soft flowy skirt drapes beautifully and is perfect for a breezy summer day. Its lightweight material provides maximum comfort and a chic, elegant look.",
        list: [
          "Elegant and flowing silhouette",
          "Lightweight and airy",
          "Elastic waistband for comfort",
          "Versatile for casual or dressy occasions",
          "Available in multiple colors"
        ]
      },
      composition: {
        text: "Crafted from a blend of viscose and spandex, providing a smooth feel with a nice stretch.",
        list: [
          "Viscose: 90%",
          "Spandex: 10%"
        ]
      },
      modalParameter: ["Wrinkle-resistant fabric", "Durable construction", "Non-see-through material"],
      productCare: ["Hand wash recommended", "Hang to dry", "Do not twist or wring", "Iron on low heat"]
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
      currentColor: "#30475e",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "S",
      stock: 18,
      description: {
        text: "A beautiful linen modest dress that offers both style and coverage. The fabric is durable yet comfortable, making it a great choice for cooler weather.",
        list: [
          "Modest and elegant design",
          "Durable linen fabric",
          "Suitable for winter and transitional seasons",
          "Full-length for maximum coverage",
          "Stylish and practical"
        ]
      },
      composition: {
        text: "Made from pure linen, a natural and breathable fabric known for its strength and absorbency.",
        list: [
          "Linen: 100%"
        ]
      },
      modalParameter: ["Breathable fabric", "High-quality zipper", "Reinforced seams"],
      productCare: ["Machine wash on gentle cycle", "Line dry or tumble dry on low", "Iron while damp for best results", "Do not use harsh detergents"]
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
      currentColor: "#9d4edd",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "XL",
      stock: 20,
      description: {
        text: "This soft chic blouse is a versatile addition to any wardrobe. Its lightweight and elegant design makes it perfect for both casual outings and office wear.",
        list: [
          "Lightweight and breathable",
          "Versatile and easy to style",
          "Soft-touch material",
          "Comfortable fit",
          "Adds a touch of elegance to any outfit"
        ]
      },
      composition: {
        text: "Crafted from a blend of rayon and polyester for a soft, fluid drape and wrinkle resistance.",
        list: [
          "Rayon: 60%",
          "Polyester: 40%"
        ]
      },
      modalParameter: ["Smooth and silky feel", "V-neck design", "Loose fit for comfort"],
      productCare: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Cool iron if needed"]
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
      currentColor: "#6a994e",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "M",
      stock: 15,
      description: {
        text: "A stylish pleated maxi skirt perfect for the fall season. The beautiful pleats and rich colors make it a must-have for a fashionable and comfortable look.",
        list: [
          "Fashionable pleated design",
          "Maxi length for a sophisticated look",
          "Comfortable elastic waistband",
          "Perfect for fall outfits",
          "Flowy and elegant silhouette"
        ]
      },
      composition: {
        text: "Made from 100% polyester, offering a durable and lightweight fabric that holds its shape well.",
        list: [
          "Polyester: 100%"
        ]
      },
      modalParameter: ["High-quality pleats", "Lined for comfort", "Hidden side pockets"],
      productCare: ["Machine wash cold on gentle cycle", "Hang to dry", "Do not iron directly on pleats", "Dry clean for best results"]
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
      currentColor: "#d8bfd8",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "L",
      stock: 10,
      description: {
        text: "An elegant silk top that adds a luxurious feel to any ensemble. Its smooth and shiny texture makes it perfect for special occasions or a sophisticated everyday look.",
        list: [
          "Luxurious silk feel",
          "Smooth and shiny texture",
          "Lightweight and comfortable",
          "Perfect for special events",
          "Versatile for styling"
        ]
      },
      composition: {
        text: "Crafted from a blend of silk and satin for a lustrous finish and soft feel.",
        list: [
          "Silk: 70%",
          "Satin: 30%"
        ]
      },
      modalParameter: ["Drapey fit", "Subtle sheen", "Delicate design"],
      productCare: ["Dry clean only", "Do not wash", "Do not tumble dry", "Store on a padded hanger"]
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
      currentColor: "#000000",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "S",
      stock: 8,
      description: {
        text: "Every wardrobe needs a classic black dress, and this one is the perfect choice. Its timeless design and high-quality fabric make it a staple for any occasion.",
        list: [
          "Timeless and versatile",
          "Flattering silhouette",
          "High-quality fabric",
          "Suitable for any season",
          "A wardrobe essential"
        ]
      },
      composition: {
        text: "Made from a blend of polyester and spandex, ensuring a comfortable stretch and a durable, form-fitting shape.",
        list: [
          "Polyester: 90%",
          "Spandex: 10%"
        ]
      },
      modalParameter: ["Form-fitting", "Zipper closure", "Scoop neck design"],
      productCare: ["Machine wash cold", "Lay flat to dry", "Do not bleach", "Steam or iron on low heat"]
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
      currentColor: "#b8b8ff",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "M",
      stock: 22,
      description: {
        text: "A stylish striped shirt dress that combines classic style with modern comfort. The lightweight fabric and relaxed fit make it perfect for hot summer days.",
        list: [
          "Classic striped pattern",
          "Relaxed and comfortable fit",
          "Button-down front",
          "Versatile for various occasions",
          "Made for summer"
        ]
      },
      composition: {
        text: "Crafted from a blend of cotton and linen, offering a breathable and comfortable feel.",
        list: [
          "Cotton: 75%",
          "Linen: 25%"
        ]
      },
      modalParameter: ["Belted waist", "Knee-length", "Short sleeves"],
      productCare: ["Machine wash cold", "Tumble dry low", "Iron on medium heat", "Do not dry clean"]
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
      currentColor: "#4a4e69",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "L",
      stock: 30,
      description: {
        text: "This casual cotton shirt is a staple for any man's wardrobe. Its lightweight and soft fabric is perfect for everyday wear and comfortable for any occasion.",
        list: [
          "Soft and breathable cotton",
          "Classic fit",
          "Button-up front",
          "Versatile for casual and semi-formal looks",
          "Durable and long-lasting"
        ]
      },
      composition: {
        text: "Made from 100% pure cotton, a natural fiber known for its comfort and durability.",
        list: [
          "Cotton: 100%"
        ]
      },
      modalParameter: ["Button-down collar", "Left chest pocket", "Easy to iron"],
      productCare: ["Machine wash cold", "Tumble dry low", "Iron on medium heat", "Do not bleach"]
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
      currentColor: "#2f4f4f",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "M",
      stock: 18,
      description: {
        text: "A pair of classic slim-fit jeans that are both stylish and comfortable. The stretch denim provides a great fit and freedom of movement.",
        list: [
          "Modern slim fit",
          "Durable stretch denim",
          "Versatile for all seasons",
          "Classic five-pocket design",
          "Comfortable for all-day wear"
        ]
      },
      composition: {
        text: "Crafted from a blend of cotton and elastane, providing a comfortable stretch and a great fit.",
        list: [
          "Cotton: 98%",
          "Elastane: 2%"
        ]
      },
      modalParameter: ["Button and zip fly", "Reinforced stitching", "Belt loops"],
      productCare: ["Machine wash inside out in cold water", "Tumble dry low", "Do not bleach", "Iron on low heat"]
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
      currentColor: "#2c3e50",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "XL",
      stock: 12,
      description: {
        text: "An essential formal blazer for any professional setting. The high-quality material and tailored fit ensure a sharp and sophisticated look.",
        list: [
          "Elegant and professional design",
          "Tailored fit",
          "High-quality, durable fabric",
          "Perfect for formal events and office wear",
          "Adds a sophisticated touch"
        ]
      },
      composition: {
        text: "Made from a wool and polyester blend, offering warmth, wrinkle resistance, and a structured look.",
        list: [
          "Wool: 70%",
          "Polyester: 30%"
        ]
      },
      modalParameter: ["Notch lapel", "Two-button closure", "Flap pockets"],
      productCare: ["Dry clean only", "Store on a wide hanger", "Do not wash", "Do not tumble dry"]
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
      currentColor: "#1abc9c",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "S",
      stock: 40,
      description: {
        text: "A classic polo T-shirt that is perfect for a smart-casual look. The breathable pique fabric is comfortable and keeps you cool on warm days.",
        list: [
          "Classic polo collar",
          "Breathable pique knit fabric",
          "Comfortable and lightweight",
          "Ideal for summer and casual outings",
          "Ribbed cuffs for a better fit"
        ]
      },
      composition: {
        text: "Made from 100% cotton, a soft and breathable material.",
        list: [
          "Cotton: 100%"
        ]
      },
      modalParameter: ["Two-button placket", "Side slits", "Regular fit"],
      productCare: ["Machine wash cold", "Tumble dry low", "Do not dry clean", "Iron inside out on low heat"]
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
      currentColor: "#34495e",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "M",
      stock: 14,
      description: {
        text: "A timeless denim jacket that is a must-have for a rugged, stylish look. Perfect for layering during the fall season and durable for long-term wear.",
        list: [
          "Classic denim style",
          "Durable and long-lasting material",
          "Versatile for layering",
          "Multiple pockets for convenience",
          "A perfect transitional piece"
        ]
      },
      composition: {
        text: "Made from 100% cotton denim, a sturdy and classic fabric.",
        list: [
          "Cotton: 100%"
        ]
      },
      modalParameter: ["Button closure", "Chest pockets with button flaps", "Adjustable waist tabs"],
      productCare: ["Machine wash cold with like colors", "Tumble dry low", "Do not bleach", "Iron on medium heat"]
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
      currentColor: "#deb887",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "L",
      stock: 25,
      description: {
        text: "These chino pants offer a smart-casual alternative to jeans. The comfortable fit and classic design make them perfect for both work and weekends.",
        list: [
          "Smart-casual design",
          "Comfortable and breathable fabric",
          "Versatile for various occasions",
          "Durable and well-structured",
          "Slightly tapered fit"
        ]
      },
      composition: {
        text: "Made from a blend of cotton and elastane for a comfortable stretch and shape retention.",
        list: [
          "Cotton: 97%",
          "Elastane: 3%"
        ]
      },
      modalParameter: ["Flat front", "Two side pockets", "Two back welt pockets"],
      productCare: ["Machine wash cold", "Tumble dry low", "Iron on medium heat", "Do not bleach"]
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
      currentColor: "#8e44ad",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "XL",
      stock: 16,
      description: {
        text: "Stay warm and comfortable with this oversized hoodie. Its soft fleece lining and relaxed fit make it the perfect choice for cold winter days.",
        list: [
          "Warm and comfortable fleece lining",
          "Oversized for a relaxed fit",
          "Hood with drawstring",
          "Front kangaroo pocket",
          "Perfect for lounging or casual wear"
        ]
      },
      composition: {
        text: "Made from a blend of cotton and polyester fleece, providing warmth and comfort.",
        list: [
          "Cotton: 60%",
          "Polyester: 40%"
        ]
      },
      modalParameter: ["Ribbed cuffs and hem", "Drop shoulders", "Soft-touch fabric"],
      productCare: ["Machine wash cold with similar colors", "Tumble dry low", "Do not iron on print", "Do not dry clean"]
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
      currentColor: "#ff6b6b",
      sizes: ["S", "M", "L", "XL"],
      currentSize: "M",
      stock: 35,
      description: {
        text: "Show off your style with this trendy graphic T-shirt. Made from soft cotton, it's comfortable and a great way to make a statement.",
        list: [
          "Unique and stylish graphic print",
          "Soft and comfortable fabric",
          "Durable print that won't fade",
          "Perfect for a casual, edgy look",
          "Ideal for summer"
        ]
      },
      composition: {
        text: "Crafted from 100% combed cotton, a soft and high-quality material.",
        list: [
          "Combed Cotton: 100%"
        ]
      },
      modalParameter: ["Crew neck", "Short sleeves", "Relaxed fit"],
      productCare: ["Machine wash cold inside out", "Tumble dry low", "Do not iron on print", "Do not bleach"]
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
      currentColor: "#add8e6",
      sizes: ["2-4Y", "4-6Y", "6-8Y"],
      currentSize: "4-6Y",
      stock: 28,
      description: {
        text: "A fun and playful cartoon T-shirt that kids will love. The soft fabric ensures comfort for all-day play and the vibrant print stays bright after many washes.",
        list: [
          "Vibrant and fun cartoon print",
          "Soft and breathable fabric",
          "Durable for active kids",
          "Comfortable crew neck",
          "Easy to wear and care for"
        ]
      },
      composition: {
        text: "Made from 100% soft cotton, ensuring maximum comfort for sensitive skin.",
        list: [
          "Cotton: 100%"
        ]
      },
      modalParameter: ["Ribbed collar", "Shoulder snap buttons (for sizes 2-4Y)", "Fade-resistant print"],
      productCare: ["Machine wash cold with like colors", "Tumble dry low", "Do not iron on print", "Do not bleach"]
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
      currentColor: "#f0e68c",
      sizes: ["2-4Y", "4-6Y", "6-8Y"],
      currentSize: "6-8Y",
      stock: 19,
      description: {
        text: "These colorful shorts are perfect for summer adventures. The lightweight fabric and elastic waistband make them incredibly comfortable for running and playing.",
        list: [
          "Bright and fun colors",
          "Lightweight and breathable",
          "Elastic waistband for a perfect fit",
          "Durable for play",
          "Quick-drying fabric"
        ]
      },
      composition: {
        text: "Made from 100% polyester, a durable and quick-drying fabric.",
        list: [
          "Polyester: 100%"
        ]
      },
      modalParameter: ["Adjustable drawstring", "Side pockets", "Comfortable fit"],
      productCare: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Cool iron if needed"]
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
      currentColor: "#ffe4e1",
      sizes: ["2-4Y", "4-6Y", "6-8Y"],
      currentSize: "2-4Y",
      stock: 12,
      description: {
        text: "A cozy and cute pajama set for a comfortable night's sleep. The soft material is gentle on the skin and keeps little ones warm during cooler nights.",
        list: [
          "Soft and cozy material",
          "Adorable patterns",
          "Elastic waistband for a snug fit",
          "Ideal for a comfortable night's sleep",
          "Snug but not restrictive"
        ]
      },
      composition: {
        text: "Crafted from a soft and warm blend of cotton and fleece.",
        list: [
          "Cotton: 80%",
          "Fleece: 20%"
        ]
      },
      modalParameter: ["Long-sleeved top", "Full-length pants", "Ribbed cuffs"],
      productCare: ["Machine wash cold with gentle cycle", "Tumble dry low", "Do not bleach", "Iron on low heat"]
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
      currentColor: "#fffacd",
      sizes: ["2-4Y", "4-6Y", "6-8Y"],
      currentSize: "4-6Y",
      stock: 22,
      description: {
        text: "This adorable baby romper is perfect for playtime. Its easy-to-wear design and soft fabric ensure your baby stays comfortable all day long.",
        list: [
          "Easy snap-button closure",
          "Soft and gentle on skin",
          "Comfortable for play and rest",
          "Cute and simple design",
          "Suitable for all seasons"
        ]
      },
      composition: {
        text: "Made from 100% organic cotton, a natural and hypoallergenic choice for delicate skin.",
        list: [
          "Organic Cotton: 100%"
        ]
      },
      modalParameter: ["Shoulder snaps", "Leg snaps for easy diaper changes", "Lightweight fabric"],
      productCare: ["Machine wash cold", "Tumble dry low", "Do not bleach", "Iron on low heat if needed"]
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
      currentColor: "#c0c0c0",
      sizes: ["2-4Y", "4-6Y", "6-8Y"],
      currentSize: "6-8Y",
      stock: 17,
      description: {
        text: "A mini hoodie perfect for keeping your child warm during the fall. The soft fleece lining provides extra warmth and comfort, while the fun colors make it a favorite.",
        list: [
          "Warm fleece lining",
          "Cozy and comfortable fit",
          "Hood for extra warmth",
          "Front kangaroo pocket",
          "Durable and machine washable"
        ]
      },
      composition: {
        text: "Made from a blend of cotton and polyester fleece, providing a soft and warm fabric.",
        list: [
          "Cotton: 60%",
          "Polyester: 40%"
        ]
      },
      modalParameter: ["Ribbed cuffs and hem", "Drawstring-free hood for safety", "Soft-touch material"],
      productCare: ["Machine wash cold with similar colors", "Tumble dry low", "Do not iron on decorations", "Do not dry clean"]
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
      currentColor: "#d3d3d3",
      sizes: ["2-4Y", "4-6Y", "6-8Y"],
      currentSize: "2-4Y",
      stock: 20,
      description: {
        text: "A mini hoodie perfect for keeping your child warm during the fall. The soft fleece lining provides extra warmth and comfort, while the fun colors make it a favorite.",
        list: [
          "Warm fleece lining",
          "Cozy and comfortable fit",
          "Hood for extra warmth",
          "Front kangaroo pocket",
          "Durable and machine washable"
        ]
      },
      composition: {
        text: "Made from a blend of cotton and polyester fleece, providing a soft and warm fabric.",
        list: [
          "Cotton: 60%",
          "Polyester: 40%"
        ]
      },
      modalParameter: ["Ribbed cuffs and hem", "Drawstring-free hood for safety", "Soft-touch material"],
      productCare: ["Machine wash cold with similar colors", "Tumble dry low", "Do not iron on decorations", "Do not dry clean"]
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
      currentColor: "#c0c0c0",
      sizes: ["2-4Y", "4-6Y", "6-8Y"],
      currentSize: "4-6Y",
      stock: 15,
      description: {
        text: "A mini hoodie perfect for keeping your child warm during the fall. The soft fleece lining provides extra warmth and comfort, while the fun colors make it a favorite.",
        list: [
          "Warm fleece lining",
          "Cozy and comfortable fit",
          "Hood for extra warmth",
          "Front kangaroo pocket",
          "Durable and machine washable"
        ]
      },
      composition: {
        text: "Made from a blend of cotton and polyester fleece, providing a soft and warm fabric.",
        list: [
          "Cotton: 60%",
          "Polyester: 40%"
        ]
      },
      modalParameter: ["Ribbed cuffs and hem", "Drawstring-free hood for safety", "Soft-touch material"],
      productCare: ["Machine wash cold with similar colors", "Tumble dry low", "Do not iron on decorations", "Do not dry clean"]
    }
];
  
  return (
    <div className='collectionSlider-container'>
      <button className='prevButton'><Prev width="30"/></button>
      <button className='nextButton'><Next width="30"/></button>
      <Swiper
        navigation={{
          prevEl:".prevButton",
          nextEl:".nextButton"
        }}
        spaceBetween={15}
        slidesPerView={4}
        modules={[Navigation]}
        scollbar={{
          el:".swiper"
        }}
        breakpoints={{
          0:{
            slidesPerView:1,
          },
          767:{
            slidesPerView:2,
          },
          1085:{
            slidesPerView:3,
            spaceBetween:10
          },
          1430:{
            slidesPerView:4
          }
        }}
        className='product-slider'
      >
        {products
          .filter((product) => product.type === category)
          .map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{opacity:.2}}
                  animate={{opacity:1}}
                  transition={{duration:1}}
                >
                  <ProductCard 
                    isBestSeller={true}
                    img={item.img}
                    type={item.type}
                    collection={item.collectionType}
                    price={item.price}
                    oldPrice={item.oldPrice}
                    offer={item.offer}
                    isLiked={true}
                    colors={item.colors}
                    currentColor={item.currentColor}
                    productName={item.nameOfProduct}
                    func={()=>nav(`/${item.nameOfProduct}` , {state:{productInfo:item}})}
                  />
                </motion.div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
export default CollectionSlider
