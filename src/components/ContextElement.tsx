import { use } from "react"
import { ThemeContext, ThemeContextType } from "../contexts/ThemeContext"

const ContextElement = () => {
  const { theme, toggleTheme } = use(ThemeContext) as ThemeContextType
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  )
}

export default ContextElement
