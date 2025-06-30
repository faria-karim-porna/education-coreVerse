import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Pencil,
  Save,
  Download,
  X
} from 'lucide-react';
import { Button } from '../ui/Button';
import { ToolsPanel } from '../drawing-tool/ToolsPanel';
import { CanvasArea } from '../drawing-tool/CanvasArea';
import { ControlsBar } from '../drawing-tool/ControlsBar';
import { LayersPanel } from '../drawing-tool/LayersPanel';
import { SavedDrawings } from '../drawing-tool/SavedDrawings';
import { QuickActions } from '../drawing-tool/QuickActions';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';

interface DrawingToolPageProps {
  onNavigate: (view: string) => void;
}

export function DrawingToolPage({ onNavigate }: DrawingToolPageProps) {
  const [activeTool, setActiveTool] = useState('pencil');
  const [color, setColor] = useState('#ff7474');
  const [lineWidth, setLineWidth] = useState(3);
  const [isDrawing, setIsDrawing] = useState(false);
  const [shapes, setShapes] = useState<any[]>([]);
  const [currentShape, setCurrentShape] = useState<any>(null);
  const [history, setHistory] = useState<any[][]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [zoom, setZoom] = useState(1);
  const [showGrid, setShowGrid] = useState(false);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 600 });
  const [selectedShape, setSelectedShape] = useState<number | null>(null);
  const [textInput, setTextInput] = useState('');
  const [isAddingText, setIsAddingText] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [fontStyle, setFontStyle] = useState({ bold: false, italic: false, underline: false });
  const [textAlign, setTextAlign] = useState('left');
  const [savedDrawings, setSavedDrawings] = useState<string[]>([]);
  const [showSavedDrawings, setShowSavedDrawings] = useState(false);
  const [drawingName, setDrawingName] = useState('Untitled Drawing');
  const [isRenaming, setIsRenaming] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const colors = [
    '#ff7474', // primary-red
    '#c64242', // accent-red
    '#541616', // deep-red
    '#22c55e', // success
    '#3b82f6', // info
    '#f59e0b', // warning
    '#ef4444', // danger
    '#000000', // black
    '#ffffff'  // white
  ];

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

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;

    setIsDrawing(true);

    if (activeTool === 'move' && selectedShape !== null) {
      // Move mode - just update the selected shape
      return;
    }

    if (activeTool === 'text') {
      setIsAddingText(true);
      setCurrentShape({
        type: 'text',
        x,
        y,
        width: 0,
        height: 0,
        text: textInput,
        color,
        fontSize,
        fontStyle,
        textAlign
      });
      return;
    }

    let newShape: any = {
      type: activeTool,
      color,
      lineWidth
    };

    switch (activeTool) {
      case 'pencil':
      case 'eraser':
        newShape = {
          ...newShape,
          points: [{ x, y }]
        };
        break;
      case 'rectangle':
      case 'circle':
        newShape = {
          ...newShape,
          x,
          y,
          width: 0,
          height: 0
        };
        break;
    }

    setCurrentShape(newShape);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !canvasRef.current || !currentShape) return;

    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX - rect.left) / zoom;
    const y = (e.clientY - rect.top) / zoom;

    if (activeTool === 'move' && selectedShape !== null) {
      // Move the selected shape
      const shape = shapes[selectedShape];
      const newShapes = [...shapes];
      newShapes[selectedShape] = {
        ...shape,
        x: shape.x + e.movementX / zoom,
        y: shape.y + e.movementY / zoom
      };
      setShapes(newShapes);
      return;
    }

    let updatedShape = { ...currentShape };

    switch (activeTool) {
      case 'pencil':
      case 'eraser':
        updatedShape.points = [...updatedShape.points, { x, y }];
        break;
      case 'rectangle':
      case 'circle':
        updatedShape.width = x - updatedShape.x;
        updatedShape.height = y - updatedShape.y;
        break;
    }

    setCurrentShape(updatedShape);
  };

  const endDrawing = () => {
    if (!isDrawing) return;
    setIsDrawing(false);

    if (activeTool === 'move') {
      // Save history after moving
      saveToHistory();
      return;
    }

    if (currentShape) {
      if (activeTool === 'text' && !isAddingText) {
        return;
      }

      const newShapes = [...shapes, currentShape];
      setShapes(newShapes);
      setCurrentShape(null);
      setIsAddingText(false);
      
      // Save to history
      saveToHistory(newShapes);
    }
  };

  const saveToHistory = (newShapes = shapes) => {
    // Remove any future history if we're not at the end
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push([...newShapes]);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const undo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setShapes([...history[historyIndex - 1]]);
    } else if (historyIndex === 0) {
      setShapes([]);
      setHistoryIndex(-1);
    }
  };

  const redo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setShapes([...history[historyIndex + 1]]);
    }
  };

  const clearCanvas = () => {
    setShapes([]);
    setCurrentShape(null);
    setSelectedShape(null);
    saveToHistory([]);
  };

  const zoomIn = () => {
    setZoom(Math.min(zoom + 0.1, 3));
  };

  const zoomOut = () => {
    setZoom(Math.max(zoom - 0.1, 0.5));
  };

  const resetZoom = () => {
    setZoom(1);
  };

  const saveDrawing = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL('image/png');
    
    // In a real app, this would save to a server or local storage
    setSavedDrawings([...savedDrawings, dataUrl]);
    alert('Drawing saved successfully!');
  };

  const downloadDrawing = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const dataUrl = canvas.toDataURL('image/png');
    
    const link = document.createElement('a');
    link.download = `${drawingName}.png`;
    link.href = dataUrl;
    link.click();
  };

  const handleTextSubmit = () => {
    if (!currentShape || !textInput) return;
    
    const updatedShape = {
      ...currentShape,
      text: textInput
    };
    
    setCurrentShape(updatedShape);
    setShapes([...shapes, updatedShape]);
    setCurrentShape(null);
    setIsAddingText(false);
    
    // Save to history
    saveToHistory([...shapes, updatedShape]);
  };

  const deleteSelectedShape = () => {
    if (selectedShape === null) return;
    
    const newShapes = shapes.filter((_, index) => index !== selectedShape);
    setShapes(newShapes);
    setSelectedShape(null);
    
    // Save to history
    saveToHistory(newShapes);
  };

  const toggleGrid = () => {
    setShowGrid(!showGrid);
  };

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView="drawing-tool"
        onViewChange={onNavigate}
      />
      
      <div className="flex-fill d-flex flex-column overflow-hidden">
        <Header
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
          onNavigate={onNavigate}
        />
        
        <main className="flex-fill overflow-auto">
          {/* Drawing Tool Header */}
          <div className="bg-white border-bottom p-3">
            <div className="container-fluid">
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  {isRenaming ? (
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={drawingName}
                      onChange={(e) => setDrawingName(e.target.value)}
                      onBlur={() => setIsRenaming(false)}
                      onKeyPress={(e) => e.key === 'Enter' && setIsRenaming(false)}
                      autoFocus
                    />
                  ) : (
                    <h5 className="mb-0 text-deep-red" onClick={() => setIsRenaming(true)}>
                      {drawingName}
                    </h5>
                  )}
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Button variant="secondary" className="me-2" onClick={saveDrawing}>
                    <Save size={16} className="me-1" />
                    Save
                  </Button>
                  <Button variant="secondary" className="me-2" onClick={downloadDrawing}>
                    <Download size={16} className="me-1" />
                    Download
                  </Button>
                  <Button onClick={() => onNavigate('dashboard')}>
                    <X size={16} className="me-1" />
                    Close
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="container-fluid py-4">
            <div className="row g-4">
              {/* Left Toolbar */}
              <div className="col-auto">
                <ToolsPanel 
                  activeTool={activeTool}
                  setActiveTool={setActiveTool}
                  undo={undo}
                  redo={redo}
                  clearCanvas={clearCanvas}
                  toggleGrid={toggleGrid}
                  showGrid={showGrid}
                  historyIndex={historyIndex}
                  history={history}
                />
              </div>

              {/* Canvas Area */}
              <div className="col">
                <div className="bg-white rounded-3 shadow-sm p-3">
                  {/* Controls Bar */}
                  <ControlsBar 
                    color={color}
                    setColor={setColor}
                    lineWidth={lineWidth}
                    setLineWidth={setLineWidth}
                    activeTool={activeTool}
                    textInput={textInput}
                    setTextInput={setTextInput}
                    fontStyle={fontStyle}
                    setFontStyle={setFontStyle}
                    textAlign={textAlign}
                    setTextAlign={setTextAlign}
                    colors={colors}
                  />

                  {/* Canvas Container */}
                  <CanvasArea 
                    canvasRef={canvasRef}
                    containerRef={containerRef}
                    canvasSize={canvasSize}
                    zoom={zoom}
                    showGrid={showGrid}
                    isDrawing={isDrawing}
                    currentShape={currentShape}
                    shapes={shapes}
                    selectedShape={selectedShape}
                    activeTool={activeTool}
                    startDrawing={startDrawing}
                    draw={draw}
                    endDrawing={endDrawing}
                    zoomIn={zoomIn}
                    zoomOut={zoomOut}
                    resetZoom={resetZoom}
                    isAddingText={isAddingText}
                    textInput={textInput}
                    setTextInput={setTextInput}
                    handleTextSubmit={handleTextSubmit}
                    setIsAddingText={setIsAddingText}
                    setCurrentShape={setCurrentShape}
                    fontStyle={fontStyle}
                    setFontStyle={setFontStyle}
                    textAlign={textAlign}
                    setTextAlign={setTextAlign}
                    fontSize={fontSize}
                    setFontSize={setFontSize}
                  />
                </div>
              </div>

              {/* Right Sidebar - Layers and Saved Drawings */}
              <div className="col-auto">
                <div className="d-flex flex-column gap-3">
                  {/* Layers Panel */}
                  <LayersPanel 
                    shapes={shapes}
                    selectedShape={selectedShape}
                    setSelectedShape={setSelectedShape}
                    deleteSelectedShape={deleteSelectedShape}
                  />

                  {/* Saved Drawings */}
                  <SavedDrawings 
                    showSavedDrawings={showSavedDrawings}
                    setShowSavedDrawings={setShowSavedDrawings}
                    savedDrawings={savedDrawings}
                  />

                  {/* Quick Actions */}
                  <QuickActions 
                    saveDrawing={saveDrawing}
                    downloadDrawing={downloadDrawing}
                    clearCanvas={clearCanvas}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}