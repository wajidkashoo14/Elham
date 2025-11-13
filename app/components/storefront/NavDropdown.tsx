import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface DropdownOption {
  href: string;
  label: string;
  desc?: string;
  image?: string;
}

interface DropdownProps {
  triggerText: string;
  options: DropdownOption[];
  align?: "left" | "right" | "center";
}

const Dropdown: React.FC<DropdownProps> = ({
  triggerText,
  options,
  align = "right",
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = usePathname();

  // Handle mouse events
  const handleMouseEnter = () => setDropdownOpen(true);
  const handleMouseLeave = () => setDropdownOpen(false);

  // Align dropdown classes
  const alignClass =
    align === "left"
      ? "left-0"
      : align === "center"
      ? "left-1/2 transform -translate-x-1/2"
      : "right-0";

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger with animated arrow */}
      <button
        className={cn(
          options.some((option) => option.href === location)
            ? "bg-muted"
            : "hover:bg-muted hover:bg-opacity-75",
          "flex items-center justify-center hover:bg-gray-100 rounded-lg w-full px-2"
        )}
        aria-expanded={dropdownOpen}
      >
        <span
          className={cn(
            options.some((option) => option.href === location)
              ? "bg-muted"
              : "hover:bg-muted hover:bg-opacity-75",
            "flex items-center justify-center font-medium gap-1 hover:bg-gray-100 rounded-lg w-full px-1"
          )}
        >
          {triggerText}
        </span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            dropdownOpen ? "rotate-180" : "rotate-0"
          }`}
          size={16}
        />
      </button>

      {/* Dropdown Menu */}
      {dropdownOpen && (
        <div
          className={`absolute ${alignClass} md:w-[250px] cursor-pointer w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 z-10 px-2`}
        >
          {options.map((option, index) => (
            <div key={index}>
              <Link
                key={index}
                href={option.href}
                className={cn(
                  location === option.href
                    ? "bg-muted"
                    : "hover:bg-muted hover:bg-opacity-75",
                  "flex items-center justify-center gap-3 hover:bg-gray-100 rounded-lg w-full p-2"
                )}
              >
                <div
                  className={cn(
                    location === option.href
                      ? "bg-muted"
                      : "hover:bg-muted hover:bg-opacity-75",
                    " hover:text-gray-900 font-medium w-full "
                  )}
                >
                  {option.label}
                  <p className="text-xs w-full text-gray-500">{option.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
