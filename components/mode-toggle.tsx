"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { Switch } from "./ui/switch"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  const isDark = theme === "dark"

  return (
    <>
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:text-white dark:rotate-50" />
      <Switch checked={isDark}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")} />
      <Moon className="h-[1.2rem] w-[1.2rem] scale-100 rotate-90 transition-all dark:rotate-0 dark:text-white " />
    </>
  )
}
