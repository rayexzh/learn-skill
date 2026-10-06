export type SceneData = {
  id: string; seconds: number; chapter: string; title: string; subtitle: string;
  mode: string; note: string; cues: string[];
};

// All scenes intentionally share one data-driven drawing template.
const authoredScenes: SceneData[] = [
  {id:'opening',seconds:8,chapter:'学习农场',title:'把知识种成能力',subtitle:'一套可以亲自练的 AI 学习方法',mode:'opening',note:'看过教程 ≠ 独立会做',cues:['收藏了很多教程，\n动手时还是不会？','来一座学习农场：\n种下目标，练出能力。']},
  {id:'goal',seconds:10,chapter:'先定目标',title:'今天要收获什么？',subtitle:'先说清基础、时间和具体任务',mode:'goal',note:'示例目标：独立汇总销售额',cues:['别只说“我要学 Excel”。\n先说最后想独立完成什么。','比如：把农场的销售记录，\n整理成一张销售汇总表。','再告诉 AI：你会什么，\n每天能学多久。']},
  {id:'perspectives',seconds:16,chapter:'第 01 步 · 建地图',title:'请来五种视角',subtitle:'同一个问题，换角度再看看',mode:'perspectives',note:'模拟视角帮助提问，观点要查证',cues:['实践者讲操作中的坑；\n怀疑者追问“凭什么”。','经济学家看钱流向哪里；\n历史学家找过去的例子。','学者找研究证据。\n每个视角都要交代理由和来源。','这是 AI 模拟的五种视角，\n不是真有五位专家替你核实。']},
  {id:'disagreements',seconds:12,chapter:'第 02 步 · 找分歧',title:'不同意见摆上桌',subtitle:'看证据，也看适用条件',mode:'disagreements',note:'都同意，也要核查',cues:['有人说“先练”，\n有人说“先补基础”。','让 AI 列出分歧、依据，\n以及什么证据能帮你判断。','大家都同意的结论，\n也不能直接当成事实。']},
  {id:'brief',seconds:12,chapter:'第 03 步 · 做简报',title:'把地图折成一页',subtitle:'讲清重点，也讲清下一步',mode:'brief',note:'短总结 + 关键发现 + 行动',cues:['把前面的资料压成简报：\n一句总结，几个关键发现。','哪些有证据？哪些有争议？\n分别适用于什么情况？','最后给一条行动：\n下一步，你具体要做什么？']},
  {id:'verify',seconds:12,chapter:'第 04 步 · 查证据',title:'拿起放大镜',subtitle:'重点检查最影响结论的事实',mode:'verify',note:'AI 打分，不等于事实可靠',cues:['请 AI 挑出最没把握的结论，\n说明缺少什么证据。','打开关键来源，\n看看它是否真的支持这句话。','AI 给自己打九分，\n也不能代替真实核查。']},
  {id:'resources',seconds:12,chapter:'第 05 步 · 选资料',title:'少拿几袋种子',subtitle:'一份主资料，其他按需补',mode:'resources',note:'资料要用起来，别只收藏',cues:['资料太多，就像背着种子\n一直逛，始终没下地。','先选一份适合你的主资料，\n需要时再补，通常不超过五份。','每份都说明：学哪部分，\n怎么练，大约花多久。']},
  {id:'ladder',seconds:12,chapter:'第 06 步 · 搭阶梯',title:'一次跨一小步',subtitle:'每一级都有可检查的过关条件',mode:'ladder',note:'已会的可跳过，缺的基础要补',cues:['把大目标拆成几个小阶段。\n先认字段，再计算，再汇总。','每一级都有练习、常见错，\n以及“怎样才算会”的标准。','太难就退一步补基础，\n别靠硬撑假装跟上。']},
  {id:'core',seconds:12,chapter:'第 07 步 · 抓核心',title:'先种一小块田',subtitle:'围绕真实任务，优先练关键技能',mode:'core',note:'抓重点，但不跳过必要基础',cues:['先练完成目标最需要的部分，\n尽快做出一个小结果。','比如先算“销量乘单价”，\n再把不同商品的销售额汇总。','“核心百分之二十”是取舍思路，\n不是固定效果，更不是速成保证。']},
  {id:'quiz',seconds:16,chapter:'第 08 步 · 自己答',title:'先答，再看提示',subtitle:'一次一道题，答完再反馈',mode:'quiz',note:'不会就分级提示，再换题检查',cues:['卖出三箱草莓，每箱二十元。\n销售额是多少？先自己想。','不要让 AI 连问题带答案，\n一次全部摆在你眼前。','你答完，它再指出哪里对、\n哪里错，必要时给一点提示。','纠错后换一道类似题，\n检查你是否真的理解了。']},
  {id:'explain',seconds:14,chapter:'第 09 步 · 自己讲',title:'讲给小苗听',subtitle:'自己的话，比照读答案更重要',mode:'explain',note:'解释 + 举例 + 适用条件',cues:['为什么是“箱数乘单价”？\n用自己的话解释给小苗听。','哪里含糊，AI 就补哪里，\n然后请你再讲一遍。','生活比喻帮你入门；\n准确的定义和边界也要讲清。']},
  {id:'reference',seconds:12,chapter:'第 10 步 · 收进背包',title:'留下随身小抄',subtitle:'关键步骤、常见错、几个例子',mode:'reference',note:'先凭记忆写，AI 再补漏',cues:['先自己回忆关键步骤，\n再让 AI 帮你补漏。','压成一页速查表：\n定义、步骤、例子和常见错。','它方便以后查阅，\n但笔记漂亮，不等于已经学会。']},
  {id:'transfer',seconds:14,chapter:'再加一关 · 独立做',title:'让 AI 在旁边等',subtitle:'换一个新任务，自己完成',mode:'transfer',note:'已讲解 → 提示下完成 → 独立完成',cues:['换一份新的销售记录。\n这次，请 AI 先不要帮忙。','自己算、自己汇总，\n再按事先说好的标准检查。','能独立做出新任务，\n才是比“我听懂了”更强的证据。']},
  {id:'review',seconds:14,chapter:'再加一关 · 隔天测',title:'几天后，再回来',subtitle:'记得住，也能继续用',mode:'review',note:'复习间隔按表现调整',cues:['今天会了，不代表过几天还会。\n隔一段时间，再试一道新题。','可以从第二天、几天后、\n一周后开始，按表现调整。','学得快不快，要看独立完成\n花多久，以及之后还会不会。']},
  {id:'short',seconds:12,chapter:'日常用法',title:'不用每次走十步',subtitle:'小主题走精简路线就够了',mode:'short',note:'目标 → 例子 → 练习 → 反馈 → 复测',cues:['学一个公式或操作，\n不必每次先开“五角色大会”。','目标、例子、自己练、纠错，\n再解释，再做新题。','研究陌生行业时，\n再打开完整十步路线。']},
  {id:'resume',seconds:10,chapter:'保存进度',title:'留一张续学便签',subtitle:'下次从薄弱点继续',mode:'resume',note:'Skill 是流程，不是永久记忆',cues:['暂停时，记下学到哪里、\n哪里还不会、下次练什么。','把续学记录带到下次对话。\n换主题，也能重复用这套流程。']},
  {id:'evidence',seconds:10,chapter:'方法的边界',title:'有依据，也有边界',subtitle:'整套流程仍需要实际试用',mode:'evidence',note:'不承诺“十倍速”，不冒充学会',cues:['多视角研究参考 STORM；\n练习测试和间隔复习参考学习研究。','这些支持部分设计，\n没有证明整套流程能快十倍。']},
  {id:'ending',seconds:10,chapter:'开始你的第一块田',title:'今天，练一个小目标',subtitle:'把学习 Skill 带进下一次对话',mode:'ending',note:'开源：github.com/rayexzh/learn-skill',cues:['用学习 Skill 带我学一个主题。\n说清基础、时间和独立任务。','让 AI 帮你找路，\n让自己的练习长出能力。']},
];
// Silent explainers need time to read. Keep every authored cue at <= 6 chars/sec.
export const scenes:SceneData[]=authoredScenes.map(scene=>({
  ...scene,
  seconds:Math.max(scene.seconds,Math.ceil(Math.max(...scene.cues.map(c=>[...c.replaceAll('\n','')].length))/6*scene.cues.length))
}));
export const durationSeconds=scenes.reduce((sum,s)=>sum+s.seconds,0);
export const sceneStarts=scenes.map((_,i)=>scenes.slice(0,i).reduce((sum,s)=>sum+s.seconds,0));
export const captions=scenes.flatMap((s,i)=>s.cues.map((text,j)=>({
  text,startMs:(sceneStarts[i]+j*s.seconds/s.cues.length)*1000,
  endMs:(sceneStarts[i]+(j+1)*s.seconds/s.cues.length)*1000,
  timestampMs:null,confidence:null
})));
