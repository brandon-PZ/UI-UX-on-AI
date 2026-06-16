# Interactive Personal Website Template

一个桌面端优先的 React + Vite + TypeScript 个人网站模板。它实现了三段式交互场景、中心伪 3D 人物、鼠标响应黑猫、可替换占位图和可导入设计工具继续微调的 SVG 资产结构。

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Editable Assets

可编辑源资产放在 `src/assets/editable/`：

- `character-stage.svg`: 人物、椅子和姿态层的 Figma/SVG 起点。
- `black-cat.svg`: 黑猫 companion 的可编辑形状。
- `record-player.svg`: 唱片机装饰元素。
- `map-lines.svg`: Line 场景的地图/连接线装饰。
- `placeholder-frame.svg`: 封面、摄影、电影帧占位图框。

首版组件使用与这些 SVG 相同的分层命名和视觉结构。后续可以用 Figma 导出的 SVG 覆盖这些文件，或者把对应 TSX 组件中的 inline SVG 替换为真实资产。

## Character Images

三张中心人物图放在 `src/assets/characters/`：

- `raw/`: 保留原始白底 PNG。
- `cutout/`: 当前网页使用的透明背景 PNG。

对应关系：

- `workdesk.png`: Workdesk 页面。
- `archive.png`: Art Archive 页面。
- `line.png`: Line 页面。

如果之后重新抠图或在 Figma/Photoshop 微调，只要保持同名文件覆盖 `cutout/` 里的 PNG，网页会自动使用新版图片。

## Replace With Spline Later

如果之后想把中心人物换成 Spline 场景，可以保留 `CharacterStage` 的外层尺寸、z-index 和 pose 接口，把内部的 SVG 层替换为 Spline embed 或 `@splinetool/react-spline` 组件。当前版本不直接引入 Spline 依赖。

## Content

Mock data 位于 `src/data/mockData.ts`。导航和模块标题保留英文，卡片内容采用中英混合，方便后续替换成真实个人内容。
