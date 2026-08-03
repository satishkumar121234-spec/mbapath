import Link from "next/link";

const footerLinks = [
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Roadmap", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <div className="text-lg font-semibold text-white">MBAPath</div>
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            A production-minded foundation for an MBA admissions platform built
            with Next.js, TypeScript, Tailwind, Prisma, PostgreSQL, and Auth.js.
          </p>
        </div>

        <div className="flex flex-wrap gap-5">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-slate-400 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}