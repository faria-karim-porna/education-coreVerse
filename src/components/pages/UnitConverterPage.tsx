import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen,
  ArrowLeftRight,
  Ruler,
  Weight,
  Thermometer,
  Zap,
  Clock,
  Download,
  Share2,
  Copy,
  CheckCircle,
  RotateCcw
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';

interface UnitConverterPageProps {
  onNavigate: (view: string) => void;
}

interface ConversionCategory {
  id: string;
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  units: { [key: string]: { name: string; factor: number; symbol: string } };
}

export function UnitConverterPage({ onNavigate }: UnitConverterPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('length');
  const [fromUnit, setFromUnit] = useState('meter');
  const [toUnit, setToUnit] = useState('foot');
  const [inputValue, setInputValue] = useState('1');
  const [result, setResult] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const categories: ConversionCategory[] = [
    {
      id: 'length',
      name: 'Length',
      icon: Ruler,
      units: {
        meter: { name: 'Meter', factor: 1, symbol: 'm' },
        kilometer: { name: 'Kilometer', factor: 1000, symbol: 'km' },
        centimeter: { name: 'Centimeter', factor: 0.01, symbol: 'cm' },
        millimeter: { name: 'Millimeter', factor: 0.001, symbol: 'mm' },
        inch: { name: 'Inch', factor: 0.0254, symbol: 'in' },
        foot: { name: 'Foot', factor: 0.3048, symbol: 'ft' },
        yard: { name: 'Yard', factor: 0.9144, symbol: 'yd' },
        mile: { name: 'Mile', factor: 1609.344, symbol: 'mi' },
        nauticalMile: { name: 'Nautical Mile', factor: 1852, symbol: 'nmi' }
      }
    },
    {
      id: 'weight',
      name: 'Weight',
      icon: Weight,
      units: {
        kilogram: { name: 'Kilogram', factor: 1, symbol: 'kg' },
        gram: { name: 'Gram', factor: 0.001, symbol: 'g' },
        pound: { name: 'Pound', factor: 0.453592, symbol: 'lb' },
        ounce: { name: 'Ounce', factor: 0.0283495, symbol: 'oz' },
        ton: { name: 'Metric Ton', factor: 1000, symbol: 't' },
        stone: { name: 'Stone', factor: 6.35029, symbol: 'st' }
      }
    },
    {
      id: 'temperature',
      name: 'Temperature',
      icon: Thermometer,
      units: {
        celsius: { name: 'Celsius', factor: 1, symbol: '°C' },
        fahrenheit: { name: 'Fahrenheit', factor: 1, symbol: '°F' },
        kelvin: { name: 'Kelvin', factor: 1, symbol: 'K' },
        rankine: { name: 'Rankine', factor: 1, symbol: '°R' }
      }
    },
    {
      id: 'area',
      name: 'Area',
      icon: Ruler,
      units: {
        squareMeter: { name: 'Square Meter', factor: 1, symbol: 'm²' },
        squareKilometer: { name: 'Square Kilometer', factor: 1000000, symbol: 'km²' },
        squareCentimeter: { name: 'Square Centimeter', factor: 0.0001, symbol: 'cm²' },
        squareInch: { name: 'Square Inch', factor: 0.00064516, symbol: 'in²' },
        squareFoot: { name: 'Square Foot', factor: 0.092903, symbol: 'ft²' },
        acre: { name: 'Acre', factor: 4046.86, symbol: 'ac' },
        hectare: { name: 'Hectare', factor: 10000, symbol: 'ha' }
      }
    },
    {
      id: 'volume',
      name: 'Volume',
      icon: Ruler,
      units: {
        liter: { name: 'Liter', factor: 1, symbol: 'L' },
        milliliter: { name: 'Milliliter', factor: 0.001, symbol: 'mL' },
        gallon: { name: 'Gallon (US)', factor: 3.78541, symbol: 'gal' },
        quart: { name: 'Quart', factor: 0.946353, symbol: 'qt' },
        pint: { name: 'Pint', factor: 0.473176, symbol: 'pt' },
        cup: { name: 'Cup', factor: 0.236588, symbol: 'cup' },
        fluidOunce: { name: 'Fluid Ounce', factor: 0.0295735, symbol: 'fl oz' },
        cubicMeter: { name: 'Cubic Meter', factor: 1000, symbol: 'm³' }
      }
    },
    {
      id: 'speed',
      name: 'Speed',
      icon: Zap,
      units: {
        meterPerSecond: { name: 'Meter/Second', factor: 1, symbol: 'm/s' },
        kilometerPerHour: { name: 'Kilometer/Hour', factor: 0.277778, symbol: 'km/h' },
        milePerHour: { name: 'Mile/Hour', factor: 0.44704, symbol: 'mph' },
        knot: { name: 'Knot', factor: 0.514444, symbol: 'kn' },
        footPerSecond: { name: 'Foot/Second', factor: 0.3048, symbol: 'ft/s' }
      }
    },
    {
      id: 'time',
      name: 'Time',
      icon: Clock,
      units: {
        second: { name: 'Second', factor: 1, symbol: 's' },
        minute: { name: 'Minute', factor: 60, symbol: 'min' },
        hour: { name: 'Hour', factor: 3600, symbol: 'h' },
        day: { name: 'Day', factor: 86400, symbol: 'd' },
        week: { name: 'Week', factor: 604800, symbol: 'wk' },
        month: { name: 'Month', factor: 2629746, symbol: 'mo' },
        year: { name: 'Year', factor: 31556952, symbol: 'yr' }
      }
    },
    {
      id: 'energy',
      name: 'Energy',
      icon: Zap,
      units: {
        joule: { name: 'Joule', factor: 1, symbol: 'J' },
        kilojoule: { name: 'Kilojoule', factor: 1000, symbol: 'kJ' },
        calorie: { name: 'Calorie', factor: 4.184, symbol: 'cal' },
        kilocalorie: { name: 'Kilocalorie', factor: 4184, symbol: 'kcal' },
        wattHour: { name: 'Watt Hour', factor: 3600, symbol: 'Wh' },
        kilowattHour: { name: 'Kilowatt Hour', factor: 3600000, symbol: 'kWh' },
        btu: { name: 'BTU', factor: 1055.06, symbol: 'BTU' }
      }
    }
  ];

  const currentCategory = categories.find(cat => cat.id === selectedCategory)!;

  const convertTemperature = (value: number, from: string, to: string): number => {
    // Convert to Celsius first
    let celsius: number;
    switch (from) {
      case 'celsius':
        celsius = value;
        break;
      case 'fahrenheit':
        celsius = (value - 32) * 5/9;
        break;
      case 'kelvin':
        celsius = value - 273.15;
        break;
      case 'rankine':
        celsius = (value - 491.67) * 5/9;
        break;
      default:
        celsius = value;
    }

    // Convert from Celsius to target
    switch (to) {
      case 'celsius':
        return celsius;
      case 'fahrenheit':
        return celsius * 9/5 + 32;
      case 'kelvin':
        return celsius + 273.15;
      case 'rankine':
        return celsius * 9/5 + 491.67;
      default:
        return celsius;
    }
  };

  const performConversion = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) {
      setResult('Invalid input');
      return;
    }

    let convertedValue: number;

    if (selectedCategory === 'temperature') {
      convertedValue = convertTemperature(value, fromUnit, toUnit);
    } else {
      const fromFactor = currentCategory.units[fromUnit].factor;
      const toFactor = currentCategory.units[toUnit].factor;
      convertedValue = (value * fromFactor) / toFactor;
    }

    setResult(convertedValue.toFixed(6).replace(/\.?0+$/, ''));
  };

  useEffect(() => {
    if (inputValue && fromUnit && toUnit) {
      performConversion();
    }
  }, [inputValue, fromUnit, toUnit, selectedCategory]);

  useEffect(() => {
    // Reset units when category changes
    const units = Object.keys(currentCategory.units);
    setFromUnit(units[0]);
    setToUnit(units[1] || units[0]);
  }, [selectedCategory]);

  const swapUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  const copyResult = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const reset = () => {
    setInputValue('1');
    setResult('');
  };

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView="unit-converter"
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
                    <ArrowLeftRight className="text-white" size={40} />
                  </div>
                  <h1 className="display-3 fw-bold mb-4">Universal Unit Converter</h1>
                  <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    Convert between different units of measurement with precision and ease. 
                    Support for length, weight, temperature, area, volume, speed, time, and energy.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                      <Download size={20} className="me-2" />
                      Download App
                    </Button>
                    <Button variant="outline-secondary" size="lg" className="border-white text-white">
                      <Share2 size={20} className="me-2" />
                      Share Converter
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Category Selection */}
          <section className="py-4 bg-white border-bottom">
            <div className="container-lg">
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? 'primary' : 'secondary'}
                      onClick={() => setSelectedCategory(category.id)}
                      className="d-flex align-items-center gap-2"
                    >
                      <IconComponent size={16} />
                      {category.name}
                    </Button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Converter Interface */}
          <section className="py-5 bg-light-bg">
            <div className="container-lg">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Card>
                      <div className="card-body p-5">
                        <div className="text-center mb-4">
                          <h2 className="h3 fw-bold text-deep-red mb-2">{currentCategory.name} Converter</h2>
                          <p className="text-muted">Convert between different {currentCategory.name.toLowerCase()} units</p>
                        </div>

                        <div className="row g-4 align-items-center">
                          {/* From Unit */}
                          <div className="col-md-5">
                            <label className="form-label fw-medium text-deep-red">From</label>
                            <div className="mb-3">
                              <select 
                                className="form-select form-select-lg"
                                value={fromUnit}
                                onChange={(e) => setFromUnit(e.target.value)}
                              >
                                {Object.entries(currentCategory.units).map(([key, unit]) => (
                                  <option key={key} value={key}>
                                    {unit.name} ({unit.symbol})
                                  </option>
                                ))}
                              </select>
                            </div>
                            <input
                              type="number"
                              className="form-control form-control-lg text-center"
                              value={inputValue}
                              onChange={(e) => setInputValue(e.target.value)}
                              placeholder="Enter value"
                              style={{ fontSize: '1.5rem' }}
                            />
                          </div>

                          {/* Swap Button */}
                          <div className="col-md-2 text-center">
                            <Button 
                              variant="secondary" 
                              onClick={swapUnits}
                              className="rounded-circle p-3"
                              style={{ width: '60px', height: '60px' }}
                            >
                              <ArrowLeftRight size={24} />
                            </Button>
                          </div>

                          {/* To Unit */}
                          <div className="col-md-5">
                            <label className="form-label fw-medium text-deep-red">To</label>
                            <div className="mb-3">
                              <select 
                                className="form-select form-select-lg"
                                value={toUnit}
                                onChange={(e) => setToUnit(e.target.value)}
                              >
                                {Object.entries(currentCategory.units).map(([key, unit]) => (
                                  <option key={key} value={key}>
                                    {unit.name} ({unit.symbol})
                                  </option>
                                ))}
                              </select>
                            </div>
                            <div className="position-relative">
                              <input
                                type="text"
                                className="form-control form-control-lg text-center bg-light"
                                value={result}
                                readOnly
                                placeholder="Result"
                                style={{ fontSize: '1.5rem' }}
                              />
                              {result && (
                                <Button 
                                  size="sm" 
                                  variant="secondary"
                                  onClick={copyResult}
                                  className="position-absolute top-50 end-0 translate-middle-y me-2"
                                >
                                  {copied ? <CheckCircle size={16} className="text-success" /> : <Copy size={16} />}
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Result Display */}
                        {result && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-4 p-4 bg-success bg-opacity-10 rounded-3 text-center"
                          >
                            <h4 className="fw-bold text-success mb-2">
                              {inputValue} {currentCategory.units[fromUnit].symbol} = {result} {currentCategory.units[toUnit].symbol}
                            </h4>
                            <p className="text-muted mb-0">
                              {inputValue} {currentCategory.units[fromUnit].name} equals {result} {currentCategory.units[toUnit].name}
                            </p>
                          </motion.div>
                        )}

                        {/* Action Buttons */}
                        <div className="d-flex gap-2 justify-content-center mt-4">
                          <Button variant="secondary" onClick={reset}>
                            <RotateCcw size={16} className="me-2" />
                            Reset
                          </Button>
                          {result && (
                            <Button onClick={copyResult}>
                              <Copy size={16} className="me-2" />
                              Copy Result
                            </Button>
                          )}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Conversions */}
          <section className="py-5 bg-white">
            <div className="container-lg">
              <div className="text-center mb-5">
                <h2 className="display-4 fw-bold text-deep-red mb-4">Quick Conversions</h2>
                <p className="lead text-muted">
                  Common conversion examples for {currentCategory.name.toLowerCase()}
                </p>
              </div>

              <div className="row g-4">
                {Object.entries(currentCategory.units).slice(0, 4).map(([key, unit], index) => (
                  <div key={key} className="col-md-6 col-lg-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="text-center h-100">
                        <div className="card-body p-4">
                          <div className="bg-primary-red bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                               style={{ width: '64px', height: '64px' }}>
                            <span className="text-primary-red fw-bold">{unit.symbol}</span>
                          </div>
                          <h5 className="fw-bold text-deep-red mb-2">{unit.name}</h5>
                          <p className="text-muted small mb-3">
                            1 {unit.name} = {unit.factor !== 1 ? `${unit.factor} base units` : 'base unit'}
                          </p>
                          <Button 
                            size="sm" 
                            variant="secondary"
                            onClick={() => {
                              setFromUnit(key);
                              setInputValue('1');
                            }}
                          >
                            Use as From
                          </Button>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                ))}
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