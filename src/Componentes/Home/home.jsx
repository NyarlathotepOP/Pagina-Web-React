import React from "react";
import Header from "../Header-Menu/header-menu";
import Footer from "../Footer/footer";
import SectionContent from "../Section-Content/section-content";
import SearchFilters from "../SearchFilters/SearchFilters";
import SectionProducts from "../Section-Products/Section-Products";
import Products from "../Products/products";

export default function Home() {
  return (
    <main className="container">
      <img className="image-1"></img>
      <img className="image-2"></img>
      <Header />
      <SectionContent />
      <SearchFilters />
      <SectionProducts />
      <Products />
      <Footer />
    </main>
  );
}
