import { Blocks } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="relative bg-gray-500 border-t border-gray-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Blocks className="size-5" />
            <span>Built for b-tech students</span>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/support" className="text-gray-400 hover:text-gray-300 transition-colors">
              Support
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-gray-300 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;