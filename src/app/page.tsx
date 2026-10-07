"use client";

import React, { useState, useEffect } from "react";
import { Eye, Sparkles, Truck, ShieldCheck, Leaf, Star, Mail, Phone, MapPin, X, CheckCircle2, Zap, ArrowRight, ShoppingBag } from "lucide-react";

const products = [
  {
    id: "db4db223-a67f-4c84-befa-0f906201644b",
    tenantId: "0e43c2c1-15bd-4f58-ae19-2bde073d4d38",
    title: "Ethiopian Yirgacheffe Natural",
    price: 24.0,
    status: "ACTIVE",
    customFields: {
      badge: "Single Origin",
      stock: 100,
      category: "Whole Bean",
      features: [],
      imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
      description: "Delicate floral aroma with tasting notes of jasmine, blueberry jam, and candied bergamot."
    },
    createdAt: "2026-10-07T07:23:25.876166Z"
  },
  {
    id: "b23c64ea-c80c-46f6-a41b-1d681a250b31",
    tenantId: "0e43c2c1-15bd-4f58-ae19-2bde073d4d38",
    title: "Midnight Espresso Reserve",
    price: 22.5,
    status: "ACTIVE",
    customFields: {
      badge: "Barista Choice",
      stock: 80,
      category: "Espresso",
      features: [],
      imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      description: "Velvety dark chocolate and toasted almond notes with a thick, golden crema for rich espresso."
    },
    createdAt: "2026-10-07T07:23:25.877232Z"
  },
  {
    id: "ede897e8-4ed5-4665-bf53-021cf201c6db",
    tenantId: "0e43c2c1-15bd-4f58-ae19-2bde073d4d38",
    title: "Precision Ceramic Pour-Over Dripper",
    price: 45.0,
    status: "ACTIVE",
    customFields: {
      badge: "Crafted",
      stock: 35,
      category: "Brew Gear",
      features: [],
      imageUrl: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
      description: "Handcrafted Japanese ceramic brewer with spiral interior ribs for optimal extraction speed."
    },
    createdAt: "2026-10-07T07:23:25.877779Z"
  }
];

const Page = () => {
  const [productDetails, setProductDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Fetch products from API
  }, []);

  const handleProductClick = (product) => {
    setProductDetails(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <nav className="container flex justify-between items-center py-4 px-6">
          <div className="text-2xl font-bold">A</div>
          <ul className="flex space-x-4">
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section className="container flex flex-col items-center py-20">
        <h1 className="text-4xl font-bold">Small-Batch Single Origin Coffee Roasted to Perfection</h1>
        <p className="text-xl text-gray-600">Direct trade beans sustainably sourced from high-altitude micro-lots around the globe and delivered fresh to your door.</p>
        <div className="flex space-x-4 mt-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Shop Now</button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400">Learn More</button>
        </div>
      </section>
      <section className="container flex flex-col items-center py-20">
        <h2 className="text-3xl font-bold">Statistics</h2>
        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="bg-white p-6 rounded shadow-md">
            <Eye size={24} />
            <h3 className="text-xl font-bold">100+</h3>
            <p className="text-gray-600">Products</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <Sparkles size={24} />
            <h3 className="text-xl font-bold">50+</h3>
            <p className="text-gray-600">Countries Sourced</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <Truck size={24} />
            <h3 className="text-xl font-bold">24/7</h3>
            <p className="text-gray-600">Customer Support</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <ShieldCheck size={24} />
            <h3 className="text-xl font-bold">100%</h3>
            <p className="text-gray-600">Sustainability</p>
          </div>
        </div>
      </section>
      <section className="container flex flex-col items-center py-20" id="products">
        <h2 className="text-3xl font-bold">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded shadow-md cursor-pointer" onClick={() => handleProductClick(product)}>
              <img src={product.customFields.imageUrl} alt={product.title} className="w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="container flex flex-col items-center py-20">
        <h2 className="text-3xl font-bold">Value Propositions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-6 rounded shadow-md">
            <Leaf size={24} />
            <h3 className="text-xl font-bold">Sustainability</h3>
            <p className="text-gray-600">Direct trade beans from high-altitude micro-lots.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <Star size={24} />
            <h3 className="text-xl font-bold">Quality</h3>
            <p className="text-gray-600">Small-batch roasted to perfection.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <Mail size={24} />
            <h3 className="text-xl font-bold">Customer Support</h3>
            <p className="text-gray-600">24/7 support via email.</p>
          </div>
        </div>
      </section>
      <section className="container flex flex-col items-center py-20">
        <h2 className="text-3xl font-bold">Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-6 rounded shadow-md">
            <blockquote className="text-gray-600">"The coffee is amazing! Highly recommended!"</blockquote>
            <p className="text-gray-500">- John Doe</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <blockquote className="text-gray-600">"Great product and excellent service!"</blockquote>
            <p className="text-gray-500">- Jane Smith</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <blockquote className="text-gray-600">"I love the precision ceramic dripper!"</blockquote>
            <p className="text-gray-500">- Mike Johnson</p>
          </div>
        </div>
      </section>
      <section className="container flex flex-col items-center py-20">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="bg-white p-6 rounded shadow-md">
            <Mail size={24} />
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-gray-600">support@artisancoffeeroastery.com</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <Phone size={24} />
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="text-gray-600">+1 (800) 555-0199</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <MapPin size={24} />
            <h3 className="text-xl font-bold">Location</h3>
            <p className="text-gray-600">123 Coffee Street, Anytown, USA</p>
          </div>
        </div>
      </section>
      <footer className="container flex flex-col items-center py-20 bg-gray-800 text-white">
        <p className="text-lg">© 2023 Artisan Coffee Roastery. All rights reserved.</p>
      </footer>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <button className="absolute top-2 right-2" onClick={closeModal}>
              <X size={24} />
            </button>
            <img src={productDetails.customFields.imageUrl} alt={productDetails.title} className="w-full h-48 object-cover mb-4" />
            <h3 className="text-xl font-bold">{productDetails.title}</h3>
            <p className="text-gray-600">${productDetails.price}</p>
            <p className="text-gray-600 mt-4">{productDetails.customFields.description}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;