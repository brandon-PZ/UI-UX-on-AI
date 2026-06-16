export function RecordPlayer() {
  return (
    <div className="record-player" aria-hidden="true">
      <svg viewBox="0 0 160 132" className="record-svg">
        <rect x="16" y="28" width="128" height="88" rx="18" fill="#231d2b" />
        <rect x="24" y="36" width="112" height="72" rx="12" fill="#382f42" />
        <g className="record-disc">
          <circle cx="70" cy="72" r="38" fill="#09090b" />
          <circle cx="70" cy="72" r="27" fill="none" stroke="#2f2f35" strokeWidth="2" />
          <circle cx="70" cy="72" r="14" fill="#315bff" />
          <circle cx="70" cy="72" r="5" fill="#f4d08c" />
        </g>
        <path d="M112 44 L124 52 L94 82" fill="none" stroke="#d9c4a4" strokeWidth="6" strokeLinecap="round" />
        <circle cx="124" cy="52" r="7" fill="#efe0c3" />
      </svg>
    </div>
  );
}
