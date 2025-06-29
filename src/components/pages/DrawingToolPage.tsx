import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Pencil,
  Square,
  Circle,
  Type,
  Image,
  Eraser,
  Trash2,
  Save,
  Download,
  Share2,
  Undo,
  Redo,
  Move,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Grid,
  Layers,
  Plus,
  Minus,
  Palette,
  X,
  Copy,
  Scissors,
  ArrowRight,
  ArrowLeft,
  ArrowUp,
  ArrowDown,
  RotateCw,
  RotateCcw,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Bold,
  Italic,
  Underline
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ThemeToggle } from '../ui/ThemeToggle';

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

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const tools = [
    { id: 'pencil', name: 'Pencil', icon: Pencil },
    { id: 'rectangle', name: 'Rectangle', icon: Square },
    { id: 'circle', name: 'Circle', icon: Circle },
    { id: 'text', name: 'Text', icon: Type },
    { id: 'eraser', name: 'Eraser', icon: Eraser },
    { id: 'move', name: 'Move', icon: Move }
  ];

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
  }, [shapes, currentShape, showGrid, selectedShape]);

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

  return (
    <div className="min-vh-100 bg-light-bg">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm border-bottom">
        <div className="container-lg">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="navbar-brand d-flex align-items-center gap-2 btn btn-link text-decoration-none"
            onClick={() => onNavigate('home')}
          >
            <div className="bg-primary-red rounded-4 d-flex align-items-center justify-content-center"
                 style={{ width: '40px', height: '40px' }}>
              <BookOpen className="text-white" size={24} />
            </div>
            <span className="fw-bold h3 text-deep-red mb-0">CoreVerse</span>
          </motion.button>
          
          <div className="d-none d-md-flex align-items-center gap-4">
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
      </nav>

      {/* Main Content */}
      <div className="container-fluid py-4">
        <div className="row g-4">
          {/* Left Toolbar */}
          <div className="col-auto">
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
                    onClick={() => setShowGrid(!showGrid)}
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
          </div>

          {/* Canvas Area */}
          <div className="col">
            <div className="bg-white rounded-3 shadow-sm p-3">
              <div className="mb-3 d-flex align-items-center justify-content-between">
                {/* Color Picker */}
                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted small">Color:</span>
                  <div className="d-flex gap-1">
                    {colors.map((c) => (
                      <button
                        key={c}
                        className={`rounded-circle border ${color === c ? 'border-dark' : 'border-light'}`}
                        style={{ 
                          width: '24px', 
                          height: '24px', 
                          backgroundColor: c,
                          cursor: 'pointer'
                        }}
                        onClick={() => setColor(c)}
                      />
                    ))}
                  </div>
                </div>

                {/* Line Width */}
                <div className="d-flex align-items-center gap-2">
                  <span className="text-muted small">Line Width:</span>
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={() => setLineWidth(Math.max(1, lineWidth - 1))}
                    className="p-1"
                  >
                    <Minus size={14} />
                  </Button>
                  <span className="fw-medium">{lineWidth}</span>
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={() => setLineWidth(Math.min(20, lineWidth + 1))}
                    className="p-1"
                  >
                    <Plus size={14} />
                  </Button>
                </div>

                {/* Text Options (visible only when text tool is active) */}
                {activeTool === 'text' && (
                  <div className="d-flex align-items-center gap-2">
                    <span className="text-muted small">Text:</span>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Enter text"
                      value={textInput}
                      onChange={(e) => setTextInput(e.target.value)}
                      style={{ width: '150px' }}
                    />
                    <Button 
                      size="sm" 
                      variant={fontStyle.bold ? 'primary' : 'secondary'}
                      onClick={() => setFontStyle({...fontStyle, bold: !fontStyle.bold})}
                      className="p-1"
                    >
                      <Bold size={14} />
                    </Button>
                    <Button 
                      size="sm" 
                      variant={fontStyle.italic ? 'primary' : 'secondary'}
                      onClick={() => setFontStyle({...fontStyle, italic: !fontStyle.italic})}
                      className="p-1"
                    >
                      <Italic size={14} />
                    </Button>
                    <Button 
                      size="sm" 
                      variant={fontStyle.underline ? 'primary' : 'secondary'}
                      onClick={() => setFontStyle({...fontStyle, underline: !fontStyle.underline})}
                      className="p-1"
                    >
                      <Underline size={14} />
                    </Button>
                    <div className="d-flex align-items-center gap-1">
                      <Button 
                        size="sm" 
                        variant={textAlign === 'left' ? 'primary' : 'secondary'}
                        onClick={() => setTextAlign('left')}
                        className="p-1"
                      >
                        <AlignLeft size={14} />
                      </Button>
                      <Button 
                        size="sm" 
                        variant={textAlign === 'center' ? 'primary' : 'secondary'}
                        onClick={() => setTextAlign('center')}
                        className="p-1"
                      >
                        <AlignCenter size={14} />
                      </Button>
                      <Button 
                        size="sm" 
                        variant={textAlign === 'right' ? 'primary' : 'secondary'}
                        onClick={() => setTextAlign('right')}
                        className="p-1"
                      >
                        <AlignRight size={14} />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Zoom Controls */}
                <div className="d-flex align-items-center gap-2">
                  <Button 
                    size="sm" 
                    variant="secondary"
                    onClick={zoomOut}
                    className="p-1"
                  >
                    <ZoomOut size={14} />
                  </Button>
                  <span className="fw-medium">{Math.round(zoom * 100)}%</span>
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
                    onClick={resetZoom}
                    className="p-1"
                  >
                    <Maximize size={14} />
                  </Button>
                </div>
              </div>

              {/* Canvas Container */}
              <div 
                ref={containerRef}
                className="position-relative bg-white border rounded-3 overflow-auto"
                style={{ 
                  height: 'calc(100vh - 250px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
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
              </div>
            </div>
          </div>

          {/* Right Sidebar - Layers and Saved Drawings */}
          <div className="col-auto">
            <div className="d-flex flex-column gap-3">
              {/* Layers Panel */}
              <Card style={{ width: '250px' }}>
                <div className="card-body p-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="fw-bold text-deep-red mb-0">Layers</h6>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={deleteSelectedShape}
                      disabled={selectedShape === null}
                      className="p-1"
                    >
                      <Trash2 size={14} />
                    </Button>
                  </div>
                  <div className="d-flex flex-column gap-2" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                    {shapes.length === 0 ? (
                      <p className="text-muted small text-center py-3">No layers yet</p>
                    ) : (
                      shapes.map((shape, index) => (
                        <div 
                          key={index}
                          className={`d-flex align-items-center justify-content-between p-2 border rounded-3 ${selectedShape === index ? 'bg-light-bg' : ''}`}
                          onClick={() => setSelectedShape(index)}
                          style={{ cursor: 'pointer' }}
                        >
                          <div className="d-flex align-items-center gap-2">
                            {shape.type === 'pencil' && <Pencil size={14} />}
                            {shape.type === 'rectangle' && <Square size={14} />}
                            {shape.type === 'circle' && <Circle size={14} />}
                            {shape.type === 'text' && <Type size={14} />}
                            {shape.type === 'eraser' && <Eraser size={14} />}
                            <span className="small">
                              {shape.type.charAt(0).toUpperCase() + shape.type.slice(1)} {index + 1}
                            </span>
                          </div>
                          <div 
                            className="rounded-circle border"
                            style={{ 
                              width: '14px', 
                              height: '14px', 
                              backgroundColor: shape.color
                            }}
                          />
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </Card>

              {/* Saved Drawings */}
              <Card style={{ width: '250px' }}>
                <div className="card-body p-3">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h6 className="fw-bold text-deep-red mb-0">Saved Drawings</h6>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={() => setShowSavedDrawings(!showSavedDrawings)}
                      className="p-1"
                    >
                      {showSavedDrawings ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </Button>
                  </div>
                  {showSavedDrawings && (
                    <div className="d-flex flex-column gap-2" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                      {savedDrawings.length === 0 ? (
                        <p className="text-muted small text-center py-3">No saved drawings</p>
                      ) : (
                        savedDrawings.map((drawing, index) => (
                          <div 
                            key={index}
                            className="border rounded-3 p-2"
                          >
                            <div className="mb-2">
                              <img 
                                src={drawing} 
                                alt={`Drawing ${index + 1}`} 
                                className="img-fluid rounded-3"
                                style={{ maxHeight: '100px' }}
                              />
                            </div>
                            <div className="d-flex gap-1">
                              <Button size="sm" className="w-100 py-1">Load</Button>
                              <Button size="sm" variant="secondary" className="py-1">
                                <Download size={14} />
                              </Button>
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </div>
              </Card>

              {/* Quick Actions */}
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
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-deep-red text-white py-5 mt-5">
        <div className="container-lg">
          <div className="row g-4">
            <div className="col-lg-3">
              <button 
                onClick={() => onNavigate('home')}
                className="d-flex align-items-center gap-2 mb-4 btn btn-link text-white text-decoration-none p-0"
              >
                <div className="bg-primary-red rounded-3 d-flex align-items-center justify-content-center"
                     style={{ width: '32px', height: '32px' }}>
                  <BookOpen className="text-white" size={20} />
                </div>
                <span className="fw-bold h5 mb-0">CoreVerse</span>
              </button>
              <p className="text-white-50">
                Transforming education through interactive technology and innovative learning experiences.
              </p>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Educational Tools</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('live-classroom')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Live Classroom
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('drawing-tool')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Drawing Tool
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('question-maker')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Question Maker
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('interactive-globe')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Interactive Globe
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Support</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('help-center')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Help Center
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('documentation')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Documentation
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('community')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Community
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('contact')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
            
            <div className="col-lg-3">
              <h6 className="fw-semibold mb-3">Company</h6>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <button onClick={() => onNavigate('about')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    About
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('careers')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Careers
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('privacy')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Privacy
                  </button>
                </li>
                <li className="mb-2">
                  <button onClick={() => onNavigate('terms')} className="btn btn-link text-white-50 text-decoration-none p-0">
                    Terms
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-top border-white border-opacity-25 mt-5 pt-4 text-center">
            <p className="text-white-50 mb-0">&copy; 2024 CoreVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}