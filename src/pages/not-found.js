import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
export default function NotFound() {
    return (_jsx("div", { className: "min-h-screen w-full flex items-center justify-center bg-gray-50", children: _jsx(Card, { className: "w-full max-w-md mx-4", children: _jsxs(CardContent, { className: "pt-6", children: [_jsxs("div", { className: "flex mb-4 gap-2", children: [_jsx(AlertCircle, { className: "h-8 w-8 text-red-500" }), _jsx("h1", { className: "text-2xl font-bold text-gray-900", children: "404 Page Not Found" })] }), _jsx("p", { className: "mt-4 text-sm text-gray-600", children: "Did you forget to add the page to the router?" })] }) }) }));
}
