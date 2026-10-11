type ProfileProps = {
  name: string;
  bio: string;
  imageUrl: string;
};

export default function Profile({ name, bio, imageUrl }: ProfileProps) {
  return (
    <header className="flex flex-col items-center text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={`${name} 프로필 사진`}
        width={176}
        height={176}
        className="size-32 rounded-full object-cover shadow-(--avatar-shadow) ring-4 ring-(--avatar-ring) sm:size-36"
      />
      <h1 className="mt-7 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{bio}</p>
    </header>
  );
}
