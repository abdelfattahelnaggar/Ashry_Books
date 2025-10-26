import { lazy, Suspense, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, LogOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthContext";
import Logo from "@/assets/Logo.png";

// Lazy-loaded components
const NavMenu = lazy(() => 
  import("./NavMenu").then((module) => ({ default: module.NavMenu }))
);
const NavigationSheet = lazy(() => 
  import("./NavSheet").then((module) => ({ default: module.NavigationSheet }))
);

const NavigationBar = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  
  if (!authContext) {
    throw new Error("AuthContext must be used within AuthProvider");
  }
  
  const { logout } = authContext;

  const handleLogout = () => {
    logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl h-16 bg-background/95 shadow-lg backdrop-blur-sm rounded-full z-50 border">
      <div className="h-full flex items-center justify-between px-6">
        {/* Logo */}
        <img 
          src={Logo} 
          alt="Ashry Books Logo" 
          className="h-10 cursor-pointer" 
          loading="lazy"
          onClick={() => navigate("/admin/dashboard")}
        />

        {/* Desktop Menu */}
        <Suspense fallback={<div className="h-8 w-64 bg-gray-200 rounded animate-pulse" />}>
          <NavMenu className="hidden md:block" />
        </Suspense>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button
            onClick={() => navigate("/", { replace: true })}
            className="rounded-full font-bold hidden sm:inline-flex items-center gap-1.5"
          >
            اذهب للمتجر
            <ArrowLeftIcon className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            className="rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 font-bold hover:text-white flex items-center gap-2"
            onClick={handleLogout}
          >
            <span className="text-base">تسجيل الخروج</span>
            <LogOutIcon className="w-4 h-4" />
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Suspense fallback={<div className="h-10 w-10 bg-gray-200 rounded-full animate-pulse" />}>
              <NavigationSheet />
            </Suspense>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
