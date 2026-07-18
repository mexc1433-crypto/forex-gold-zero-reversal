import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from '@/components/LanguageProvider';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
              <div className="text-center space-y-4">
                <h1 className="text-7xl font-light text-muted-foreground">404</h1>
                <p className="text-muted-foreground">Page Not Found</p>
                <a href="/" className="inline-block px-5 py-2 rounded-lg bg-primary text-primary-foreground font-medium">Go Home</a>
              </div>
            </div>
          } />
        </Routes>
      </LanguageProvider>
    </Router>
  );
}

export default App;
