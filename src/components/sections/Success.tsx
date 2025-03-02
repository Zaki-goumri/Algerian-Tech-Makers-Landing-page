import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            قصص نجاح
          </h2>

        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-16 h-16 mx-auto mb-4">
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <p className="text-lg mb-4">{testimonial.text}</p>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
