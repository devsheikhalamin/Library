import { Button } from "@/components/ui/button";
// import { ModeToggle } from "../mode-toggle";
import { NavMenu } from "../ui/nav-menu";
import { NavigationSheet } from "../ui/navigation-sheet";
import { CiSearch } from "react-icons/ci";

const NavbarPage = () => {
    return (
        <div className="bg-background">
            <nav className="h-16 bg-gradient-to-r from-amber-50 via-white to-amber-50 border-b">
                <div className="h-full flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Logo + Desktop Menu */}
                    <div className="flex items-center gap-10">
                        <h1 className="text-[22px] text-cyan-800">
                            BOOK<strong>SOW</strong>
                        </h1>
                        <NavMenu className="hidden md:block" />
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center gap-3">
                        {/* Search Input */}
                        <div className="hidden sm:flex items-center border-2 border-gray-300 rounded-full px-3 py-1 h-10 w-60 hover:shadow-sm transition">
                            <CiSearch className="w-5 h-5 text-gray-500 mr-2" />
                            <input
                                type="text"
                                placeholder="Search books..."
                                className="flex-1 bg-transparent outline-none text-sm text-gray-700"
                            />
                        </div>

                        {/* Sign In Button */}
                        <Button className="hidden sm:inline-flex px-4 py-2 text-sm bg-cyan-800 text-white">
                            Sign in
                        </Button>

                        {/* Mobile Menu */}
                        <div className="md:hidden bg-cyan-800 rounded-md">
                            <NavigationSheet />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavbarPage;
