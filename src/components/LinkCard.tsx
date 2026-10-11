type LinkCardProps = {
  title: string;
  href: string;
};

export default function LinkCard({ title, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-16 w-full items-center justify-center rounded-2xl border border-black/5 bg-white text-base font-medium shadow-md shadow-black/10 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/15 dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/40"
    >
      {title}
    </a>
  );
}
