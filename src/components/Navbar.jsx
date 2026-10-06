import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-white shadow">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="text-xl font-bold">
                        MyApp
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden md:block">
                        <ul className="flex gap-4">
                            <li><a href="#" className="hover:text-blue-600">Home</a></li>
                            <li><a href="#" className="hover:text-blue-600">About</a></li>
                            <li><a href="#" className="hover:text-blue-600">Contact</a></li>
                        </ul>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-2xl"
                    >
                        ☰
                    </button>
                </div>

                {isOpen && (
                    <nav className="md:hidden border-t">
                        <ul className="flex flex-col gap-4 py-4 px-2">
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    );
}
