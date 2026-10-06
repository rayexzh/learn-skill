import React from 'react';
import {interpolate} from 'remotion';

const P={ink:'#173c35',dark:'#285748',leaf:'#4c8556',mint:'#9fcf8a',grass:'#8cbe70',cream:'#fff2ce',gold:'#edba5d',wood:'#b37b4b',rust:'#d87756',sky:'#b8ddd2',water:'#72b9bd'};
const R=({x,y,w,h,c,...rest}:{x:number;y:number;w:number;h:number;c:string;[key:string]:unknown})=><rect x={x} y={y} width={w} height={h} fill={c} {...rest}/>;
const Label=({x,y,text,size=11,color=P.ink}:{x:number;y:number;text:string;size?:number;color?:string})=><text x={x} y={y} textAnchor="middle" fill={color} fontSize={size} fontWeight="700" fontFamily="Microsoft YaHei, Noto Sans CJK SC, sans-serif">{text}</text>;
const Panel=({x,y,w,h,children}:{x:number;y:number;w:number;h:number;children?:React.ReactNode})=><g><R x={x+2} y={y+3} w={w} h={h} c="#365442"/><R x={x} y={y} w={w} h={h} c={P.ink}/><R x={x+2} y={y+2} w={w-4} h={h-4} c={P.cream}/><R x={x+4} y={y+4} w={w-8} h={2} c="#fffbea"/>{children}</g>;

const sprite=[
'.....GGGGGG.....',
'...GGYYYYYYGG...',
'..GYYYYYYYYYYG..',
'.GYYYYYYYYYYYYG.',
'GGGGGGGGGGGGGGGG',
'...HHHHHHHHHH...',
'...HSSESS ESSH...'.replaceAll(' ',''),
'...HSSSSSSSSH...',
'....SSSRRSSS....',
'.....SSSSSS.....',
'...TTTTTTTTTT...',
'..TTTTCCCTTTTT..',
'.STTTCCCCCTTTS..',
'.SS.TCCCCCT.SS..',
'....TCCCCCT.....',
'....TCCCCCT.....',
'....TTTTTTT.....',
'....BB...BB.....',
'....BB...BB.....',
'...DDD...DDD....'];
const Player=({x,y,color=P.rust,walk=false,t=0,scale=1.8}:{x:number;y:number;color?:string;walk?:boolean;t?:number;scale?:number})=>{
  const colors:Record<string,string>={G:P.wood,Y:P.gold,H:'#533d30',S:'#f3c8a5',E:P.ink,R:'#d88976',T:color,C:P.cream,B:P.dark,D:P.ink};
  return <g transform={`translate(${Math.round(x-8*scale)} ${Math.round(y-20*scale)}) scale(${scale})`}>
    <ellipse cx={8} cy={21} rx={10} ry={2} fill="#284f3b" opacity={0.2}/>
    {sprite.flatMap((row,yy)=>[...row].map((v,xx)=>v==='.'?null:<R key={`${xx}-${yy}`} x={xx} y={yy+(walk&&yy>=17?Math.round(Math.sin(t*7+(xx<8?0:Math.PI))):0)} w={1} h={1} c={colors[v]??colors.S}/>))}
  </g>;
};
const Bot=({x,y,t=0}: {x:number;y:number;t?:number})=><g transform={`translate(${x-9},${y-26})`}>
  <ellipse cx={9} cy={29} rx={12} ry={3} fill={P.ink} opacity={0.15}/>
  <R x={7} y={0} w={4} h={4} c={P.dark}/><R x={4} y={-2} w={4} h={3} c={P.leaf}/><R x={10} y={-3} w={5} h={3} c={P.mint}/>
  <R x={0} y={5} w={18} h={16} c={P.ink}/><R x={2} y={7} w={14} h={12} c={P.mint}/><R x={4} y={9} w={10} h={6} c={P.dark}/>
  <R x={5} y={10} w={2} h={(Math.floor(t*2)%10===0)?1:2} c={P.cream}/><R x={11} y={10} w={2} h={(Math.floor(t*2)%10===0)?1:2} c={P.cream}/>
  <R x={4} y={21} w={3} h={5} c={P.dark}/><R x={11} y={21} w={3} h={5} c={P.dark}/><R x={-3} y={11} w={3} h={7} c={P.gold}/><R x={18} y={11} w={3} h={7} c={P.gold}/>
