import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

const profile = {
  name: "김가은",
  bio: "저는 기욤둥이입니닼ㅋ",
};

const links = [
  { title: "GitHub", href: "https://github.com/" },
  { title: "LinkedIn", href: "https://www.linkedin.com/" },
  { title: "Blog", href: "https://example.com/" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-6 py-16">
      <Profile name={profile.name} bio={profile.bio} />
      <ul className="mt-10 flex w-full flex-col gap-4">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard title={link.title} href={link.href} />
          </li>
        ))}
      </ul>
    </main>
  );
}
