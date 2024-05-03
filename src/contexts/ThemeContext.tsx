import { PropsWithChildren, createContext, useState } from "react"

export interface ThemeContextType {
  theme: "light" | "dark"
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | null>(null)

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [theme, setTheme] = useState<ThemeContextType["theme"]>("light")

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>
}

export default ThemeProvider
