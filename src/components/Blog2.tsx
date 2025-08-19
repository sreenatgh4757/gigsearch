import React, { useState } from 'react';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  FileText, 
  Users, 
  Clock, 
  DollarSign, 
  Search, 
  Building2, 
  ExternalLink, 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Eye, 
  ThumbsUp, 
  Share2, 
  Calendar,
  User,
  Target,
  Zap,
  Award,
  BookOpen
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const Blog2: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // Dynamic metrics state
  const [pageViews, setPageViews] = useState(() => {
    const stored = localStorage.getItem('blog2-page-views');
    const baseViews = stored ? parseInt(stored) : 3847;
    const newViews = baseViews + 1;
    localStorage.setItem('blog2-page-views', newViews.toString());
    return newViews;
  });
  
  const [likes, setLikes] = useState(() => {
    const stored = localStorage.getItem('blog2-likes');
    return stored ? parseInt(stored) : 198;
  });
  
  const [hasLiked, setHasLiked] = useState(() => {
    return localStorage.getItem('blog2-has-liked') === 'true';
  });
  
  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem('blog2-likes', newLikes.toString());
      localStorage.setItem('blog2-has-liked', 'true');
    }
  };
  
  const handleShare = async () => {
    const shareData = {
      title: 'UK Businesses Face Higher Fines for Illegal Workers — How Gig Search Can Keep You Compliant',
      text: 'New UK rules mean higher fines for hiring illegal workers. Learn how Gig Search helps businesses hire legally, avoid penalties, and stay compliant.',
      url: window.location.href
    };
    
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const faqs: FAQItem[] = [
    {
      question: "What's the maximum fine now for hiring an illegal worker in the UK?",
      answer: "Up to £60,000 per worker for repeat offences."
    },
    {
      question: "Does Gig Search work in all industries?",
      answer: "Yes, from hospitality to logistics and events."
    },
    {
      question: "How does Gig Search verify workers?",
      answer: "Through official right-to-work checks using Home Office systems."
    },
    {
      question: "Can small businesses use it?",
      answer: "Absolutely, it's built for companies of all sizes."
    },
    {
      question: "Is Gig Search for short-term work only?",
      answer: "No, it works for both shift-based and longer-term hires."
    },
    {
      question: "Do I still need to keep records?",
      answer: "Yes, but Gig Search stores them automatically for you."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-red-400 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-red-400 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-red-500 px-3 py-1 rounded-full text-white text-sm font-semibold flex items-center space-x-2">
                  <Shield className="h-4 w-4" />
                  <span>Legal Compliance</span>
                </div>
                <span className="text-gray-300 text-sm">12 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                UK Businesses Face Higher Fines for 
                <span className="text-red-400 block">
                  Illegal Workers
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                New UK rules mean higher fines for hiring illegal workers. Learn how Gig Search helps businesses hire legally, avoid penalties, and stay compliant.
              </p>
              
              <div className="bg-orange-400 text-black p-6 rounded-2xl shadow-lg" style={{backgroundColor: '#F6A961'}}>
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="h-6 w-6" />
                  <h3 className="text-lg font-bold">Hire with Confidence</h3>
                </div>
                <p className="mb-4">Find fully verified, right-to-work-checked staff in minutes.</p>
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2">
                  <span>Get Started with Gig Search</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="UK business owner reviewing hiring documents"
                  className="w-80 h-80 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-medium">Stay Legal. Stay Stress-Free. Hire Verified Workers Instantly.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Introduction */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The New Reality for UK Employers</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              From January 2024, the UK government increased fines for employing illegal workers by 200% — putting more pressure on businesses to get hiring right. According to the UK Home Office, these changes aim to tackle illegal migration but have left many employers worried about accidental compliance breaches.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you run a restaurant, retail store, warehouse, or event business, even one mistake could cost you up to £60,000 per worker — plus lasting damage to your reputation. This is why tools like Gig Search are becoming essential for UK businesses.
            </p>
          </div>
        </section>

        {/* New UK Hiring Rules */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The New UK Hiring Rules: What You Need to Know</h2>
          
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-semibold text-blue-900 mb-6 flex items-center">
              <FileText className="h-6 w-6 mr-3" />
              Right-to-Work Checks Are Now Mandatory for All Employees
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">British & Irish Citizens</h4>
                <p className="text-gray-700 text-sm">Must provide a valid passport or birth certificate, checked manually or digitally.</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Foreign Nationals</h4>
                <p className="text-gray-700 text-sm">Must share a Home Office "Share Code" for online verification.</p>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-yellow-800">Record Keeping Requirement</p>
                  <p className="text-sm text-yellow-700">Employers must store evidence of these checks for at least two years after employment ends.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-blue-700">
              📄 Source: UK Government Right to Work Guidance
            </div>
          </div>

          {/* Cost Table */}
          <div className="bg-red-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-red-900 mb-6 flex items-center">
              <DollarSign className="h-6 w-6 mr-3" />
              The Cost of Getting It Wrong
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Offence Type</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Old Fine</th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">New Fine (Jan 2024)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">First Offence</td>
                    <td className="px-6 py-4 text-center text-gray-600">£15,000</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">£45,000</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Repeat Offence</td>
                    <td className="px-6 py-4 text-center text-gray-600">£20,000</td>
                    <td className="px-6 py-4 text-center">
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">£60,000</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-6 p-4 bg-red-100 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-red-800">Critical Warning</p>
                  <p className="text-sm text-red-700">These penalties apply per illegal worker — so two accidental hires could cost £120,000.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-sm text-red-700">
              📄 Source: Home Office Press Release
            </div>
          </div>
        </section>

        {/* Why Businesses Are Struggling */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Many Businesses Are Struggling</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gray-500 p-2 rounded-lg">
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Complex Legal Checks</h4>
              </div>
              <p className="text-gray-600 text-sm">Legal requirements that change frequently and are difficult to navigate.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Hiring Pressure</h4>
              </div>
              <p className="text-gray-600 text-sm">Need to hire quickly in high-turnover sectors like hospitality and retail.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Limited HR Resources</h4>
              </div>
              <p className="text-gray-600 text-sm">Small HR teams without dedicated compliance specialists.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-red-500 p-2 rounded-lg">
                  <AlertTriangle className="h-5 w-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">Paperwork Errors</h4>
              </div>
              <p className="text-gray-600 text-sm">Risk of mistakes even with honest intentions and good faith efforts.</p>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 rounded-xl p-6">
            <h4 className="font-semibold text-blue-900 mb-4">📰 Related News Coverage:</h4>
            <div className="space-y-2">
              <a href="#" className="flex items-center space-x-2 text-blue-700 hover:text-blue-900 transition-colors">
                <ExternalLink className="h-4 w-4" />
                <span>BBC News: Illegal working fines tripled in UK</span>
              </a>
              <a href="#" className="flex items-center space-x-2 text-blue-700 hover:text-blue-900 transition-colors">
                <ExternalLink className="h-4 w-4" />
                <span>The Guardian: Employers warned over tougher illegal working penalties</span>
              </a>
            </div>
          </div>
        </section>

        {/* How Gig Search Solves the Problem */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How Gig Search Solves the Compliance Problem</h2>
          
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Gig Search is a UK-based staffing platform that connects businesses with fully verified, right-to-work-cleared workers — removing the guesswork from hiring.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Features:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-400 p-2 rounded-full flex-shrink-0" style={{backgroundColor: '#F6A961'}}>
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Pre-Verified Worker Profiles</h4>
                  <p className="text-gray-600 text-sm">Every worker is vetted before they can take jobs.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-400 p-2 rounded-full flex-shrink-0" style={{backgroundColor: '#F6A961'}}>
                  <FileText className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Digital Audit Trail</h4>
                  <p className="text-gray-600 text-sm">Compliance documents stored automatically.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-400 p-2 rounded-full flex-shrink-0" style={{backgroundColor: '#F6A961'}}>
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Fast Matching</h4>
                  <p className="text-gray-600 text-sm">Fill urgent roles in hours, not days.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-400 p-2 rounded-full flex-shrink-0" style={{backgroundColor: '#F6A961'}}>
                  <Search className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Search Filters</h4>
                  <p className="text-gray-600 text-sm">Hire by skill, availability, and verified status.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Example Case Study */}
          <div className="bg-green-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-green-900 mb-6">Example: Restaurant Compliance Made Easy</h3>
            
            <p className="text-green-800 mb-6">
              A London café needs two extra baristas for the weekend. Instead of risking non-compliant hires through social media ads, the owner:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <span className="text-green-800">Opens Gig Search</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <span className="text-green-800">Filters for Right-to-Work Verified workers</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <span className="text-green-800">Books both shifts in under 15 minutes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <span className="text-green-800">Gets digital records saved for their compliance file</span>
              </div>
            </div>
            
            <div className="bg-green-100 rounded-lg p-4">
              <p className="text-green-800 font-semibold">Result: No stress, no risk, no legal headaches.</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Comparison: Gig Search vs. Other Hiring Methods</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Method</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Compliance Risk</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Hiring Speed</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Verification Included</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Traditional Job Ads</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">High</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Slow</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-red-600">❌ No</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">Recruitment Agencies</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Medium</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Medium</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-yellow-600">⚠ Sometimes</span>
                  </td>
                </tr>
                <tr className="bg-green-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Gig Search</td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Low</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Fast</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="text-green-600">✅ Yes</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Benefits for UK Employers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
                <h4 className="font-semibold text-gray-900">Avoid Heavy Fines</h4>
              </div>
              <p className="text-gray-600">Workers are pre-cleared through official verification processes.</p>
            </div>
            
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-6 w-6 text-green-600" />
                <h4 className="font-semibold text-gray-900">Save Time</h4>
              </div>
              <p className="text-gray-600">No chasing documents or waiting for verification responses.</p>
            </div>
            
            <div className="bg-purple-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <FileText className="h-6 w-6 text-purple-600" />
                <h4 className="font-semibold text-gray-900">Stay Audit-Ready</h4>
              </div>
              <p className="text-gray-600">Digital compliance logs stored automatically for inspections.</p>
            </div>
            
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="h-6 w-6 text-orange-600" />
                <h4 className="font-semibold text-gray-900">Hire on Demand</h4>
              </div>
              <p className="text-gray-600">Fill shifts at short notice with verified, available workers.</p>
            </div>
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Practical Compliance Tips</h2>
          
          <div className="bg-yellow-50 rounded-2xl p-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-500 text-white p-1 rounded-full mt-1">
                  <span className="text-xs">1</span>
                </div>
                <span className="text-yellow-800">Always run right-to-work checks before start date.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-500 text-white p-1 rounded-full mt-1">
                  <span className="text-xs">2</span>
                </div>
                <span className="text-yellow-800">Keep digital copies of all verification documents.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-500 text-white p-1 rounded-full mt-1">
                  <span className="text-xs">3</span>
                </div>
                <span className="text-yellow-800">Stay updated with the Home Office Employer Guidance.</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-500 text-white p-1 rounded-full mt-1">
                  <span className="text-xs">4</span>
                </div>
                <span className="text-yellow-800">Use tech like Gig Search to streamline and secure hiring.</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-4 border-t border-gray-100">
                    <p className="text-gray-700 pt-4 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-black text-white rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6">Conclusion: Compliance Without Compromise</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              The UK's updated hiring rules have raised the stakes for employers. One wrong hire can drain your finances and damage your brand.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              By using Gig Search, you're not just filling roles — you're protecting your business from unnecessary legal and financial risks. With verified workers, digital records, and instant hiring, it's the easiest way to stay compliant in today's strict regulatory climate.
            </p>
            
            <div className="bg-orange-400 text-black p-6 rounded-xl" style={{backgroundColor: '#F6A961'}}>
              <h3 className="text-xl font-bold mb-3">Ready to Hire Compliantly?</h3>
              <p className="mb-4">Join thousands of UK businesses using Gig Search for verified, compliant hiring.</p>
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2">
                <span>Start Hiring Today</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Article Meta */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4" />
                <span>{pageViews.toLocaleString()} views</span>
              </div>
              <button 
                onClick={handleLike}
                className={`flex items-center space-x-2 transition-colors ${
                  hasLiked ? 'text-red-500' : 'hover:text-red-500'
                }`}
                disabled={hasLiked}
              >
                <ThumbsUp className="h-4 w-4" />
                <span>{likes} likes</span>
              </button>
              <button 
                onClick={handleShare}
                className="flex items-center space-x-2 hover:text-blue-500 transition-colors"
              >
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            </div>
            <div className="text-gray-400">
              Published: January 12, 2025 • Updated: January 12, 2025
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Blog2;