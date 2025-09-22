import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Mail, Instagram, Twitter, Linkedin, Github, Shield } from 'lucide-react';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: 'Gmail',
      icon: Mail,
      url: 'Divyanshushinde103@gmail.com',
      color: 'text-red-400 hover:text-red-300',
      bgColor: 'bg-red-400/10 hover:bg-red-400/20',
      borderColor: 'border-red-400/50'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/divyanshu998',
      color: 'text-white hover:text-gray-300',
      bgColor: 'bg-white/10 hover:bg-white/20',
      borderColor: 'border-white/50'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/divyanshu-shinde-15325b2b1/',
      color: 'text-blue-400 hover:text-blue-300',
      bgColor: 'bg-blue-400/10 hover:bg-blue-400/20',
      borderColor: 'border-blue-400/50'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/DivyanshuS38067',
      color: 'text-sky-400 hover:text-sky-300',
      bgColor: 'bg-sky-400/10 hover:bg-sky-400/20',
      borderColor: 'border-sky-400/50'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/divyanshu_shinde.35',
      color: 'text-pink-400 hover:text-pink-300',
      bgColor: 'bg-pink-400/10 hover:bg-pink-400/20',
      borderColor: 'border-pink-400/50'
    },
    {
      name: 'TryHackMe',
      icon: Shield,
      url: 'https://tryhackme.com/p/Divyanshu13',
      color: 'text-green-400 hover:text-green-300',
      bgColor: 'bg-green-400/10 hover:bg-green-400/20',
      borderColor: 'border-green-400/50'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Message sent successfully! I\'ll get back to you soon.');
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-green-400">
            [ INITIATE_CONTACT ]
          </h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="bg-black/60 border border-green-400/50 rounded-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-green-400 font-mono text-sm">
                      secure_message.sh
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-green-400 text-sm font-semibold mb-2">
                          root@name:~$
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.02, borderColor: '#00ff41' }}
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-black/80 border border-green-400/30 rounded px-4 py-3 text-green-300 focus:outline-none focus:border-green-400 transition-all duration-300"
                          placeholder="Enter your name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-green-400 text-sm font-semibold mb-2">
                          root@email:~$
                        </label>
                        <motion.input
                          whileFocus={{ scale: 1.02, borderColor: '#00ff41' }}
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full bg-black/80 border border-green-400/30 rounded px-4 py-3 text-green-300 focus:outline-none focus:border-green-400 transition-all duration-300"
                          placeholder="your.email@domain.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-green-400 text-sm font-semibold mb-2">
                        root@subject:~$
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.02, borderColor: '#00ff41' }}
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-black/80 border border-green-400/30 rounded px-4 py-3 text-green-300 focus:outline-none focus:border-green-400 transition-all duration-300"
                        placeholder="Subject of your message"
                      />
                    </div>

                    <div>
                      <label className="block text-green-400 text-sm font-semibold mb-2">
                        root@message:~$
                      </label>
                      <motion.textarea
                        whileFocus={{ scale: 1.02, borderColor: '#00ff41' }}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full bg-black/80 border border-green-400/30 rounded px-4 py-3 text-green-300 focus:outline-none focus:border-green-400 transition-all duration-300 resize-none"
                        placeholder="Type your message here..."
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 0 30px #00ff41' }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-green-400/10 border-2 border-green-400 text-green-400 py-3 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        <>
                          <Send size={20} />
                          [ TRANSMIT_MESSAGE ]
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info & Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="space-y-8"
              >
                {/* Contact Info */}
                <div className="bg-black/60 border border-green-400/50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">
                    [ CONNECTION_ESTABLISHED ]
                  </h3>
                  
                  <div className="space-y-4 text-green-300">
                    <div className="flex items-center gap-3">
                      <Mail className="text-green-400" size={20} />
                      <span>Divyanshushinde103@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">📍</span>
                      <span>Bhopal, India</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-green-400">🕒</span>
                      <span>IST (UTC+5:30)</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-400/10 border border-green-400/30 rounded">
                    <p className="text-green-300 text-sm leading-relaxed">
                      <span className="text-green-400 font-semibold">Status:</span> Available for freelance projects, 
                      collaborations, and exciting opportunities in AI, cybersecurity, and full-stack development.
                    </p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-black/60 border border-green-400/50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-green-400 mb-6">
                    [ SOCIAL_NETWORKS ]
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      
                      return (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className={`${social.bgColor} ${social.borderColor} border rounded-lg p-4 transition-all duration-300 group flex flex-col items-center text-center`}
                        >
                          <IconComponent 
                            size={28} 
                            className={`${social.color} transition-colors mb-2 group-hover:scale-110 transform transition-transform`}
                          />
                          <span className={`${social.color} text-sm font-semibold`}>
                            {social.name}
                          </span>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>

                {/* ASCII Art */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.2 }}
                  className="bg-black/60 border border-green-400/50 rounded-lg p-6"
                >
                  <pre className="text-green-400 text-xs overflow-x-auto">
{`
  ┌─────────────────────────────────────┐
  │  > Establishing secure connection   │
  │  > Encrypting communication channel │
  │  > Ready to receive transmissions   │
  │                                     │
  │  [STATUS: ONLINE]                   │
  │  [SECURITY: ENABLED]                │
  │  [RESPONSE_TIME: <24h]              │
  └─────────────────────────────────────┘
`}
                  </pre>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;