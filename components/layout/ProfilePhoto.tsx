import Image from "next/image";

export default function ProfilePhoto({
  image,
  onClick,
  size,
}: {
  image: {src: string; alt: string} | null;
  onClick?: () => void;
  size?: "large";
}) {
  if (!image) return <div />;

  return (
    <button
      arial-label="see profile"
      className={`profile-photo

        
          ${size === "large" ? "profile-photo--large" : ""}`}
      onClick={() => onClick && onClick()}
    >
      <Image alt={image.alt} layout="fill" objectFit="cover" src={image.src} />
      <style jsx>{`
        .profile-photo {
          position: relative;

          width: 30px;
          height: 30px;
          border-radius: 50%;
          overflow: hidden;

          border: 2px solid var(--light-gray);
        }

        .profile-photo--large {
          width: 80px;
          height: 80px;
        }
      `}</style>
    </button>
  );
}
