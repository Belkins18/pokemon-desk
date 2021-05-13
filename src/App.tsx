import React from "react";
import cn from "classNames";
import s from "./App.module.scss";

const App = () => {
    return (
        <div className={cn(s.header)}>
            This is Component!
        </div>
    )
}

export default App;