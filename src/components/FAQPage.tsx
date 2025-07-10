import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Users, 
  Building2, 
  MessageCircle, 
  Phone, 
  Mail,
  ArrowRight,
  CheckCircle,
  HelpCircle
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const employerFAQs: FAQItem[] = [
  {
    question: "Can I manage multiple sites or venues under one account?",
    answer: "Yes, you can manage several locations from one dashboard with shift visibility and reporting per site. Our multi-location management system allows you to organize shifts by venue, track performance across different sites, and maintain separate reporting for each location while managing everything from a single account."
  },
  {
    question: "Do I need to download the app, or can I use it via desktop?",
    answer: "You can use both—our platform works seamlessly on desktop and mobile. Access your employer dashboard through any web browser on your computer, or download our mobile app for on-the-go management. All features are synchronized across devices, so you can post shifts from your desktop and approve workers from your phone."
  },
  {
    question: "How quickly can I expect workers to respond to posted shifts?",
    answer: "Many jobs receive applications within minutes, especially during peak hours. Our notification system alerts qualified workers immediately when you post a shift that matches their skills and availability. Response times are typically fastest during evenings and weekends when students are most active on the platform."
  },
  {
    question: "Can I rehire the same workers?",
    answer: "Yes, you can mark workers as preferred and easily rebook them. Our system allows you to build a roster of trusted workers by marking them as favorites. You can then send direct invitations to preferred workers for new shifts, ensuring consistency and reliability in your staffing."
  },
  {
    question: "Are there reports or performance dashboards?",
    answer: "Premium users can access detailed analytics on shifts, ratings, and attendance. Our comprehensive reporting includes worker performance metrics, shift completion rates, cost analysis, and attendance tracking. You can export reports for payroll and business analysis purposes."
  },
  {
    question: "Can I customise job requirements per shift?",
    answer: "Absolutely. You can define role-specific needs like experience, dress code, and more. Each shift posting allows you to specify required skills, experience level, dress code, equipment needed, and any special requirements. This ensures you get workers who are properly prepared for the specific role."
  },
  {
    question: "What happens if no one applies?",
    answer: "Our team will assist in boosting visibility or suggest schedule adjustments. If a shift doesn't receive applications within a reasonable time, our support team will review the posting and suggest improvements such as adjusting the pay rate, timing, or requirements to attract more applicants."
  },
  {
    question: "Can I add a company video or training instructions to job posts?",
    answer: "Yes, video upload and training links are available on premium plans. You can upload orientation videos, training materials, and detailed instructions to help workers prepare for their shifts. This reduces onboarding time and ensures workers arrive ready to contribute effectively."
  }
];

const workerFAQs: FAQItem[] = [
  {
    question: "Do I need to be a UK resident or citizen?",
    answer: "You need valid right-to-work documentation. International students are welcome. We accept various forms of work authorization including student visas, work permits, and settled status. You'll need to upload your documentation during the registration process for verification."
  },
  {
    question: "How do I know I've been accepted for a shift?",
    answer: "You'll get a confirmation via app and email, and it'll appear in your dashboard. Once an employer accepts your application, you'll receive instant notifications through multiple channels. The shift will also be added to your personal calendar with all relevant details including location, timing, and contact information."
  },
  {
    question: "What if I'm late or can't attend a shift?",
    answer: "Notify us ASAP via the app. Repeated no-shows may affect your profile. Life happens, and we understand that emergencies occur. Use the app's quick notification feature to alert both the employer and our team. While occasional issues are understandable, consistent reliability is important for maintaining a good rating."
  },
  {
    question: "Will I see who I'm working for before going?",
    answer: "Yes, once accepted, you'll receive full employer details, location, and instructions. You'll get comprehensive information including the business name, exact address with directions, contact person details, dress code requirements, and specific instructions for your role before your shift begins."
  },
  {
    question: "How do I get paid?",
    answer: "Payments are processed twice weekly. Weekly pay is available after 12 weeks. We process payments every Tuesday and Friday for completed shifts. New workers receive payments twice weekly for the first 12 weeks, after which you can opt for weekly payments. All payments are made via bank transfer with detailed pay slips."
  },
  {
    question: "Is there a referral program?",
    answer: "Yes! Share your referral code to earn rewards when friends join and work. Earn £10 for each friend who signs up using your code and completes their first shift. There's no limit to how many people you can refer, and you'll receive your referral bonus with your next payment after they complete their first shift."
  },
  {
    question: "Do I need previous experience?",
    answer: "Not always. Many roles require only basic skills like reliability and communication. While some specialized positions may require experience, many of our shifts are entry-level and perfect for students. We focus on matching your existing skills and interests with appropriate opportunities, and many employers provide on-the-job training."
  },
  {
    question: "Can I work around my class schedule?",
    answer: "Absolutely. You choose shifts based on your own availability. Our platform is designed specifically for students. Set your availability in the app, and we'll only show you shifts that fit your schedule. You can update your availability anytime to accommodate changing class schedules, exams, or personal commitments."
  }
];

