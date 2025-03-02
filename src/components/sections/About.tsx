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
  return (
    <section className="py-20 bg-accent/10">
      <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            من نحن
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
              <Card>
                <CardContent className="pt-6">
                  <feature.icon className="w-12 h-12 text-primary mb-4 mx-auto" />
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
