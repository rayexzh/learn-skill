# 学习农场 · Learning Farm

原创像素动画讲解视频，介绍学习 Skill 的十步路线与独立任务、延迟复测、续学记录。

## 成片规格

- 1080 × 1920，9:16，24fps，H.264 / yuv420p。
- 时长 3分52秒，共18个场景、52段中文字幕。
- 字幕直接烧录进画面，并附独立 SRT 和 JSON。
- 无旁白、无背景音乐；通过画面、角色对话和字幕讲解。
- 字幕最多两行，脚本按不超过每秒6个字符安排时长。该规则是制作选择，不是普遍阅读能力标准。

## 内容与文件

- [完整中文脚本](script.zh-CN.md)
- [字幕 SRT](captions.zh-CN.srt)
- [字幕 JSON](captions.zh-CN.json)
- [字幕时间与行数检查](caption-audit.json)
- [可编辑 Remotion 项目](project)

这套画面以农场销售额的学习目标贯穿叙事。角色、房屋、树木、作物和道具均为原创 SVG 像素图形，动画由帧号驱动。没有使用参考视频画面、游戏角色、游戏音乐或游戏贴图。

## 在本地编辑与导出

项目依赖 Node.js 和 npm。项目锁定 Remotion 4.0.533；第三方依赖遵循各自许可证。

```powershell
cd video/project
npm ci
npm run studio
npm run typecheck
npm run render
```

`src/story.ts` 保存标题、时长和中文字幕；`src/FarmArt.tsx` 保存原创像素场景；`src/LearningFarm.tsx` 保存布局与时间线。

中文字体默认使用 Windows 系统的 Microsoft YaHei；它不随仓库分发。在其他系统上请安装合适的中文字体并调整字体栈，再检查换行与布局。跨平台渲染尚未验证。

本仓库存放视频源代码和字幕。成片可作为外部发布素材；MP4 不进入 Git 版本记录。Skill 的中英文版本均在仓库中，视频字幕只有中文。

## 来源说明

十步流程灵感来源见仓库首页致谢。STORM 与学习方法研究支持部分设计，不验证整套流程，也不保证十倍提速。视频中的销售数据、对话和进度属于演示，不是用户学习成绩。
