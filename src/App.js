import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import AssistantPage from './pages/AssistantPage';
import ResponsePage from './pages/ResponsePage';
import AboutPage from './pages/AboutPage';
import { ChatProvider } from './chat/chatAssistantContext';

function App() {
  return (
    <ChatProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/assistant" element={<AssistantPage />} />
          <Route path="/response" element={<ResponsePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      </ChatProvider>
  );
}

export default App;
