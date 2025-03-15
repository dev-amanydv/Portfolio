import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#020C1B]/80 backdrop-blur-sm border-b border-[#0A192F]"
    >
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="text-[#64FFDA] font-mono text-xl">JD</a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <motion.a
              key={item.href}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
          <Button variant="outline" className="border-[#64FFDA] text-[#64FFDA]">
            Resume
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-[#0A192F] border-[#64FFDA]/20">
            <div className="flex flex-col space-y-4 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-[#CCD6F6] hover:text-[#64FFDA] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button variant="outline" className="border-[#64FFDA] text-[#64FFDA]">
                Resume
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
