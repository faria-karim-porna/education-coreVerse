import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';
import { Card } from '../ui/Card';

export function DetailedPolicy() {
  return (
    <section className="py-5 bg-light-bg">
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card>
                <div className="card-body p-5">
                  <h3 className="h2 fw-bold text-deep-red mb-4">Detailed Privacy Policy</h3>
                  
                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">1. Information We Collect</h4>
                    <p className="text-muted mb-3">
                      We collect information you provide directly to us, such as when you create an account, 
                      use our services, or contact us for support. This includes personal information like 
                      your name, email address, and educational data.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">2. How We Use Your Information</h4>
                    <p className="text-muted mb-3">
                      We use the information we collect to provide, maintain, and improve our services, 
                      process transactions, send communications, and comply with legal obligations.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">3. Information Sharing</h4>
                    <p className="text-muted mb-3">
                      We do not sell, trade, or otherwise transfer your personal information to third parties 
                      without your consent, except as described in this policy or as required by law.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">4. Data Security</h4>
                    <p className="text-muted mb-3">
                      We implement appropriate technical and organizational measures to protect your personal 
                      information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">5. Data Retention</h4>
                    <p className="text-muted mb-3">
                      We retain your personal information for as long as necessary to provide our services 
                      and fulfill the purposes outlined in this policy, unless a longer retention period 
                      is required by law.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">6. International Transfers</h4>
                    <p className="text-muted mb-3">
                      Your information may be transferred to and processed in countries other than your own. 
                      We ensure appropriate safeguards are in place to protect your information.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">7. Children's Privacy</h4>
                    <p className="text-muted mb-3">
                      We take special care to protect the privacy of children under 13. We do not knowingly 
                      collect personal information from children under 13 without parental consent.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">8. Changes to This Policy</h4>
                    <p className="text-muted mb-3">
                      We may update this privacy policy from time to time. We will notify you of any 
                      material changes by posting the new policy on this page and updating the 
                      "last updated" date.
                    </p>
                  </div>

                  <div className="bg-light-bg rounded-3 p-4">
                    <h5 className="fw-bold text-deep-red mb-3">Contact Us About Privacy</h5>
                    <p className="text-muted mb-3">
                      If you have questions about this privacy policy or our privacy practices, 
                      please contact our Data Protection Officer:
                    </p>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <Mail className="text-primary-red" size={16} />
                      <span>privacy@coreverse.edu</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Globe className="text-primary-red" size={16} />
                      <span>CoreVerse Privacy Team, 123 Innovation Drive, San Francisco, CA 94105</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}