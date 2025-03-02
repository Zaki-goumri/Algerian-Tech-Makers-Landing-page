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
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            مبادراتنا
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
              <Card className="h-full">
                <CardContent className="pt-6 text-center">
                  <initiative.icon className="w-10 h-10 text-primary mb-4 mx-auto" />
                  <h3 className="text-lg font-semibold mb-2">
                    {initiative.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {initiative.description}
                  </p>
                </CardContent>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
