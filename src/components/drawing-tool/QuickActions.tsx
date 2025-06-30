import React from 'react';
import { Save, Download, Trash2 } from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

interface QuickActionsProps {
  saveDrawing: () => void;
  downloadDrawing: () => void;
  clearCanvas: () => void;
}

export function QuickActions({ saveDrawing, downloadDrawing, clearCanvas }: QuickActionsProps) {
  return (
    <Card style={{ width: '250px' }}>
      <div className="card-body p-3">
        <h6 className="fw-bold text-deep-red mb-3">Quick Actions</h6>
        <div className="d-grid gap-2">
          <Button size="sm" onClick={saveDrawing}>
            <Save size={14} className="me-1" />
            Save Drawing
          </Button>
          <Button size="sm" variant="secondary" onClick={downloadDrawing}>
            <Download size={14} className="me-1" />
            Download as PNG
          </Button>
          <Button size="sm" variant="secondary" onClick={clearCanvas}>
            <Trash2 size={14} className="me-1" />
            Clear Canvas
          </Button>
        </div>
      </div>
    </Card>
  );
}