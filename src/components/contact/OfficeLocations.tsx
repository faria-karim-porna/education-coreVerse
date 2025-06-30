import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card } from "../ui/Card";

interface OfficeLocationsProps {
  offices: {
    city: string;
    address: string;
    zipCode: string;
    phone: string;
    email: string;
  }[];
}

export function OfficeLocations({ offices }: OfficeLocationsProps) {
  return (
    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="h-100">
      <Card className="h-100">
        <div className="card-body p-4">
          <h3 className="h4 fw-bold text-deep-red mb-4">Our Offices</h3>

          {offices.map((office, index) => (
            <div key={office.city} className={`${index !== offices.length - 1 ? "mb-4 pb-4 border-bottom" : ""}`}>
              <h5 className="fw-semibold text-primary-red mb-3">{office.city}</h5>
              <div className="d-flex align-items-start mb-2">
                <MapPin className="text-muted me-2 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="mb-1 small">{office.address}</p>
                  <p className="mb-0 small text-muted">{office.zipCode}</p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-2">
                <Phone className="text-muted me-2" size={16} />
                <small>{office.phone}</small>
              </div>
              <div className="d-flex align-items-center">
                <Mail className="text-muted me-2" size={16} />
                <small>{office.email}</small>
              </div>
            </div>
          ))}

          <div className="mt-4 pt-4 border-top">
            <div className="d-flex align-items-center mb-3">
              <Clock className="text-primary-red me-2" size={20} />
              <h5 className="fw-semibold text-deep-red mb-0">Business Hours</h5>
            </div>
            <div className="small">
              <div className="d-flex justify-content-between mb-1">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="d-flex justify-content-between mb-1">
                <span>Saturday:</span>
                <span>10:00 AM - 4:00 PM</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}