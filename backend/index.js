const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors()); // Allow all origins for development to fix "Unable to transmit"
app.use(express.json());

// Transporter Configuration (using Gmail for simplicity)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use an App Password if using Gmail
  }
});

// Root Route
app.get('/', (req, res) => {
  res.send('Cybersecurity Portfolio API - System: ONLINE');
});

// Terminal Response Endpoint (Simple Simulation)
app.post('/api/terminal', (req, res) => {
  const { command } = req.body;
  
  const responses = {
    'status': '[ SYSTEM_STATUS ]: CPU: 42%, MEM: 64%, NETWORK: ENCRYPTED, UPTIME: 352h 12m',
    'version': 'PORTFOLIO_OS v4.2.0 (Stable Build)',
    'whoami': 'Divyanshu Shinde | CTO @ Incubator Pool | Cybersecurity Specialist',
    'about': 'Building secure AI systems and identifying vulnerabilities since 2020.',
    'echo': command?.split(' ').slice(1).join(' ') || '',
    'ping': 'PONG (64 bytes from 127.0.0.1: time=0.042ms)',
    'date': new Date().toLocaleString(),
    'uptime': '352 hours, 12 minutes, 42 seconds',
    'secret': 'FLAG{REDACTED_BY_ADMIN}',
  };

  const cmd = command?.trim().toLowerCase().split(' ')[0];
  const response = responses[cmd] || `Command not found: ${cmd}. Type 'help' for assistance.`;

  res.json({ response });
});

// Contact Endpoint
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Email to the Portfolio Owner (You)
  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, // Receives the message at the same email (or a different one)
    replyTo: email,
    subject: `[PORTFOLIO_CONTACT] ${subject || 'New Message'}`,
    text: `
      [ SYSTEM_MESSAGE: NEW_CONTACT_SUBMISSION ]
      -----------------------------------------
      NAME: ${name}
      EMAIL: ${email}
      SUBJECT: ${subject || 'N/A'}
      MESSAGE:
      ${message}
      -----------------------------------------
      [ END_OF_TRANSMISSION ]
    `,
    html: `
      <div style="font-family: monospace; background-color: #000; color: #00ff88; padding: 20px; border: 1px solid #00ff88;">
        <h2 style="border-bottom: 1px solid #00ff88; padding-bottom: 10px;">[ NEW_CONTACT_SUBMISSION ]</h2>
        <p><strong>NAME:</strong> ${name}</p>
        <p><strong>EMAIL:</strong> ${email}</p>
        <p><strong>SUBJECT:</strong> ${subject || 'N/A'}</p>
        <div style="margin-top: 20px; padding: 15px; border: 1px dashed #00ff88;">
          <p><strong>MESSAGE:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 20px; font-size: 10px; color: #00ff8888;">[ SYSTEM_READY_FOR_RESPONSE ]</p>
      </div>
    `
  };

  try {
    console.log(`[ ATTEMPTING_TRANSMISSION ]: To ${process.env.EMAIL_USER}`);
    await transporter.sendMail(mailOptions);
    console.log('[ SUCCESS ]: Email sent.');
    res.status(200).json({ message: 'Message sent successfully. Transmission complete.' });
  } catch (error) {
    console.error('--- EMAIL_SYSTEM_FAILURE ---');
    console.error('Error Code:', error.code);
    console.error('Response:', error.response);
    console.error('Message:', error.message);
    console.error('----------------------------');
    res.status(500).json({ error: `Failed to send message: ${error.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`[ SERVER_ACTIVE ]: http://localhost:${PORT}`);
});
