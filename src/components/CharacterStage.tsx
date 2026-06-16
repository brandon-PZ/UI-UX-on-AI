import type { CharacterPose } from "../types";
import archiveCharacter from "../assets/characters/cutout/archive.png";
import lineCharacter from "../assets/characters/cutout/line.png";
import workdeskCharacter from "../assets/characters/cutout/workdesk.png";

type CharacterStageProps = {
  pose: CharacterPose;
  previousPose: CharacterPose | null;
  direction: "left" | "right" | "center";
};

const characterByPose = {
  archivePose: {
    src: archiveCharacter,
    alt: "Cartoon portrait reading with headphones on a swivel chair",
    label: "Art Archive character",
  },
  workdeskPose: {
    src: workdeskCharacter,
    alt: "Cartoon portrait writing in a notebook on a swivel chair",
    label: "Workdesk character",
  },
  linePose: {
    src: lineCharacter,
    alt: "Cartoon portrait holding a camera on a swivel chair",
    label: "Line character",
  },
} satisfies Record<CharacterPose, { src: string; alt: string; label: string }>;

export function CharacterStage({
  pose,
  previousPose,
  direction,
}: CharacterStageProps) {
  const character = characterByPose[pose];
  const previousCharacter = previousPose ? characterByPose[previousPose] : null;

  return (
    <figure
      className="character-stage"
      data-pose={pose}
      data-transition={direction}
      data-has-previous={previousCharacter ? "true" : "false"}
      aria-label={character.label}
    >
      <div className="stage-shadow" />
      {previousCharacter && (
        <img
          className="character-image character-image--previous"
          src={previousCharacter.src}
          alt=""
          aria-hidden="true"
        />
      )}
      <img
        key={pose}
        className="character-image character-image--current"
        src={character.src}
        alt={character.alt}
      />
    </figure>
  );
}
