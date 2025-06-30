import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  Grid, 
  X, 
  Plus, 
  Minus, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  Bold, 
  Italic, 
  Underline 
} from 'lucide-react';
import { Button } from '../ui/Button';

interface CanvasAreaProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  containerRef: React.RefObject<HTMLDivElement>;
  canvasSize: { width: number; height: number };
  zoom: number;
  showGrid: boolean;
  isDrawing: boolean;
  currentShape: any;
  shapes: any[];
  selectedShape: number | null;
  activeTool: string;
  startDrawing: (e: React.MouseEvent<HTMLCanvasElement>) => void;
  draw: (e: React.MouseEvent<HTMLCanvasElement>) => void;
  endDrawing: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  resetZoom: () => void;
  isAddingText: boolean;
  textInput: string;
  setTextInput: (text: string) => void;
  handleTextSubmit: () => void;
  setIsAddingText: (isAdding: boolean) => void;
  setCurrentShape: (shape: any) => void;
  fontStyle: { bold: boolean; italic: boolean; underline: boolean };
  setFontStyle: (style: { bold: boolean; italic: boolean; underline: boolean }) => void;
  textAlign: string;
  setTextAlign: (align: string) => void;
  fontSize: number;
  setFontSize: (size: number) => void;
}

export function CanvasArea({
  canvasRef,
  containerRef,
  canvasSize,
  zoom,
  showGrid,
  isDrawing,
  currentShape,
  shapes,
  selectedShape,
  activeTool,
  startDrawing,
  draw,
  endDrawing,
  zoomIn,
  zoomOut,
  resetZoom,
  isAddingText,
  textInput,
  setTextInput,
  handleTextSubmit,
  setIsAddingText,
  setCurrentShape,
  fontStyle,
  setFontStyle,
  textAlign,
  setTextAlign,
  fontSize,
  setFontSize
}: CanvasAreaProps) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid if enabled
    if (showGrid) {
      drawGrid(ctx);
    }

    // Draw all shapes
    shapes.forEach((shape, index) => {
      drawShape(ctx, shape, index === selectedShape);
    });

    // Draw current shape being created
    if (currentShape) {
      drawShape(ctx, currentShape, false);
    }
  }, [shapes, currentShape, showGrid, selectedShape, zoom]);

  const drawGrid = (ctx: CanvasRenderingContext2D) => {
    const gridSize = 20;
    const width = canvasSize.width;
    const height = canvasSize.height;

    ctx.beginPath();
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 0.5;

    // Draw vertical lines
    for (let x = 0; x <= width; x += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
    }

    // Draw horizontal lines
    for (let y = 0; y <= height; y += gridSize) {
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }

    ctx.stroke();
  };

  const drawShape = (ctx: CanvasRenderingContext2D, shape: any, isSelected: boolean) => {
    const { type, x, y, width, height, points, color, lineWidth, text, fontSize, fontStyle, textAlign } = shape;

    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = lineWidth;

    if (isSelected) {
      // Draw selection outline
      ctx.save();
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 2;
      ctx.setLineDash([5, 5]);
      ctx.strokeRect(x - 5, y - 5, width + 10, height + 10);
      ctx.restore();
    }

    switch (type) {
      case 'pencil':
        if (points.length < 2) return;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();
        break;
      case 'rectangle':
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.stroke();
        break;
      case 'circle':
        ctx.beginPath();
        const radius = Math.sqrt(width * width + height * height) / 2;
        ctx.arc(x + width / 2, y + height / 2, radius, 0, Math.PI * 2);
        ctx.stroke();
        break;
      case 'text':
        ctx.font = `${fontStyle.italic ? 'italic ' : ''}${fontStyle.bold ? 'bold ' : ''}${fontSize}px Arial`;
        ctx.textAlign = textAlign as CanvasTextAlign;
        ctx.fillText(text, x, y + fontSize);
        if (fontStyle.underline) {
          const textWidth = ctx.measureText(text).width;
          ctx.beginPath();
          ctx.moveTo(x, y + fontSize + 3);
          ctx.lineTo(x + textWidth, y + fontSize + 3);
          ctx.stroke();
        }
        break;
      case 'eraser':
        if (points.length < 2) return;
        ctx.save();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = lineWidth * 2;
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.stroke();
        ctx.restore();
        break;
    }
  };

  return (
    <div className="bg-white rounded-3 border overflow-auto position-relative" style={{ height: 'calc(100vh - 250px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <canvas
        ref={canvasRef}
        width={canvasSize.width}
        height={canvasSize.height}
        style={{ 
          transform: `scale(${zoom})`,
          transformOrigin: 'center',
          background: 'white',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
        onMouseLeave={endDrawing}
      />

      {/* Text Input Modal */}
      {isAddingText && (
        <div 
          className="position-absolute bg-white border rounded-3 p-3 shadow-sm"
          style={{ 
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 100,
            width: '300px'
          }}
        >
          <h6 className="fw-bold text-deep-red mb-3">Add Text</h6>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter text"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
              autoFocus
            />
          </div>
          <div className="d-flex gap-2">
            <Button onClick={handleTextSubmit}>Add</Button>
            <Button 
              variant="secondary"
              onClick={() => {
                setIsAddingText(false);
                setCurrentShape(null);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Zoom Controls */}
      <div className="position-absolute top-0 end-0 p-3">
        <div className="d-flex flex-column gap-2">
          <Button 
            size="sm" 
            variant="secondary"
            onClick={zoomIn}
            className="p-1"
          >
            <ZoomIn size={14} />
          </Button>
          <Button 
            size="sm" 
            variant="secondary"
            onClick={zoomOut}
            className="p-1"
          >
            <ZoomOut size={14} />
          </Button>
          <Button 
            size="sm" 
            variant="secondary"
            onClick={resetZoom}
            className="p-1"
          >
            <Maximize size={14} />
          </Button>
          <Button 
            size="sm" 
            variant="secondary"
            onClick={() => {}}
            className="p-1"
          >
            <Grid size={14} />
          </Button>
        </div>
      </div>
    </div>
  );
}