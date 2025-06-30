import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Atom,
  Download,
  Share2
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { SearchAndFilters } from '../periodic-table/SearchAndFilters';
import { CategoryLegend } from '../periodic-table/CategoryLegend';
import { ElementDetails } from '../periodic-table/ElementDetails';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';

interface PeriodicTablePageProps {
  onNavigate: (view: string) => void;
}

interface Element {
  symbol: string;
  name: string;
  atomicNumber: number;
  atomicMass: number;
  category: string;
  period: number;
  group: number;
  electronConfiguration: string;
  description: string;
  uses: string[];
  discoveredBy: string;
  yearDiscovered: number;
}

export function PeriodicTablePage({ onNavigate }: PeriodicTablePageProps) {
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const elements: Element[] = [
    {
      symbol: 'H',
      name: 'Hydrogen',
      atomicNumber: 1,
      atomicMass: 1.008,
      category: 'nonmetal',
      period: 1,
      group: 1,
      electronConfiguration: '1s¹',
      description: 'The lightest and most abundant element in the universe.',
      uses: ['Fuel cells', 'Rocket fuel', 'Chemical processing'],
      discoveredBy: 'Henry Cavendish',
      yearDiscovered: 1766
    },
    {
      symbol: 'He',
      name: 'Helium',
      atomicNumber: 2,
      atomicMass: 4.003,
      category: 'noble-gas',
      period: 1,
      group: 18,
      electronConfiguration: '1s²',
      description: 'Second lightest element, chemically inert noble gas.',
      uses: ['Balloons', 'Cooling systems', 'Breathing gas for diving'],
      discoveredBy: 'Pierre Janssen',
      yearDiscovered: 1868
    },
    {
      symbol: 'Li',
      name: 'Lithium',
      atomicNumber: 3,
      atomicMass: 6.941,
      category: 'alkali-metal',
      period: 2,
      group: 1,
      electronConfiguration: '[He] 2s¹',
      description: 'Lightest metal, highly reactive alkali metal.',
      uses: ['Batteries', 'Ceramics', 'Mental health medication'],
      discoveredBy: 'Johan August Arfwedson',
      yearDiscovered: 1817
    },
    {
      symbol: 'Be',
      name: 'Beryllium',
      atomicNumber: 4,
      atomicMass: 9.012,
      category: 'alkaline-earth-metal',
      period: 2,
      group: 2,
      electronConfiguration: '[He] 2s²',
      description: 'Light, strong metal used in aerospace applications.',
      uses: ['Aerospace alloys', 'X-ray windows', 'Nuclear reactors'],
      discoveredBy: 'Louis-Nicolas Vauquelin',
      yearDiscovered: 1798
    },
    {
      symbol: 'B',
      name: 'Boron',
      atomicNumber: 5,
      atomicMass: 10.811,
      category: 'metalloid',
      period: 2,
      group: 13,
      electronConfiguration: '[He] 2s² 2p¹',
      description: 'Semiconductor with high melting point, occurs naturally in borax.',
      uses: ['Glass manufacturing', 'Detergents', 'Semiconductors'],
      discoveredBy: 'Joseph Louis Gay-Lussac',
      yearDiscovered: 1808
    },
    {
      symbol: 'C',
      name: 'Carbon',
      atomicNumber: 6,
      atomicMass: 12.011,
      category: 'nonmetal',
      period: 2,
      group: 14,
      electronConfiguration: '[He] 2s² 2p²',
      description: 'Essential element for all known life forms.',
      uses: ['Organic compounds', 'Steel production', 'Diamond tools'],
      discoveredBy: 'Ancient civilizations',
      yearDiscovered: -3750
    },
    {
      symbol: 'N',
      name: 'Nitrogen',
      atomicNumber: 7,
      atomicMass: 14.007,
      category: 'nonmetal',
      period: 2,
      group: 15,
      electronConfiguration: '[He] 2s² 2p³',
      description: 'Makes up 78% of Earth\'s atmosphere.',
      uses: ['Fertilizers', 'Explosives', 'Food preservation'],
      discoveredBy: 'Daniel Rutherford',
      yearDiscovered: 1772
    },
    {
      symbol: 'O',
      name: 'Oxygen',
      atomicNumber: 8,
      atomicMass: 15.999,
      category: 'nonmetal',
      period: 2,
      group: 16,
      electronConfiguration: '[He] 2s² 2p⁴',
      description: 'Essential for respiration and combustion.',
      uses: ['Breathing', 'Steel production', 'Water treatment'],
      discoveredBy: 'Carl Wilhelm Scheele',
      yearDiscovered: 1774
    },
    {
      symbol: 'F',
      name: 'Fluorine',
      atomicNumber: 9,
      atomicMass: 18.998,
      category: 'halogen',
      period: 2,
      group: 17,
      electronConfiguration: '[He] 2s² 2p⁵',
      description: 'Most electronegative and reactive element.',
      uses: ['Toothpaste', 'Teflon', 'Refrigerants'],
      discoveredBy: 'Henri Moissan',
      yearDiscovered: 1886
    },
    {
      symbol: 'Ne',
      name: 'Neon',
      atomicNumber: 10,
      atomicMass: 20.180,
      category: 'noble-gas',
      period: 2,
      group: 18,
      electronConfiguration: '[He] 2s² 2p⁶',
      description: 'Inert gas known for its bright orange-red glow.',
      uses: ['Neon signs', 'Lasers', 'Cryogenic refrigerant'],
      discoveredBy: 'William Ramsay',
      yearDiscovered: 1898
    },
    {
      symbol: 'Na',
      name: 'Sodium',
      atomicNumber: 11,
      atomicMass: 22.990,
      category: 'alkali-metal',
      period: 3,
      group: 1,
      electronConfiguration: '[Ne] 3s¹',
      description: 'Highly reactive metal, essential for life.',
      uses: ['Table salt', 'Street lights', 'Chemical production'],
      discoveredBy: 'Humphry Davy',
      yearDiscovered: 1807
    },
    {
      symbol: 'Mg',
      name: 'Magnesium',
      atomicNumber: 12,
      atomicMass: 24.305,
      category: 'alkaline-earth-metal',
      period: 3,
      group: 2,
      electronConfiguration: '[Ne] 3s²',
      description: 'Light metal essential for chlorophyll and bones.',
      uses: ['Alloys', 'Fireworks', 'Dietary supplements'],
      discoveredBy: 'Joseph Black',
      yearDiscovered: 1755
    },
    {
      symbol: 'Al',
      name: 'Aluminum',
      atomicNumber: 13,
      atomicMass: 26.982,
      category: 'post-transition-metal',
      period: 3,
      group: 13,
      electronConfiguration: '[Ne] 3s² 3p¹',
      description: 'Lightweight, corrosion-resistant metal.',
      uses: ['Cans', 'Aircraft', 'Construction'],
      discoveredBy: 'Hans Christian Ørsted',
      yearDiscovered: 1825
    },
    {
      symbol: 'Si',
      name: 'Silicon',
      atomicNumber: 14,
      atomicMass: 28.085,
      category: 'metalloid',
      period: 3,
      group: 14,
      electronConfiguration: '[Ne] 3s² 3p²',
      description: 'Second most abundant element in Earth\'s crust.',
      uses: ['Semiconductors', 'Glass', 'Solar cells'],
      discoveredBy: 'Jöns Jacob Berzelius',
      yearDiscovered: 1824
    },
    {
      symbol: 'P',
      name: 'Phosphorus',
      atomicNumber: 15,
      atomicMass: 30.974,
      category: 'nonmetal',
      period: 3,
      group: 15,
      electronConfiguration: '[Ne] 3s² 3p³',
      description: 'Essential for DNA, ATP, and bones.',
      uses: ['Fertilizers', 'Detergents', 'Matches'],
      discoveredBy: 'Hennig Brand',
      yearDiscovered: 1669
    },
    {
      symbol: 'S',
      name: 'Sulfur',
      atomicNumber: 16,
      atomicMass: 32.065,
      category: 'nonmetal',
      period: 3,
      group: 16,
      electronConfiguration: '[Ne] 3s² 3p⁴',
      description: 'Yellow nonmetal with distinctive odor.',
      uses: ['Fertilizers', 'Gunpowder', 'Vulcanization of rubber'],
      discoveredBy: 'Ancient civilizations',
      yearDiscovered: -2000
    },
    {
      symbol: 'Cl',
      name: 'Chlorine',
      atomicNumber: 17,
      atomicMass: 35.453,
      category: 'halogen',
      period: 3,
      group: 17,
      electronConfiguration: '[Ne] 3s² 3p⁵',
      description: 'Yellow-green gas, strong oxidizing agent.',
      uses: ['Water purification', 'Bleach', 'PVC production'],
      discoveredBy: 'Carl Wilhelm Scheele',
      yearDiscovered: 1774
    },
    {
      symbol: 'Ar',
      name: 'Argon',
      atomicNumber: 18,
      atomicMass: 39.948,
      category: 'noble-gas',
      period: 3,
      group: 18,
      electronConfiguration: '[Ne] 3s² 3p⁶',
      description: 'Third most abundant gas in Earth\'s atmosphere.',
      uses: ['Light bulbs', 'Welding', 'Cryogenics'],
      discoveredBy: 'Lord Rayleigh',
      yearDiscovered: 1894
    },
    {
      symbol: 'K',
      name: 'Potassium',
      atomicNumber: 19,
      atomicMass: 39.098,
      category: 'alkali-metal',
      period: 4,
      group: 1,
      electronConfiguration: '[Ar] 4s¹',
      description: 'Soft, reactive metal essential for plant and animal life.',
      uses: ['Fertilizers', 'Food additives', 'Soap production'],
      discoveredBy: 'Humphry Davy',
      yearDiscovered: 1807
    },
    {
      symbol: 'Ca',
      name: 'Calcium',
      atomicNumber: 20,
      atomicMass: 40.078,
      category: 'alkaline-earth-metal',
      period: 4,
      group: 2,
      electronConfiguration: '[Ar] 4s²',
      description: 'Essential for bones, teeth, and cellular processes.',
      uses: ['Construction', 'Dietary supplements', 'Antacids'],
      discoveredBy: 'Humphry Davy',
      yearDiscovered: 1808
    },
    {
      symbol: 'Sc',
      name: 'Scandium',
      atomicNumber: 21,
      atomicMass: 44.956,
      category: 'transition-metal',
      period: 4,
      group: 3,
      electronConfiguration: '[Ar] 3d¹ 4s²',
      description: 'Rare earth element with high melting point.',
      uses: ['Aerospace alloys', 'Sports equipment', 'High-intensity lights'],
      discoveredBy: 'Lars Fredrik Nilson',
      yearDiscovered: 1879
    },
    {
      symbol: 'Ti',
      name: 'Titanium',
      atomicNumber: 22,
      atomicMass: 47.867,
      category: 'transition-metal',
      period: 4,
      group: 4,
      electronConfiguration: '[Ar] 3d² 4s²',
      description: 'Strong, lightweight, corrosion-resistant metal.',
      uses: ['Aerospace', 'Medical implants', 'White pigment'],
      discoveredBy: 'William Gregor',
      yearDiscovered: 1791
    },
    {
      symbol: 'V',
      name: 'Vanadium',
      atomicNumber: 23,
      atomicMass: 50.942,
      category: 'transition-metal',
      period: 4,
      group: 5,
      electronConfiguration: '[Ar] 3d³ 4s²',
      description: 'Hard, ductile metal resistant to corrosion.',
      uses: ['Steel alloys', 'Catalysts', 'Batteries'],
      discoveredBy: 'Andrés Manuel del Río',
      yearDiscovered: 1801
    },
    {
      symbol: 'Cr',
      name: 'Chromium',
      atomicNumber: 24,
      atomicMass: 51.996,
      category: 'transition-metal',
      period: 4,
      group: 6,
      electronConfiguration: '[Ar] 3d⁵ 4s¹',
      description: 'Hard, shiny metal with high corrosion resistance.',
      uses: ['Stainless steel', 'Chrome plating', 'Dyes and pigments'],
      discoveredBy: 'Louis Nicolas Vauquelin',
      yearDiscovered: 1797
    },
    {
      symbol: 'Mn',
      name: 'Manganese',
      atomicNumber: 25,
      atomicMass: 54.938,
      category: 'transition-metal',
      period: 4,
      group: 7,
      electronConfiguration: '[Ar] 3d⁵ 4s²',
      description: 'Hard, brittle metal essential for plant photosynthesis.',
      uses: ['Steel production', 'Batteries', 'Dietary supplement'],
      discoveredBy: 'Johan Gottlieb Gahn',
      yearDiscovered: 1774
    },
    {
      symbol: 'Fe',
      name: 'Iron',
      atomicNumber: 26,
      atomicMass: 55.845,
      category: 'transition-metal',
      period: 4,
      group: 8,
      electronConfiguration: '[Ar] 3d⁶ 4s²',
      description: 'Most common element on Earth by mass, forms rust.',
      uses: ['Steel', 'Construction', 'Machinery'],
      discoveredBy: 'Ancient civilizations',
      yearDiscovered: -3500
    },
    {
      symbol: 'Co',
      name: 'Cobalt',
      atomicNumber: 27,
      atomicMass: 58.933,
      category: 'transition-metal',
      period: 4,
      group: 9,
      electronConfiguration: '[Ar] 3d⁷ 4s²',
      description: 'Hard, lustrous metal with magnetic properties.',
      uses: ['Magnets', 'Batteries', 'Alloys'],
      discoveredBy: 'Georg Brandt',
      yearDiscovered: 1735
    },
    {
      symbol: 'Ni',
      name: 'Nickel',
      atomicNumber: 28,
      atomicMass: 58.693,
      category: 'transition-metal',
      period: 4,
      group: 10,
      electronConfiguration: '[Ar] 3d⁸ 4s²',
      description: 'Silvery-white metal with high corrosion resistance.',
      uses: ['Stainless steel', 'Batteries', 'Coins'],
      discoveredBy: 'Axel Fredrik Cronstedt',
      yearDiscovered: 1751
    },
    {
      symbol: 'Cu',
      name: 'Copper',
      atomicNumber: 29,
      atomicMass: 63.546,
      category: 'transition-metal',
      period: 4,
      group: 11,
      electronConfiguration: '[Ar] 3d¹⁰ 4s¹',
      description: 'Reddish metal with high thermal and electrical conductivity.',
      uses: ['Electrical wiring', 'Plumbing', 'Coins'],
      discoveredBy: 'Ancient civilizations',
      yearDiscovered: -8000
    },
    {
      symbol: 'Zn',
      name: 'Zinc',
      atomicNumber: 30,
      atomicMass: 65.38,
      category: 'transition-metal',
      period: 4,
      group: 12,
      electronConfiguration: '[Ar] 3d¹⁰ 4s²',
      description: 'Bluish-white metal used to galvanize iron.',
      uses: ['Galvanization', 'Batteries', 'Dietary supplement'],
      discoveredBy: 'Ancient civilizations',
      yearDiscovered: -1500
    },
    {
      symbol: 'Ga',
      name: 'Gallium',
      atomicNumber: 31,
      atomicMass: 69.723,
      category: 'post-transition-metal',
      period: 4,
      group: 13,
      electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p¹',
      description: 'Soft, silvery metal that melts near room temperature.',
      uses: ['Semiconductors', 'LEDs', 'High-temperature thermometers'],
      discoveredBy: 'Lecoq de Boisbaudran',
      yearDiscovered: 1875
    },
    {
      symbol: 'Ge',
      name: 'Germanium',
      atomicNumber: 32,
      atomicMass: 72.630,
      category: 'metalloid',
      period: 4,
      group: 14,
      electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p²',
      description: 'Lustrous, hard-brittle, grayish-white metalloid.',
      uses: ['Fiber optics', 'Infrared optics', 'Semiconductors'],
      discoveredBy: 'Clemens Winkler',
      yearDiscovered: 1886
    },
    {
      symbol: 'As',
      name: 'Arsenic',
      atomicNumber: 33,
      atomicMass: 74.922,
      category: 'metalloid',
      period: 4,
      group: 15,
      electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p³',
      description: 'Metalloid known for its toxicity.',
      uses: ['Wood preservatives', 'Semiconductors', 'Pesticides'],
      discoveredBy: 'Ancient civilizations',
      yearDiscovered: -2500
    },
    {
      symbol: 'Se',
      name: 'Selenium',
      atomicNumber: 34,
      atomicMass: 78.971,
      category: 'nonmetal',
      period: 4,
      group: 16,
      electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁴',
      description: 'Nonmetal with photovoltaic and photoconductive properties.',
      uses: ['Solar cells', 'Photocopiers', 'Nutritional supplements'],
      discoveredBy: 'Jöns Jacob Berzelius',
      yearDiscovered: 1817
    },
    {
      symbol: 'Br',
      name: 'Bromine',
      atomicNumber: 35,
      atomicMass: 79.904,
      category: 'halogen',
      period: 4,
      group: 17,
      electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁵',
      description: 'Reddish-brown liquid at room temperature.',
      uses: ['Flame retardants', 'Pesticides', 'Pharmaceuticals'],
      discoveredBy: 'Antoine Jérôme Balard',
      yearDiscovered: 1826
    },
    {
      symbol: 'Kr',
      name: 'Krypton',
      atomicNumber: 36,
      atomicMass: 83.798,
      category: 'noble-gas',
      period: 4,
      group: 18,
      electronConfiguration: '[Ar] 3d¹⁰ 4s² 4p⁶',
      description: 'Colorless, odorless noble gas used in lighting.',
      uses: ['Lighting', 'Lasers', 'Window insulation'],
      discoveredBy: 'William Ramsay',
      yearDiscovered: 1898
    },
    {
      symbol: 'Rb',
      name: 'Rubidium',
      atomicNumber: 37,
      atomicMass: 85.468,
      category: 'alkali-metal',
      period: 5,
      group: 1,
      electronConfiguration: '[Kr] 5s¹',
      description: 'Soft, silvery-white metallic element.',
      uses: ['Atomic clocks', 'Electronics', 'Photocells'],
      discoveredBy: 'Robert Bunsen',
      yearDiscovered: 1861
    },
    {
      symbol: 'Sr',
      name: 'Strontium',
      atomicNumber: 38,
      atomicMass: 87.62,
      category: 'alkaline-earth-metal',
      period: 5,
      group: 2,
      electronConfiguration: '[Kr] 5s²',
      description: 'Soft, silvery metal that burns in air.',
      uses: ['Fireworks', 'Glow-in-the-dark products', 'Nuclear batteries'],
      discoveredBy: 'Adair Crawford',
      yearDiscovered: 1790
    },
    {
      symbol: 'Y',
      name: 'Yttrium',
      atomicNumber: 39,
      atomicMass: 88.906,
      category: 'transition-metal',
      period: 5,
      group: 3,
      electronConfiguration: '[Kr] 4d¹ 5s²',
      description: 'Silvery-metallic transition metal.',
      uses: ['LED lights', 'Cancer treatments', 'Superconductors'],
      discoveredBy: 'Johan Gadolin',
      yearDiscovered: 1794
    },
    {
      symbol: 'Zr',
      name: 'Zirconium',
      atomicNumber: 40,
      atomicMass: 91.224,
      category: 'transition-metal',
      period: 5,
      group: 4,
      electronConfiguration: '[Kr] 4d² 5s²',
      description: 'Corrosion-resistant transition metal.',
      uses: ['Nuclear reactors', 'Ceramics', 'Surgical implants'],
      discoveredBy: 'Martin Heinrich Klaproth',
      yearDiscovered: 1789
    },
    {
      symbol: 'Nb',
      name: 'Niobium',
      atomicNumber: 41,
      atomicMass: 92.906,
      category: 'transition-metal',
      period: 5,
      group: 5,
      electronConfiguration: '[Kr] 4d⁴ 5s¹',
      description: 'Soft, gray, ductile transition metal.',
      uses: ['Steel alloys', 'Superconductors', 'Jewelry'],
      discoveredBy: 'Charles Hatchett',
      yearDiscovered: 1801
    },
    {
      symbol: 'Mo',
      name: 'Molybdenum',
      atomicNumber: 42,
      atomicMass: 95.95,
      category: 'transition-metal',
      period: 5,
      group: 6,
      electronConfiguration: '[Kr] 4d⁵ 5s¹',
      description: 'Silvery metal with high melting point.',
      uses: ['High-strength steel alloys', 'Catalysts', 'Lubricants'],
      discoveredBy: 'Carl Wilhelm Scheele',
      yearDiscovered: 1778
    },
    {
      symbol: 'Tc',
      name: 'Technetium',
      atomicNumber: 43,
      atomicMass: 98,
      category: 'transition-metal',
      period: 5,
      group: 7,
      electronConfiguration: '[Kr] 4d⁵ 5s²',
      description: 'Radioactive metal, first artificially produced element.',
      uses: ['Medical imaging', 'Nuclear medicine', 'Corrosion inhibitor'],
      discoveredBy: 'Carlo Perrier',
      yearDiscovered: 1937
    },
    {
      symbol: 'Ru',
      name: 'Ruthenium',
      atomicNumber: 44,
      atomicMass: 101.07,
      category: 'transition-metal',
      period: 5,
      group: 8,
      electronConfiguration: '[Kr] 4d⁷ 5s¹',
      description: 'Hard, white metal resistant to corrosion.',
      uses: ['Electronics', 'Catalysts', 'Jewelry'],
      discoveredBy: 'Karl Ernst Claus',
      yearDiscovered: 1844
    },
    {
      symbol: 'Rh',
      name: 'Rhodium',
      atomicNumber: 45,
      atomicMass: 102.91,
      category: 'transition-metal',
      period: 5,
      group: 9,
      electronConfiguration: '[Kr] 4d⁸ 5s¹',
      description: 'Rare, silvery-white, hard, corrosion-resistant metal.',
      uses: ['Catalytic converters', 'Jewelry', 'Mirrors'],
      discoveredBy: 'William Hyde Wollaston',
      yearDiscovered: 1804
    },
    {
      symbol: 'Pd',
      name: 'Palladium',
      atomicNumber: 46,
      atomicMass: 106.42,
      category: 'transition-metal',
      period: 5,
      group: 10,
      electronConfiguration: '[Kr] 4d¹⁰',
      description: 'Rare and lustrous silvery-white metal.',
      uses: ['Catalytic converters', 'Electronics', 'Jewelry'],
      discoveredBy: 'William Hyde Wollaston',
      yearDiscovered: 1803
    },
    {
      symbol: 'Ag',
      name: 'Silver',
      atomicNumber: 47,
      atomicMass: 107.87,
      category: 'transition-metal',
      period: 5,
      group: 11,
      electronConfiguration: '[Kr] 4d¹⁰ 5s¹',
      description: 'Soft, white, lustrous transition metal with highest electrical conductivity.',
      uses: ['Jewelry', 'Photography', 'Electronics'],
      discoveredBy: 'Ancient civilizations',
      yearDiscovered: -3000
    },
    {
      symbol: 'Cd',
      name: 'Cadmium',
      atomicNumber: 48,
      atomicMass: 112.41,
      category: 'transition-metal',
      period: 5,
      group: 12,
      electronConfiguration: '[Kr] 4d¹⁰ 5s²',
      description: 'Soft, bluish-white metal, toxic and carcinogenic.',
      uses: ['Batteries', 'Pigments', 'Electroplating'],
      discoveredBy: 'Karl Samuel Leberecht Hermann',
      yearDiscovered: 1817
    },
    {
      symbol: 'In',
      name: 'Indium',
      atomicNumber: 49,
      atomicMass: 114.82,
      category: 'post-transition-metal',
      period: 5,
      group: 13,
      electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p¹',
      description: 'Soft, malleable post-transition metal.',
      uses: ['Touch screens', 'Solders', 'Semiconductors'],
      discoveredBy: 'Ferdinand Reich',
      yearDiscovered: 1863
    },
    {
      symbol: 'Sn',
      name: 'Tin',
      atomicNumber: 50,
      atomicMass: 118.71,
      category: 'post-transition-metal',
      period: 5,
      group: 14,
      electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p²',
      description: 'Malleable, ductile, and highly crystalline silver-white metal.',
      uses: ['Cans', 'Solders', 'Bronze'],
      discoveredBy: 'Ancient civilizations',
      yearDiscovered: -3500
    },
    {
      symbol: 'Sb',
      name: 'Antimony',
      atomicNumber: 51,
      atomicMass: 121.76,
      category: 'metalloid',
      period: 5,
      group: 15,
      electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p³',
      description: 'Lustrous gray metalloid, toxic in certain forms.',
      uses: ['Flame retardants', 'Batteries', 'Alloys'],
      discoveredBy: 'Ancient civilizations',
      yearDiscovered: -3000
    },
    {
      symbol: 'Te',
      name: 'Tellurium',
      atomicNumber: 52,
      atomicMass: 127.60,
      category: 'metalloid',
      period: 5,
      group: 16,
      electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p⁴',
      description: 'Brittle, mildly toxic, rare metalloid.',
      uses: ['Solar panels', 'Alloys', 'Ceramics'],
      discoveredBy: 'Franz-Joseph Müller von Reichenstein',
      yearDiscovered: 1782
    },
    {
      symbol: 'I',
      name: 'Iodine',
      atomicNumber: 53,
      atomicMass: 126.90,
      category: 'halogen',
      period: 5,
      group: 17,
      electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p⁵',
      description: 'Dark purple-black solid that sublimes to a violet gas.',
      uses: ['Disinfectants', 'Photography', 'Nutrition'],
      discoveredBy: 'Bernard Courtois',
      yearDiscovered: 1811
    },
    {
      symbol: 'Xe',
      name: 'Xenon',
      atomicNumber: 54,
      atomicMass: 131.29,
      category: 'noble-gas',
      period: 5,
      group: 18,
      electronConfiguration: '[Kr] 4d¹⁰ 5s² 5p⁶',
      description: 'Colorless, dense, odorless noble gas.',
      uses: ['Lighting', 'Medical imaging', 'Spacecraft propulsion'],
      discoveredBy: 'William Ramsay',
      yearDiscovered: 1898
    },
    {
      symbol: 'Cs',
      name: 'Cesium',
      atomicNumber: 55,
      atomicMass: 132.91,
      category: 'alkali-metal',
      period: 6,
      group: 1,
      electronConfiguration: '[Xe] 6s¹',
      description: 'Soft, gold-colored alkali metal, liquid near room temperature.',
      uses: ['Atomic clocks', 'Photoelectric cells', 'Catalysts'],
      discoveredBy: 'Robert Bunsen',
      yearDiscovered: 1860
    },
    {
      symbol: 'Ba',
      name: 'Barium',
      atomicNumber: 56,
      atomicMass: 137.33,
      category: 'alkaline-earth-metal',
      period: 6,
      group: 2,
      electronConfiguration: '[Xe] 6s²',
      description: 'Soft, silvery alkaline earth metal, reactive with air.',
      uses: ['Medical imaging', 'Fireworks', 'Drilling fluids'],
      discoveredBy: 'Carl Wilhelm Scheele',
      yearDiscovered: 1772
    },
    {
      symbol: 'La',
      name: 'Lanthanum',
      atomicNumber: 57,
      atomicMass: 138.91,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 5d¹ 6s²',
      description: 'Soft, malleable, silvery-white metal, first lanthanide.',
      uses: ['Hybrid car batteries', 'Camera lenses', 'Carbon arc lamps'],
      discoveredBy: 'Carl Gustaf Mosander',
      yearDiscovered: 1839
    },
    {
      symbol: 'Ce',
      name: 'Cerium',
      atomicNumber: 58,
      atomicMass: 140.12,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f¹ 5d¹ 6s²',
      description: 'Soft, silvery, reactive metal, most abundant rare earth.',
      uses: ['Catalytic converters', 'Self-cleaning ovens', 'Flint for lighters'],
      discoveredBy: 'Martin Heinrich Klaproth',
      yearDiscovered: 1803
    },
    {
      symbol: 'Pr',
      name: 'Praseodymium',
      atomicNumber: 59,
      atomicMass: 140.91,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f³ 6s²',
      description: 'Soft, silvery, malleable and ductile metal.',
      uses: ['Aircraft engines', 'Fiber optic cables', 'Permanent magnets'],
      discoveredBy: 'Carl Auer von Welsbach',
      yearDiscovered: 1885
    },
    {
      symbol: 'Nd',
      name: 'Neodymium',
      atomicNumber: 60,
      atomicMass: 144.24,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f⁴ 6s²',
      description: 'Soft silvery metal that tarnishes in air.',
      uses: ['Powerful permanent magnets', 'Lasers', 'Glass coloring'],
      discoveredBy: 'Carl Auer von Welsbach',
      yearDiscovered: 1885
    },
    {
      symbol: 'Pm',
      name: 'Promethium',
      atomicNumber: 61,
      atomicMass: 145,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f⁵ 6s²',
      description: 'Radioactive metal, does not occur naturally on Earth.',
      uses: ['Nuclear batteries', 'Luminous paint', 'Thickness measurement'],
      discoveredBy: 'Jacob A. Marinsky',
      yearDiscovered: 1945
    },
    {
      symbol: 'Sm',
      name: 'Samarium',
      atomicNumber: 62,
      atomicMass: 150.36,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f⁶ 6s²',
      description: 'Moderately hard silvery metal that oxidizes in air.',
      uses: ['Permanent magnets', 'Cancer treatment', 'Nuclear reactors'],
      discoveredBy: 'Paul Émile Lecoq de Boisbaudran',
      yearDiscovered: 1879
    },
    {
      symbol: 'Eu',
      name: 'Europium',
      atomicNumber: 63,
      atomicMass: 151.96,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f⁷ 6s²',
      description: 'Soft silvery metal, most reactive rare earth element.',
      uses: ['Red and blue phosphors in displays', 'Anti-counterfeiting in Euro banknotes', 'Nuclear reactors'],
      discoveredBy: 'Eugène-Anatole Demarçay',
      yearDiscovered: 1901
    },
    {
      symbol: 'Gd',
      name: 'Gadolinium',
      atomicNumber: 64,
      atomicMass: 157.25,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f⁷ 5d¹ 6s²',
      description: 'Silvery-white, malleable and ductile rare earth element.',
      uses: ['MRI contrast agents', 'Nuclear reactors', 'Memory devices'],
      discoveredBy: 'Jean Charles Galissard de Marignac',
      yearDiscovered: 1880
    },
    {
      symbol: 'Tb',
      name: 'Terbium',
      atomicNumber: 65,
      atomicMass: 158.93,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f⁹ 6s²',
      description: 'Silvery-white, rare earth metal that is malleable and ductile.',
      uses: ['Green phosphors', 'Solid-state devices', 'Naval sonar systems'],
      discoveredBy: 'Carl Gustaf Mosander',
      yearDiscovered: 1843
    },
    {
      symbol: 'Dy',
      name: 'Dysprosium',
      atomicNumber: 66,
      atomicMass: 162.50,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f¹⁰ 6s²',
      description: 'Soft, silvery metal with high magnetic strength.',
      uses: ['Wind turbines', 'Data storage devices', 'Nuclear reactors'],
      discoveredBy: 'Paul Émile Lecoq de Boisbaudran',
      yearDiscovered: 1886
    },
    {
      symbol: 'Ho',
      name: 'Holmium',
      atomicNumber: 67,
      atomicMass: 164.93,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f¹¹ 6s²',
      description: 'Relatively soft and malleable silvery-white metal.',
      uses: ['Lasers', 'Nuclear reactors', 'Magnetic materials'],
      discoveredBy: 'Marc Delafontaine',
      yearDiscovered: 1878
    },
    {
      symbol: 'Er',
      name: 'Erbium',
      atomicNumber: 68,
      atomicMass: 167.26,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f¹² 6s²',
      description: 'Silvery-white solid metal when artificially isolated.',
      uses: ['Fiber optic amplifiers', 'Lasers', 'Metallurgy'],
      discoveredBy: 'Carl Gustaf Mosander',
      yearDiscovered: 1843
    },
    {
      symbol: 'Tm',
      name: 'Thulium',
      atomicNumber: 69,
      atomicMass: 168.93,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f¹³ 6s²',
      description: 'Bright silvery-gray luster, least abundant rare earth.',
      uses: ['Portable X-ray devices', 'Lasers', 'Ceramic magnetic materials'],
      discoveredBy: 'Per Teodor Cleve',
      yearDiscovered: 1879
    },
    {
      symbol: 'Yb',
      name: 'Ytterbium',
      atomicNumber: 70,
      atomicMass: 173.05,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f¹⁴ 6s²',
      description: 'Soft, malleable, and ductile chemical element.',
      uses: ['Portable X-ray machines', 'Stress gauges', 'Lasers'],
      discoveredBy: 'Jean Charles Galissard de Marignac',
      yearDiscovered: 1878
    },
    {
      symbol: 'Lu',
      name: 'Lutetium',
      atomicNumber: 71,
      atomicMass: 174.97,
      category: 'lanthanide',
      period: 6,
      group: 3,
      electronConfiguration: '[Xe] 4f¹⁴ 5d¹ 6s²',
      description: 'Silvery white, last element in the lanthanide series.',
      uses: ['Petroleum cracking', 'Cancer therapy', 'Age determination'],
      discoveredBy: 'Georges Urbain',
      yearDiscovered: 1907
    },
    {
      symbol: 'Hf',
      name: 'Hafnium',
      atomicNumber: 72,
      atomicMass: 178.49,
      category: 'transition-metal',
      period: 6,
      group: 4,
      electronConfiguration: '[Xe] 4f¹⁴ 5d² 6s²',
      description: 'Shiny, silvery, corrosion-resistant metal.',
      uses: ['Nuclear reactors', 'Superalloys', 'Plasma cutting'],
      discoveredBy: 'Dirk Coster',
      yearDiscovered: 1923
    },
    {
      symbol: 'Ta',
      name: 'Tantalum',
      atomicNumber: 73,
      atomicMass: 180.95,
      category: 'transition-metal',
      period: 6,
      group: 5,
      electronConfiguration: '[Xe] 4f¹⁴ 5d³ 6s²',
      description: 'Hard, blue-gray, lustrous transition metal.',
      uses: ['Electronics', 'Surgical implants', 'High-temperature alloys'],
      discoveredBy: 'Anders Gustaf Ekeberg',
      yearDiscovered: 1802
    },
    {
      symbol: 'W',
      name: 'Tungsten',
      atomicNumber: 74,
      atomicMass: 183.84,
      category: 'transition-metal',
      period: 6,
      group: 6,
      electronConfiguration: '[Xe] 4f¹⁴ 5d⁴ 6s²',
      description: 'Rare metal with highest melting point of all elements.',
      uses: ['Light bulb filaments', 'X-ray tubes', 'Heating elements'],
      discoveredBy: 'Fausto and Juan José de Elhuyar',
      yearDiscovered: 1783
    },
    {
      symbol: 'Re',
      name: 'Rhenium',
      atomicNumber: 75,
      atomicMass: 186.21,
      category: 'transition-metal',
      period: 6,
      group: 7,
      electronConfiguration: '[Xe] 4f¹⁴ 5d⁵ 6s²',
      description: 'Dense, silvery-white metal with high melting point.',
      uses: ['Jet engines', 'Catalysts', 'Electrical contacts'],
      discoveredBy: 'Masataka Ogawa',
      yearDiscovered: 1908
    },
    {
      symbol: 'Os',
      name: 'Osmium',
      atomicNumber: 76,
      atomicMass: 190.23,
      category: 'transition-metal',
      period: 6,
      group: 8,
      electronConfiguration: '[Xe] 4f¹⁴ 5d⁶ 6s²',
      description: 'Bluish-white, extremely dense transition metal.',
      uses: ['Electrical contacts', 'Fountain pen tips', 'Instrument pivots'],
      discoveredBy: 'Smithson Tennant',
      yearDiscovered: 1803
    },
    {
      symbol: 'Ir',
      name: 'Iridium',
      atomicNumber: 77,
      atomicMass: 192.22,
      category: 'transition-metal',
      period: 6,
      group: 9,
      electronConfiguration: '[Xe] 4f¹⁴ 5d⁷ 6s²',
      description: 'Very hard, brittle, silvery-white transition metal.',
      uses: ['Spark plugs', 'Crucibles', 'Pen nibs'],
      discoveredBy: 'Smithson Tennant',
      yearDiscovered: 1803
    },
    {
      symbol: 'Pt',
      name: 'Platinum',
      atomicNumber: 78,
      atomicMass: 195.08,
      category: 'transition-metal',
      period: 6,
      group: 10,
      electronConfiguration: '[Xe] 4f¹⁴ 5d⁹ 6s¹',
      description: 'Dense, malleable, ductile, precious, gray-white transition metal.',
      uses: ['Catalytic converters', 'Jewelry', 'Laboratory equipment'],
      discoveredBy: 'Antonio de Ulloa',
      yearDiscovered: 1735
    },
    {
      symbol: 'Au',
      name: 'Gold',
      atomicNumber: 79,
      atomicMass: 196.97,
      category: 'transition-metal',
      period: 6,
      group: 11,
      electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹',
      description: 'Bright, slightly reddish yellow, dense, soft, malleable, and ductile metal.',
      uses: ['Jewelry', 'Electronics', 'Monetary exchange'],
      discoveredBy: 'Ancient civilizations',
      yearDiscovered: -6000
    },
    {
      symbol: 'Hg',
      name: 'Mercury',
      atomicNumber: 80,
      atomicMass: 200.59,
      category: 'transition-metal',
      period: 6,
      group: 12,
      electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s²',
      description: 'Heavy, silvery-white metal, liquid at room temperature.',
      uses: ['Thermometers', 'Dental amalgams', 'Fluorescent lamps'],
      discoveredBy: 'Ancient civilizations',
      yearDiscovered: -2000
    },
    {
      symbol: 'Tl',
      name: 'Thallium',
      atomicNumber: 81,
      atomicMass: 204.38,
      category: 'post-transition-metal',
      period: 6,
      group: 13,
      electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹',
      description: 'Soft, malleable gray post-transition metal, highly toxic.',
      uses: ['Electronics', 'Glass manufacturing', 'Medical imaging'],
      discoveredBy: 'William Crookes',
      yearDiscovered: 1861
    },
    {
      symbol: 'Pb',
      name: 'Lead',
      atomicNumber: 82,
      atomicMass: 207.2,
      category: 'post-transition-metal',
      period: 6,
      group: 14,
      electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²',
      description: 'Soft, malleable, heavy post-transition metal.',
      uses: ['Batteries', 'Radiation shielding', 'Solders'],
      discoveredBy: 'Ancient civilizations',
      yearDiscovered: -7000
    },
    {
      symbol: 'Bi',
      name: 'Bismuth',
      atomicNumber: 83,
      atomicMass: 208.98,
      category: 'post-transition-metal',
      period: 6,
      group: 15,
      electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³',
      description: 'Brittle metal with a pinkish hue.',
      uses: ['Pharmaceuticals', 'Cosmetics', 'Alloys'],
      discoveredBy: 'Claude François Geoffroy',
      yearDiscovered: 1753
    },
    {
      symbol: 'Po',
      name: 'Polonium',
      atomicNumber: 84,
      atomicMass: 209,
      category: 'post-transition-metal',
      period: 6,
      group: 16,
      electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴',
      description: 'Rare, radioactive metal, discovered by Marie Curie.',
      uses: ['Antistatic devices', 'Thermoelectric power', 'Neutron sources'],
      discoveredBy: 'Marie Curie',
      yearDiscovered: 1898
    },
    {
      symbol: 'At',
      name: 'Astatine',
      atomicNumber: 85,
      atomicMass: 210,
      category: 'halogen',
      period: 6,
      group: 17,
      electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵',
      description: 'Rarest naturally occurring element in Earth\'s crust.',
      uses: ['Cancer treatment research', 'Scientific research'],
      discoveredBy: 'Dale R. Corson',
      yearDiscovered: 1940
    },
    {
      symbol: 'Rn',
      name: 'Radon',
      atomicNumber: 86,
      atomicMass: 222,
      category: 'noble-gas',
      period: 6,
      group: 18,
      electronConfiguration: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶',
      description: 'Radioactive, colorless, odorless, tasteless noble gas.',
      uses: ['Cancer treatment', 'Radon spas', 'Geological research'],
      discoveredBy: 'Friedrich Ernst Dorn',
      yearDiscovered: 1900
    },
    {
      symbol: 'Fr',
      name: 'Francium',
      atomicNumber: 87,
      atomicMass: 223,
      category: 'alkali-metal',
      period: 7,
      group: 1,
      electronConfiguration: '[Rn] 7s¹',
      description: 'Highly radioactive metal, extremely rare in nature.',
      uses: ['Research', 'Atomic structure studies'],
      discoveredBy: 'Marguerite Perey',
      yearDiscovered: 1939
    },
    {
      symbol: 'Ra',
      name: 'Radium',
      atomicNumber: 88,
      atomicMass: 226,
      category: 'alkaline-earth-metal',
      period: 7,
      group: 2,
      electronConfiguration: '[Rn] 7s²',
      description: 'Radioactive, luminescent, silvery-white metal.',
      uses: ['Cancer treatment', 'Luminous paint', 'Neutron sources'],
      discoveredBy: 'Marie and Pierre Curie',
      yearDiscovered: 1898
    },
    {
      symbol: 'Ac',
      name: 'Actinium',
      atomicNumber: 89,
      atomicMass: 227,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 6d¹ 7s²',
      description: 'Soft, silvery-white radioactive metal.',
      uses: ['Neutron sources', 'Cancer therapy research'],
      discoveredBy: 'André-Louis Debierne',
      yearDiscovered: 1899
    },
    {
      symbol: 'Th',
      name: 'Thorium',
      atomicNumber: 90,
      atomicMass: 232.04,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 6d² 7s²',
      description: 'Silvery, radioactive metal, potential nuclear fuel.',
      uses: ['Nuclear fuel', 'Gas mantles', 'High-temperature ceramics'],
      discoveredBy: 'Jöns Jakob Berzelius',
      yearDiscovered: 1829
    },
    {
      symbol: 'Pa',
      name: 'Protactinium',
      atomicNumber: 91,
      atomicMass: 231.04,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 5f² 6d¹ 7s²',
      description: 'Dense, silvery-gray radioactive actinide metal.',
      uses: ['Scientific research', 'Nuclear dating'],
      discoveredBy: 'William Crookes',
      yearDiscovered: 1913
    },
    {
      symbol: 'U',
      name: 'Uranium',
      atomicNumber: 92,
      atomicMass: 238.03,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 5f³ 6d¹ 7s²',
      description: 'Silvery-white, weakly radioactive metal.',
      uses: ['Nuclear fuel', 'Military applications', 'Radiation shielding'],
      discoveredBy: 'Martin Heinrich Klaproth',
      yearDiscovered: 1789
    },
    {
      symbol: 'Np',
      name: 'Neptunium',
      atomicNumber: 93,
      atomicMass: 237,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 5f⁴ 6d¹ 7s²',
      description: 'Silvery radioactive metal, first transuranium element.',
      uses: ['Nuclear detectors', 'Neutron detection'],
      discoveredBy: 'Edwin McMillan',
      yearDiscovered: 1940
    },
    {
      symbol: 'Pu',
      name: 'Plutonium',
      atomicNumber: 94,
      atomicMass: 244,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 5f⁶ 7s²',
      description: 'Radioactive, silvery-white metal, used in nuclear weapons.',
      uses: ['Nuclear weapons', 'Nuclear power', 'Spacecraft power'],
      discoveredBy: 'Glenn T. Seaborg',
      yearDiscovered: 1940
    },
    {
      symbol: 'Am',
      name: 'Americium',
      atomicNumber: 95,
      atomicMass: 243,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 5f⁷ 7s²',
      description: 'Synthetic radioactive metal, silvery-white appearance.',
      uses: ['Smoke detectors', 'Thickness gauges', 'Neutron sources'],
      discoveredBy: 'Glenn T. Seaborg',
      yearDiscovered: 1944
    },
    {
      symbol: 'Cm',
      name: 'Curium',
      atomicNumber: 96,
      atomicMass: 247,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 5f⁷ 6d¹ 7s²',
      description: 'Synthetic, radioactive, silvery metal.',
      uses: ['Scientific research', 'Alpha particle sources', 'Radioisotope power'],
      discoveredBy: 'Glenn T. Seaborg',
      yearDiscovered: 1944
    },
    {
      symbol: 'Bk',
      name: 'Berkelium',
      atomicNumber: 97,
      atomicMass: 247,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 5f⁹ 7s²',
      description: 'Synthetic, radioactive metal, produced in nuclear reactors.',
      uses: ['Scientific research', 'Nuclear synthesis'],
      discoveredBy: 'Glenn T. Seaborg',
      yearDiscovered: 1949
    },
    {
      symbol: 'Cf',
      name: 'Californium',
      atomicNumber: 98,
      atomicMass: 251,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 5f¹⁰ 7s²',
      description: 'Radioactive metal, strong neutron emitter.',
      uses: ['Neutron moisture gauges', 'Metal detectors', 'Cancer treatment'],
      discoveredBy: 'Glenn T. Seaborg',
      yearDiscovered: 1950
    },
    {
      symbol: 'Es',
      name: 'Einsteinium',
      atomicNumber: 99,
      atomicMass: 252,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 5f¹¹ 7s²',
      description: 'Synthetic element, soft, silvery, paramagnetic metal.',
      uses: ['Scientific research', 'Creating heavier elements'],
      discoveredBy: 'Albert Ghiorso',
      yearDiscovered: 1952
    },
    {
      symbol: 'Fm',
      name: 'Fermium',
      atomicNumber: 100,
      atomicMass: 257,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 5f¹² 7s²',
      description: 'Synthetic, radioactive metal, produced by nuclear bombardment.',
      uses: ['Scientific research'],
      discoveredBy: 'Albert Ghiorso',
      yearDiscovered: 1952
    },
    {
      symbol: 'Md',
      name: 'Mendelevium',
      atomicNumber: 101,
      atomicMass: 258,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 5f¹³ 7s²',
      description: 'Synthetic element, radioactive metal.',
      uses: ['Scientific research'],
      discoveredBy: 'Albert Ghiorso',
      yearDiscovered: 1955
    },
    {
      symbol: 'No',
      name: 'Nobelium',
      atomicNumber: 102,
      atomicMass: 259,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 5f¹⁴ 7s²',
      description: 'Synthetic, radioactive metal, named after Alfred Nobel.',
      uses: ['Scientific research'],
      discoveredBy: 'Albert Ghiorso',
      yearDiscovered: 1958
    },
    {
      symbol: 'Lr',
      name: 'Lawrencium',
      atomicNumber: 103,
      atomicMass: 266,
      category: 'actinide',
      period: 7,
      group: 3,
      electronConfiguration: '[Rn] 5f¹⁴ 7s² 7p¹',
      description: 'Synthetic, radioactive metal, last actinide element.',
      uses: ['Scientific research'],
      discoveredBy: 'Albert Ghiorso',
      yearDiscovered: 1961
    },
    {
      symbol: 'Rf',
      name: 'Rutherfordium',
      atomicNumber: 104,
      atomicMass: 267,
      category: 'transition-metal',
      period: 7,
      group: 4,
      electronConfiguration: '[Rn] 5f¹⁴ 6d² 7s²',
      description: 'Synthetic, radioactive transition metal.',
      uses: ['Scientific research'],
      discoveredBy: 'Joint Institute for Nuclear Research',
      yearDiscovered: 1964
    },
    {
      symbol: 'Db',
      name: 'Dubnium',
      atomicNumber: 105,
      atomicMass: 268,
      category: 'transition-metal',
      period: 7,
      group: 5,
      electronConfiguration: '[Rn] 5f¹⁴ 6d³ 7s²',
      description: 'Synthetic, radioactive transition metal.',
      uses: ['Scientific research'],
      discoveredBy: 'Joint Institute for Nuclear Research',
      yearDiscovered: 1967
    },
    {
      symbol: 'Sg',
      name: 'Seaborgium',
      atomicNumber: 106,
      atomicMass: 269,
      category: 'transition-metal',
      period: 7,
      group: 6,
      electronConfiguration: '[Rn] 5f¹⁴ 6d⁴ 7s²',
      description: 'Synthetic, radioactive transition metal.',
      uses: ['Scientific research'],
      discoveredBy: 'Lawrence Berkeley Laboratory',
      yearDiscovered: 1974
    },
    {
      symbol: 'Bh',
      name: 'Bohrium',
      atomicNumber: 107,
      atomicMass: 270,
      category: 'transition-metal',
      period: 7,
      group: 7,
      electronConfiguration: '[Rn] 5f¹⁴ 6d⁵ 7s²',
      description: 'Synthetic, radioactive transition metal.',
      uses: ['Scientific research'],
      discoveredBy: 'Gesellschaft für Schwerionenforschung',
      yearDiscovered: 1981
    },
    {
      symbol: 'Hs',
      name: 'Hassium',
      atomicNumber: 108,
      atomicMass: 269,
      category: 'transition-metal',
      period: 7,
      group: 8,
      electronConfiguration: '[Rn] 5f¹⁴ 6d⁶ 7s²',
      description: 'Synthetic, radioactive transition metal.',
      uses: ['Scientific research'],
      discoveredBy: 'Gesellschaft für Schwerionenforschung',
      yearDiscovered: 1984
    },
    {
      symbol: 'Mt',
      name: 'Meitnerium',
      atomicNumber: 109,
      atomicMass: 278,
      category: 'transition-metal',
      period: 7,
      group: 9,
      electronConfiguration: '[Rn] 5f¹⁴ 6d⁷ 7s²',
      description: 'Synthetic, radioactive transition metal.',
      uses: ['Scientific research'],
      discoveredBy: 'Gesellschaft für Schwerionenforschung',
      yearDiscovered: 1982
    },
    {
      symbol: 'Ds',
      name: 'Darmstadtium',
      atomicNumber: 110,
      atomicMass: 281,
      category: 'transition-metal',
      period: 7,
      group: 10,
      electronConfiguration: '[Rn] 5f¹⁴ 6d⁸ 7s²',
      description: 'Synthetic, radioactive transition metal.',
      uses: ['Scientific research'],
      discoveredBy: 'Gesellschaft für Schwerionenforschung',
      yearDiscovered: 1994
    },
    {
      symbol: 'Rg',
      name: 'Roentgenium',
      atomicNumber: 111,
      atomicMass: 282,
      category: 'transition-metal',
      period: 7,
      group: 11,
      electronConfiguration: '[Rn] 5f¹⁴ 6d⁹ 7s²',
      description: 'Synthetic, radioactive transition metal.',
      uses: ['Scientific research'],
      discoveredBy: 'Gesellschaft für Schwerionenforschung',
      yearDiscovered: 1994
    },
    {
      symbol: 'Cn',
      name: 'Copernicium',
      atomicNumber: 112,
      atomicMass: 285,
      category: 'transition-metal',
      period: 7,
      group: 12,
      electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s²',
      description: 'Synthetic, radioactive transition metal.',
      uses: ['Scientific research'],
      discoveredBy: 'Gesellschaft für Schwerionenforschung',
      yearDiscovered: 1996
    },
    {
      symbol: 'Nh',
      name: 'Nihonium',
      atomicNumber: 113,
      atomicMass: 286,
      category: 'post-transition-metal',
      period: 7,
      group: 13,
      electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹',
      description: 'Synthetic, radioactive post-transition metal.',
      uses: ['Scientific research'],
      discoveredBy: 'RIKEN',
      yearDiscovered: 2004
    },
    {
      symbol: 'Fl',
      name: 'Flerovium',
      atomicNumber: 114,
      atomicMass: 289,
      category: 'post-transition-metal',
      period: 7,
      group: 14,
      electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²',
      description: 'Synthetic, radioactive post-transition metal.',
      uses: ['Scientific research'],
      discoveredBy: 'Joint Institute for Nuclear Research',
      yearDiscovered: 1998
    },
    {
      symbol: 'Mc',
      name: 'Moscovium',
      atomicNumber: 115,
      atomicMass: 290,
      category: 'post-transition-metal',
      period: 7,
      group: 15,
      electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³',
      description: 'Synthetic, radioactive post-transition metal.',
      uses: ['Scientific research'],
      discoveredBy: 'Joint Institute for Nuclear Research',
      yearDiscovered: 2003
    },
    {
      symbol: 'Lv',
      name: 'Livermorium',
      atomicNumber: 116,
      atomicMass: 293,
      category: 'post-transition-metal',
      period: 7,
      group: 16,
      electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴',
      description: 'Synthetic, radioactive post-transition metal.',
      uses: ['Scientific research'],
      discoveredBy: 'Joint Institute for Nuclear Research',
      yearDiscovered: 2000
    },
    {
      symbol: 'Ts',
      name: 'Tennessine',
      atomicNumber: 117,
      atomicMass: 294,
      category: 'halogen',
      period: 7,
      group: 17,
      electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵',
      description: 'Synthetic, radioactive halogen.',
      uses: ['Scientific research'],
      discoveredBy: 'Joint Institute for Nuclear Research',
      yearDiscovered: 2010
    },
    {
      symbol: 'Og',
      name: 'Oganesson',
      atomicNumber: 118,
      atomicMass: 294,
      category: 'noble-gas',
      period: 7,
      group: 18,
      electronConfiguration: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶',
      description: 'Synthetic, radioactive noble gas.',
      uses: ['Scientific research'],
      discoveredBy: 'Joint Institute for Nuclear Research',
      yearDiscovered: 2002
    }
  ];

  const categories = [
    { id: 'all', label: 'All Elements', color: 'bg-secondary' },
    { id: 'alkali-metal', label: 'Alkali Metals', color: 'bg-danger' },
    { id: 'alkaline-earth-metal', label: 'Alkaline Earth', color: 'bg-warning' },
    { id: 'transition-metal', label: 'Transition Metals', color: 'bg-info' },
    { id: 'post-transition-metal', label: 'Post-transition', color: 'bg-primary' },
    { id: 'metalloid', label: 'Metalloids', color: 'bg-success' },
    { id: 'nonmetal', label: 'Nonmetals', color: 'bg-dark' },
    { id: 'halogen', label: 'Halogens', color: 'bg-primary-red' },
    { id: 'noble-gas', label: 'Noble Gases', color: 'bg-accent-red' },
    { id: 'lanthanide', label: 'Lanthanides', color: 'bg-purple' },
    { id: 'actinide', label: 'Actinides', color: 'bg-danger' }
  ];

  const getCategoryColor = (category: string) => {
    const categoryData = categories.find(c => c.id === category);
    return categoryData?.color || 'bg-secondary';
  };

  const filteredElements = elements.filter(element => {
    const matchesSearch = element.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         element.symbol.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || element.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView="periodic-table"
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
                    <Atom className="text-white" size={40} />
                  </div>
                  <h1 className="display-3 fw-bold mb-4">Interactive Periodic Table</h1>
                  <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    Explore the elements that make up our universe. Click on any element 
                    to discover its properties, uses, and fascinating history.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                      <Download size={20} className="me-2" />
                      Download Reference
                    </Button>
                    <Button variant="outline-secondary" size="lg" className="border-white text-white">
                      <Share2 size={20} className="me-2" />
                      Share Table
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Search and Filters */}
          <section className="py-4 bg-white border-bottom">
            <div className="container-lg">
              <SearchAndFilters 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
              />
            </div>
          </section>

          {/* Category Legend */}
          <section className="py-4 bg-light-bg">
            <div className="container-lg">
              <CategoryLegend categories={categories} />
            </div>
          </section>

          {/* Periodic Table Grid */}
          <section className="py-5 bg-white">
            <div className="container-lg">
              <div className="row g-2">
                {filteredElements.map((element, index) => (
                  <div key={element.symbol} className="col-6 col-sm-4 col-md-3 col-lg-2">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.01 }}
                    >
                      <Card 
                        hover 
                        className="h-100 cursor-pointer"
                        onClick={() => setSelectedElement(element)}
                      >
                        <div className={`card-body p-3 text-center ${getCategoryColor(element.category)} bg-opacity-10`}>
                          <div className="small text-muted mb-1">{element.atomicNumber}</div>
                          <div className="h4 fw-bold text-deep-red mb-1">{element.symbol}</div>
                          <div className="small text-muted">{element.name}</div>
                          <div className="small text-muted">{element.atomicMass}</div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Element Details Modal */}
          {selectedElement && (
            <ElementDetails 
              element={selectedElement} 
              onClose={() => setSelectedElement(null)} 
              getCategoryColor={getCategoryColor} 
            />
          )}
        </main>
      </div>
    </div>
  );
}