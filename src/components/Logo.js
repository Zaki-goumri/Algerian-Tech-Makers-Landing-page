import { jsx as _jsx } from "react/jsx-runtime";
export default function Logo({ className = "" }) {
    return (_jsx("img", { src: "/logo.png", alt: "Algerian Tech Makers", className: className, style: { filter: 'brightness(0) invert(1)' } }));
}
