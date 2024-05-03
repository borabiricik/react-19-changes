// ref without forwardRef example
import React, { useEffect, useRef } from "react"
import "./App.css"
import RefElement from "./components/RefElement"

function App() {
  const myRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (myRef.current) {
      myRef.current.style.color = "red"
    }
  }, [])

  return <RefElement ref={myRef}>Hello from React {React.version}</RefElement>
}

export default App