const FAQAccordion: React.FC<{ faqs: FAQItem[] }> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-inset"
            style={{ '--tw-ring-color': '#F6A961' } as React.CSSProperties}
          >
            <h3 className="text-lg font-semibold text-gray-900 pr-4 leading-relaxed">
              {faq.question}
            </h3>
            <div className="flex-shrink-0">
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-orange-400" style={{ color: '#F6A961' }} />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-400" />
              )}
            </div>
          </button>
          
          {openIndex === index && (
            <div className="px-6 pb-5">
              <div className="pt-2 border-t border-gray-100">
                <p className="text-gray-700 leading-relaxed text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const FAQPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'employers' | 'workers'>('workers');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-black to-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-orange-400 p-3 rounded-full mr-4" style={{ backgroundColor: '#F6A961' }}>
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about The Gig Search platform
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-2 flex">
          <button
            onClick={() => setActiveTab('workers')}
            className={`flex-1 flex items-center justify-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'workers'
                ? 'bg-orange-400 text-black shadow-md transform scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            style={activeTab === 'workers' ? { backgroundColor: '#F6A961' } : {}}
          >
            <Users className="h-5 w-5 mr-2" />
            For Workers
          </button>
          <button
            onClick={() => setActiveTab('employers')}
            className={`flex-1 flex items-center justify-center px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === 'employers'
                ? 'bg-orange-400 text-black shadow-md transform scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
            style={activeTab === 'employers' ? { backgroundColor: '#F6A961' } : {}}
          >
            <Building2 className="h-5 w-5 mr-2" />
            For Employers
          </button>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {activeTab === 'workers' ? 'Worker Questions' : 'Employer Questions'}
          </h2>
          <p className="text-gray-600">
            {activeTab === 'workers' 
              ? 'Everything you need to know about finding and working gigs'
              : 'Learn how to effectively hire and manage temporary workers'
            }
          </p>
        </div>

        <FAQAccordion faqs={activeTab === 'workers' ? workerFAQs : employerFAQs} />
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our support team is here to help you get the most out of The Gig Search platform
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <MessageCircle className="h-8 w-8 text-orange-400 mx-auto mb-3" style={{ color: '#F6A961' }} />
              <h4 className="font-semibold mb-2">Live Chat</h4>
              <p className="text-sm text-gray-300 mb-4">Get instant help from our support team</p>
              <button className="text-orange-400 font-medium hover:text-orange-300 transition-colors" style={{ color: '#F6A961' }}>
                Start Chat <ArrowRight className="inline h-4 w-4 ml-1" />
              </button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Mail className="h-8 w-8 text-orange-400 mx-auto mb-3" style={{ color: '#F6A961' }} />
              <h4 className="font-semibold mb-2">Email Support</h4>
              <p className="text-sm text-gray-300 mb-4">Send us a detailed message</p>
              <a 
                href="mailto:hello@thegigsearch.com" 
                className="text-orange-400 font-medium hover:text-orange-300 transition-colors"
                style={{ color: '#F6A961' }}
              >
                Send Email <ArrowRight className="inline h-4 w-4 ml-1" />
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <Phone className="h-8 w-8 text-orange-400 mx-auto mb-3" style={{ color: '#F6A961' }} />
              <h4 className="font-semibold mb-2">Phone Support</h4>
              <p className="text-sm text-gray-300 mb-4">Speak directly with our team</p>
              <a 
                href="tel:+1234567890" 
                className="text-orange-400 font-medium hover:text-orange-300 transition-colors"
                style={{ color: '#F6A961' }}
              >
                Call Now <ArrowRight className="inline h-4 w-4 ml-1" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-orange-300 transform hover:scale-105 transition-all duration-200 shadow-lg" style={{ backgroundColor: '#F6A961' }}>
              Get Started Today
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;