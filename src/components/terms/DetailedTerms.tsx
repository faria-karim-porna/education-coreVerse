import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Globe } from 'lucide-react';
import { Card } from '../ui/Card';

export function DetailedTerms() {
  return (
    <section className="py-5 bg-white">
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card>
                <div className="card-body p-5">
                  <h3 className="h2 fw-bold text-deep-red mb-4">Complete Terms of Service</h3>
                  
                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">1. Acceptance of Terms</h4>
                    <p className="text-muted mb-3">
                      By accessing or using CoreVerse, you agree to be bound by these Terms of Service 
                      and all applicable laws and regulations. If you do not agree with any of these 
                      terms, you are prohibited from using or accessing this site.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">2. Description of Service</h4>
                    <p className="text-muted mb-3">
                      CoreVerse provides an educational platform featuring virtual laboratories, 
                      interactive simulations, and collaborative learning tools for STEM education. 
                      We reserve the right to modify or discontinue any aspect of the service at any time.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">3. User Accounts</h4>
                    <p className="text-muted mb-3">
                      You are responsible for maintaining the confidentiality of your account credentials 
                      and for all activities that occur under your account. You must notify us immediately 
                      of any unauthorized use of your account.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">4. Payment and Billing</h4>
                    <p className="text-muted mb-3">
                      Subscription fees are billed in advance on a monthly or annual basis. All fees are 
                      non-refundable except as required by law. We reserve the right to change our pricing 
                      with 30 days' notice.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">5. Intellectual Property</h4>
                    <p className="text-muted mb-3">
                      The service and its original content, features, and functionality are owned by 
                      CoreVerse and are protected by international copyright, trademark, patent, 
                      trade secret, and other intellectual property laws.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">6. User Content</h4>
                    <p className="text-muted mb-3">
                      You retain ownership of content you submit to the platform. By submitting content, 
                      you grant us a worldwide, non-exclusive license to use, reproduce, and distribute 
                      your content in connection with the service.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">7. Privacy Policy</h4>
                    <p className="text-muted mb-3">
                      Your privacy is important to us. Please review our Privacy Policy, which also 
                      governs your use of the service, to understand our practices regarding the 
                      collection and use of your information.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">8. Termination</h4>
                    <p className="text-muted mb-3">
                      We may terminate or suspend your account and access to the service immediately, 
                      without prior notice, for conduct that we believe violates these Terms of Service 
                      or is harmful to other users, us, or third parties.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">9. Limitation of Liability</h4>
                    <p className="text-muted mb-3">
                      In no event shall CoreVerse be liable for any indirect, incidental, special, 
                      consequential, or punitive damages, including without limitation, loss of profits, 
                      data, use, goodwill, or other intangible losses.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">10. Governing Law</h4>
                    <p className="text-muted mb-3">
                      These Terms shall be interpreted and governed by the laws of the State of California, 
                      without regard to its conflict of law provisions. Any disputes shall be resolved 
                      in the courts of San Francisco County, California.
                    </p>
                  </div>

                  <div className="mb-5">
                    <h4 className="fw-bold text-deep-red mb-3">11. Changes to Terms</h4>
                    <p className="text-muted mb-3">
                      We reserve the right to modify these terms at any time. We will notify users of 
                      material changes via email or through the platform. Continued use of the service 
                      after changes constitutes acceptance of the new terms.
                    </p>
                  </div>

                  <div className="bg-light-bg rounded-3 p-4">
                    <h5 className="fw-bold text-deep-red mb-3">Contact Information</h5>
                    <p className="text-muted mb-3">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="d-flex align-items-center gap-2 mb-2">
                      <Mail className="text-primary-red" size={16} />
                      <span>legal@coreverse.edu</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <Globe className="text-primary-red" size={16} />
                      <span>CoreVerse Legal Team, 123 Innovation Drive, San Francisco, CA 94105</span>
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