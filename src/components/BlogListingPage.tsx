import React, { useState, useEffect } from 'react';
import { 
  Search,
  Filter,
  Calendar,
  Clock,
  User,
  Tag,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Share2,
  BookOpen,
  TrendingUp,
  Users,
  DollarSign,
  Briefcase,
  GraduationCap,
  Target,
  Zap,
  Coffee,
  Mail,
  Send,
  Eye,
  Heart,
  MessageCircle,
  Star
} from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    initials: string;
  };
  publishedDate: string;
  readTime: string;
  category: string;
  tags: string[];
  featuredImage: string;
  views: number;
  likes: number;
  comments: number;
  featured: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 High-Paying Gig Jobs Perfect for College Students',
    excerpt: 'Discover the most lucrative gig opportunities that fit your student schedule.',
    content: 'Full content here...',
    author: {
      name: 'Sarah Chen',
      avatar: '#F6A961',
      initials: 'SC'
    },
    publishedDate: '2025-01-15',
    readTime: '7 min read',
    category: 'Gig Economy',
    tags: ['High-Paying', 'Students', 'Flexible Work'],
    featuredImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2847,
    likes: 156,
    comments: 23,
    featured: true
  },
  {
    id: '2',
    title: 'How to Create a Fiverr Profile That Attracts Clients',
    excerpt: 'Step-by-step guide to building a compelling freelance profile.',
    content: 'Full content here...',
    author: {
      name: 'Mike Johnson',
      avatar: '#6366F1',
      initials: 'MJ'
    },
    publishedDate: '2025-01-12',
    readTime: '5 min read',
    category: 'Freelancing',
    tags: ['Fiverr', 'Profile Optimization', 'Freelancing'],
    featuredImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 1923,
    likes: 89,
    comments: 17,
    featured: false
  },
  {
    id: '3',
    title: 'Time Management Hacks for Busy Students',
    excerpt: 'Master your schedule and balance work, study, and social life.',
    content: 'Full content here...',
    author: {
      name: 'Emma Wilson',
      avatar: '#10B981',
      initials: 'EW'
    },
    publishedDate: '2025-01-10',
    readTime: '6 min read',
    category: 'Productivity',
    tags: ['Time Management', 'Study Tips', 'Work-Life Balance'],
    featuredImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 3156,
    likes: 201,
    comments: 34,
    featured: true
  },
  {
    id: '4',
    title: 'Indeed vs Gig Search: Why Students Choose Flexible Work',
    excerpt: 'Compare traditional job boards with gig platforms and discover why flexibility wins.',
    content: 'Full content here...',
    author: {
      name: 'James Brown',
      avatar: '#EF4444',
      initials: 'JB'
    },
    publishedDate: '2025-01-08',
    readTime: '8 min read',
    category: 'Job Search',
    tags: ['Job Boards', 'Gig Work', 'Student Employment'],
    featuredImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2634,
    likes: 142,
    comments: 28,
    featured: false
  },
  {
    id: '5',
    title: 'Building Your Personal Brand as a Student Freelancer',
    excerpt: 'Learn how to stand out in the competitive freelance marketplace.',
    content: 'Full content here...',
    author: {
      name: 'Lucy Davis',
      avatar: '#8B5CF6',
      initials: 'LD'
    },
    publishedDate: '2025-01-05',
    readTime: '9 min read',
    category: 'Personal Branding',
    tags: ['Branding', 'Freelancing', 'Marketing'],
    featuredImage: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 1876,
    likes: 98,
    comments: 19,
    featured: false
  },
  {
    id: '6',
    title: 'The Ultimate Guide to Remote Work for Students',
    excerpt: 'Everything you need to know about working remotely while studying.',
    content: 'Full content here...',
    author: {
      name: 'Tom Miller',
      avatar: '#F59E0B',
      initials: 'TM'
    },
    publishedDate: '2025-01-03',
    readTime: '10 min read',
    category: 'Remote Work',
    tags: ['Remote Work', 'Digital Nomad', 'Online Jobs'],
    featuredImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2198,
    likes: 127,
    comments: 22,
    featured: true
  },
  {
    id: '7',
    title: 'Maximizing Your Earnings: Gig Work Strategies That Work',
    excerpt: 'Proven strategies to increase your income from gig work.',
    content: 'Full content here...',
    author: {
      name: 'Sophie Taylor',
      avatar: '#EC4899',
      initials: 'ST'
    },
    publishedDate: '2025-01-01',
    readTime: '7 min read',
    category: 'Income Optimization',
    tags: ['Earnings', 'Strategy', 'Gig Economy'],
    featuredImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2456,
    likes: 134,
    comments: 26,
    featured: false
  },
  {
    id: '8',
    title: 'Networking Tips for Student Entrepreneurs',
    excerpt: 'Build meaningful connections that will boost your career.',
    content: 'Full content here...',
    author: {
      name: 'Alex Garcia',
      avatar: '#06B6D4',
      initials: 'AG'
    },
    publishedDate: '2024-12-28',
    readTime: '6 min read',
    category: 'Networking',
    tags: ['Networking', 'Entrepreneurship', 'Career Development'],
    featuredImage: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 1743,
    likes: 87,
    comments: 15,
    featured: false
  }
];

