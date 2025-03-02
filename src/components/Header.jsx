import React, { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null)

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest("nav")) {
        setActiveDropdown(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeDropdown])

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  return (
    <>
      <header className="w-full">
        {/* Main Navigation */}
        <nav className="flex justify-center items-center">
          <ul className="flex bg-black text-white font-normal text-lg items-center gap-20 px-20 -mr-10 z-10 h-20 rounded-l-full">
            <li>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("services")}
                  className="text-white hover:text-white/80 flex items-center"
                >
                  Services <span className="ml-1">▼</span>
                </button>
              </div>
            </li>
            <li>Pricing</li>
          </ul>
          <div className="bg-black rounded-full p-4 flex-shrink-0">
            <Link to="/">
              <img src={logo || "/placeholder.svg"} alt="Advovate logo of advocate coller" className="h-28 shrink" />
            </Link>
          </div>

          <ul className="flex bg-black text-white font-normal text-lg items-center gap-20 px-20 -ml-10 z-10 h-20 rounded-r-full">
            <li>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("resources")}
                  className="text-white hover:text-white/80 flex items-center"
                >
                  Resources <span className="ml-1">▼</span>
                </button>
              </div>
            </li>
            <li>Login</li>
          </ul>
        </nav>

        {/* Services Dropdown */}
        {activeDropdown === "services" && (
          <div className="absolute z-50 bg-white shadow-lg rounded-md w-full max-w-5xl left-1/2 transform -translate-x-1/2 grid grid-cols-3 gap-4 p-6">
            <div className="space-y-6">
              <div>
                <Link to="/itr-filing" className="text-teal-700 font-medium flex items-center hover:text-teal-800">
                  ITR Filing <span className="ml-1">→</span>
                </Link>
                <p className="text-gray-600 text-sm mt-1">Assisted tax filing by qualified tax experts</p>
              </div>

              <div className="relative">
                <Link to="/flexibuddy" className="text-teal-700 font-medium flex items-center hover:text-teal-800">
                  FlexiBuddy <span className="ml-1">→</span>
                </Link>
                <div className="absolute -top-3 -right-8">
                  <div className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-md transform rotate-12">NEW</div>
                </div>
                <p className="text-gray-600 text-sm mt-1">
                  Empowering Employers to Maximize Tax Savings with Custom Benefits
                </p>
              </div>

              <div>
                <Link to="/tax-planner" className="text-teal-700 font-medium flex items-center hover:text-teal-800">
                  Tax Planner <span className="ml-1">→</span>
                </Link>
                <p className="text-gray-600 text-sm mt-1">Plan and reduce your tax liability</p>
              </div>

              <div>
                <Link
                  to="/income-tax-notice"
                  className="text-teal-700 font-medium flex items-center hover:text-teal-800"
                >
                  Income Tax Notice <span className="ml-1">→</span>
                </Link>
                <p className="text-gray-600 text-sm mt-1">Resolve notices of all types</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Link to="/schedule-call" className="text-teal-700 font-medium flex items-center hover:text-teal-800">
                  Schedule a Call <span className="ml-1">→</span>
                </Link>
                <p className="text-gray-600 text-sm mt-1">Seamless access to consultations with tax experts</p>
              </div>

              <div>
                <Link to="/mybizcfo" className="text-teal-700 font-medium flex items-center hover:text-teal-800">
                  MyBizCFO <span className="ml-1">→</span>
                </Link>
                <p className="text-gray-600 text-sm mt-1">Virtual CFO services for small businesses</p>
              </div>

              <div>
                <Link to="/gst-filing" className="text-teal-700 font-medium flex items-center hover:text-teal-800">
                  GST Filing <span className="ml-1">→</span>
                </Link>
                <p className="text-gray-600 text-sm mt-1">GST registration and timely filing</p>
              </div>

              <div>
                <Link
                  to="/huf-registration"
                  className="text-teal-700 font-medium flex items-center hover:text-teal-800"
                >
                  HUF Registration & Filing <span className="ml-1">→</span>
                </Link>
                <p className="text-gray-600 text-sm mt-1">Streamline HUF Filing, Maximize Returns</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Link
                  to="/tds-return-filing"
                  className="text-teal-700 font-medium flex items-center hover:text-teal-800"
                >
                  TDS Return Filing <span className="ml-1">→</span>
                </Link>
                <p className="text-gray-600 text-sm mt-1">Seamless TDS Filing Solutions</p>
              </div>

              <div>
                <Link
                  to="/accounting-services"
                  className="text-teal-700 font-medium flex items-center hover:text-teal-800"
                >
                  Accounting Services <span className="ml-1">→</span>
                </Link>
                <p className="text-gray-600 text-sm mt-1">Balancing Books, Maximizing Profits</p>
              </div>

              <div>
                <Link
                  to="/business-license"
                  className="text-teal-700 font-medium flex items-center hover:text-teal-800"
                >
                  Business License Registration <span className="ml-1">→</span>
                </Link>
                <p className="text-gray-600 text-sm mt-1">Fast, simple business license registration</p>
              </div>

              <div>
                <Link
                  to="/company-registration"
                  className="text-teal-700 font-medium flex items-center hover:text-teal-800"
                >
                  Company Registration Online <span className="ml-1">→</span>
                </Link>
                <p className="text-gray-600 text-sm mt-1">Easy online company registration</p>
              </div>
            </div>

            <div>
              <Link to="/appeal" className="text-teal-700 font-medium flex items-center hover:text-teal-800">
                Appeal <span className="ml-1">→</span>
              </Link>
              <p className="text-gray-600 text-sm mt-1">Navigate tax dispute appeals and resolutions</p>
            </div>

            <div>
              <Link to="/pf-withdrawal" className="text-teal-700 font-medium flex items-center hover:text-teal-800">
                PF Withdrawal <span className="ml-1">→</span>
              </Link>
              <p className="text-gray-600 text-sm mt-1">Effortless Provident Fund Withdrawals</p>
            </div>

            <div>
              <Link to="/us-tax-filing" className="text-teal-700 font-medium flex items-center hover:text-teal-800">
                US Tax Filing <span className="ml-1">→</span>
              </Link>
              <p className="text-gray-600 text-sm mt-1">US tax preparation and filing by experts</p>
            </div>

            <div className="col-span-3">
              <Link to="/lower-deduction" className="text-teal-700 font-medium flex items-center hover:text-teal-800">
                Lower Deduction Certificate <span className="ml-1">→</span>
              </Link>
              <p className="text-gray-600 text-sm mt-1">Minimize Tax Deductions with form 13</p>
            </div>
          </div>
        )}
        {/* Resources Dropdown */}
        {activeDropdown === "resources" && (
          <div className="absolute z-50 bg-white shadow-lg rounded-md w-48 right-0 top-full mt-2">
            <div className="py-2">
              <Link to="/faqs" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                FAQs
              </Link>
              <Link to="/tax-glossary" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Tax Glossary
              </Link>
              <Link to="/guides" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Guides
              </Link>
              <Link to="/write-for-us" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Write for Us
              </Link>
              <Link to="/case-study" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Case study
              </Link>
              <Link to="/news" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                News
              </Link>
              <Link to="/newsletter" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Newsletter
              </Link>
              <Link to="/calculators" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Calculators
              </Link>
              <Link to="/blogs" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                Blogs
              </Link>
            </div>
          </div>
        )}

        {/* Floating Contact Buttons */}
        <div className="fixed right-5 bottom-5 flex flex-col gap-3 z-50">
          <a
            to="https://wa.me/yourwhatsappnumber"
            className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <button className="bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </button>
          <button className="bg-cyan-500 text-white p-3 rounded-full hover:bg-cyan-600 transition-colors flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}

