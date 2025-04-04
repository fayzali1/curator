import { CategorySidebar } from "@/components/Sidebar/CategorySidebar";
import { LeftSidebar } from "@/components/Sidebar/LeftSidebar";
import ProductGrid from "@/components/ProductGrid";
import productsData from "@/data/products.json";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  // Pre-generate all category pages
  const categories = [
    "all",
    ...new Set(
      productsData.products.map((p) =>
        p.category.toLowerCase().replace(/\s+/g, "-")
      )
    ),
  ];

  return categories.map((slug) => ({
    slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // If slug is "all", show all products
  if (slug === "all") {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <LeftSidebar />
        <div className="flex flex-1">
          <CategorySidebar activeCategorySlug={slug} />
          <main className="flex-1 p-6">
            <h1 className="text-2xl font-bold mb-6">All Products</h1>
            <ProductGrid products={productsData.products} />
          </main>
        </div>
      </div>
    );
  }

  // Format slug back to a proper category name format
  const categoryName = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Filter products by category
  const filteredProducts = productsData.products.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );

  // If no products found for this category, show 404
  if (filteredProducts.length === 0) {
    notFound();
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <LeftSidebar />
      <div className="flex flex-1">
        <CategorySidebar activeCategorySlug={slug} />
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">{categoryName} Products</h1>
          <ProductGrid products={filteredProducts} />
        </main>
      </div>
    </div>
  );
}
