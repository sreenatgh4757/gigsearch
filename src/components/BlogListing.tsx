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
  slug: string;
}

const blogPosts: BlogPost[] = [
  // Job Search Category
  {
    id: '1',
    title: 'Indeed vs Gig Search: Why Students Choose Flexible Work',
    excerpt: 'Discover why gig search platforms offer more flexibility, higher pay, and better work-life balance than Indeed and other part-time job websites for students.',
    author: {
      name: 'Abhilash Muragi',
      avatar: '#F6A961',
      initials: 'AM'
    },
    publishedDate: '2025-01-15',
    readTime: '8 min read',
    category: 'Job Search',
    tags: ['Job Boards', 'Gig Work', 'Student Employment'],
    featuredImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2634,
    likes: 142,
    comments: 28,
    featured: true,
    slug: 'indeed-vs-gig-search'
  },
  {
    id: '2',
    title: 'How to Write a CV That Gets You Hired for Student Jobs',
    excerpt: 'Learn the essential elements of a student-focused CV that catches employers\' attention and lands you interviews for part-time and gig work opportunities.',
    author: {
      name: 'Sarah Chen',
      avatar: '#6366F1',
      initials: 'SC'
    },
    publishedDate: '2025-01-12',
    readTime: '6 min read',
    category: 'Job Search',
    tags: ['CV Writing', 'Job Applications', 'Student Tips'],
    featuredImage: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 1876,
    likes: 98,
    comments: 15,
    featured: false,
    slug: 'cv-writing-guide'
  },
  {
    id: '3',
    title: 'Top 10 Interview Questions for Student Job Seekers',
    excerpt: 'Prepare for your next job interview with these common questions asked to students and recent graduates, plus expert tips on how to answer them confidently.',
    author: {
      name: 'Mike Johnson',
      avatar: '#10B981',
      initials: 'MJ'
    },
    publishedDate: '2025-01-10',
    readTime: '7 min read',
    category: 'Job Search',
    tags: ['Interview Tips', 'Job Preparation', 'Student Advice'],
    featuredImage: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2145,
    likes: 134,
    comments: 21,
    featured: false,
    slug: 'interview-questions-guide'
  },

  // Gig Economy Category
  {
    id: '4',
    title: '10 High-Paying Gig Jobs Perfect for College Students',
    excerpt: 'Discover the most lucrative gig opportunities that fit your student schedule, from tutoring and delivery to creative services and tech support.',
    author: {
      name: 'Emma Wilson',
      avatar: '#EF4444',
      initials: 'EW'
    },
    publishedDate: '2025-01-08',
    readTime: '9 min read',
    category: 'Gig Economy',
    tags: ['High-Paying', 'Students', 'Flexible Work'],
    featuredImage: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 3456,
    likes: 201,
    comments: 34,
    featured: true,
    slug: 'high-paying-gig-jobs'
  },
  {
    id: '5',
    title: 'The Complete Guide to Food Delivery Apps for Students',
    excerpt: 'Compare earnings, requirements, and working conditions across Uber Eats, DoorDash, Deliveroo, and other food delivery platforms to maximize your income.',
    author: {
      name: 'Lucy Davis',
      avatar: '#8B5CF6',
      initials: 'LD'
    },
    publishedDate: '2025-01-05',
    readTime: '8 min read',
    category: 'Gig Economy',
    tags: ['Food Delivery', 'App Work', 'Earnings Guide'],
    featuredImage: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2789,
    likes: 156,
    comments: 27,
    featured: false,
    slug: 'food-delivery-guide'
  },
  {
    id: '6',
    title: 'TaskRabbit vs Handy: Which Platform Pays Better?',
    excerpt: 'A detailed comparison of two popular task-based gig platforms, including pay rates, job types, and which one offers better opportunities for students.',
    author: {
      name: 'Tom Miller',
      avatar: '#F59E0B',
      initials: 'TM'
    },
    publishedDate: '2025-01-03',
    readTime: '6 min read',
    category: 'Gig Economy',
    tags: ['Platform Comparison', 'Task Work', 'Earnings'],
    featuredImage: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 1923,
    likes: 89,
    comments: 18,
    featured: false,
    slug: 'taskrabbit-vs-handy'
  },

  // Freelancing Category
  {
    id: '7',
    title: 'How to Create a Fiverr Profile That Attracts Clients',
    excerpt: 'Step-by-step guide to building a compelling freelance profile on Fiverr, including portfolio tips, pricing strategies, and client communication best practices.',
    author: {
      name: 'Sophie Taylor',
      avatar: '#EC4899',
      initials: 'ST'
    },
    publishedDate: '2025-01-01',
    readTime: '10 min read',
    category: 'Freelancing',
    tags: ['Fiverr', 'Profile Optimization', 'Client Acquisition'],
    featuredImage: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2567,
    likes: 145,
    comments: 23,
    featured: true,
    slug: 'fiverr-profile-guide'
  },
  {
    id: '8',
    title: 'Upwork Success: Landing Your First Freelance Client',
    excerpt: 'Master the art of proposal writing, portfolio presentation, and client communication to secure your first paying project on Upwork as a student freelancer.',
    author: {
      name: 'Alex Garcia',
      avatar: '#06B6D4',
      initials: 'AG'
    },
    publishedDate: '2024-12-28',
    readTime: '7 min read',
    category: 'Freelancing',
    tags: ['Upwork', 'Proposals', 'First Client'],
    featuredImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 1834,
    likes: 92,
    comments: 16,
    featured: false,
    slug: 'upwork-first-client'
  },
  {
    id: '9',
    title: 'Freelance Writing for Students: Getting Started Guide',
    excerpt: 'Turn your writing skills into income with this comprehensive guide covering niches, rates, client finding, and building a sustainable freelance writing business.',
    author: {
      name: 'Maya Patel',
      avatar: '#84CC16',
      initials: 'MP'
    },
    publishedDate: '2024-12-25',
    readTime: '9 min read',
    category: 'Freelancing',
    tags: ['Writing', 'Content Creation', 'Student Business'],
    featuredImage: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2198,
    likes: 127,
    comments: 19,
    featured: false,
    slug: 'freelance-writing-guide'
  },

  // Productivity Category
  {
    id: '10',
    title: 'Time Management Hacks for Busy Students',
    excerpt: 'Master your schedule and balance work, study, and social life with proven time management techniques specifically designed for university students.',
    author: {
      name: 'Ben Clark',
      avatar: '#F97316',
      initials: 'BC'
    },
    publishedDate: '2024-12-22',
    readTime: '8 min read',
    category: 'Productivity',
    tags: ['Time Management', 'Study Tips', 'Work-Life Balance'],
    featuredImage: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 3789,
    likes: 234,
    comments: 41,
    featured: true,
    slug: 'time-management-hacks'
  },
  {
    id: '11',
    title: 'The Pomodoro Technique: A Student\'s Guide to Focus',
    excerpt: 'Learn how to implement the Pomodoro Technique effectively for studying and working, including apps, variations, and troubleshooting common problems.',
    author: {
      name: 'Rachel Green',
      avatar: '#10B981',
      initials: 'RG'
    },
    publishedDate: '2024-12-20',
    readTime: '6 min read',
    category: 'Productivity',
    tags: ['Focus Techniques', 'Study Methods', 'Productivity Apps'],
    featuredImage: 'https://images.pexels.com/photos/1181772/pexels-photo-1181772.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2456,
    likes: 156,
    comments: 28,
    featured: false,
    slug: 'pomodoro-technique-guide'
  },
  {
    id: '12',
    title: 'Digital Tools Every Student Worker Should Use',
    excerpt: 'Discover essential apps and tools for managing your studies, work, and personal life more efficiently, from calendar apps to expense trackers.',
    author: {
      name: 'David Kim',
      avatar: '#6366F1',
      initials: 'DK'
    },
    publishedDate: '2024-12-18',
    readTime: '7 min read',
    category: 'Productivity',
    tags: ['Digital Tools', 'Apps', 'Organization'],
    featuredImage: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 1967,
    likes: 103,
    comments: 22,
    featured: false,
    slug: 'digital-tools-guide'
  },

  // Personal Branding Category
  {
    id: '13',
    title: 'Building Your Personal Brand as a Student Freelancer',
    excerpt: 'Learn how to stand out in the competitive freelance marketplace by developing a strong personal brand that attracts clients and commands higher rates.',
    author: {
      name: 'Jessica Wong',
      avatar: '#EF4444',
      initials: 'JW'
    },
    publishedDate: '2024-12-15',
    readTime: '9 min read',
    category: 'Personal Branding',
    tags: ['Branding', 'Freelancing', 'Marketing'],
    featuredImage: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2134,
    likes: 118,
    comments: 25,
    featured: false,
    slug: 'personal-branding-freelancer'
  },
  {
    id: '14',
    title: 'LinkedIn Optimization for Student Job Seekers',
    excerpt: 'Transform your LinkedIn profile into a powerful job-hunting tool with optimization tips, networking strategies, and content creation advice for students.',
    author: {
      name: 'Chris Anderson',
      avatar: '#8B5CF6',
      initials: 'CA'
    },
    publishedDate: '2024-12-12',
    readTime: '8 min read',
    category: 'Personal Branding',
    tags: ['LinkedIn', 'Networking', 'Professional Profile'],
    featuredImage: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2876,
    likes: 167,
    comments: 31,
    featured: false,
    slug: 'linkedin-optimization'
  },
  {
    id: '15',
    title: 'Creating a Portfolio That Gets You Hired',
    excerpt: 'Whether you\'re a designer, writer, or developer, learn how to create a compelling portfolio that showcases your skills and attracts potential employers.',
    author: {
      name: 'Nina Rodriguez',
      avatar: '#F59E0B',
      initials: 'NR'
    },
    publishedDate: '2024-12-10',
    readTime: '10 min read',
    category: 'Personal Branding',
    tags: ['Portfolio', 'Creative Work', 'Job Applications'],
    featuredImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 1789,
    likes: 94,
    comments: 17,
    featured: false,
    slug: 'portfolio-creation-guide'
  },

  // Remote Work Category
  {
    id: '16',
    title: 'The Ultimate Guide to Remote Work for Students',
    excerpt: 'Everything you need to know about working remotely while studying, including setup tips, communication tools, and maintaining work-life balance.',
    author: {
      name: 'Oliver Smith',
      avatar: '#06B6D4',
      initials: 'OS'
    },
    publishedDate: '2024-12-08',
    readTime: '11 min read',
    category: 'Remote Work',
    tags: ['Remote Work', 'Digital Nomad', 'Online Jobs'],
    featuredImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 3245,
    likes: 189,
    comments: 36,
    featured: true,
    slug: 'remote-work-guide'
  },
  {
    id: '17',
    title: 'Setting Up Your Home Office on a Student Budget',
    excerpt: 'Create a productive workspace at home without breaking the bank. Tips for furniture, lighting, tech setup, and organization on a tight budget.',
    author: {
      name: 'Zoe Thompson',
      avatar: '#EC4899',
      initials: 'ZT'
    },
    publishedDate: '2024-12-05',
    readTime: '7 min read',
    category: 'Remote Work',
    tags: ['Home Office', 'Budget Setup', 'Workspace'],
    featuredImage: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 2567,
    likes: 143,
    comments: 29,
    featured: false,
    slug: 'home-office-setup'
  },
  {
    id: '18',
    title: 'Remote Communication Skills for Student Workers',
    excerpt: 'Master the art of virtual communication with clients and colleagues. Learn email etiquette, video call best practices, and project management tools.',
    author: {
      name: 'Ryan Lee',
      avatar: '#84CC16',
      initials: 'RL'
    },
    publishedDate: '2024-12-03',
    readTime: '6 min read',
    category: 'Remote Work',
    tags: ['Communication', 'Virtual Work', 'Professional Skills'],
    featuredImage: 'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=800',
    views: 1876,
    likes: 98,
    comments: 21,
    featured: false,
    slug: 'remote-communication-skills'
  }
];

