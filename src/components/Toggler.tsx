import { useEffect, useState } from "react"

import "./styles/Toggler.css"

const colores = {
    dark: [
        ["--background-color", "rgb(23, 25, 27)"],
        ["--background-color2", "rgb(37, 40, 43)"],
        ["--background-color3", "rgb(40, 43, 46)"],
        ["--text-color", "rgb(240, 240, 240)"],
    ],

    light: [
        ["--background-color", "rgb(255, 255, 255)"],
        ["--background-color2", "rgb(239, 239, 239)"],
        ["--background-color3","rgb(232, 232, 232)"],
        ["--text-color", "rgb(27, 27, 27)"],
    ]
}

const setProperty = (prop: string, value: string) => {
    document.documentElement.style.setProperty(prop, value)
}

export default function Toggler() {
    const [isChecked, setIsChecked] = useState(true);

    // Load state from localStorage when the component mounts
    useEffect(() => {
        const savedState = localStorage.getItem("darkMode") === "active";
        setIsChecked(savedState);
        console.log("DARKMODE ACTIVE")
    }, []);

    useEffect(() => {
        if (isChecked) {
            localStorage.setItem("darkMode", "active")
            colores.dark.forEach(val => {
                const [prop, value] = val
                setProperty(prop, value)
            })
        } else {
            localStorage.setItem("darkMode", "inactive")
            colores.light.forEach(val => {
                const [prop, value] = val
                setProperty(prop, value)
            })
        }
        console.log(isChecked)
    }, [isChecked])

    // Save state to localStorage when changed
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const checked = event.target.checked;
        setIsChecked(checked);
    };

    return (
        <label className="toggle-switch">
            <input type="checkbox" id="switch" checked={isChecked} onChange={handleChange} />
            <span className="slider">
            <h3>{isChecked ? "DARK" : "LIGHT"}</h3>
            </span>
        </label>
    )
}