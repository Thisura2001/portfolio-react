import { useEffect, useState, useRef } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
interface NavBarProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}
export const NavBar = ({ darkMode, setDarkMode }: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    const handleClickOutside = (event: MouseEvent) => {
      if (
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(event.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
      setIsMobileMenuOpen(false)
    }
  }
  const navItems = [
    {
      id: 'home',
      label: 'Home',
    },
    {
      id: 'about',
      label: 'About',
    },
    {
      id: 'tech-stack',
      label: 'Skills',
    },
    {
      id: 'projects',
      label: 'Projects',
    },
    {
      id: 'contact',
      label: 'Contact',
    },
  ]
  return (
      <nav
          className={`fixed top-0 w-full z-50 transition-all duration-300 
        ${isScrolled ? "bg-white dark:bg-gray-800 shadow-md py-2" : "bg-transparent dark:bg-transparent py-4"}`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <a
              href="#"
              className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
          >
            THISURA
          </a>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                About
              </button>
              <button
                  onClick={() => scrollToSection("tech-stack")}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Skills
              </button>
              <button
                  onClick={() => scrollToSection("projects")}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Projects
              </button>
              <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
                ref={buttonRef}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              ) : (
                  <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
        <div
            ref={mobileMenuRef}
            className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navItems.map((item) => (
                <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
            ))}
          </div>
        </div>
      </nav>
  )
}