</g>;
const Tree=({x,y,s=1}:{x:number;y:number;s?:number})=><g transform={`translate(${x} ${y}) scale(${s})`}><R x={-3} y={-12} w={6} h={17} c={P.wood}/><R x={-14} y={-34} w={28} h={20} c={P.dark}/><R x={-10} y={-40} w={20} h={30} c={P.leaf}/><R x={-17} y={-29} w={34} h={14} c={P.leaf}/><R x={-9} y={-38} w={9} h={14} c={P.mint}/><R x={5} y={-26} w={5} h={5} c={P.gold}/></g>;
const House=({x,y}:{x:number;y:number})=><g transform={`translate(${x} ${y})`}><R x={0} y={-33} w={43} h={33} c={P.wood}/><R x={3} y={-29} w={37} h={26} c="#e9c490"/>{Array.from({length:6},(_,i)=><R key={i} x={3} y={-28+i*4} w={37} h={1} c="#c39461"/>)}<R x={-4} y={-36} w={51} h={7} c={P.rust}/><R x={0} y={-42} w={43} h={6} c={P.rust}/><R x={5} y={-48} w={33} h={6} c={P.rust}/><R x={10} y={-53} w={23} h={5} c={P.rust}/><R x={16} y={-58} w={11} h={5} c={P.rust}/><R x={16} y={-24} w={13} h={24} c={P.ink}/><R x={18} y={-22} w={9} h={22} c={P.dark}/><R x={23} y={-12} w={2} h={2} c={P.gold}/><R x={4} y={-24} w={9} h={11} c={P.dark}/><R x={6} y={-22} w={5} h={7} c={P.sky}/></g>;
const Book=({x,y,c=P.rust,s=1}:{x:number;y:number;c?:string;s?:number})=><g transform={`translate(${x} ${y}) scale(${s})`}><R x={0} y={0} w={18} h={24} c={P.ink}/><R x={2} y={2} w={14} h={20} c={c}/><R x={3} y={2} w={2} h={20} c={P.cream}/><R x={7} y={7} w={7} h={2} c={P.cream}/><R x={7} y={11} w={5} h={2} c={P.cream}/></g>;
const Seed=({x,y,selected=false}:{x:number;y:number;selected?:boolean})=><g transform={`translate(${x} ${y})`}><R x={0} y={0} w={22} h={28} c={selected?P.gold:P.wood}/><R x={2} y={2} w={18} h={24} c={P.cream}/><R x={4} y={4} w={14} h={5} c={selected?P.rust:P.leaf}/><R x={10} y={14} w={2} h={8} c={P.dark}/><R x={6} y={13} w={5} h={4} c={P.leaf}/><R x={12} y={11} w={5} h={4} c={P.mint}/></g>;
const Plant=({x,y,growth=1}:{x:number;y:number;growth?:number})=><g transform={`translate(${x} ${y})`}><R x={-1} y={-10*growth} w={3} h={10*growth} c={P.dark}/><R x={-8*growth} y={-11*growth} w={8*growth} h={5*growth} c={P.leaf}/><R x={2} y={-15*growth} w={8*growth} h={6*growth} c={P.mint}/>{growth>0.8?<><R x={-6} y={-7} w={5} h={5} c={P.rust}/><R x={4} y={-10} w={5} h={5} c={P.rust}/></>:null}</g>;
const Paper=({x,y,w=42,h=52,check=false}:{x:number;y:number;w?:number;h?:number;check?:boolean})=><g><R x={x+2} y={y+2} w={w} h={h} c={P.wood}/><R x={x} y={y} w={w} h={h} c={P.cream}/><R x={x+5} y={y+7} w={w-10} h={4} c={P.leaf}/>{Array.from({length:4},(_,i)=><R key={i} x={x+5} y={y+17+i*7} w={w-12-i%2*7} h={2} c="#b3aa87"/>)}{check?<path d={`M${x+w-20} ${y+h-13} l5 5 l10 -13`} stroke={P.leaf} strokeWidth={4} fill="none"/>:null}</g>;
const Bubble=({x,y,text,w=50}:{x:number;y:number;text:string;w?:number})=><g><Panel x={x-w/2} y={y-23} w={w} h={22}><Label x={x} y={y-8} text={text} size={10}/></Panel><R x={x-2} y={y-1} w={4} h={4} c={P.ink}/></g>;
const Spark=({x,y,t}:{x:number;y:number;t:number})=><g opacity={Math.max(0,Math.sin(t*4))}><R x={x-1} y={y-4} w={2} h={8} c={P.cream}/><R x={x-4} y={y-1} w={8} h={2} c={P.cream}/></g>;

