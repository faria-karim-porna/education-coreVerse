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