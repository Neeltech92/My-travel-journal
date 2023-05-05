import React from "react"
import Header from "./components/Header"
import Main from "./components/Main"
import data from "./data"

export default function App() {
    const mainContent = data.map(item => {
        return (
            <Main 
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className="container">
            <Header />
            {mainContent}
        </div>

    )
}