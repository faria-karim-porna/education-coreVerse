import React from 'react';
import { 
  Plus, 
  Minus, 
  Bold, 
  Italic, 
  Underline, 
  AlignLeft, 
  AlignCenter, 
  AlignRight 
} from 'lucide-react';
import { Button } from '../ui/Button';

interface ControlsBarProps {
  color: string;
  setColor: (color: string) => void;
  lineWidth: number;
  setLineWidth: (width: number) => void;
  activeTool: string;
  textInput: string;
  setTextInput: (text: string) => void;
  fontStyle: { bold: boolean; italic: boolean; underline: boolean };
  setFontStyle: (style: { bold: boolean; italic: boolean; underline: boolean }) => void;
  textAlign: string;
  setTextAlign: (align: string) => void;
  colors: string[];
}

export function ControlsBar({
  color,
  setColor,
  lineWidth,
  setLineWidth,
  activeTool,
  textInput,
  setTextInput,
  fontStyle,
  setFontStyle,
  textAlign,
  setTextAlign,
  colors
}: ControlsBarProps) {
  return (
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
    </div>
  );
}