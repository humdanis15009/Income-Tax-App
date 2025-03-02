import { Link } from "react-router-dom"


import React from 'react'

const ItrPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navigation */}


            {/* Hero Section */}
            <section className="bg-[#1a1e2a] text-white py-12 md:py-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
                    <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
                </div>
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0 z-10">
                        <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-1 mb-6">
                            <div className="w-6 h-6 mr-2">
                                <img
                                    src="https://th.bing.com/th/id/OIP.hnpFvoXKgEE5W4QE5C0n_AHaD4?rs=1&pid=ImgDetMain"
                                    alt="US Flag"
                                    width={24}
                                    height={24}
                                    className="rounded-full"
                                />
                            </div>
                            <span className="text-sm">USA Tax Preparation & Filing</span>
                            <span className="ml-2 bg-teal-500 text-white text-xs px-2 py-0.5 rounded-full">Popular</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            File your ITR in <span className="text-teal-400">30 minutes</span>
                        </h1>
                        <p className="text-lg text-gray-300 mb-8">Fast, secure, and hassle-free tax filing with expert guidance</p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium">
                                Get Started
                            </button>
                            <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium">
                                Learn More
                            </button>
                        </div>
                        <div className="flex items-center">
                            <div className="flex -space-x-2 mr-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#1a1e2a] bg-gray-300">
                                        <img
                                            src={`https://png.pngtree.com/png-vector/20190710/ourlarge/pngtree-user-vector-avatar-png-image_1541962.jpg`}
                                            alt={`User ${i}`}
                                            width={32}
                                            height={32}
                                            className="rounded-full"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex items-center">
                                <div className="flex text-yellow-400">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="ml-2 text-sm">4.9/5 from 10,000+ reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center z-10">
                        <div className="relative w-full max-w-md">
                            <img
                                src="https://th.bing.com/th/id/OIP.Rb5Xfg1XHpPWYXOtcZeNhwHaEo?rs=1&pid=ImgDetMain"
                                alt="Tax Professional"
                                width={400}
                                height={500}
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="bg-gray-100 py-10">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-gray-800">10,000,000+</span>
                            <span className="text-gray-600">Happy customers</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-gray-800">99%</span>
                            <span className="text-gray-600">Customer satisfaction</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-3xl font-bold text-gray-800">24/7</span>
                            <span className="text-gray-600">Expert support available</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile App Section */}
            <section className="bg-purple-50 py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h2 className="text-3xl font-bold mb-6">Reduce your tax liability by up to 45%</h2>
                            <p className="text-gray-600 mb-8">
                                Our mobile app makes it easy to file taxes on the go, track your refund, and get expert advice whenever
                                you need it.
                            </p>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium">
                                Download App
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-64 h-64 bg-teal-200 rounded-full blur-3xl opacity-50"></div>
                                <div className="relative z-10 flex -mx-4">
                                    <div className="px-4 transform -rotate-6">
                                        <img
                                            src="https://th.bing.com/th/id/OIP.5KqYhLXlvXZwOqHtQY9uxAAAAA?rs=1&pid=ImgDetMain"
                                            alt="Mobile App Screen 1"
                                            width={230}
                                            height={500}
                                            className="rounded-3xl shadow-xl"
                                        />
                                    </div>
                                    <div className="px-4 transform rotate-6 mt-8">
                                        <img
                                            src="https://triazinesoft.com/img/hellotax-screen.png"
                                            alt="Mobile App Screen 2"
                                            width={230}
                                            height={500}
                                            className="rounded-3xl shadow-xl"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">TaxBuddy: Your partner for E-file filing</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Simple, accurate, and secure tax filing with expert guidance every step of the way
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                            <div className="text-teal-500 mb-4">
                                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Expert Assistance</h3>
                            <p className="text-gray-600">
                                Get personalized guidance from tax experts who understand your unique financial situation.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                            <div className="text-teal-500 mb-4">
                                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        fillRule="evenodd"
                                        d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Maximum Refunds</h3>
                            <p className="text-gray-600">
                                Our intelligent system identifies all eligible deductions and credits to maximize your tax refund.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 text-center">
                    <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium">
                        Start Filing Now
                    </button>
                </div>
            </section>

            {/* ITR Filing Section */}
            <section className="bg-yellow-50 py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h2 className="text-3xl font-bold mb-6">Crores saved in ITR Filing</h2>
                            <p className="text-gray-600 mb-8">
                                Our customers have saved millions through our expert tax optimization strategies and comprehensive
                                deduction analysis.
                            </p>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium">
                                Learn More
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative">
                                <img
                                    src="/placeholder.svg?height=400&width=400"
                                    alt="Tax Savings"
                                    width={400}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* No Hidden Charges Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h2 className="text-3xl font-bold mb-6">No hidden charges</h2>
                            <p className="text-gray-300 mb-8">
                                We believe in complete transparency. What you see is what you pay - no surprises, no hidden fees.
                            </p>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium">
                                View Pricing
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative">
                                <img
                                    src="/placeholder.svg?height=500&width=250"
                                    alt="Mobile App Pricing"
                                    width={250}
                                    height={500}
                                    className="rounded-3xl shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expert Tax Filing Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <img
                                src="/placeholder.svg?height=400&width=400"
                                alt="Tax Expert"
                                width={400}
                                height={400}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-3xl font-bold mb-6">Easy Income Tax filing with our tax expert today</h2>
                            <p className="text-gray-600 mb-8">
                                Our certified tax professionals are ready to help you navigate complex tax situations and ensure you get
                                the maximum refund possible.
                            </p>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium">
                                Consult an Expert
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Investment Advisory Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h2 className="text-3xl font-bold mb-6">Get your investment portfolio optimized with TaxBuddy</h2>
                            <p className="text-gray-300 mb-8">
                                Our investment advisors help you build a tax-efficient portfolio that maximizes returns while minimizing
                                tax liability.
                            </p>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium">
                                Get Started
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative">
                                <img
                                    src="/placeholder.svg?height=400&width=400"
                                    alt="Investment Advisor"
                                    width={400}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Assisted Investment Section */}
            <section className="bg-yellow-50 py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <img
                                src="/placeholder.svg?height=400&width=400"
                                alt="Investment Advisor"
                                width={400}
                                height={400}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-3xl font-bold mb-6">Assisted investment advisory</h2>
                            <p className="text-gray-600 mb-8">
                                Get personalized investment recommendations based on your financial goals, risk tolerance, and tax
                                situation.
                            </p>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mutual Funds Section */}
            <section className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h2 className="text-3xl font-bold mb-6">Buy No commission Mutual Funds</h2>
                            <p className="text-gray-300 mb-8">
                                Invest in a wide range of mutual funds with zero commission fees, maximizing your investment returns.
                            </p>
                            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium">
                                Explore Funds
                            </button>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <div className="relative">
                                <img
                                    src="/placeholder.svg?height=400&width=400"
                                    alt="Mutual Funds"
                                    width={400}
                                    height={400}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Hear from our clients</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Thousands of satisfied customers trust TaxBuddy for their tax and investment needs
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                                <div className="flex items-center mb-4">
                                    <div className="flex text-yellow-400">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    "TaxBuddy made filing my taxes incredibly easy. The expert guidance helped me save money I didn't even
                                    know I could save!"
                                </p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 mr-3">
                                        <img
                                            src={`/placeholder.svg?height=40&width=40`}
                                            alt={`Client ${i}`}
                                            width={40}
                                            height={40}
                                            className="rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-medium">John Doe</h4>
                                        <p className="text-sm text-gray-500">Business Owner</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <h2 className="text-3xl font-bold mb-12 text-center">Frequently asked questions</h2>
                    <div className="max-w-3xl mx-auto">
                        {[
                            {
                                question: "What is TaxBuddy?",
                                answer:
                                    "TaxBuddy is a comprehensive tax filing and investment advisory platform that helps individuals and businesses file their taxes accurately while maximizing refunds and minimizing tax liability.",
                            },
                            {
                                question: "How does TaxBuddy work?",
                                answer:
                                    "TaxBuddy works by connecting you with certified tax experts who guide you through the tax filing process. Our platform uses advanced algorithms to identify all eligible deductions and credits, ensuring you get the maximum refund possible.",
                            },
                            {
                                question: "Is TaxBuddy secure?",
                                answer:
                                    "Yes, TaxBuddy employs bank-level security measures to protect your personal and financial information. We use 256-bit encryption and follow strict privacy protocols to ensure your data remains secure.",
                            },
                            {
                                question: "How much does TaxBuddy cost?",
                                answer:
                                    "TaxBuddy offers various pricing plans to suit different needs. Our basic plan starts at $29.99, while our premium plans with additional features and expert consultations range from $49.99 to $99.99.",
                            },
                            {
                                question: "Can I file my taxes on mobile?",
                                answer:
                                    "Yes, TaxBuddy offers a mobile app available on both iOS and Android platforms. The app allows you to file your taxes, track your refund, and get expert advice on the go.",
                            },
                        ].map((faq, index) => (
                            <div key={index} className="mb-8">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-400 text-white">
                                            <span className="text-sm font-bold">Q</span>
                                        </div>
                                    </div>
                                    <h3 className="ml-3 text-xl font-semibold">{faq.question}</h3>
                                </div>
                                <div className="flex items-start mt-2">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="flex items-center justify-center w-6 h-6 rounded-full bg-teal-500 text-white">
                                            <span className="text-sm font-bold">A</span>
                                        </div>
                                    </div>
                                    <p className="ml-3 text-gray-600">{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        <div>
                            <h3 className="text-lg font-bold mb-4">Company</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Careers
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Press
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Tax Filing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Tax Planning
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Investment Advisory
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Mutual Funds
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Financial Planning
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Tax Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Tax Guides
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        FAQs
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Security
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Cookie Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Security Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Refund Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-4 md:mb-0">
                                <span className="text-xl font-bold">TaxBuddy</span>
                                <p className="text-gray-400 mt-2">© 2025 TaxBuddy. All rights reserved.</p>
                            </div>
                            <div className="flex space-x-4">
                                <Link to="" className="text-gray-400 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </Link>
                                <Link to="" className="text-gray-400 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </Link>
                                <Link to="" className="text-gray-400 hover:text-white">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="text-center mt-8">
                            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-md font-medium">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ItrPage