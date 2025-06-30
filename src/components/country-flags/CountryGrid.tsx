import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Eye, Globe, Users, MapPin } from 'lucide-react';

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

interface CountryGridProps {
  countries: Country[];
  onCountryClick: (country: Country) => void;
}

export function CountryGrid({ countries, onCountryClick }: CountryGridProps) {
  return (
    <div className="row g-4">
      {countries.map((country, index) => (
        <div key={country.id} className="col-md-6 col-lg-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hover className="h-100" onClick={() => onCountryClick(country)}>
              <div className="card-body p-4">
                <div className="d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <div className="display-4">{country.flagEmoji}</div>
                    <div>
                      <h4 className="fw-bold text-deep-red mb-0">{country.name}</h4>
                      <p className="text-muted small mb-0">{country.capital}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <Globe className="text-muted" size={16} />
                    <span className="small text-muted">{country.continent}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <Users className="text-muted" size={16} />
                    <span className="small text-muted">{country.population}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <MapPin className="text-muted" size={16} />
                    <span className="small text-muted">{country.area}</span>
                  </div>
                </div>
                
                <div className="d-flex align-items-center justify-content-between">
                  <span className="badge bg-primary-red text-white">
                    {country.continent}
                  </span>
                  <Button size="sm">
                    <Eye size={14} className="me-1" />
                    Details
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      ))}
    </div>
  );
}