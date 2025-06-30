import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '../ui/Button';

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

interface CountryDetailsProps {
  country: Country;
  onClose: () => void;
  getConservationColor: (status: string) => string;
}

export function CountryDetails({ country, onClose, getConservationColor }: CountryDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050 }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-4 p-5 w-100"
        style={{ maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center gap-3">
            <div className="display-3">{country.flagEmoji}</div>
            <div>
              <h2 className="h3 fw-bold text-deep-red mb-0">{country.name}</h2>
              <p className="text-muted mb-0">Capital: {country.capital}</p>
            </div>
          </div>
          <Button variant="secondary" onClick={onClose}>
            <X size={16} />
          </Button>
        </div>

        <div className="row g-4 mb-4">
          <div className="col-md-6">
            <h5 className="fw-bold text-deep-red mb-3">Basic Information</h5>
            <div className="d-flex flex-column gap-2">
              {[
                { label: 'Continent', value: country.continent },
                { label: 'Population', value: country.population },
                { label: 'Area', value: country.area },
                { label: 'Currency', value: country.currency },
                { label: 'Independence', value: country.independence }
              ].map((item, idx) => (
                <div key={idx} className="d-flex justify-content-between border-bottom pb-1">
                  <span className="fw-medium text-deep-red">{item.label}:</span>
                  <span className="text-muted">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6">
            <h5 className="fw-bold text-deep-red mb-3">Languages</h5>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {country.languages.map((lang, idx) => (
                <span key={idx} className="badge bg-accent-red text-white">{lang}</span>
              ))}
            </div>
            <h5 className="fw-bold text-deep-red mb-3">Region</h5>
            <span className="badge bg-success text-white">{country.region}</span>
          </div>
        </div>

        <div className="mb-4">
          <h5 className="fw-bold text-deep-red mb-2">Flag Description</h5>
          <p className="text-muted">{country.flagDescription}</p>
        </div>

        <div className="bg-light-bg rounded-3 p-4">
          <h5 className="fw-bold text-deep-red mb-2">Flag Meaning & Symbolism</h5>
          <p className="text-muted mb-0">{country.flagMeaning}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}