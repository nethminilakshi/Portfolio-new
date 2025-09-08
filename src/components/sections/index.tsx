import {className} from "postcss-selector-parser";
import {transform} from "esbuild";

export { default as Hero } from './Hero';
export { default as About } from './About';
export { default as Skills } from './Skills';
export { default as Projects } from './Projects';
export { default as Education } from './Education';
export { default as Contact } from './Contact';
export { default as Footer } from './../Footer';
export { default as Navigation } from './../Navigation';
export const CustomCursor = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
    return (
        <div
            className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75"
            style={{
                left: mousePosition.x - 8,
                top: mousePosition.y - 8,
                transform: 'scale(1)'
            }}
        />
    );
};

