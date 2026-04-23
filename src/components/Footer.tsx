import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo/Logoprimer.svg"
                alt="Logo Klinik Primer Cherang"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Perkhidmatan kesihatan berkualiti tinggi untuk penduduk Bertam Putra
              dan sekitarnya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Pautan Pantas</h3>
            <ul className="space-y-2 text-sm text-background/60">
              <li>
                <a href="#" className="hover:text-background transition-colors">
                  Utama
                </a>
              </li>
              <li>
                <a
                  href="#perkhidmatan"
                  className="hover:text-background transition-colors"
                >
                  Perkhidmatan
                </a>
              </li>
              <li>
                <a
                  href="#tentang-kami"
                  className="hover:text-background transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#panel"
                  className="hover:text-background transition-colors"
                >
                  Panel
                </a>
              </li>
              <li>
                <a
                  href="#testimoni"
                  className="hover:text-background transition-colors"
                >
                  Testimoni
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>
                  No 33, Ground Floor, Jalan Persiaran Seksyen 4/5, Bandar Putra Bertam,
                  13200 Kepala Batas, Pulau Pinang
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href="tel:+60103973987"
                  className="hover:text-background transition-colors"
                >
                  010-397 3987
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:hq@primercherang.my"
                  className="hover:text-background transition-colors"
                >
                  hq@primercherang.my
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="font-semibold mb-4">Waktu Operasi</h3>
            <ul className="space-y-2 text-sm text-background/60">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                <span>Isnin - Ahad</span>
              </li>
              <li className="pl-6">8:00 PG - 10:00 MLM</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-background/10" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <p>
            &copy; {new Date().getFullYear()} Klinik Primer Cherang Bertam Putra.
            Hak cipta terpelihara.
          </p>
          <p>No. Pendaftaran: 1060649-W | KKLIU 3109/EXP 31.12.2027</p>
        </div>
      </div>
    </footer>
  );
}
