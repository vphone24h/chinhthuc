import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // Import CSS của bạn
// import 'milligram/dist/milligram.min.css'; // Bỏ dòng này nếu bạn không dùng Milligram
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
