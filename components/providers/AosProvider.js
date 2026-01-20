"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AosProvider = ({ children }) => {
    useEffect(() => {
        AOS.init({
            // Global settings:
            duration: 800,
            once: true,
            easing: 'ease-out-quad',
            offset: 100,
        });
    }, []);

    return <>{children}</>;
};

export default AosProvider;