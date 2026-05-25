import { buttonVariants } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#8b0810] border-b border-[#7a0710] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo/logo.png?v=2"
              alt="Logo Klinik Primer Cherang"
              className="h-16 w-auto sm:h-20"
            />
          </a>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.link/tidbxo"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "default" }),
              "!bg-white hover:!bg-gray-100 !text-[#8b0810] font-semibold gap-2"
            )}
          >
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp Kami</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
