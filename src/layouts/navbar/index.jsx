import { navItems } from "@/nav-items";
import { Outlet } from "react-router-dom";
import { DesktopNavbar } from "./_components/DesktopNavbar";
import { MobileSheet } from "./_components/MobileSheet";
import { UserMenu } from "./_components/UserMenu";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 justify-between">
        <DesktopNavbar navItems={navItems} />
        <MobileSheet navItems={navItems} />
        <UserMenu />
      </header>
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
      <footer className="bg-gray-100 py-8 px-4">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Innovix Solutions</h3>
            <p>Empowering success through technology</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              {navItems.map((item) => (
                <li key={item.to} className="mb-1">
                  <a href={item.to} className="hover:underline">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p>Email: info@innovixsolutions.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media icons here */}
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2024 Innovix Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;