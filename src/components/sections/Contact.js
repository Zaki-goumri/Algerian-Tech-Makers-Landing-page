import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
export default function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("شكراً لتواصلك معنا! سيتم الرد عليك قريباً.");
    };
    return (_jsx("section", { className: "py-20", children: _jsxs("div", { className: "container mx-auto px-4 max-w-2xl", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-16", children: "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u0646\u0627" }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsx(Input, { placeholder: "\u0627\u0644\u0627\u0633\u0645", required: true }), _jsx(Input, { placeholder: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", type: "email", required: true }), _jsx(Textarea, { placeholder: "\u0631\u0633\u0627\u0644\u062A\u0643", required: true }), _jsx(Button, { type: "submit", className: "w-full", children: "\u0625\u0631\u0633\u0627\u0644" })] })] }) }));
}
