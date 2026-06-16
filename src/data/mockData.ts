import type { SectionConfig } from "../types";

export const sections: SectionConfig[] = [
  {
    key: "archive",
    label: "Art Archive",
    eyebrow: "Private taste / 夜航档案",
    characterPose: "archivePose",
    backgroundClass: "theme-archive",
    enterDirection: "right",
    exitDirection: "left",
  },
  {
    key: "workdesk",
    label: "Workdesk",
    eyebrow: "Current projects / 桌面进度",
    characterPose: "workdeskPose",
    backgroundClass: "theme-workdesk",
    enterDirection: "left",
    exitDirection: "bottom",
  },
  {
    key: "line",
    label: "Line",
    eyebrow: "Outside world / 外部连线",
    characterPose: "linePose",
    backgroundClass: "theme-line",
    enterDirection: "right",
    exitDirection: "left",
  },
];

export const archiveData = {
  songs: [
    ["Blue Room", "Chet Baker"],
    ["Plastic Love", "Mariya Takeuchi"],
    ["夜に駆ける", "YOASOBI"],
    ["After Dark", "Mr.Kitty"],
    ["Lover, You Should've Come Over", "Jeff Buckley"],
    ["Midnight Pretenders", "Tomoko Aran"],
    ["Sweet Disposition", "The Temper Trap"],
    ["Aruarian Dance", "Nujabes"],
    ["十万嬉皮", "万能青年旅店"],
    ["The Adults Are Talking", "The Strokes"],
  ],
  books: [
    {
      title: "The Creative Act",
      author: "Rick Rubin",
      note: "像夜里整理抽屉，把直觉一格一格擦亮。",
    },
    {
      title: "局外人",
      author: "Albert Camus",
      note: "冷色的太阳，适合放在黑胶旁边。",
    },
    {
      title: "Design as Art",
      author: "Bruno Munari",
      note: "把日常里的小结构重新看一遍。",
    },
  ],
  quotes: [
    {
      quote: "我喜欢那些没有立刻解释自己的东西。",
      source: "archive note 024",
      comment: "for images, songs, and unfinished thoughts",
    },
    {
      quote: "The room becomes bigger when the music is small.",
      source: "late-night margin",
      comment: "headphones on, city muted",
    },
  ],
  frames: ["rain window", "subway blue", "lamp halo", "book shadow", "last scene"],
};

export const workdeskData = {
  projects: [
    {
      title: "Personal site system",
      category: "Frontend",
      status: "Prototype",
      description: "把个人身份拆成三个可旋转的交互界面。",
    },
    {
      title: "Research notebook",
      category: "Study",
      status: "Active",
      description: "整理技术实验、论文碎片和可复用图表。",
    },
    {
      title: "Visual archive tools",
      category: "Design ops",
      status: "Sketching",
      description: "让封面、照片、引用和项目材料更容易被索引。",
    },
  ],
  research: [
    "Human-computer interaction",
    "Creative coding",
    "Personal knowledge systems",
    "Market-aware product notes",
  ],
  timeline: [
    ["Jan", "Map identity sections"],
    ["Mar", "Build interaction prototype"],
    ["May", "Replace placeholders with real archive"],
    ["Next", "Export visual assets into Figma"],
  ],
  skills: [
    "React",
    "TypeScript",
    "CSS Motion",
    "Figma",
    "SVG",
    "Data notes",
    "Photography",
    "Research",
  ],
};

export const lineData = {
  cities: ["Singapore", "Shanghai", "Tokyo", "Chengdu", "Hong Kong"],
  photos: ["crosswalk", "glass tower", "train light", "market sign", "river dusk", "quiet cafe"],
  issues: [
    {
      title: "Public space",
      text: "关注城市中每个人如何被看见、被移动、被照顾。",
    },
    {
      title: "公益活动",
      text: "记录可以长期参与的小型行动，而不是短暂热闹。",
    },
    {
      title: "Tech culture",
      text: "观察工具、平台和创作者之间的关系变化。",
    },
  ],
  market: [
    ["AI infra", "watching compute, chips, and workflow adoption"],
    ["Consumer tech", "waiting for quieter, more personal interfaces"],
    ["Energy", "tracking battery, grid, and material stories"],
  ],
};
