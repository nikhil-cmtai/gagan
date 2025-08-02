import React from 'react';

export default function Terms() {
    return (
        <div className="min-h-screen bg-[#E6F3FF] py-12 sm:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-4">Terms of Service</h1>
                    <p className="text-secondary text-lg">Last updated: December 2024</p>
                </div>

                {/* Content */}
                <div className="rounded-xl border-2 border-white overflow-hidden">
                    <div className="p-8 sm:p-12">
                        <div className="prose prose-lg max-w-none">
                            <div className="space-y-8">
                                {/* Introduction */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                                    <p className="text-secondary leading-relaxed mb-4">
                                        By accessing and using the Empire Blue website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                                    </p>
                                    <p className="text-secondary leading-relaxed">
                                        These Terms of Service ("Terms") govern your use of our website and services operated by Empire Blue Pvt. Ltd. ("Company," "we," "us," or "our").
                                    </p>
                                </section>

                                {/* Services Description */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">2. Description of Services</h2>
                                    <p className="text-secondary leading-relaxed mb-4">
                                        Empire Blue provides premium drinking water products and related services. Our services include:
                                    </p>
                                    <ul className="list-disc list-inside text-secondary space-y-2">
                                        <li>Online ordering and delivery of premium water products</li>
                                        <li>Customer support and account management</li>
                                        <li>Website access and information services</li>
                                        <li>Marketing communications (with consent)</li>
                                        <li>Product information and educational content</li>
                                    </ul>
                                </section>

                                {/* User Accounts */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">3. User Accounts and Registration</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Account Creation</h3>
                                            <p className="text-secondary leading-relaxed">
                                                To access certain features of our services, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Account Security</h3>
                                            <p className="text-secondary leading-relaxed">
                                                You are responsible for safeguarding the password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Account Termination</h3>
                                            <p className="text-secondary leading-relaxed">
                                                We reserve the right to terminate or suspend your account at any time for violations of these Terms or for any other reason at our sole discretion.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Ordering and Payment */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">4. Ordering and Payment Terms</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Order Acceptance</h3>
                                            <p className="text-secondary leading-relaxed">
                                                All orders are subject to acceptance and availability. We reserve the right to refuse any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraud.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Pricing and Payment</h3>
                                            <p className="text-secondary leading-relaxed">
                                                All prices are in Indian Rupees (INR) and are subject to change without notice. Payment must be made at the time of ordering through our accepted payment methods. We use secure third-party payment processors to handle transactions.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Delivery</h3>
                                            <p className="text-secondary leading-relaxed">
                                                Delivery times are estimates only. We are not responsible for delays beyond our control. Risk of loss and title for items purchased pass to you upon delivery.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Product Information */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">5. Product Information and Quality</h2>
                                    <p className="text-secondary leading-relaxed mb-4">
                                        We strive to provide accurate product information, but we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free.
                                    </p>
                                    <p className="text-secondary leading-relaxed">
                                        Our products meet all applicable safety and quality standards. However, individual results may vary, and we do not guarantee specific health outcomes from consuming our products.
                                    </p>
                                </section>

                                {/* Prohibited Uses */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">6. Prohibited Uses</h2>
                                    <p className="text-secondary leading-relaxed mb-4">
                                        You agree not to use our services to:
                                    </p>
                                    <ul className="list-disc list-inside text-secondary space-y-2">
                                        <li>Violate any applicable laws or regulations</li>
                                        <li>Infringe upon the rights of others</li>
                                        <li>Transmit harmful, offensive, or inappropriate content</li>
                                        <li>Attempt to gain unauthorized access to our systems</li>
                                        <li>Interfere with the proper functioning of our services</li>
                                        <li>Use automated systems to access our services</li>
                                        <li>Resell or redistribute our products without authorization</li>
                                    </ul>
                                </section>

                                {/* Intellectual Property */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">7. Intellectual Property Rights</h2>
                                    <p className="text-secondary leading-relaxed mb-4">
                                        All content on our website, including but not limited to text, graphics, logos, images, and software, is the property of Empire Blue or its licensors and is protected by copyright and other intellectual property laws.
                                    </p>
                                    <p className="text-secondary leading-relaxed">
                                        You may not reproduce, distribute, modify, or create derivative works of our content without our express written permission.
                                    </p>
                                </section>

                                {/* Privacy and Data */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">8. Privacy and Data Protection</h2>
                                    <p className="text-secondary leading-relaxed">
                                        Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices.
                                    </p>
                                </section>

                                {/* Disclaimers */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">9. Disclaimers and Limitations</h2>
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Service Availability</h3>
                                            <p className="text-secondary leading-relaxed">
                                                Our services are provided "as is" and "as available." We do not guarantee that our services will be uninterrupted, secure, or error-free.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Limitation of Liability</h3>
                                            <p className="text-secondary leading-relaxed">
                                                To the maximum extent permitted by law, Empire Blue shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Indemnification</h3>
                                            <p className="text-secondary leading-relaxed">
                                                You agree to indemnify and hold harmless Empire Blue from any claims, damages, or expenses arising from your use of our services or violation of these Terms.
                                            </p>
                                        </div>
                                    </div>
                                </section>

                                {/* Termination */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">10. Termination</h2>
                                    <p className="text-secondary leading-relaxed mb-4">
                                        We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including breach of these Terms.
                                    </p>
                                    <p className="text-secondary leading-relaxed">
                                        Upon termination, your right to use our services will cease immediately, and we may delete your account and related information.
                                    </p>
                                </section>

                                {/* Governing Law */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">11. Governing Law and Dispute Resolution</h2>
                                    <p className="text-secondary leading-relaxed mb-4">
                                        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or our services shall be subject to the exclusive jurisdiction of the courts in Madhya Pradesh, India.
                                    </p>
                                    <p className="text-secondary leading-relaxed">
                                        We encourage you to contact us first to resolve any disputes amicably before pursuing legal action.
                                    </p>
                                </section>

                                {/* Changes to Terms */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">12. Changes to Terms</h2>
                                    <p className="text-secondary leading-relaxed">
                                        We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the new Terms.
                                    </p>
                                </section>

                                {/* Severability */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">13. Severability</h2>
                                    <p className="text-secondary leading-relaxed">
                                        If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.
                                    </p>
                                </section>

                                {/* Contact Information */}
                                <section>
                                    <h2 className="text-2xl font-bold text-primary mb-4">14. Contact Information</h2>
                                    <p className="text-secondary leading-relaxed mb-4">
                                        If you have any questions about these Terms of Service, please contact us:
                                    </p>
                                    <div className="border-2 border-white rounded-lg p-6">
                                        <div className="space-y-2">
                                            <p className="text-secondary"><strong>Email:</strong> legal@empireblue.com</p>
                                            <p className="text-secondary"><strong>Phone:</strong> +91 98765 43210</p>
                                            <p className="text-secondary"><strong>Address:</strong> Empire Blue Pvt. Ltd., Chhindwara, Madhya Pradesh, India</p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}