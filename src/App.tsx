// ref without forwardRef example
import React, { useEffect, useRef } from "react"
import "./App.css"
import ContextElement from "./components/ContextElement"
import RefElement from "./components/RefElement"
import ThemeProvider from "./contexts/ThemeContext"

function App() {
  const myRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (myRef.current) {
      myRef.current.style.color = "red"
    }
    console.error("My caught error")
  }, [])

  return (
    <div className="flex flex-col gap-y-10">
      <RefElement ref={myRef}>Hello from React {React.version}</RefElement>
      <ThemeProvider>
        <ContextElement />
      </ThemeProvider>
    </div>
  )
}

export default App
