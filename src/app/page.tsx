import { SidebarLayoutWrapper } from "@/components/Layouts/SidebarLayoutWrapper";
import { ProductGrid } from "@/components/ProductGrid";
import productsData from "@/data/products.json";

export default function Home() {
  return (
    <SidebarLayoutWrapper>
      <div className="py-6">
        <ProductGrid products={productsData.products} />
      </div>
    </SidebarLayoutWrapper>
  );
}
