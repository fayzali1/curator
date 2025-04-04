import { CategorySidebar } from "@/components/Sidebar/CategorySidebar";
import { LeftSidebar } from "@/components/Sidebar/LeftSidebar";
import ProductGrid from "@/components/ProductGrid";
import productsData from "@/data/products.json";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <LeftSidebar />
      <div className="flex flex-1">
        <CategorySidebar />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">All Products</h1>
          <ProductGrid products={productsData.products} />
        </main>
      </div>
    </div>
  );
}
