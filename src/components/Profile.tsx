type ProfileProps = {
  name: string;
  bio: string;
};

export default function Profile({ name, bio }: ProfileProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div
        role="img"
        aria-label={`${name} 프로필 사진`}
        className="flex size-44 items-center justify-center rounded-full border-2 border-foreground bg-zinc-100 text-7xl font-semibold dark:bg-zinc-900"
      >
        {name.charAt(0)}
      </div>
      <h1 className="mt-6 text-2xl font-semibold tracking-tight">{name}</h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
