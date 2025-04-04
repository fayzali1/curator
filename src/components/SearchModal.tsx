"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import productsData from "@/data/products.json";

interface SearchModalProps {
  children: React.ReactNode;
}

export function SearchModal({ children }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }

    const filteredResults = productsData.products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredResults);
  }, [searchQuery]);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md border border-gray-200 bg-white p-0 shadow-lg !rounded-3xl overflow-hidden">
        <div className="relative w-full">
          {/* Search bar */}
          <div className="relative flex items-center w-full p-4">
            <div className="inset-y-0 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <Input
              type="search"
              placeholder="Search..."
              className="border-0 focus-visible:outline-none focus-visible:ring-0 shadow-none"
              autoFocus
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Search results */}
          {searchResults.length > 0 && (
            <div className="max-h-[300px] bg-gray-50  overflow-y-auto">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  className="px-4 py-3 rounded-lg cursor-pointer"
                >
                  <div className="text-sm text-gray-900 font-medium">
                    {product.name} - The Curator
                  </div>
                  <div className="text-xs text-gray-500">
                    /products/{product.id}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
