export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <span className="text-2xl font-bold tracking-widest text-gray-400">CHO-JU</span>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Contact
            </a>
          </nav>
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} CHO-JU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
