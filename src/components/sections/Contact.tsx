import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("شكراً لتواصلك معنا! سيتم الرد عليك قريباً.");
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            تواصل معنا
          </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input placeholder="الاسم" required />
          <Input placeholder="البريد الإلكتروني" type="email" required />
          <Textarea placeholder="رسالتك" required />
          <Button type="submit" className="w-full">
            إرسال
          </Button>
        </form>
      </div>
    </section>
  );
}