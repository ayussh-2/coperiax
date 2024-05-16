import React, { useEffect, useState } from "react";
import Header from "./components/header";

import Footer from "./components/footer";
import Hero from "./components/hero";
import { auth } from "./firebase";
function App() {
    const [username, setUser] = useState("");
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user.displayName);
            } else {
                setUser("");
                console.log(user);
            }
        });
    });
    var today = new Date();
    const date =
        today.getDate() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getFullYear();

    return (
        <div className="h-screen bg-grey font-poppins   ">
            <Header date={date} name={username} />
            <Hero />
            {/* <Footer/> */}
        </div>
    );
}

export default App;
