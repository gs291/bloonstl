import {useEffect, useState} from "react";


const OPTIONS = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0,
};

/**
 * Hook to show if an element has been scrolled into the viewport
 *  - {@link https://stackoverflow.com/a/65628717 Stack Overflow Reference}
 *
 *
 * @param {RefObject<HTMLElement>} elementRef React reference for the observer
 *
 * @return {boolean} Shows if the referenced element is visible or not
 */
export default function useIsVisible(elementRef) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const currentRef = elementRef.current;
        if (currentRef) {
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        if (currentRef) {
                            observer.unobserve(currentRef);
                        }
                    }
                });
            }, OPTIONS);
            observer.observe(currentRef);

            return () => {
                if (currentRef) {
                    observer.unobserve(currentRef);
                }
            }
        }
    }, [elementRef]);

    return isVisible;
};
