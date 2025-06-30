import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Flag,
  Download,
  Share2
} from 'lucide-react';
import { Button } from '../ui/Button';
import { SearchAndFilters } from '../country-flags/SearchAndFilters';
import { CountryGrid } from '../country-flags/CountryGrid';
import { CountryDetails } from '../country-flags/CountryDetails';
import { Header } from '../layout/Header';
import { Sidebar } from '../layout/Sidebar';

interface CountryFlagsPageProps {
  onNavigate: (view: string) => void;
}

interface Country {
  id: string;
  name: string;
  capital: string;
  continent: string;
  population: string;
  area: string;
  languages: string[];
  currency: string;
  flagDescription: string;
  flagMeaning: string;
  independence: string;
  flagEmoji: string;
  region: string;
}

export function CountryFlagsPage({ onNavigate }: CountryFlagsPageProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('all');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const countries: Country[] = [
    {
      id: '1',
      name: 'United States',
      capital: 'Washington, D.C.',
      continent: 'North America',
      population: '331.9 million',
      area: '9.8 million km²',
      languages: ['English'],
      currency: 'US Dollar (USD)',
      flagDescription: 'Thirteen horizontal stripes alternating red and white, with a blue rectangle containing 50 white stars',
      flagMeaning: '13 stripes represent original colonies, 50 stars represent current states, red for valor, white for purity, blue for justice',
      independence: 'July 4, 1776',
      flagEmoji: '🇺🇸',
      region: 'Americas'
    },
    {
      id: '2',
      name: 'Japan',
      capital: 'Tokyo',
      continent: 'Asia',
      population: '125.8 million',
      area: '377,975 km²',
      languages: ['Japanese'],
      currency: 'Japanese Yen (JPY)',
      flagDescription: 'White field with a red circle in the center',
      flagMeaning: 'Red circle represents the sun, white represents honesty and purity',
      independence: 'February 11, 660 BC (traditional)',
      flagEmoji: '🇯🇵',
      region: 'Asia-Pacific'
    },
    {
      id: '3',
      name: 'Brazil',
      capital: 'Brasília',
      continent: 'South America',
      population: '215.3 million',
      area: '8.5 million km²',
      languages: ['Portuguese'],
      currency: 'Brazilian Real (BRL)',
      flagDescription: 'Green field with yellow rhombus containing blue celestial globe with stars and banner',
      flagMeaning: 'Green for forests, yellow for mineral wealth, blue globe with stars representing the night sky over Rio',
      independence: 'September 7, 1822',
      flagEmoji: '🇧🇷',
      region: 'Americas'
    },
    {
      id: '4',
      name: 'France',
      capital: 'Paris',
      continent: 'Europe',
      population: '67.4 million',
      area: '643,801 km²',
      languages: ['French'],
      currency: 'Euro (EUR)',
      flagDescription: 'Three vertical stripes: blue, white, and red',
      flagMeaning: 'Blue and red are traditional colors of Paris, white represents the monarchy, together symbolizing liberty, equality, fraternity',
      independence: 'August 10, 843 (Treaty of Verdun)',
      flagEmoji: '🇫🇷',
      region: 'Europe'
    },
    {
      id: '5',
      name: 'South Africa',
      capital: 'Cape Town, Pretoria, Bloemfontein',
      continent: 'Africa',
      population: '60.4 million',
      area: '1.2 million km²',
      languages: ['Afrikaans', 'English', 'Zulu', 'Xhosa', 'and 7 others'],
      currency: 'South African Rand (ZAR)',
      flagDescription: 'Horizontal Y-shaped design with six colors: black, yellow, green, white, red, and blue',
      flagMeaning: 'Convergence of diverse elements within South African society, taking the road ahead in unity',
      independence: 'May 31, 1910 (from UK)',
      flagEmoji: '🇿🇦',
      region: 'Africa'
    },
    {
      id: '6',
      name: 'Australia',
      capital: 'Canberra',
      continent: 'Oceania',
      population: '25.7 million',
      area: '7.7 million km²',
      languages: ['English'],
      currency: 'Australian Dollar (AUD)',
      flagDescription: 'Blue field with Union Jack in upper left, large seven-pointed star below, and Southern Cross constellation',
      flagMeaning: 'Union Jack represents British heritage, large star represents federation, Southern Cross represents location in southern hemisphere',
      independence: 'January 1, 1901',
      flagEmoji: '🇦🇺',
      region: 'Asia-Pacific'
    },
    {
      id: '7',
      name: 'Canada',
      capital: 'Ottawa',
      continent: 'North America',
      population: '38.2 million',
      area: '9.98 million km²',
      languages: ['English', 'French'],
      currency: 'Canadian Dollar (CAD)',
      flagDescription: 'Red and white with a red maple leaf in the center',
      flagMeaning: 'Red represents sacrifice and valor, white represents peace and tranquility, maple leaf is a Canadian symbol',
      independence: 'July 1, 1867',
      flagEmoji: '🇨🇦',
      region: 'Americas'
    },
    {
      id: '8',
      name: 'India',
      capital: 'New Delhi',
      continent: 'Asia',
      population: '1.38 billion',
      area: '3.3 million km²',
      languages: ['Hindi', 'English', 'and 20 others'],
      currency: 'Indian Rupee (INR)',
      flagDescription: 'Three horizontal stripes: saffron, white with blue wheel, and green',
      flagMeaning: 'Saffron for courage and sacrifice, white for truth and peace, green for faith and chivalry, wheel represents dharma',
      independence: 'August 15, 1947',
      flagEmoji: '🇮🇳',
      region: 'Asia-Pacific'
    },
    {
      id: '9',
      name: 'Germany',
      capital: 'Berlin',
      continent: 'Europe',
      population: '83.2 million',
      area: '357,022 km²',
      languages: ['German'],
      currency: 'Euro (EUR)',
      flagDescription: 'Three horizontal stripes: black, red, and gold',
      flagMeaning: 'Black, red, and gold were colors of the Holy Roman Empire and later became symbols of German unity and freedom',
      independence: 'January 18, 1871 (German Empire)',
      flagEmoji: '🇩🇪',
      region: 'Europe'
    },
    {
      id: '10',
      name: 'Egypt',
      capital: 'Cairo',
      continent: 'Africa',
      population: '104.3 million',
      area: '1.0 million km²',
      languages: ['Arabic'],
      currency: 'Egyptian Pound (EGP)',
      flagDescription: 'Three horizontal stripes: red, white, and black with golden eagle in center',
      flagMeaning: 'Red represents struggle against British occupation, white for 1952 revolution, black for end of oppression, eagle represents strength',
      independence: 'February 28, 1922',
      flagEmoji: '🇪🇬',
      region: 'Africa'
    },
    {
      id: '11',
      name: 'China',
      capital: 'Beijing',
      continent: 'Asia',
      population: '1.41 billion',
      area: '9.6 million km²',
      languages: ['Mandarin Chinese'],
      currency: 'Chinese Yuan (CNY)',
      flagDescription: 'Red field with five yellow stars in upper left corner',
      flagMeaning: 'Red represents communist revolution, large star represents Communist Party, four smaller stars represent social classes',
      independence: 'October 1, 1949 (People\'s Republic)',
      flagEmoji: '🇨🇳',
      region: 'Asia-Pacific'
    },
    {
      id: '12',
      name: 'United Kingdom',
      capital: 'London',
      continent: 'Europe',
      population: '67.3 million',
      area: '243,610 km²',
      languages: ['English'],
      currency: 'British Pound (GBP)',
      flagDescription: 'Union Jack - combination of crosses of St. George, St. Andrew, and St. Patrick',
      flagMeaning: 'Represents union of England (St. George), Scotland (St. Andrew), and Ireland (St. Patrick)',
      independence: 'N/A (never colonized)',
      flagEmoji: '🇬🇧',
      region: 'Europe'
    }
  ];

  const continents = [
    { id: 'all', label: 'All Continents' },
    { id: 'Africa', label: 'Africa' },
    { id: 'Asia', label: 'Asia' },
    { id: 'Europe', label: 'Europe' },
    { id: 'North America', label: 'North America' },
    { id: 'South America', label: 'South America' },
    { id: 'Oceania', label: 'Oceania' }
  ];

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         country.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         country.continent.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesContinent = selectedContinent === 'all' || country.continent === selectedContinent;
    return matchesSearch && matchesContinent;
  });

  const getConservationColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'least concern': return 'bg-success';
      case 'vulnerable': return 'bg-warning';
      case 'endangered': return 'bg-danger';
      case 'critically endangered': return 'bg-dark';
      default: return 'bg-secondary';
    }
  };

  return (
    <div className="min-vh-100 bg-light-bg d-flex">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeView="country-flags"
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
                    <Flag className="text-white" size={40} />
                  </div>
                  <h1 className="display-3 fw-bold mb-4">World Flags & Countries</h1>
                  <p className="lead mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                    Explore flags from around the world and learn about the countries they represent. 
                    Discover the meaning, history, and symbolism behind each flag.
                  </p>
                  <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                    <Button variant="secondary" size="lg" className="bg-white text-primary-red border-white">
                      <Download size={20} className="me-2" />
                      Download Atlas
                    </Button>
                    <Button variant="outline-secondary" size="lg" className="border-white text-white">
                      <Share2 size={20} className="me-2" />
                      Share Collection
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
                selectedContinent={selectedContinent}
                setSelectedContinent={setSelectedContinent}
                continents={continents}
              />
            </div>
          </section>

          {/* Countries Grid */}
          <section className="py-5 bg-light-bg">
            <div className="container-lg">
              <CountryGrid 
                countries={filteredCountries} 
                onCountryClick={setSelectedCountry} 
              />
            </div>
          </section>

          {/* Country Details Modal */}
          {selectedCountry && (
            <CountryDetails 
              country={selectedCountry} 
              onClose={() => setSelectedCountry(null)} 
              getConservationColor={getConservationColor} 
            />
          )}
        </main>
      </div>
    </div>
  );
}