const categories = ['All', 'Job Search', 'Gig Economy', 'Freelancing', 'Productivity', 'Personal Branding', 'Remote Work'];

interface BlogListingProps {
  onNavigateToBlogPost: (slug: string) => void;
}

const BlogListing: React.FC<BlogListingProps> = ({ onNavigateToBlogPost }) => {
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
      case 'Job Search': return <Search className="h-4 w-4" />;
      case 'Gig Economy': return <Briefcase className="h-4 w-4" />;
      case 'Freelancing': return <User className="h-4 w-4" />;
      case 'Productivity': return <Clock className="h-4 w-4" />;
      case 'Personal Branding': return <Star className="h-4 w-4" />;
      case 'Remote Work': return <Coffee className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const sharePost = async (post: BlogPost) => {
    const shareData = {
      title: post.title,
      text: post.excerpt,
      url: `${window.location.origin}/blog/${post.slug}`
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
      {/* SEO Meta Tags would be handled by a head component in a real app */}
      
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
              Your ultimate resource for gig work tips, freelancing advice, and student career guidance
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
                  aria-label="Search blog articles"
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
            {/* Category Filter Pills */}
            <section className="mb-12" aria-labelledby="category-filter-heading">
              <div className="flex items-center space-x-2 mb-6">
                <Filter className="h-5 w-5 text-gray-600" />
                <h2 id="category-filter-heading" className="text-lg font-semibold text-gray-900">Filter by Category</h2>
              </div>
              <div className="flex flex-wrap gap-3" role="tablist" aria-label="Blog post categories">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 min-h-[44px] ${
                      selectedCategory === category
                        ? 'bg-orange-400 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                    }`}
                    style={selectedCategory === category ? { backgroundColor: '#F6A961' } : {}}
                    role="tab"
                    aria-selected={selectedCategory === category}
                    aria-label={`Filter by ${category} category`}
                  >
                    {getCategoryIcon(category)}
                    <span>{category}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* Featured Posts */}
            {selectedCategory === 'All' && (
              <section className="mb-16" aria-labelledby="featured-articles-heading">
                <h2 id="featured-articles-heading" className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.filter(post => post.featured).slice(0, 2).map((post) => (
                    <article key={post.id} className="group cursor-pointer" onClick={() => onNavigateToBlogPost(post.slug)}>
                      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <header className="relative">
                          <img
                            src={post.featuredImage}
                            alt={`Featured image for ${post.title}`}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
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
                            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors min-h-[44px] min-w-[44px]"
                            aria-label={`Share article: ${post.title}`}
                          >
                            <Share2 className="h-4 w-4 text-gray-600" />
                          </button>
                        </header>
                        <div className="p-6">
                          <div className="flex items-center space-x-4 mb-4">
                            <div className="flex items-center space-x-2">
                              <div
                                className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold"
                                style={{ backgroundColor: post.author.avatar }}
                                aria-label={`Author: ${post.author.name}`}
                              >
                                {post.author.initials}
                              </div>
                              <span className="text-sm text-gray-600">{post.author.name}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <Calendar className="h-4 w-4" />
                              <time dateTime={post.publishedDate}>{formatDate(post.publishedDate)}</time>
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
              </section>
            )}

            {/* All Posts Grid */}
            <section className="mb-12" aria-labelledby="articles-heading">
              <div className="flex items-center justify-between mb-8">
                <h2 id="articles-heading" className="text-3xl font-bold text-gray-900">
                  {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
                </h2>
                <div className="text-sm text-gray-600" aria-live="polite">
                  {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
                </div>
              </div>

              {currentPosts.length === 0 ? (
                <div className="text-center py-16" role="status" aria-live="polite">
                  <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {currentPosts.map((post) => (
                    <article key={post.id} className="group cursor-pointer" onClick={() => onNavigateToBlogPost(post.slug)}>
                      <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                        <header className="relative">
                          <img
                            src={post.featuredImage}
                            alt={`Article image for ${post.title}`}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                              {getCategoryIcon(post.category)}
                              <span>{post.category}</span>
                            </span>
                          </div>
                        </header>
                        <div className="p-6">
                          <div className="flex items-center space-x-3 mb-3">
                            <div
                              className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold"
                              style={{ backgroundColor: post.author.avatar }}
                              aria-label={`Author: ${post.author.name}`}
                            >
                              {post.author.initials}
                            </div>
                            <span className="text-sm text-gray-600">{post.author.name}</span>
                            <span className="text-gray-300">•</span>
                            <time className="text-sm text-gray-500" dateTime={post.publishedDate}>
                              {formatDate(post.publishedDate)}
                            </time>
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
            </section>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="flex items-center justify-center space-x-2" aria-label="Blog pagination">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-h-[44px] min-w-[44px]"
                  aria-label="Go to previous page"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors min-h-[44px] ${
                      currentPage === page
                        ? 'bg-orange-400 text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                    style={currentPage === page ? { backgroundColor: '#F6A961' } : {}}
                    aria-label={`Go to page ${page}`}
                    aria-current={currentPage === page ? 'page' : undefined}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-h-[44px] min-w-[44px]"
                  aria-label="Go to next page"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </nav>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1" aria-label="Blog sidebar">
            <div className="sticky top-8 space-y-8">
              {/* Newsletter Signup */}
              <section className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6" aria-labelledby="newsletter-heading">
                <div className="text-center mb-6">
                  <div className="bg-orange-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#F6A961' }}>
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h3 id="newsletter-heading" className="text-xl font-bold text-gray-900 mb-2">Stay Updated</h3>
                  <p className="text-gray-600 text-sm">Get the latest gig work tips and opportunities delivered to your inbox.</p>
                </div>
                
                {isSubscribed ? (
                  <div className="text-center" role="status" aria-live="polite">
                    <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg mb-4">
                      <span className="font-medium">Thanks for subscribing! 🎉</span>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                    <input
                      id="newsletter-email"
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
                      className="w-full bg-orange-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-colors flex items-center justify-center space-x-2 min-h-[44px]"
                      style={{ backgroundColor: '#F6A961' }}
                    >
                      <Send className="h-4 w-4" />
                      <span>Subscribe</span>
                    </button>
                  </form>
                )}
              </section>

              {/* Popular Posts */}
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" aria-labelledby="popular-posts-heading">
                <h3 id="popular-posts-heading" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-orange-400" style={{ color: '#F6A961' }} />
                  Popular Posts
                </h3>
                <div className="space-y-4">
                  {blogPosts
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 5)
                    .map((post, index) => (
                      <div key={post.id} className="flex items-start space-x-3 group cursor-pointer" onClick={() => onNavigateToBlogPost(post.slug)}>
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
              </section>

              {/* Categories */}
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" aria-labelledby="categories-heading">
                <h3 id="categories-heading" className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Tag className="h-5 w-5 mr-2 text-orange-400" style={{ color: '#F6A961' }} />
                  Categories
                </h3>
                <div className="space-y-2" role="list">
                  {categories.slice(1).map((category) => {
                    const count = blogPosts.filter(post => post.category === category).length;
                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors min-h-[44px] ${
                          selectedCategory === category
                            ? 'bg-orange-50 text-orange-600 border border-orange-200'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        role="listitem"
                        aria-label={`View ${category} articles (${count} posts)`}
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
              </section>

              {/* Popular Tags */}
              <section className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100" aria-labelledby="tags-heading">
                <h3 id="tags-heading" className="text-xl font-bold text-gray-900 mb-6">Popular Tags</h3>
                <div className="flex flex-wrap gap-2" role="list">
                  {Array.from(new Set(blogPosts.flatMap(post => post.tags))).slice(0, 12).map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSearchTerm(tag)}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-orange-100 hover:text-orange-600 transition-colors min-h-[32px]"
                      role="listitem"
                      aria-label={`Search for ${tag} articles`}
                    >
                      #{tag}
                    </button>
                  ))}
                </div>
              </section>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BlogListing;