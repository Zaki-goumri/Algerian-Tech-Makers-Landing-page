import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
const testimonials = [
    {
        text: "ساعدني المجتمع في تطوير مهاراتي البرمجية وإيجاد فرص عمل رائعة",
        name: "سارة",
        role: "مطورة ويب"
    },
    {
        text: "تعلمت الكثير من خلال ورش العمل والمشاريع المشتركة",
        name: "أحمد",
        role: "مهندس برمجيات"
    },
    {
        text: "بيئة رائعة للتعلم والنمو في مجال التكنولوجيا",
        name: "ليلى",
        role: "مصممة UX"
    }
];
export default function Success() {
    return (_jsx("section", { className: "py-20 bg-accent/10", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-16", children: "\u0642\u0635\u0635 \u0646\u062C\u0627\u062D" }), _jsxs(Carousel, { className: "w-full max-w-4xl mx-auto", children: [_jsx(CarouselContent, { children: testimonials.map((testimonial, index) => (_jsx(CarouselItem, { children: _jsx(Card, { children: _jsxs(CardContent, { className: "p-6 text-center", children: [_jsx(Avatar, { className: "w-16 h-16 mx-auto mb-4", children: _jsx(AvatarFallback, { children: testimonial.name[0] }) }), _jsx("p", { className: "text-lg mb-4", children: testimonial.text }), _jsx("h4", { className: "font-semibold", children: testimonial.name }), _jsx("p", { className: "text-muted-foreground", children: testimonial.role })] }) }) }, index))) }), _jsx(CarouselPrevious, {}), _jsx(CarouselNext, {})] })] }) }));
}
