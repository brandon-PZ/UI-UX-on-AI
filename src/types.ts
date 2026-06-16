export type SectionKey = "archive" | "workdesk" | "line";

export type CharacterPose = "archivePose" | "workdeskPose" | "linePose";

export type MotionDirection = "left" | "right" | "bottom";

export type SectionConfig = {
  key: SectionKey;
  label: string;
  eyebrow: string;
  characterPose: CharacterPose;
  backgroundClass: string;
  enterDirection: MotionDirection;
  exitDirection: MotionDirection;
};
