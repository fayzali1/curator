"use client"

import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null // or return a skeleton/loading state
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 bg-background"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 transition-all" />
      ) : (
        <MoonIcon className="h-5 w-5 transition-all" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 