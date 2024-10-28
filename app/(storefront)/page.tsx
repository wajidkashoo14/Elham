import  Accordian  from "../components/storefront/Accordian";
import { CategoriesSelection } from "../components/storefront/CategorySelection";
import { Featuredproducts } from "../components/storefront/FeaturedProducts";
import Hero from "../components/storefront/Hero";
export default function IndexPage() {
  return (
    <div>
      <Hero />
      <CategoriesSelection />
      <Featuredproducts />
      <Accordian />
    </div>
  );
}
