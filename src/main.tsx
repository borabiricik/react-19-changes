import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"

const container = document.getElementById("root")!

// bu iki event yeni eklenmedi sadece re-render durumlarinda birden fazla kere
// tetiklenmiyor artik

const root = ReactDOM.createRoot(container, {
  onUncaughtError(error, errorInfo) {
    // Log servisine gonderme islemi
    console.log("uncaughtErrror", { error, errorInfo })
  },
  onCaughtError: (...rest) => {
    console.log({ rest })
  },
})

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
