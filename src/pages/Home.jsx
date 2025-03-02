import { Link } from "react-router-dom"
import { CheckCircle, ChevronDown, ChevronRight, Menu, Star } from "lucide-react"

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}

            <main>
                {/* Hero Section */}
                <section className="bg-white py-12 md:py-20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
                            <div className="space-y-6">
                                <h1 className="text-3xl font-bold leading-tight md:text-5xl text-gray-900">
                                    Income Tax Filing <span className="text-teal-600">Made Simple</span> for Everyone
                                </h1>
                                <p className="text-lg text-gray-600">
                                    File your income tax returns easily with expert assistance at affordable prices.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        to=""
                                        className="rounded-full bg-teal-600 px-8 py-3 text-center font-medium text-white hover:bg-teal-700"
                                    >
                                        Get Started
                                    </Link>
                                    <Link
                                        to=""
                                        className="rounded-full border border-teal-600 px-8 py-3 text-center font-medium text-teal-600 hover:bg-teal-50"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-600">Trusted by 1M+ customers</p>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="https://www.indiafilings.com/learn/wp-content/uploads/2017/10/How-to-File-Income-Tax-Return.jpg"
                                    alt="Tax filing expert"
                                    width={400}
                                    height={500}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* App Screenshots Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">File Taxes on the Go</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Our mobile app makes it easy to file your taxes from anywhere, anytime.
                            </p>
                        </div>
                        <div className="flex justify-center space-x-4 md:space-x-8">
                            <div className="w-1/3 max-w-[180px] shadow-lg rounded-xl overflow-hidden">
                                <img
                                    src="https://th.bing.com/th/id/OIP.5KqYhLXlvXZwOqHtQY9uxAAAAA?rs=1&pid=ImgDetMain"
                                    alt="App Screenshot 1"
                                    width={180}
                                    height={400}
                                    className="w-full"
                                />
                            </div>
                            <div className="w-1/3 max-w-[180px] shadow-lg rounded-xl overflow-hidden">
                                <img
                                    src="https://moneyexcel.com/wp-content/uploads/2017/06/all-india-itr-app.png"
                                    alt="App Screenshot 2"
                                    width={180}
                                    height={400}
                                    className="w-full"
                                />
                            </div>
                            <div className="w-1/3 max-w-[180px] shadow-lg rounded-xl overflow-hidden">
                                <img
                                    src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/43/33/63/43336346-e260-e4d6-c69a-b173fbf48dd4/0afa1244-a1d0-4524-89ee-abb2ee5df911__U53d1_U7248_U56fe_1242_U002a2208_1.png/750x750bb.jpeg"
                                    alt="App Screenshot 3"
                                    width={180}
                                    height={400}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-16 bg-gray-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose TaxBuddy</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                We make tax filing simple, accurate, and affordable for everyone.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Expert Assistance",
                                    description: "Get help from certified tax professionals for all your tax-related queries.",
                                },
                                {
                                    title: "Secure & Confidential",
                                    description: "Your data is encrypted and protected with bank-level security measures.",
                                },
                                {
                                    title: "Affordable Pricing",
                                    description: "Pay only for what you need with our transparent pricing structure.",
                                },
                                {
                                    title: "Fast Processing",
                                    description: "Get your tax returns filed quickly with our efficient processing system.",
                                },
                                {
                                    title: "Comprehensive Coverage",
                                    description: "We handle all types of income sources and deductions for complete filing.",
                                },
                                {
                                    title: "24/7 Support",
                                    description: "Our customer support team is available round the clock to assist you.",
                                },
                            ].map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                                        <CheckCircle className="h-6 w-6 text-teal-600" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Simple Pricing Plans</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Choose the plan that fits your needs and budget.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Basic",
                                    price: "₹999",
                                    description: "Perfect for salaried individuals with simple tax needs",
                                    features: ["Income from salary", "Standard deductions", "Basic tax filing", "Email support"],
                                    popular: false,
                                },
                                {
                                    name: "Standard",
                                    price: "₹1,999",
                                    description: "Ideal for individuals with multiple income sources",
                                    features: [
                                        "All Basic features",
                                        "Income from investments",
                                        "Rental income",
                                        "Priority support",
                                        "Tax planning advice",
                                    ],
                                    popular: true,
                                },
                                {
                                    name: "Premium",
                                    price: "₹3,999",
                                    description: "Comprehensive coverage for complex tax situations",
                                    features: [
                                        "All Standard features",
                                        "Business income",
                                        "Capital gains",
                                        "Foreign income",
                                        "Dedicated tax expert",
                                        "Year-round support",
                                    ],
                                    popular: false,
                                },
                            ].map((plan, index) => (
                                <div
                                    key={index}
                                    className={`rounded-lg p-8 ${plan.popular ? "border-2 border-teal-600 shadow-xl relative" : "border border-gray-200 shadow-md"
                                        }`}
                                >
                                    {plan.popular && (
                                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <div className="mb-4">
                                        <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                        <span className="text-gray-600">/year</span>
                                    </div>
                                    <p className="text-gray-600 mb-6">{plan.description}</p>
                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button
                                        className={`w-full py-3 rounded-full font-medium ${plan.popular
                                            ? "bg-teal-600 text-white hover:bg-teal-700"
                                            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                                            }`}
                                    >
                                        Choose Plan
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="py-16 bg-teal-50">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Don't just take our word for it. See what our customers have to say about their experience.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    name: "Rahul Sharma",
                                    role: "Software Engineer",
                                    content:
                                        "Filing taxes was always a headache until I found TaxBuddy. The process is so simple and the expert guidance is invaluable.",
                                },
                                {
                                    name: "Priya Patel",
                                    role: "Business Owner",
                                    content:
                                        "As a small business owner, my taxes are complicated. TaxBuddy made it easy to understand and file correctly. Highly recommend!",
                                },
                                {
                                    name: "Amit Verma",
                                    role: "Freelancer",
                                    content:
                                        "The best tax filing service for freelancers! They understand the unique challenges we face and provide excellent support.",
                                },
                            ].map((testimonial, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex items-center mb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-gray-600">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Find answers to common questions about our tax filing services.
                            </p>
                        </div>
                        <div className="max-w-3xl mx-auto">
                            {[
                                {
                                    question: "What documents do I need to file my income tax return?",
                                    answer:
                                        "You'll need your Form 16 from your employer, bank statements showing interest earned, investment statements, home loan statements if applicable, and any other income or deduction proofs.",
                                },
                                {
                                    question: "How long does it take to file a tax return with TaxBuddy?",
                                    answer:
                                        "Most returns can be filed within 30 minutes to 1 hour, depending on the complexity of your tax situation. Our experts work efficiently to ensure quick processing.",
                                },
                                {
                                    question: "Is my data secure with TaxBuddy?",
                                    answer:
                                        "Yes, we use bank-level encryption to protect your data. Your information is confidential and we have strict security protocols in place to safeguard your personal and financial details.",
                                },
                                {
                                    question: "What if I need help after filing my return?",
                                    answer:
                                        "We provide post-filing support for all our customers. If you receive any notices from the tax department or have any queries, our experts are available to assist you.",
                                },
                                {
                                    question: "Can I file taxes for previous years?",
                                    answer:
                                        "Yes, TaxBuddy can help you file returns for up to 7 previous assessment years. Additional charges may apply for filing returns for previous years.",
                                },
                            ].map((faq, index) => (
                                <div key={index} className="border-b border-gray-200 py-4">
                                    <button className="flex justify-between items-center w-full text-left">
                                        <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                                        <ChevronDown className="h-5 w-5 text-gray-500" />
                                    </button>
                                    <div className="mt-2 text-gray-600">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-teal-600">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to File Your Taxes?</h2>
                        <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of satisfied customers who have simplified their tax filing process with TaxBuddy.
                        </p>
                        <Link
                            to=""
                            className="inline-block rounded-full bg-white px-8 py-3 font-medium text-teal-600 hover:bg-teal-50"
                        >
                            Get Started Now
                        </Link>
                    </div>
                </section>

                {/* Blog/Resources Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tax Resources & Tips</h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Stay updated with the latest tax news, tips, and resources.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "10 Tax Saving Tips for Salaried Employees",
                                    excerpt:
                                        "Learn how to maximize your tax savings with these effective strategies for salaried professionals.",
                                    img: "https://th.bing.com/th/id/OIP.fpOjEBA6CXRFieoi1K2MhAAAAA?rs=1&pid=ImgDetMain",
                                },
                                {
                                    title: "Understanding the New Tax Regime",
                                    excerpt: "A comprehensive guide to the new tax regime and how it compares to the old one.",
                                    img: "https://english.cdn.zeenews.com/sites/default/files/2023/04/14/1183512-untitled-design-2023-04-14t102400.354.jpg",
                                },
                                {
                                    title: "Common Mistakes to Avoid When Filing ITR",
                                    excerpt:
                                        "Avoid these common pitfalls that could lead to notices or penalties from the tax department.",
                                    img: "https://images.moneycontrol.com/static-mcnews/2024/06/20240613113725_DOs-DON%E2%80%99Ts-WHILE-FILING-ITR-TT.jpg",
                                },
                            ].map((article, index) => (
                                <div key={index} className="rounded-lg overflow-hidden shadow-md">
                                    <img
                                        src={article.img || "https://imgeng.jagran.com/images/2023/jun/incometaxreturn1685697142894.jpg"}
                                        alt={article.title}
                                        width={400}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                                        <p className="text-gray-600 mb-4">{article.excerpt}</p>
                                        <Link to="" className="text-teal-600 font-medium flex items-center hover:text-teal-700">
                                            Read More <ChevronRight className="h-4 w-4 ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">TaxBuddy</h3>
                            <p className="text-gray-400 mb-4">Making tax filing simple, accurate, and affordable for everyone.</p>
                            <div className="flex space-x-4">
                                <Link to="" className="text-gray-400 hover:text-white">
                                    <span className="sr-only">Facebook</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                                <Link to="" className="text-gray-400 hover:text-white">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                    </svg>
                                </Link>
                                <Link to="" className="text-gray-400 hover:text-white">
                                    <span className="sr-only">Instagram</span>
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Services</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Income Tax Filing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        GST Filing
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Tax Planning
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Tax Notice Assistance
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Company Registration
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Resources</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Tax Calculators
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
                                        Help Center
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Company</h3>
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
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="" className="text-gray-400 hover:text-white">
                                        Terms of Service
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>© {new Date().getFullYear()} TaxBuddy. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

