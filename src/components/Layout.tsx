
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Menu,
  X,
  ChevronDown,
  Moon,
  Sun
} from "lucide-react";
import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      const isDark = JSON.parse(saved);
      setIsDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-red-600">
                MR
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors">
                  Industries <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white dark:bg-gray-800">
                  <DropdownMenuItem asChild>
                    <Link to="/industries/gaming" className="w-full dark:text-gray-300">Gaming</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/fintech" className="w-full dark:text-gray-300">Fintech</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/industries/software" className="w-full dark:text-gray-300">Software and Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    <span className="w-full text-gray-400">Healthcare (Coming Soon)</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    <span className="w-full text-gray-400">E-commerce (Coming Soon)</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem disabled>
                    <span className="w-full text-gray-400">EdTech (Coming Soon)</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                to="/hire-nigerian-experts"
                className={`text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors ${
                  isActive('/hire-nigerian-experts') ? 'text-red-600 dark:text-red-400 font-medium' : ''
                }`}
              >
                Hire Nigerian Experts
              </Link>

              <Link
                to="/job-seekers"
                className={`text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors ${
                  isActive('/job-seekers') ? 'text-red-600 dark:text-red-400 font-medium' : ''
                }`}
              >
                Job Seekers
              </Link>

              <Link
                to="/blog"
                className={`text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors ${
                  isActive('/blog') ? 'text-red-600 dark:text-red-400 font-medium' : ''
                }`}
              >
                Blog
              </Link>

              <Button
                onClick={toggleDarkMode}
                variant="outline"
                size="sm"
                className="ml-4"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <Button
                onClick={toggleDarkMode}
                variant="outline"
                size="sm"
                className="mr-2"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <button
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <div className="space-y-2">
                <div className="text-gray-700 dark:text-gray-300 font-medium">Industries</div>
                <Link
                  to="/industries/gaming"
                  className="block pl-4 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gaming
                </Link>
                <Link
                  to="/industries/fintech"
                  className="block pl-4 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fintech
                </Link>
                <Link
                  to="/industries/software"
                  className="block pl-4 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Software and Services
                </Link>
                <div className="pl-4 text-gray-400">Healthcare (Coming Soon)</div>
                <div className="pl-4 text-gray-400">E-commerce (Coming Soon)</div>
                <div className="pl-4 text-gray-400">EdTech (Coming Soon)</div>
              </div>

              <Link
                to="/hire-nigerian-experts"
                className="block text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Hire Nigerian Experts
              </Link>

              <Link
                to="/job-seekers"
                className="block text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Job Seekers
              </Link>

              <Link
                to="/blog"
                className="block text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-red-500 mb-4">
                MR
              </div>
              <p className="text-gray-400">
                Connecting top talent with amazing opportunities across the globe.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Industries</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/industries/gaming" className="hover:text-white transition-colors">Gaming</Link></li>
                <li><Link to="/industries/fintech" className="hover:text-white transition-colors">Fintech</Link></li>
                <li><Link to="/industries/software" className="hover:text-white transition-colors">Software and Services</Link></li>
                {/* <li><span className="text-gray-500">Healthcare (Coming Soon)</span></li>
                <li><span className="text-gray-500">E-commerce (Coming Soon)</span></li>
                <li><span className="text-gray-500">EdTech (Coming Soon)</span></li> */}
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/hire-nigerian-experts" className="hover:text-white transition-colors">Hire Nigerian Experts</Link></li>
                <li><Link to="/job-seekers" className="hover:text-white transition-colors">Job Seekers</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MarvelRecruit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
