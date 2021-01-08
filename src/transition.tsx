const transition = {
    duration: 0.4,
    ease: [0.43, 0.13, 0.23, 0.96]
};
export const backVariants = {
    exit: { y: 10, opacity: 0, scale: 0.9, transition },
    enter: { y: 0, opacity: 1, scale: 1, transition }
};
