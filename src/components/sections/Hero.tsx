import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex justify-center mb-8">
          <img className="w-24 h-24" src="https://media.licdn.com/dms/image/v2/D4E0BAQEn1jjp8uc9NA/company-logo_100_100/company-logo_100_100/0/1689004144142?e=1749081600&v=beta&t=MXTvCmm0lSDl1zIcA5ncmbwQ4juKrUFjBFFE3wa7XLs" />
        </div>

          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
            تمكين الجيل القادم من مبتكري التكنولوجيا الجزائريين
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            انضم إلى مجتمع مزدهر من عشاق التكنولوجيا والمبتكرين الذين يشكلون مستقبل التكنولوجيا في الجزائر
          </p>

          <div className="flex justify-center">
            <Button size="lg" className="text-lg">
              انضم إلى المجتمع
            </Button>
          </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80">
        <div className="absolute inset-0 bg-gray-900/20" />
      </div>
    </section>
  );
}