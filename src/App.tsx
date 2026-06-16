import { useEffect, useMemo, useRef, useState } from "react";
import { NavigationButtons } from "./components/NavigationButtons";
import { CharacterStage } from "./components/CharacterStage";
import { SectionView } from "./components/SectionView";
import { BlackCatCompanion } from "./components/BlackCatCompanion";
import { sections } from "./data/mockData";
import type { CharacterPose, SectionKey } from "./types";

type CharacterTransitionDirection = "left" | "right" | "center";

const sectionOrder: SectionKey[] = ["archive", "workdesk", "line"];

function App() {
  const [activeKey, setActiveKey] = useState<SectionKey>("archive");
  const [leavingKey, setLeavingKey] = useState<SectionKey | null>(null);
  const [previousPose, setPreviousPose] = useState<CharacterPose | null>(null);
  const [characterDirection, setCharacterDirection] =
    useState<CharacterTransitionDirection>("center");
  const leavingTimer = useRef<number | null>(null);
  const activeSection = useMemo(
    () => sections.find((section) => section.key === activeKey) ?? sections[0],
    [activeKey],
  );
  const leavingSection = useMemo(
    () => sections.find((section) => section.key === leavingKey) ?? null,
    [leavingKey],
  );

  const handleSectionChange = (nextKey: SectionKey) => {
    if (nextKey === activeKey) return;

    if (leavingTimer.current !== null) {
      window.clearTimeout(leavingTimer.current);
    }

    const currentIndex = sectionOrder.indexOf(activeKey);
    const nextIndex = sectionOrder.indexOf(nextKey);
    setPreviousPose(activeSection.characterPose);
    setCharacterDirection(nextIndex > currentIndex ? "right" : "left");
    setLeavingKey(activeKey);
    setActiveKey(nextKey);
    leavingTimer.current = window.setTimeout(() => {
      setLeavingKey(null);
      setPreviousPose(null);
      setCharacterDirection("center");
      leavingTimer.current = null;
    }, 820);
  };

  useEffect(() => {
    return () => {
      if (leavingTimer.current !== null) {
        window.clearTimeout(leavingTimer.current);
      }
    };
  }, []);

  return (
    <main className={`app-shell ${activeSection.backgroundClass}`}>
      <div className="site-frame">
        <div className="ambient-layer" aria-hidden="true">
          <div className="stars" />
          <div className="sun-stripes" />
          <div className="line-field" />
        </div>

        <NavigationButtons
          sections={sections}
          activeKey={activeKey}
          onChange={handleSectionChange}
        />

        <div className="live-region" aria-live="polite">
          Current section: {activeSection.label}
        </div>

        {leavingSection && (
          <SectionView
            sectionKey={leavingSection.key}
            config={leavingSection}
            phase="exit"
          />
        )}
        <SectionView
          sectionKey={activeKey}
          config={activeSection}
          phase="enter"
        />
        <CharacterStage
          pose={activeSection.characterPose}
          previousPose={previousPose}
          direction={characterDirection}
        />
        <BlackCatCompanion mood={activeKey} />
      </div>
    </main>
  );
}

export default App;
