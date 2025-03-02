type LogoProps = {
  className?: string;
};

export default function Logo({ className = "" }: LogoProps) {
  return (
    <img
      src="/logo.png"
      alt="Algerian Tech Makers"
      className={className}
      style={{ filter: 'brightness(0) invert(1)' }}
    />
  );
}
