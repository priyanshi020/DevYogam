const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const poojaRoutes = require('./routes/poojaRoutes');
const templeRoutes = require('./routes/templeRoutes');
require('dotenv').config();

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Dev Yogam API',
      version: '1.0.0',
      description: 'API documentation for Dev Yogam (Users & Poojas)',
    },
    servers: [
      { url: `http://localhost:${process.env.PORT || 5000}` }
    ],
  },
  apis: [path.join(__dirname, './routes/*.js')],
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.use('/api/users', userRoutes);
app.use('/api/poojas', poojaRoutes);
app.use('/api/temples', templeRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
