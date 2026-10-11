import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

const profile = {
  name: "김가은",
  bio: "저는 기염둥이입니다 | 피자 땡긴다",
  imageUrl: "/profile.png",
};

const links = [
  { title: "🧜🏻‍♀️ 깃허브", href: "https://github.com/kxxgani" },
  { title: "🤓 블로그", href: "https://blog.naver.com/gage0527" },
  { title: "📬 이메일", href: "mailto:gage0527@naver.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-7 py-16 sm:px-8 sm:py-24">
      <Profile
        name={profile.name}
        bio={profile.bio}
        imageUrl={profile.imageUrl}
      />
      <ul className="mt-12 flex w-full flex-col gap-5">
        {links.map((link) => (
          <li key={link.title}>
            <LinkCard title={link.title} href={link.href} />
          </li>
        ))}
      </ul>
    </main>
  );
}
