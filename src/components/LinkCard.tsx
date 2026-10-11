type LinkCardProps = {
  title: string;
  href: string;
};

export default function LinkCard({ title, href }: LinkCardProps) {
  const isExternal = !href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex h-16 w-full items-center justify-center rounded-3xl border border-(--card-border) bg-(--card) text-base font-medium shadow-(--card-shadow) backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-(--card-hover) hover:shadow-(--card-shadow-hover) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground/40 active:translate-y-0"
    >
      {title}
    </a>
  );
}
