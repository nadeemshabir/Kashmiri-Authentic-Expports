# Kashmiri-Authentic-Expports
A full-stack, production-ready website built for an international import–export business specializing in Kashmiri handicrafts, premium saffron, and high-quality dry fruits. The platform enables global buyers to explore authentic products, request wholesale quotes, and contact the exporter directly through an integrated inquiry system.

🚀 Features
🌐 Frontend (HTML, CSS, JavaScript)

Fully responsive, modern design

Hero section with background image/video support

Smooth mobile-friendly navigation

Premium product showcase

Auto-scroll + auto-select product in inquiry dropdown

WhatsApp floating chat button

Clean branding reflecting Kashmiri culture

🖥️ Backend (Node.js + Express)

REST API endpoint: POST /api/inquiry

Validates all submitted form fields

Sends inquiry email directly to admin using Nodemailer

Modular architecture:

routes/

controllers/

services/

config/

Environment-secured credentials using .env

Ready for deployment on Render / Railway

📁 Project Structure
Importwebsite/
│   index.html
│   README.md
│   folder-tree.txt
│
├───assests
│   ├───css
│   │       style.css
│   ├───icons
│   ├───images
│   └───js
│           script.js
│
└───backend
    │   server.js
    │   package.json
    │   package-lock.json
    │   .env  (not included in repo)
    │
    ├───config
    │       emailConfig.js
    │
    ├───controllers
    │       inquiryController.js
    │
    ├───routes
    │       inquiryRoutes.js
    │
    └───services
            emailService.js


  🔧 Installation & Setup
1. Clone the repository
git clone https://github.com/nadeemshabir/Kashmiri-Authentic-Exports.git
cd Kashmiri-Authentic-Exports/backend

2. Install backend dependencies
npm install

3. Create a .env file
PORT=5000
ADMIN_EMAIL=your-email@gmail.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password


⚠️ You must use a Gmail App Password if using Gmail.

4. Run the backend server
node server.js


You should see:

Server is running on port 5000

📮 API Endpoint
POST /api/inquiry
Request Body (JSON)
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "productInterest": "Saffron",
  "message": "I need 1kg of premium saffron."
}

Successful Response
{
  "success": true,
  "message": "Inquiry submitted"
}

🚢 Deployment (Render)

Push project to GitHub

Create a new Web Service on Render

Settings:

Root Directory: backend

Build Command: npm install

Start Command: node server.js

Add environment variables from .env

Deploy

✨ Future Enhancements

Admin dashboard for viewing inquiries

MongoDB database integration

Product catalog pages

Payment & checkout support

Email templates with HTML formatting

Multilingual support (English, Kashmiri, Arabic)

🧑‍💼 Author

Nadeem Shabir
Kashmir, India
Email: mirnadeem2021@gmail.com
