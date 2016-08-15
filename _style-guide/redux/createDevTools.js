import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default function() {
  return createDevTools(
    <DockMonitor
        changePositionKey="ctrl-q"
        defaultIsVisible={ false }
        toggleVisibilityKey="ctrl-h">
      <LogMonitor />
    </DockMonitor>
  );
}
