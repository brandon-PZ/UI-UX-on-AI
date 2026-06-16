import type { SectionConfig, SectionKey } from "../types";
import { ArtArchiveSection } from "./sections/ArtArchiveSection";
import { WorkdeskSection } from "./sections/WorkdeskSection";
import { LineSection } from "./sections/LineSection";

type SectionViewProps = {
  sectionKey: SectionKey;
  config: SectionConfig;
  phase: "enter" | "exit";
};

export function SectionView({ sectionKey, config, phase }: SectionViewProps) {
  return (
    <section
      key={`${sectionKey}-${phase}`}
      className="section-view"
      data-phase={phase}
      data-motion={
        phase === "enter" ? config.enterDirection : config.exitDirection
      }
      aria-labelledby={`${sectionKey}-title`}
      aria-hidden={phase === "exit"}
    >
      <div className="section-heading">
        <p>{config.eyebrow}</p>
        <h1 id={`${sectionKey}-title`}>{config.label}</h1>
      </div>

      {sectionKey === "archive" && <ArtArchiveSection />}
      {sectionKey === "workdesk" && <WorkdeskSection />}
      {sectionKey === "line" && <LineSection />}
    </section>
  );
}
