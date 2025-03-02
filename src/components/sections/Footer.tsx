import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo className="w-12 h-12" />
            <p className="mt-2 text-muted-foreground">
              صناع التكنولوجيا الجزائريين
            </p>
          </div>

          <div className="flex space-x-6 space-x-reverse">
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} صناع التكنولوجيا الجزائريين. جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
}