import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  Calculator,
  RotateCcw,
  Copy,
  History,
  Download,
  Share2,
  Delete,
  CheckCircle
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';

interface ScientificCalculatorPageProps {
  onNavigate: (view: string) => void;
}

export function ScientificCalculatorPage({ onNavigate }: ScientificCalculatorPageProps) {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [memory, setMemory] = useState(0);
  const [angleMode, setAngleMode] = useState<'deg' | 'rad'>('deg');
  const [copied, setCopied] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
      addToHistory(`${currentValue} ${operation} ${inputValue} = ${newValue}`);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '^':
        return Math.pow(firstValue, secondValue);
      default:
        return secondValue;
    }
  };

  const performScientificOperation = (func: string) => {
    const inputValue = parseFloat(display);
    let result: number;

    switch (func) {
      case 'sin':
        result = Math.sin(angleMode === 'deg' ? (inputValue * Math.PI) / 180 : inputValue);
        break;
      case 'cos':
        result = Math.cos(angleMode === 'deg' ? (inputValue * Math.PI) / 180 : inputValue);
        break;
      case 'tan':
        result = Math.tan(angleMode === 'deg' ? (inputValue * Math.PI) / 180 : inputValue);
        break;
      case 'log':
        result = Math.log10(inputValue);
        break;
      case 'ln':
        result = Math.log(inputValue);
        break;
      case 'sqrt':
        result = Math.sqrt(inputValue);
        break;
      case 'x²':
        result = inputValue * inputValue;
        break;
      case '1/x':
        result = 1 / inputValue;
        break;
      case 'π':
        result = Math.PI;
        break;
      case 'e':
        result = Math.E;
        break;
      case '!':
        result = factorial(inputValue);
        break;
      default:
        result = inputValue;
    }

    setDisplay(String(result));
    addToHistory(`${func}(${inputValue}) = ${result}`);
    setWaitingForOperand(true);
  };

  const factorial = (n: number): number => {
    if (n < 0 || n !== Math.floor(n)) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const addToHistory = (entry: string) => {
    setHistory(prev => [entry, ...prev.slice(0, 9)]);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(display);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const memoryStore = () => {
    setMemory(parseFloat(display));
  };

  const memoryRecall = () => {
    setDisplay(String(memory));
    setWaitingForOperand(true);
  };

  const memoryClear = () => {
    setMemory(0);
  };

  const memoryAdd = () => {
    setMemory(memory + parseFloat(display));
  };

  const buttons = [
    // Row 1 - Memory and functions
    [
      { label: 'MC', action: () => memoryClear(), type: 'memory' },
      { label: 'MR', action: () => memoryRecall(), type: 'memory' },
      { label: 'M+', action: () => memoryAdd(), type: 'memory' },
      { label: 'MS', action: () => memoryStore(), type: 'memory' },
      { label: angleMode.toUpperCase(), action: () => setAngleMode(angleMode === 'deg' ? 'rad' : 'deg'), type: 'function' }
    ],
    // Row 2 - Scientific functions
    [
      { label: 'sin', action: () => performScientificOperation('sin'), type: 'function' },
      { label: 'cos', action: () => performScientificOperation('cos'), type: 'function' },
      { label: 'tan', action: () => performScientificOperation('tan'), type: 'function' },
      { label: 'log', action: () => performScientificOperation('log'), type: 'function' },
      { label: 'ln', action: () => performScientificOperation('ln'), type: 'function' }
    ],
    // Row 3 - More functions
    [
      { label: '√', action: () => performScientificOperation('sqrt'), type: 'function' },
      { label: 'x²', action: () => performScientificOperation('x²'), type: 'function' },
      { label: '1/x', action: () => performScientificOperation('1/x'), type: 'function' },
      { label: 'π', action: () => performScientificOperation('π'), type: 'function' },
      { label: 'e', action: () => performScientificOperation('e'), type: 'function' }
    ],
    // Row 4 - Numbers and operations
    [
      { label: 'C', action: clear, type: 'clear' },
      { label: '±', action: () => setDisplay(String(-parseFloat(display))), type: 'operation' },
      { label: '%', action: () => setDisplay(String(parseFloat(display) / 100)), type: 'operation' },
      { label: '÷', action: () => performOperation('÷'), type: 'operation' },
      { label: '^', action: () => performOperation('^'), type: 'operation' }
    ],
    // Row 5
    [
      { label: '7', action: () => inputNumber('7'), type: 'number' },
      { label: '8', action: () => inputNumber('8'), type: 'number' },
      { label: '9', action: () => inputNumber('9'), type: 'number' },
      { label: '×', action: () => performOperation('×'), type: 'operation' },
      { label: '!', action: () => performScientificOperation('!'), type: 'function' }
    ],
    // Row 6
    [
      { label: '4', action: () => inputNumber('4'), type: 'number' },
      { label: '5', action: () => inputNumber('5'), type: 'number' },
      { label: '6', action: () => inputNumber('6'), type: 'number' },
      { label: '-', action: () => performOperation('-'), type: 'operation' },
      { label: '(', action: () => inputNumber('('), type: 'function' }
    ],
    // Row 7
    [
      { label: '1', action: () => inputNumber('1'), type: 'number' },
      { label: '2', action: () => inputNumber('2'), type: 'number' },
      { label: '3', action: () => inputNumber('3'), type: 'number' },
      { label: '+', action: () => performOperation('+'), type: 'operation' },
      { label: ')', action: () => inputNumber(')'), type: 'function' }
    ],
    // Row 8
    [
      { label: '0', action: () => inputNumber('0'), type: 'number', span: 2 },
      { label: '.', action: inputDecimal, type: 'number' },
      { label: '=', action: () => performOperation('='), type: 'equals' }
    ]
  ];

  const getButtonClass = (type: string) => {
    switch (type) {
      case 'number':
        return 'btn-outline-secondary';
      case 'operation':
        return 'btn-custom-primary';
      case 'equals':
        return 'btn-success';
      case 'clear':
        return 'btn-danger';
      case 'function':
        return 'btn-info';
      case 'memory':
        return 'btn-warning';
      default:
        return 'btn-outline-secondary';
    }
  };

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView="scientific-calculator"
        onViewChange={onNavigate}
      />
      
      <div className="flex-fill d-flex flex-column overflow-hidden">
        <Header
          onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
          onNavigate={onNavigate}
        />
        
        <main className="flex-fill overflow-auto">
          {/* Hero Section */}
          <section className="position-relative overflow-hidden bg-gradient-primary text-white py-5">
            <div className="container-lg py-5">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="bg-white bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                       style={{ width: '80px', height: '80px' }}>
                    <Calculator className="text-white" size={40} />
                  </div>
                  <h1 className="display-3 fw-bold mb-4">Scientific Calculator</h1>
                  <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    Advanced scientific calculator with trigonometric functions, logarithms, 
                    memory operations, and comprehensive mathematical capabilities.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                      <Download size={20} className="me-2" />
                      Download App
                    </Button>
                    <Button variant="outline-secondary" size="lg" className="border-white text-white">
                      <Share2 size={20} className="me-2" />
                      Share Calculator
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Calculator Interface */}
          <section className="py-5 bg-white">
            <div className="container-lg">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="row g-4">
                    {/* Calculator */}
                    <div className="col-lg-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <Card>
                          <div className="card-body p-4">
                            {/* Display */}
                            <div className="mb-4">
                              <div className="bg-dark text-white p-4 rounded-3 text-end">
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                  <div className="d-flex align-items-center gap-2">
                                    <span className="badge bg-secondary">{angleMode.toUpperCase()}</span>
                                    {memory !== 0 && <span className="badge bg-warning text-dark">M</span>}
                                  </div>
                                  <Button 
                                    size="sm" 
                                    variant="secondary"
                                    onClick={copyToClipboard}
                                    className="p-1"
                                  >
                                    {copied ? <CheckCircle size={14} className="text-success" /> : <Copy size={14} />}
                                  </Button>
                                </div>
                                <div className="display-4 fw-bold" style={{ minHeight: '60px', fontSize: '2.5rem' }}>
                                  {display}
                                </div>
                              </div>
                            </div>

                            {/* Button Grid */}
                            <div className="d-flex flex-column gap-2">
                              {buttons.map((row, rowIndex) => (
                                <div key={rowIndex} className="d-flex gap-2">
                                  {row.map((button, buttonIndex) => (
                                    <motion.button
                                      key={`${rowIndex}-${buttonIndex}`}
                                      whileHover={{ scale: 1.05 }}
                                      whileTap={{ scale: 0.95 }}
                                      onClick={button.action}
                                      className={`btn ${getButtonClass(button.type)} fw-medium`}
                                      style={{ 
                                        flex: button.span || 1,
                                        height: '50px',
                                        fontSize: '1rem'
                                      }}
                                    >
                                      {button.label}
                                    </motion.button>
                                  ))}
                                </div>
                              ))}
                            </div>
                          </div>
                        </Card>
                      </motion.div>
                    </div>

                    {/* History and Functions */}
                    <div className="col-lg-4">
                      <div className="d-flex flex-column gap-4">
                        {/* History */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Card>
                            <div className="card-body p-4">
                              <div className="d-flex align-items-center justify-content-between mb-3">
                                <h5 className="fw-bold text-deep-red mb-0">History</h5>
                                <Button 
                                  size="sm" 
                                  variant="secondary"
                                  onClick={() => setHistory([])}
                                >
                                  <Delete size={14} />
                                </Button>
                              </div>
                              <div style={{ maxHeight: '200px', overflowY: 'auto' }}>
                                {history.length === 0 ? (
                                  <p className="text-muted small text-center py-3">No calculations yet</p>
                                ) : (
                                  <div className="d-flex flex-column gap-2">
                                    {history.map((entry, index) => (
                                      <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="p-2 bg-light-bg rounded-2 small font-monospace"
                                      >
                                        {entry}
                                      </motion.div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          </Card>
                        </motion.div>

                        {/* Quick Functions */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Card>
                            <div className="card-body p-4">
                              <h5 className="fw-bold text-deep-red mb-3">Quick Functions</h5>
                              <div className="d-flex flex-column gap-2">
                                <Button 
                                  size="sm" 
                                  variant="secondary" 
                                  className="w-100 text-start"
                                  onClick={() => performScientificOperation('π')}
                                >
                                  π (Pi) = 3.14159...
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="secondary" 
                                  className="w-100 text-start"
                                  onClick={() => performScientificOperation('e')}
                                >
                                  e (Euler) = 2.71828...
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="secondary" 
                                  className="w-100 text-start"
                                  onClick={() => setDisplay('299792458')}
                                >
                                  c (Light Speed)
                                </Button>
                                <Button 
                                  size="sm" 
                                  variant="secondary" 
                                  className="w-100 text-start"
                                  onClick={() => setDisplay('9.80665')}
                                >
                                  g (Gravity)
                                </Button>
                              </div>
                            </div>
                          </Card>
                        </motion.div>

                        {/* Memory Display */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Card>
                            <div className="card-body p-4">
                              <h5 className="fw-bold text-deep-red mb-3">Memory</h5>
                              <div className="bg-light-bg rounded-3 p-3 text-center">
                                <div className="fw-bold text-deep-red">
                                  {memory === 0 ? 'Empty' : memory}
                                </div>
                                <small className="text-muted">Stored Value</small>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="py-5 bg-light-bg">
            <div className="container-lg">
              <div className="text-center mb-5">
                <h2 className="display-4 fw-bold text-deep-red mb-4">Calculator Features</h2>
                <p className="lead text-muted">
                  Professional-grade scientific calculator with advanced mathematical functions
                </p>
              </div>

              <div className="row g-4">
                <div className="col-md-6 col-lg-3">
                  <Card className="text-center h-100">
                    <div className="card-body p-4">
                      <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                           style={{ width: '64px', height: '64px' }}>
                        <Calculator className="text-primary-red" size={32} />
                      </div>
                      <h5 className="fw-bold text-deep-red mb-2">Basic Operations</h5>
                      <p className="text-muted small">Addition, subtraction, multiplication, division, and more</p>
                    </div>
                  </Card>
                </div>
                <div className="col-md-6 col-lg-3">
                  <Card className="text-center h-100">
                    <div className="card-body p-4">
                      <div className="bg-accent-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                           style={{ width: '64px', height: '64px' }}>
                        <span className="text-accent-red fw-bold">sin</span>
                      </div>
                      <h5 className="fw-bold text-deep-red mb-2">Trigonometry</h5>
                      <p className="text-muted small">Sin, cos, tan functions with degree/radian modes</p>
                    </div>
                  </Card>
                </div>
                <div className="col-md-6 col-lg-3">
                  <Card className="text-center h-100">
                    <div className="card-body p-4">
                      <div className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                           style={{ width: '64px', height: '64px' }}>
                        <History className="text-success" size={32} />
                      </div>
                      <h5 className="fw-bold text-deep-red mb-2">History</h5>
                      <p className="text-muted small">Keep track of all your calculations and results</p>
                    </div>
                  </Card>
                </div>
                <div className="col-md-6 col-lg-3">
                  <Card className="text-center h-100">
                    <div className="card-body p-4">
                      <div className="bg-info bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                           style={{ width: '64px', height: '64px' }}>
                        <span className="text-info fw-bold">M</span>
                      </div>
                      <h5 className="fw-bold text-deep-red mb-2">Memory</h5>
                      <p className="text-muted small">Store, recall, and manipulate values in memory</p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-deep-red text-white py-5">
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
                  <h6 className="fw-semibold mb-3">Study Tools</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <button onClick={() => onNavigate('interactive-globe')} className="btn btn-link text-white-50 text-decoration-none p-0">
                        Interactive Globe
                      </button>
                    </li>
                    <li className="mb-2">
                      <button onClick={() => onNavigate('scientific-calculator')} className="btn btn-link text-white-50 text-decoration-none p-0">
                        Scientific Calculator
                      </button>
                    </li>
                    <li className="mb-2">
                      <button onClick={() => onNavigate('unit-converter')} className="btn btn-link text-white-50 text-decoration-none p-0">
                        Unit Converter
                      </button>
                    </li>
                    <li className="mb-2">
                      <button onClick={() => onNavigate('discussion-forum')} className="btn btn-link text-white-50 text-decoration-none p-0">
                        Discussion Forum
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
        </main>
      </div>
    </div>
  );
}