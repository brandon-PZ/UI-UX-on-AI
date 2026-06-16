import type { SectionConfig, SectionKey } from "../types";

type NavigationButtonsProps = {
  sections: SectionConfig[];
  activeKey: SectionKey;
  onChange: (key: SectionKey) => void;
};

export function NavigationButtons({
  sections,
  activeKey,
  onChange,
}: NavigationButtonsProps) {
  return (
    <header className="top-bar">
      <nav className="navigation" aria-label="Personal website sections">
        {sections.map((section) => (
          <button
            key={section.key}
            type="button"
            className="nav-button"
            data-active={activeKey === section.key}
            onClick={() => onChange(section.key)}
          >
            <span>{section.label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}
