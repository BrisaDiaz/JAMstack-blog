import Image from "next/image";
import Link from "next/link";
export default function ProfilePhoto({
  image,
  onClick,
  size,
}: {
  image: { src: string; alt: string } | null;
  onClick?: () => void;
  size?: "large";
}) {
  if (!image) return <div />;
  return (
    <button
      onClick={() => onClick && onClick()}
      arial-label="see profile"
      className={`profile-photo

        
          ${size === "large" ? "profile-photo--large" : ""}`}
    >
      <Image src={image.src} alt={image.alt} objectFit="cover" layout="fill" />
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