export const FarmArt=({mode,t,seconds}:{mode:string;t:number;seconds:number})=>{
  const progress=Math.min(t/seconds,1);
  const pulse=Math.sin(t*2);
  const night=mode==='review';
  const actorX=mode==='opening'?interpolate(t,[0,6],[76,130],{extrapolateRight:'clamp'}):mode==='transfer'?interpolate(t,[0,7],[56,140],{extrapolateRight:'clamp'}):130;
  const walk=mode==='opening'&&t<6||mode==='transfer'&&t<7;
  return <svg viewBox="0 0 270 240" width="1080" height="960" shapeRendering="crispEdges" style={{overflow:'visible'}}>
    <R x={0} y={0} w={270} h={240} c={night?'#315656':P.sky}/>
    <R x={0} y={74} w={270} h={166} c={night?'#5b8054':P.grass}/>
    <path d="M0 78 H20 V70 H45 V64 H69 V78 H99 V68 H125 V61 H159 V74 H201 V65 H242 V74 H270 V95 H0Z" fill={night?P.dark:'#6fa475'}/>
    <R x={211} y={21} w={17} h={17} c={night?P.cream:'#f7da8a'}/><R x={207} y={25} w={25} h={9} c={night?P.cream:'#f7da8a'}/>
    {!night&&[0,1,2].map(i=><g key={i} transform={`translate(${Math.round((i*89+t*1.6)%330-30)} ${25+i%2*16})`}><R x={0} y={4} w={28} h={7} c="#e8f3df"/><R x={5} y={0} w={16} h={14} c="#e8f3df"/></g>)}
    {night&&Array.from({length:14},(_,i)=><Spark key={i} x={20+i*17} y={12+(i*13)%48} t={t+i}/>)}
    <R x={0} y={202} w={270} h={38} c={night?'#52744b':'#77a85f'}/>
    <path d="M0 162 H92 V175 H177 V148 H270 V168 H195 V194 H74 V180 H0Z" fill="#d8b77d"/>
    {Array.from({length:26},(_,i)=><R key={i} x={14+(i*53)%245} y={93+(i*23)%138} w={2} h={3} c={night?'#72925c':'#a4cc7c'}/>)}
    <House x={22} y={119}/><Tree x={242} y={127} s={0.9}/><Tree x={13} y={195} s={0.75}/><Tree x={250} y={228} s={0.65}/>
    <R x={219} y={180} w={40} h={16} c={P.dark}/><R x={219} y={178} w={38} h={14} c={P.water}/><R x={226+Math.round(pulse*2)} y={182} w={12} h={2} c={P.sky}/>
    {Array.from({length:8},(_,i)=><g key={i}><R x={25+i*26} y={227-i%2*5} w={2} h={6} c={P.dark}/><R x={23+i*26} y={224-i%2*5} w={6} h={4} c={i%2?P.cream:P.gold}/></g>)}
    <SceneObjects mode={mode} t={t} p={progress}/>
    {['opening','goal','brief','resources','core','reference','transfer','short','resume','evidence','ending'].includes(mode)&&<Player x={actorX} y={195} walk={walk} t={t}/>}
    {['opening','goal','brief','verify','resources','core','reference','transfer','short','resume','evidence','ending'].includes(mode)&&<Bot x={mode==='transfer'?58:184} y={195} t={t}/>}
    {mode==='transfer'&&<Bubble x={58} y={150} text="我等你" w={46}/>}
    {['opening','ending'].includes(mode)&&[0,1,2].map(i=><Spark key={i} x={101+i*28} y={133+(i%2)*15} t={t+i}/>)}
  </svg>;
};

