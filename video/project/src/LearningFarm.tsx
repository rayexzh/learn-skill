import React from 'react';
import {AbsoluteFill, Sequence, interpolate, useCurrentFrame, useVideoConfig} from 'remotion';
import {FarmArt} from './FarmArt';
import {scenes,sceneStarts,SceneData} from './story';

const wrap=(text:string,max=19)=>text.split('\n').flatMap(line=>{
  const chars=[...line]; const result:string[]=[];
  while(chars.length)result.push(chars.splice(0,max).join(''));
  return result;
});

export const Chapter=({scene,index}:{scene:SceneData;index:number})=>{
  const frame=useCurrentFrame(); const {fps}=useVideoConfig(); const t=frame/fps;
  const cue=Math.min(scene.cues.length-1,Math.floor(t/scene.seconds*scene.cues.length));
  const opacity=interpolate(frame,[0,8,scene.seconds*fps-7,scene.seconds*fps-1],[0,1,1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
  return <AbsoluteFill style={{backgroundColor:'#173c35',color:'#fff2ce',fontFamily:'Microsoft YaHei, Noto Sans CJK SC, sans-serif',opacity}}>
    <div style={{position:'absolute',left:76,top:76,display:'flex',alignItems:'center',gap:18}}>
      <svg width="36" height="40" viewBox="0 0 18 20" shapeRendering="crispEdges"><rect x="8" y="6" width="3" height="14" fill="#edba5d"/><rect x="1" y="3" width="8" height="6" fill="#9fcf8a"/><rect x="11" y="0" width="7" height="7" fill="#9fcf8a"/></svg>
      <span style={{fontSize:33,fontWeight:700,letterSpacing:3}}>学习农场</span>
      <span style={{fontSize:28,color:'#c0d7b0',marginLeft:18}}>把知识种成能力</span>
    </div>
    <div style={{position:'absolute',left:76,top:163,fontSize:37,color:'#edba5d',fontWeight:700}}>{scene.chapter}</div>
    <div style={{position:'absolute',left:74,top:231,width:904,fontSize:78,fontWeight:900,lineHeight:1.25,letterSpacing:1}}>{scene.title}</div>
    <div style={{position:'absolute',left:76,top:350,width:865,fontSize:38,lineHeight:1.45,color:'#c8deb5'}}>{scene.subtitle}</div>
    <div style={{position:'absolute',top:457,left:0}}><FarmArt mode={scene.mode} t={t} seconds={scene.seconds}/></div>
    <div style={{position:'absolute',left:72,top:1450,width:880,minHeight:60,borderLeft:'8px solid #edba5d',paddingLeft:25,fontSize:35,lineHeight:1.5,color:'#edba5d',fontWeight:700}}>{scene.note}</div>
    <div data-caption style={{position:'absolute',left:74,top:1551,width:882,fontSize:45,fontWeight:700,lineHeight:1.62,textAlign:'left'}}>
      {wrap(scene.cues[cue]).map((line,i)=><div key={i}>{line}</div>)}
    </div>
    <div style={{position:'absolute',left:76,top:1755,width:880,display:'flex',gap:8}}>{scenes.map((s,i)=><div key={s.id} style={{height:10,flex:1,background:i<index?'#9fcf8a':i===index?'#edba5d':'#36584c'}}/>)}</div>
    <div style={{position:'absolute',left:76,top:1788,width:880,display:'flex',justifyContent:'space-between',fontSize:26,color:'#c0d7b0'}}><span>原创像素讲解 · 中文字幕</span><span>{String(index+1).padStart(2,'0')} / {scenes.length}</span></div>
  </AbsoluteFill>;
};

export const LearningFarm=()=>{
  const {fps}=useVideoConfig();
  return <AbsoluteFill>{scenes.map((scene,index)=><Sequence key={scene.id} name={scene.chapter} from={sceneStarts[index]*fps} durationInFrames={scene.seconds*fps} premountFor={fps}><Chapter scene={scene} index={index}/></Sequence>)}</AbsoluteFill>;
};
