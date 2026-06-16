import type { ReactNode } from "react";

type ContentCardProps = {
  className?: string;
  title?: string;
  label?: string;
  children: ReactNode;
};

export function ContentCard({
  className = "",
  title,
  label,
  children,
}: ContentCardProps) {
  return (
    <article className={`content-card ${className}`}>
      {(title || label) && (
        <header className="card-header">
          {label && <span>{label}</span>}
          {title && <h2>{title}</h2>}
        </header>
      )}
      {children}
    </article>
  );
}
