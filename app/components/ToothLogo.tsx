export default function ToothLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="24" className="fill-brand/10" />
      <path
        d="M24 12c-2.6 0-4.2 1.4-5.8 1.4-1.8 0-3.4-1.4-5.6-1.4C9.8 12 8 14.6 8 18.4c0 4 1.6 8.4 3 11.8 1.1 2.7 2.1 5.3 4 5.3 2 0 2.2-3.4 2.9-5.9.6-2.1 1.2-3.9 2.6-3.9.5 0 .8.1 1.1.2.9.3.9.3 2.1.3s1.2 0 2.1-.3c.3-.1.6-.2 1.1-.2 1.4 0 2 1.8 2.6 3.9.7 2.5.9 5.9 2.9 5.9 1.9 0 2.9-2.6 4-5.3 1.4-3.4 3-7.8 3-11.8 0-3.8-1.8-6.4-4.6-6.4-2.2 0-3.8 1.4-5.6 1.4-1.6 0-3.2-1.4-5.8-1.4z"
        className="fill-brand"
      />
    </svg>
  );
}