const SceneObjects=({mode,t,p}:{mode:string;t:number;p:number})=>{
  if(mode==='opening')return <><Panel x={75} y={72} w={122} h={69}><Label x={136} y={94} text="学习农场" size={17}/><Label x={136} y={116} text="练习，才会生长" size={10}/></Panel>{[0,1,2].map(i=><Plant key={i} x={104+i*28} y={216} growth={Math.min(1,0.25+p*1.4-i*.1)}/>)}<Book x={52} y={174} s={1.1}/></>;
  if(mode==='goal')return <><Panel x={82} y={67} w={150} h={76}><Label x={157} y={87} text="今日任务" size={13}/><Label x={157} y={108} text="独立汇总销售额" size={11}/><Label x={157} y={129} text="基础？  时间？" size={10}/></Panel><R x={107} y={145} w={5} h={22} c={P.wood}/><R x={200} y={145} w={5} h={22} c={P.wood}/></>;
  if(mode==='perspectives'){
    const roles=[{x:46,y:167,n:'实践者',c:P.rust,b:'操作坑'},{x:86,y:119,n:'怀疑者',c:P.dark,b:'凭什么'},{x:144,y:99,n:'经济学家',c:P.gold,b:'钱去哪'},{x:200,y:124,n:'历史学家',c:'#79999c',b:'旧例子'},{x:225,y:180,n:'学者',c:'#718650',b:'找证据'}];
    const active=Math.min(4,Math.floor(t/2.4));
    return <><R x={96} y={149} w={89} h={29} c={P.wood}/><R x={92} y={143} w={97} h={26} c={P.gold}/><Paper x={112} y={147} w={27} h={18}/><Label x={145} y={203} text="同一个主题" size={12}/>{roles.map((r,i)=><g key={r.n}><Player x={r.x} y={r.y} color={r.c} scale={1.4}/><Label x={r.x} y={r.y+14} text={r.n} size={9}/>{i===active&&<Bubble x={r.x} y={r.y-36} text={r.b} w={42}/>}</g>)}</>;
  }
  if(mode==='disagreements')return <><Panel x={41} y={83} w={82} h={50}><Label x={82} y={105} text="先练" size={15}/><Label x={82} y={122} text="任务紧急" size={9}/></Panel><Panel x={144} y={83} w={82} h={50}><Label x={185} y={105} text="先补基础" size={12}/><Label x={185} y={122} text="缺少前提" size={9}/></Panel><path d="M103 144L132 158L161 144" stroke={P.ink} strokeWidth={3} fill="none"/><Panel x={87} y={168} w={96} h={30}><Label x={135} y={188} text="看条件与证据" size={10}/></Panel><Player x={58} y={194} color={P.rust}/><Player x={212} y={194} color={P.dark}/></>;
  if(mode==='brief')return <><Paper x={91} y={66} w={92} h={97} check={p>.6}/><Label x={137} y={83} text="一页简报" size={12}/><Label x={137} y={105} text="重点" size={11}/><Label x={137} y={126} text="争议" size={11}/><Label x={137} y={147} text="下一步" size={11}/>{[0,1].map(i=><Book key={i} x={43+i*167} y={139} c={i?P.leaf:P.rust}/>)}<path d="M64 143L84 123 M203 143L190 123" stroke={P.cream} strokeWidth={3}/></>;
  if(mode==='verify')return <><Paper x={78} y={77} w={109} h={76}/><Label x={132} y={96} text="关键结论" size={12}/><Label x={132} y={133} text={p>.55?'来源：待核查':'可靠度：9分？'} size={11}/><g transform={`translate(${Math.round(170+Math.sin(t)*5)} ${Math.round(97+Math.cos(t)*6)})`}><circle cx={0} cy={0} r={15} fill={P.sky} fillOpacity={0.4} stroke={P.ink} strokeWidth={4}/><path d="M10 12L27 30" stroke={P.wood} strokeWidth={7}/></g><Panel x={65} y={158} w={137} h={27}><Label x={133} y={176} text="原文是否支持？" size={11}/></Panel></>;
  if(mode==='resources')return <><R x={55} y={130} w={167} h={12} c={P.wood}/>{[0,1,2,3,4].map(i=><g key={i} opacity={p>.45&&i>0?.45:1}><Seed x={60+i*32} y={96} selected={i===0}/></g>)}<Panel x={76} y={60} w={121} h={28}><Label x={136} y={79} text="先用一份主资料" size={10}/></Panel>{p>.4&&<g><Seed x={94} y={150} selected/><Label x={105} y={143} text="今天就练" size={10}/></g>}</>;
  if(mode==='ladder')return <>{[0,1,2,3,4].map(i=><g key={i}><R x={37+i*40} y={194-i*22} w={34} h={8+i*22} c={P.wood}/><R x={37+i*40} y={192-i*22} w={34} h={5} c={i<=Math.floor(p*4)?P.gold:P.cream}/><Label x={54+i*40} y={185-i*22} text={['字段','计算','汇总','查错','独立'][i]} size={10}/></g>)}<Player x={54+Math.min(4,Math.floor(p*5))*40} y={191-Math.min(4,Math.floor(p*5))*22} scale={1.6} walk t={t}/><Label x={138} y={66} text="每一级，都能检查" size={12}/></>;
  if(mode==='core')return <><Panel x={66} y={64} w={145} h={31}><Label x={138} y={85} text="销售额 = 销量 × 单价" size={10}/></Panel><R x={74} y={115} w={126} h={48} c={P.wood}/>{[0,1,2,3,4,5].map(i=><g key={i}><R x={79+(i%3)*40} y={121+Math.floor(i/3)*22} w={31} h={17} c="#7e5940"/><Plant x={94+(i%3)*40} y={137+Math.floor(i/3)*22} growth={.3+p*.7}/></g>)}<R x={213} y={126} w={18} h={29} c={P.gold}/><R x={216} y={130} w={12} h={9} c={P.cream}/></>;
  if(mode==='quiz'){
    const feedback=p>.5;
    return <><Panel x={55} y={58} w={161} h={81}><Label x={136} y={78} text="草莓销售小测" size={12}/><Label x={136} y={105} text={feedback?'3 × 20 = 60 元':'3 箱 × 20 元/箱 = ?'} size={13}/><Label x={136} y={126} text={feedback?'示例作答后，再反馈':'先尝试，别急着看答案'} size={9}/></Panel><Player x={88} y={194}/><Bot x={181} y={194} t={t}/><Bubble x={88} y={152} text={feedback?'60 元':'我想想'} w={48}/>{feedback&&<Bubble x={181} y={151} text="理由呢？" w={52}/>}</>;
  }
  if(mode==='explain')return <><Player x={79} y={194}/><Player x={193} y={194} color={P.leaf} scale={1.25}/><Bubble x={85} y={139} text="每箱20元" w={75}/><Bubble x={194} y={145} text={p>.45?'三份相加！':'为什么乘？'} w={69}/>{[0,1,2].map(i=><g key={i}><R x={105+i*20} y={158} w={17} h={18} c={P.wood}/><R x={107+i*20} y={160} w={13} h={13} c={P.rust}/><Label x={113+i*20} y={173} text="20" size={8} color={P.cream}/></g>)}<Panel x={52} y={65} w={169} h={35}><Label x={136} y={88} text="20 + 20 + 20 = 60" size={12}/></Panel></>;
  if(mode==='reference')return <><R x={71} y={75} w={128} h={79} c={P.ink}/><R x={75} y={79} w={120} h={71} c={P.wood}/><R x={88} y={62} w={94} h={20} c={P.ink}/><R x={94} y={67} w={82} h={13} c={P.cream}/>{['定义','步骤','例子','易错'].map((label,i)=><g key={i}><R x={82+i*28} y={92} w={22} h={38} c={P.cream}/><Label x={93+i*28} y={145} text={label} size={8}/><R x={86+i*28} y={102} w={14} h={3} c={P.leaf}/></g>)}<Label x={135} y={60} text="随身速查表" size={12}/></>;
  if(mode==='transfer')return <><Panel x={88} y={70} w={136} h={76}><Label x={155} y={88} text="新任务：两种商品" size={10}/><Label x={155} y={110} text="草莓 3箱 × 20元" size={10}/><Label x={155} y={129} text="南瓜 2箱 × 15元" size={10}/></Panel><R x={84} y={207} w={118} h={12} c={P.wood}/><Label x={144} y={201} text="独立算出总销售额" size={10}/></>;
  if(mode==='review')return <><Panel x={61} y={76} w={151} h={78}><Label x={136} y={96} text="复习日历" size={13}/>{['次日','几天后','一周后'].map((l,i)=><g key={i}><R x={69+i*47} y={107} w={41} h={38} c={Math.floor(p*3)===i?P.gold:'#d6ddaf'}/><Label x={89+i*47} y={131} text={l} size={9}/></g>)}</Panel><Player x={100} y={196}/><Bot x={181} y={196} t={t}/><Bubble x={100} y={169} text="再试新题" w={58}/></>;
  if(mode==='short')return <><Panel x={34} y={72} w={202} h={71}><Label x={135} y={92} text="精简路线" size={13}/>{['目标','例子','练习','反馈','复测'].map((l,i)=><g key={i}><R x={42+i*38} y={106} w={32} h={24} c={Math.floor(p*5)===i?P.gold:'#d6ddaf'}/><Label x={58+i*38} y={123} text={l} size={9}/></g>)}</Panel><Label x={136} y={159} text="小主题，也能认真练" size={11}/></>;
  if(mode==='resume')return <><Paper x={83} y={64} w={103} h={97}/><Label x={134} y={83} text="续学便签" size={12}/><Label x={134} y={108} text="已经会：计算" size={10}/><Label x={134} y={130} text="还要练：汇总" size={10}/><Label x={134} y={151} text="下次：一道新题" size={10}/></>;
  if(mode==='evidence')return <><Panel x={47} y={69} w={177} h={86}><Label x={135} y={92} text="设计依据" size={13}/><Label x={135} y={115} text="多视角 · 练习测试 · 间隔复习" size={8}/><Label x={135} y={142} text="整套流程：仍需实际检验" size={10}/></Panel><Book x={33} y={148} c={P.leaf}/><Book x={219} y={150}/></>;
  if(mode==='ending')return <><Panel x={68} y={67} w={140} h={68}><Label x={138} y={91} text="学习 Skill" size={16}/><Label x={138} y={115} text="$learn" size={17}/></Panel>{[0,1,2,3].map(i=><Plant key={i} x={86+i*31} y={219} growth={1}/>)}<Bubble x={131} y={151} text="开始练吧" w={75}/></>;
  return null;
};
