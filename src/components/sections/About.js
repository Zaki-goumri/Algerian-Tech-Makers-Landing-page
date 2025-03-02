import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Lightbulb, Users } from "lucide-react";
const features = [
    {
        icon: Code2,
        title: "تعليم تقني",
        description: "برامج تدريبية متخصصة في أحدث التقنيات والبرمجة"
    },
    {
        icon: Lightbulb,
        title: "الابتكار",
        description: "تشجيع وتمكين المشاريع التقنية المبتكرة"
    },
    {
        icon: Users,
        title: "التعاون",
        description: "بناء شبكة من المطورين والمبتكرين الجزائريين"
    }
];
export default function About() {
    return (_jsx("section", { className: "py-20 bg-accent/10", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-16", children: "\u0645\u0646 \u0646\u062D\u0646" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: features.map((feature, index) => (_jsx(Card, { children: _jsxs(CardContent, { className: "pt-6", children: [_jsx(feature.icon, { className: "w-12 h-12 text-primary mb-4 mx-auto" }), _jsx("h3", { className: "text-xl font-semibold text-center mb-2", children: feature.title }), _jsx("p", { className: "text-muted-foreground text-center", children: feature.description })] }) }))) })] }) }));
}
