import React, { useState } from 'react';
import { 
  Clock, 
  DollarSign, 
  Zap, 
  BookOpen, 
  CheckCircle, 
  AlertTriangle,
  Star,
  TrendingUp,
  Users,
  Calendar,
  Target,
  ArrowRight,
  ExternalLink,
  Coffee,
  Laptop,
  GraduationCap,
  Briefcase,
  FileText,
  MessageCircle,
  Award,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Search,
  Filter,
  Eye,
  ThumbsUp,
  Share2
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const BlogPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  // Dynamic metrics state
  const [pageViews, setPageViews] = useState(() => {
    const stored = localStorage.getItem('blog-page-views');
    const baseViews = stored ? parseInt(stored) : 1247;
    const newViews = baseViews + 1;
    localStorage.setItem('blog-page-views', newViews.toString());
    return newViews;
  });
  
  const [likes, setLikes] = useState(() => {
    const stored = localStorage.getItem('blog-likes');
    return stored ? parseInt(stored) : 89;
  });
  
  const [hasLiked, setHasLiked] = useState(() => {
    return localStorage.getItem('blog-has-liked') === 'true';
  });
  
  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem('blog-likes', newLikes.toString());
      localStorage.setItem('blog-has-liked', 'true');
    }
  };
  
  const handleShare = async () => {
    const shareData = {
      title: 'Indeed vs Gig Search: Why Students Choose Flexible Work',
      text: 'Discover why gig search platforms offer more flexibility, higher pay, and better work-life balance than Indeed and other part-time job websites for students.',
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
      question: "How do gig search platforms differ from job boards?",
      answer: "Gig platforms offer quick, short-term work without long interviews, while job boards have a slower hiring process with multiple screening stages."
    },
    {
      question: "Are gig jobs stable enough for students?",
      answer: "They may be less stable than fixed jobs, but flexibility is a big plus for students who need to work around their class schedules."
    },
    {
      question: "Can gig work help my career?",
      answer: "Yes, especially if the gigs match your field of study. You can build a portfolio and gain real-world experience."
    },
    {
      question: "How soon can I earn from gig work?",
      answer: "Often within 24–48 hours of signing up and completing your first gig."
    },
    {
      question: "Are there risks?",
      answer: "Yes — inconsistent income and no benefits, so budgeting is key. However, the flexibility often outweighs these concerns for students."
    },
    {
      question: "Can I combine both methods?",
      answer: "Absolutely — many students use a mix of gig work and part-time jobs to maximize their earning potential."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags would be handled by a head component in a real app */}
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 border border-orange-400 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-orange-400 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-white rounded-full"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-orange-400 px-3 py-1 rounded-full text-black text-sm font-semibold" style={{backgroundColor: '#F6A961'}}>
                  Student Guide
                </div>
                <span className="text-gray-300 text-sm">5 min read</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
                Indeed vs Gig Search: Why Students Choose 
                <span className="text-orange-400 block" style={{color: '#F6A961'}}>
                  Flexible Work
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Discover why gig search platforms offer more flexibility, higher pay, and better work-life balance than Indeed and other part-time job websites for students.
              </p>
              
              <div className="bg-orange-400 text-black p-6 rounded-2xl shadow-lg" style={{backgroundColor: '#F6A961'}}>
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="h-6 w-6" />
                  <h3 className="text-lg font-bold">Start Your Gig Journey Now!</h3>
                </div>
                <p className="mb-4">Browse top gig platforms and start earning within days.</p>
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2">
                  <span>Explore Gig Jobs</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-2xl" style={{background: 'linear-gradient(135deg, #F6A961, #F59E0B)'}}>
                  <div className="text-center text-black">
                    <Coffee className="h-16 w-16 mx-auto mb-4" />
                    <Laptop className="h-12 w-12 mx-auto mb-4 opacity-80" />
                    <BookOpen className="h-10 w-10 mx-auto opacity-60" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white text-black p-3 rounded-full shadow-lg">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-black text-white p-3 rounded-full shadow-lg">
                  <Briefcase className="h-6 w-6" />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Student Work Dilemma</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-6">
              Balancing studies and earning money is a common challenge for university students. Many turn to Indeed and other part-time job websites to find opportunities. While these platforms offer many listings, they often require lengthy application processes and fixed schedules — not ideal for students with busy timetables.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Gig search platforms like Fiverr, Upwork, and TaskRabbit, however, are revolutionizing student work by offering flexible, fast-paying jobs. This guide compares the two approaches and explains why gig work might be the smarter choice for university life.
            </p>
          </div>
        </section>

        {/* Understanding Job Websites */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Understanding Indeed and Other Part-Time Job Websites</h2>
          
          {/* Process Flow */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">How Job Boards Work</h3>
            <div className="flex flex-wrap justify-center items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <FileText className="h-4 w-4 text-blue-500" />
                <span>Job Posting</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Search className="h-4 w-4 text-green-500" />
                <span>Application</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Filter className="h-4 w-4 text-orange-500" />
                <span>Screening</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <MessageCircle className="h-4 w-4 text-purple-500" />
                <span>Interview</span>
              </div>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <Award className="h-4 w-4 text-yellow-500" />
                <span>Offer</span>
              </div>
            </div>
          </div>

          {/* Popular Platforms */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Indeed</h4>
              <p className="text-gray-600 text-sm">Global job search engine with millions of postings.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">LinkedIn Jobs</h4>
              <p className="text-gray-600 text-sm">Combines networking with job searching.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">Glassdoor</h4>
              <p className="text-gray-600 text-sm">Offers salaries and employee reviews.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2">ZipRecruiter</h4>
              <p className="text-gray-600 text-sm">AI-driven job matching.</p>
            </div>
          </div>

          {/* Pros and Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Pros of Using Job Websites
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-green-700">Wide variety of industries and positions</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-green-700">Trusted employers with verified listings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-green-700">Built-in tracking for applications</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="flex items-start space-x-2">
                  <div className="bg-blue-500 text-white p-1 rounded-full">
                    <span className="text-xs font-bold">💡</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-800">Quick Tip:</p>
                    <p className="text-sm text-blue-700">Use filters on Indeed to find "part-time" or "flexible hours" jobs faster.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                Cons of Using Job Websites
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-red-700">High competition from other job seekers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-red-700">Slow hiring process — sometimes weeks before hearing back</span>
                </li>
                <li className="flex items-start space-x-2">
                  <AlertTriangle className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-red-700">Fixed schedules that may clash with classes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Gig Economy Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Rise of the Gig Economy</h2>
          
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-orange-400 p-3 rounded-full" style={{backgroundColor: '#F6A961'}}>
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Growing Trend</h3>
                <p className="text-gray-600">Young workers are increasingly drawn to gig work</p>
              </div>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              The gig economy is a growing work trend where short-term, flexible jobs replace traditional employment. According to Pew Research, young workers are increasingly drawn to gigs because they can start quickly and work on their own terms.
            </p>
            
            <h4 className="font-semibold text-gray-900 mb-4">Common Student-Friendly Gigs:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Briefcase className="h-4 w-4 text-red-600" />
                </div>
                <span className="text-gray-700">Food delivery (Uber Eats, DoorDash)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Users className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">Pet care (Rover)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Target className="h-4 w-4 text-blue-600" />
                </div>
                <span className="text-gray-700">Task help (TaskRabbit)</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <FileText className="h-4 w-4 text-purple-600" />
                </div>
                <span className="text-gray-700">Freelance design, writing, tutoring</span>
              </div>
            </div>
          </div>

          {/* Why Gig Search is Better */}
          <div className="bg-white border-2 border-orange-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Gig Search Can Be Better for University Students</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-400 p-2 rounded-full flex-shrink-0" style={{backgroundColor: '#F6A961'}}>
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Flexibility</h4>
                  <p className="text-gray-600">Work around your class schedule</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-400 p-2 rounded-full flex-shrink-0" style={{backgroundColor: '#F6A961'}}>
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Quick Income</h4>
                  <p className="text-gray-600">Start earning within days</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-400 p-2 rounded-full flex-shrink-0" style={{backgroundColor: '#F6A961'}}>
                  <BookOpen className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Skill Development</h4>
                  <p className="text-gray-600">Build a portfolio for future employers</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-400 p-2 rounded-full flex-shrink-0" style={{backgroundColor: '#F6A961'}}>
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Higher Earning Potential</h4>
                  <p className="text-gray-600">Skilled gigs often pay more than hourly jobs</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Quick Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Indeed & Job Boards</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Gig Search Platforms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">Flexibility</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Low–Medium</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">High</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">Time to First Payment</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Weeks</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">1–2 days</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">Skill Development</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Limited to role</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Broad, portfolio-based</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 flex items-center space-x-2">
                    <DollarSign className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">Earnings Potential</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Fixed wage</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Variable, often higher</span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="font-medium text-gray-900">Application Process</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Long</span>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Quick profile setup</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips Sections */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Job Website Tips */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Tips for Using Job Websites Effectively</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-500 text-white p-1 rounded-full mt-1">
                    <span className="text-xs">1</span>
                  </div>
                  <span className="text-blue-800">Write a student-focused resume — highlight coursework and volunteer experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-500 text-white p-1 rounded-full mt-1">
                    <span className="text-xs">2</span>
                  </div>
                  <span className="text-blue-800">Tailor your applications to match job descriptions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-500 text-white p-1 rounded-full mt-1">
                    <span className="text-xs">3</span>
                  </div>
                  <span className="text-blue-800">Follow up politely about applications after one week</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2 mb-2">
                  <FileText className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-blue-900">Mini-CTA:</span>
                </div>
                <p className="text-sm text-blue-800 mb-2">Need help creating a standout resume?</p>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center space-x-1">
                  <span>Read: 5 Resume Tips for College Students</span>
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>

            {/* Gig Platform Tips */}
            <div className="bg-orange-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-orange-900 mb-6">Tips for Succeeding on Gig Platforms</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-white p-1 rounded-full mt-1">
                    <span className="text-xs">1</span>
                  </div>
                  <span className="text-orange-800">Start with skills you already have — writing, tutoring, delivery</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-white p-1 rounded-full mt-1">
                    <span className="text-xs">2</span>
                  </div>
                  <span className="text-orange-800">Set competitive rates — research market averages</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-orange-500 text-white p-1 rounded-full mt-1">
                    <span className="text-xs">3</span>
                  </div>
                  <span className="text-orange-800">Build reviews quickly by overdelivering for first clients</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-orange-200">
                <div className="flex items-start space-x-2">
                  <div className="bg-orange-500 text-white p-1 rounded-full">
                    <span className="text-xs font-bold">💡</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-orange-800">Quick Tip:</p>
                    <p className="text-sm text-orange-700">On Fiverr, use a clear profile photo and describe your services in plain, benefit-driven language.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Balancing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Balancing Gigs and Studies</h2>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Use a Digital Planner</h4>
                <p className="text-gray-600 text-sm">Block work/study times to maintain balance</p>
              </div>
              
              <div className="text-center">
                <div className="bg-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Schedule Rest Days</h4>
                <p className="text-gray-600 text-sm">One rest day each week prevents burnout</p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Exam Week Planning</h4>
                <p className="text-gray-600 text-sm">Keep exam weeks gig-light to focus on studies</p>
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
            <h2 className="text-3xl font-bold mb-6">The Bottom Line</h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              While Indeed and other part-time job websites remain valuable, gig platforms offer unmatched flexibility, faster pay, and skill-building opportunities for university students. By blending traditional job searches with gig work, students can enjoy a better work–study balance and boost their income potential.
            </p>
            
            <div className="bg-orange-400 text-black p-6 rounded-xl" style={{backgroundColor: '#F6A961'}}>
              <h3 className="text-xl font-bold mb-3">Ready to Start Your Gig Journey?</h3>
              <p className="mb-4">Join thousands of students who are already earning flexible income through gig work.</p>
              <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center space-x-2">
                <span>Get Started Today</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                <DollarSign className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                10 High-Paying Gig Jobs Perfect for College Students
              </h3>
              <p className="text-gray-600 text-sm mb-4">Discover the most lucrative gig opportunities that fit your student schedule.</p>
              <div className="flex items-center text-orange-600 text-sm font-medium">
                <span>Read More</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                How to Create a Fiverr Profile That Attracts Clients
              </h3>
              <p className="text-gray-600 text-sm mb-4">Step-by-step guide to building a compelling freelance profile.</p>
              <div className="flex items-center text-blue-600 text-sm font-medium">
                <span>Read More</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow cursor-pointer group">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Clock className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                Time Management Hacks for Busy Students
              </h3>
              <p className="text-gray-600 text-sm mb-4">Master your schedule and balance work, study, and social life.</p>
              <div className="flex items-center text-green-600 text-sm font-medium">
                <span>Read More</span>
                <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
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
              Published: January 15, 2025 • Updated: January 15, 2025
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export { BlogPage as default };