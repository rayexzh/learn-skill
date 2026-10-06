import React from 'react';
import {Composition} from 'remotion';
import {LearningFarm,Chapter} from './LearningFarm';
import {durationSeconds,scenes} from './story';
export const Root = () => <>
  <Composition id="LearningFarm" component={LearningFarm} durationInFrames={durationSeconds*24} fps={24} width={1080} height={1920}/>
  <Composition id="ChapterPreview" component={Chapter} durationInFrames={16*24} fps={24} width={1080} height={1920} defaultProps={{scene:scenes[2],index:2}}/>
</>;
