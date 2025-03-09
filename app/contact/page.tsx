'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaDiscord, FaTwitter } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us | Sirius Gaming',
  description: 'Get in touch with the Sirius Gaming team. We'd love to hear from you!',
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // This would typically be an API call to your backend
      // For demo purposes, we're just simulating a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (err) {
      setError('There was an error submitting your message. Please try again.');
      console.error('Error submitting form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-primary">
        <div className="container-custom text-center text-white">
          <h1 className="mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions about our games, want to collaborate, or just want to say hello.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-100 text-green-700 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-4">
                      {error}
                    </div>
                  )}
                  
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Game Support">Game Support</option>
                      <option value="Business Inquiry">Business Inquiry</option>
                      <option value="Press Inquiry">Press Inquiry</option>
                      <option value="Career Opportunity">Career Opportunity</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="mb-6">Contact Information</h2>
              
              <div className="bg-gray-100 p-6 rounded-lg mb-8">
                <div className="flex items-start mb-6">
                  <FaMapMarkerAlt className="text-secondary text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Our Studio</h3>
                    <p className="text-gray-600">
                      Storgata 124<br />
                      9008 Tromsø<br />
                      Norway
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <FaEnvelope className="text-secondary text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                    <p className="text-gray-600">
                      General Inquiries: <a href="mailto:info@sirius-gaming.com" className="text-secondary">info@sirius-gaming.com</a><br />
                      Support: <a href="mailto:support@sirius-gaming.com" className="text-secondary">support@sirius-gaming.com</a><br />
                      Press: <a href="mailto:press@sirius-gaming.com" className="text-secondary">press@sirius-gaming.com</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <FaPhone className="text-secondary text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                    <p className="text-gray-600">
                      +47 123 45 678
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaDiscord className="text-secondary text-xl mt-1 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Join Our Community</h3>
                    <p className="text-gray-600 mb-3">
                      Connect with us and other players on our Discord server.
                    </p>
                    <a
                      href="https://discord.gg/siriusgaming"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Join Discord
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/contact-image.jpg"
                  alt="Sirius Gaming Office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">How can I report a bug in one of your games?</h3>
              <p className="text-gray-600">
                You can report bugs through our support portal at support.sirius-gaming.com or by emailing support@sirius-gaming.com with details about the issue, including your system specifications and steps to reproduce the bug.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Do you offer internships or job opportunities?</h3>
              <p className="text-gray-600">
                Yes! We're always looking for talented individuals to join our team. Check out our Careers page for current openings, or send your portfolio and resume to careers@sirius-gaming.com.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Can I use your games for content creation?</h3>
              <p className="text-gray-600">
                Absolutely! We encourage content creators to share their experiences with our games. You're welcome to create videos, streams, and other content featuring our games for both personal and commercial use.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">How can I request a press kit or interview?</h3>
              <p className="text-gray-600">
                For press inquiries, please contact our PR team at press@sirius-gaming.com. We're happy to provide press kits, review copies, and arrange interviews with our team members.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}