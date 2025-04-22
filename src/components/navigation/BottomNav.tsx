
import { Link } from "react-router-dom";
import { Home, Search, Settings, MessageCircle } from "lucide-react";

export const BottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t">
      <div className="flex justify-around items-center p-3">
        <Link to="/" className="flex flex-col items-center text-sadari-primary">
          <Home className="h-6 w-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link to="/browse" className="flex flex-col items-center text-gray-400">
          <Search className="h-6 w-6" />
          <span className="text-xs">Browse</span>
        </Link>
        <Link to="/settings" className="flex flex-col items-center text-gray-400">
          <Settings className="h-6 w-6" />
          <span className="text-xs">Settings</span>
        </Link>
        <Link to="/chat" className="flex flex-col items-center text-gray-400">
          <MessageCircle className="h-6 w-6" />
          <span className="text-xs">Chat</span>
        </Link>
      </div>
    </nav>
  );
};
