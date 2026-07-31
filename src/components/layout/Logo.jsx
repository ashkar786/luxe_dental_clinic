export function Logo({ dark = true, className = '' }) {
  return (
    <a href="#home" className={`group flex items-center gap-3 ${className}`} aria-label="Luxe Dental Clinic home">
      <span className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-soft">
        <svg viewBox="0 0 32 32" className="h-6 w-6" aria-hidden="true">
          <path
            d="M16 4c-3.2 0-5.8 2-6.9 5.1C8.1 12.4 6 17.4 6 21.8c0 3.4 1.1 5.8 2.7 7.2 1.1 1 2.4 1.4 3.6.9.9-.3 1.6-1.1 2.2-2.3.6 1.2 1.3 2 2.2 2.3 1.2.5 2.5.1 3.6-.9 1.6-1.4 2.7-3.8 2.7-7.2 0-4.4-2.1-9.4-3.1-12.7C21.8 6 19.2 4 16 4z"
            fill="white"
          />
          <path
            d="M16 8c-.8 5.5 1 11 1 16.5"
            stroke="#3EC6FF"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`font-display text-xl font-semibold tracking-wide transition-colors sm:text-[1.35rem] ${
            dark ? 'text-secondary' : 'text-white'
          }`}
        >
          Luxe Dental Clinic
        </span>
        <span
          className={`text-[10px] font-semibold tracking-[0.28em] uppercase ${
            dark ? 'text-primary' : 'text-accent'
          }`}
        >
          Dubai, UAE
        </span>
      </span>
    </a>
  )
}
