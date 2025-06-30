import React from 'react';
import { 
  Pencil, 
  Square, 
  Circle, 
  Type, 
  Eraser, 
  Move, 
  Undo, 
  Redo, 
  Grid, 
  Trash2 
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface ToolsPanelProps {
  activeTool: string;
  setActiveTool: (tool: string) => void;
  undo: () => void;
  redo: () => void;
  clearCanvas: () => void;
  toggleGrid: () => void;
  showGrid: boolean;
  historyIndex: number;
  history: any[][];
}

export function ToolsPanel({ 
  activeTool, 
  setActiveTool, 
  undo, 
  redo, 
  clearCanvas, 
  toggleGrid, 
  showGrid,
  historyIndex,
  history
}: ToolsPanelProps) {
  const tools = [
    { id: 'pencil', name: 'Pencil', icon: Pencil },
    { id: 'rectangle', name: 'Rectangle', icon: Square },
    { id: 'circle', name: 'Circle', icon: Circle },
    { id: 'text', name: 'Text', icon: Type },
    { id: 'eraser', name: 'Eraser', icon: Eraser },
    { id: 'move', name: 'Move', icon: Move }
  ];

  return (
    <Card>
      <div className="card-body p-3">
        <div className="d-flex flex-column gap-3">
          {tools.map((tool) => (
            <Button
              key={tool.id}
              variant={activeTool === tool.id ? 'primary' : 'secondary'}
              className="d-flex align-items-center justify-content-center"
              style={{ width: '40px', height: '40px' }}
              onClick={() => setActiveTool(tool.id)}
              title={tool.name}
            >
              <tool.icon size={20} />
            </Button>
          ))}
          <div className="border-top my-1"></div>
          <Button
            variant="secondary"
            className="d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
            onClick={undo}
            disabled={historyIndex < 0}
            title="Undo"
          >
            <Undo size={20} />
          </Button>
          <Button
            variant="secondary"
            className="d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
            onClick={redo}
            disabled={historyIndex >= history.length - 1}
            title="Redo"
          >
            <Redo size={20} />
          </Button>
          <div className="border-top my-1"></div>
          <Button
            variant="secondary"
            className="d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
            onClick={toggleGrid}
            title={showGrid ? "Hide Grid" : "Show Grid"}
          >
            <Grid size={20} />
          </Button>
          <Button
            variant="secondary"
            className="d-flex align-items-center justify-content-center"
            style={{ width: '40px', height: '40px' }}
            onClick={clearCanvas}
            title="Clear Canvas"
          >
            <Trash2 size={20} />
          </Button>
        </div>
      </div>
    </Card>
  );
}