import { SidebarLayoutWrapper } from "@/components/Layouts/SidebarLayoutWrapper";
import { ProductGrid } from "@/components/ProductGrid";
import productsData from "@/data/products.json";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const categories = [
    "all",
    "ai",
    "administration",
    "analytics",
    "apis",
    "bug-hunt",
    "business",
    "cms",
    "education",
    "developers",
    "finance",
    "logistic",
    "news",
    "payments",
    "privacy",
    "security",
    "e-commerce",
    "international",
  ];

  return categories.map((slug) => ({ slug }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const { slug } = params;

  // Convert slug format to category format (e.g., "e-commerce" to "E-commerce")
  const getCategoryFromSlug = (slug: string) => {
    if (slug === "all") return "All";

    // Handle special cases
    if (slug === "apis") return "APIs";
    if (slug === "cms") return "CMS";
    if (slug === "ai") return "AI";

    // Convert general slugs to title case
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const category = getCategoryFromSlug(slug);

  // Filter products based on category
  const filteredProducts =
    category === "All"
      ? productsData.products
      : productsData.products.filter(
          (product) => product.category === category
        );

  // If invalid category, return 404
  if (category !== "All" && !filteredProducts.length) {
    notFound();
  }

  return (
    <SidebarLayoutWrapper>
      <div className="py-6">
        <h1 className="text-2xl font-bold mb-6">{category} Products</h1>
        <ProductGrid products={filteredProducts} />
      </div>
    </SidebarLayoutWrapper>
  );
}
