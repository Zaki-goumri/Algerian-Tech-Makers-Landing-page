import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Code, Trophy, Calendar } from "lucide-react";
const initiatives = [
    {
        icon: Laptop,
        title: "ورش عمل تقنية",
        description: "ورش عمل أسبوعية في مختلف المجالات التقنية"
    },
    {
        icon: Code,
        title: "هاكاثونات",
        description: "مسابقات برمجية لحل التحديات المحلية"
    },
    {
        icon: Trophy,
        title: "مشاريع مجتمعية",
        description: "العمل على مشاريع تخدم المجتمع المحلي"
    },
    {
        icon: Calendar,
        title: "لقاءات تقنية",
        description: "لقاءات دورية لتبادل الخبرات والمعرفة"
    }
];
export default function Initiatives() {
    return (_jsx("section", { className: "py-20", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-16", children: "\u0645\u0628\u0627\u062F\u0631\u0627\u062A\u0646\u0627" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: initiatives.map((initiative, index) => (_jsx(Card, { className: "h-full", children: _jsxs(CardContent, { className: "pt-6 text-center", children: [_jsx(initiative.icon, { className: "w-10 h-10 text-primary mb-4 mx-auto" }), _jsx("h3", { className: "text-lg font-semibold mb-2", children: initiative.title }), _jsx("p", { className: "text-muted-foreground", children: initiative.description })] }) }))) })] }) }));
}