const categories = ['All', 'Gig Economy', 'Freelancing', 'Productivity', 'Job Search', 'Personal Branding', 'Remote Work', 'Income Optimization', 'Networking'];

const BlogListingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const postsPerPage = 6;

  // Filter posts based on search and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Gig Economy': return <Briefcase className="h-4 w-4" />;
      case 'Freelancing': return <User className="h-4 w-4" />;
      case 'Productivity': return <Clock className="h-4 w-4" />;
      case 'Job Search': return <Search className="h-4 w-4" />;
      case 'Personal Branding': return <Star className="h-4 w-4" />;
      case 'Remote Work': return <Coffee className="h-4 w-4" />;
      case 'Income Optimization': return <DollarSign className="h-4 w-4" />;
      case 'Networking': return <Users className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const sharePost = async (post: BlogPost) => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: `${window.location.origin}/blog/${post.id}`
    };
    
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50/30">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-4 rounded-2xl mr-6 shadow-lg" style={{ background: 'linear-gradient(135deg, #F6A961, #F59E0B)' }}>
                <BookOpen className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                The Gig Search Blog
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Your ultimate resource for gig work, freelancing tips, and student career advice
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles, tips, and guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                  style={{ '--tw-ring-color': '#F6A961' } as React.CSSProperties}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Category Filter */}
            <div className="mb-12">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">Filter by Category</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                      selectedCategory === category
                        ? 'bg-orange-400 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                    style={selectedCategory === category ? { backgroundColor: '#F6A961' } : {}}
                  >
                    {getCategoryIcon(category)}
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Posts */}
            {selectedCategory === 'All' && (
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.filter(post => post.featured).slice(0, 2).map((post) => (
                    <article key={post.id} className="group cursor-pointer">
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="relative">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold" style={{ backgroundColor: '#F6A961' }}>
                              Featured
                            </span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              sharePost(post);
                            }}
                            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                          >
                            <Share2 className="h-4 w-4 text-gray-600" />
                          </button>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <div
                                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                                style={{ backgroundColor: post.author.avatar }}
                              >
                                {post.author.initials}
                              </div>
                              <span className="text-sm text-gray-600">{post.author.name}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <Calendar className="h-4 w-4" />
                              <span>{formatDate(post.publishedDate)}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-4 w-4" />
                                <span>{post.views.toLocaleString()}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-orange-600 font-medium group-hover:translate-x-1 transition-transform">
                              <span>Read More</span>
                              <ArrowRight className="h-4 w-4 ml-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* All Posts Grid */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
                </h2>
                <div className="text-sm text-gray-600">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </div>
              </div>

              {currentPosts.length === 0 ? (
                <div className="text-center py-16">
                  <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {currentPosts.map((post) => (
                    <article key={post.id} className="group cursor-pointer">
                      <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                        <div className="relative">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                              {getCategoryIcon(post.category)}
                              <span>{post.category}</span>
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                              style={{ backgroundColor: post.author.avatar }}
                            >
                              {post.author.initials}
                            </div>
                            <span className="text-sm text-gray-600">{post.author.name}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-sm text-gray-500">{formatDate(post.publishedDate)}</span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3 text-xs text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Clock className="h-3 w-3" />
                                <span>{post.readTime}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="h-3 w-3" />
                                <span>{post.views}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Heart className="h-3 w-3" />
                                <span>{post.likes}</span>
                              </div>
                            </div>
                            <div className="flex items-center text-orange-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                              <ArrowRight className="h-4 w-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-orange-400 text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    style={currentPage === page ? { backgroundColor: '#F6A961' } : {}}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Newsletter Signup */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="bg-orange-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F6A961' }}>
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-gray-600 text-sm">Get the latest gig work tips and opportunities delivered to your inbox.</p>
                </div>
                
                {isSubscribed ? (
                  <div className="text-center">
                    <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg mb-4">
                      <span className="font-medium">Thanks for subscribing! 🎉</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all"
                      style={{ '--tw-ring-color': '#F6A961' } as React.CSSProperties}
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors flex items-center justify-center space-x-2"
                      style={{ backgroundColor: '#F6A961' }}
                    >
                      <Send className="h-4 w-4" />
                      <span>Subscribe</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Popular Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-orange-400" style={{ color: '#F6A961' }} />
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {blogPosts
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 5)
                    .map((post, index) => (
                      <div key={post.id} className="flex items-start space-x-3 group cursor-pointer">
                        <div className="bg-orange-100 text-orange-600 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 text-sm group-hover:text-orange-600 transition-colors line-clamp-2">
                            {post.title}
                          </h4>
                          <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                            <Eye className="h-3 w-3" />
                            <span>{post.views.toLocaleString()} views</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-orange-400" style={{ color: '#F6A961' }} />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.slice(1).map((category) => {
                    const count = blogPosts.filter(post => post.category === category).length;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                          selectedCategory === category
                            ? 'bg-orange-50 text-orange-600 border border-orange-200'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          {getCategoryIcon(category)}
                          <span>{category}</span>
                        </div>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Popular Tags */}
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).slice(0, 12).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-orange-100 hover:text-orange-600 transition-colors"
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { BlogListingPage as default };

