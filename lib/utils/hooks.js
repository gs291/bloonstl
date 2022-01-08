// https://stackoverflow.com/a/65628717

import {useEffect, useState} from "react";

const OPTIONS = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0,
};

export default function useIsVisible(elementRef) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (elementRef.current) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(elementRef.current);
                    }
                });
            }, OPTIONS);
            observer.observe(elementRef.current);
        }
    }, [elementRef]);

    return isVisible;
};