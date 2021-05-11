import React from "react";
import cn from "classNames";
import s from "./App.modules.scss";
import "./custom.css"
const App = () => {
    return (
        <div className={cn(s.header, "color")}>
            This is Component!
        </div>
    )
}

export default App;