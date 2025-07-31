import React from 'react';
import { BookOpen, Video, MessageCircle, Star, TrendingUp, Users, Zap, Target } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: 'AI Book Recommendations',
      description: 'Our advanced AI analyzes thousands of books to recommend the most effective study materials for your specific exam type, learning style, and current knowledge level.',
      features: [
        'Personalized recommendations based on your goals',
        'Analysis of book reviews and success rates',
        'Difficulty level matching',
        'Updated recommendations as you progress'
      ]
    },
    {
      icon: <Video className="h-12 w-12 text-purple-600" />,
      title: 'Curated Video Content',
      description: 'Access a carefully selected collection of video tutorials, lectures, and educational content from top instructors and platforms worldwide.',
      features: [
        'Quality-filtered video content',
        'Topic-specific recommendations',
        'Progress tracking and bookmarks',
        'Multi-platform integration'
      ]
    },
    {
      icon: <MessageCircle className="h-12 w-12 text-indigo-600" />,
      title: 'Interactive AI Chat',
      description: 'Chat with our intelligent assistant for instant study guidance, motivation, and personalized advice tailored to your preparation journey.',
      features: [
        '24/7 availability for study support',
        'Personalized study schedules',
        'Motivational coaching',
        'Subject-specific guidance'
      ]
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Tell Us Your Goals',
      description: 'Share information about your target exam, current level, and learning preferences.',
      icon: <Target className="h-8 w-8 text-blue-600" />
    },
    {
      step: '2',
      title: 'AI Analysis',
      description: 'Our AI algorithms analyze your profile and match you with the most suitable resources.',
      icon: <Zap className="h-8 w-8 text-purple-600" />
    },
    {
      step: '3',
      title: 'Get Recommendations',
      description: 'Receive personalized book and video recommendations tailored to your needs.',
      icon: <Star className="h-8 w-8 text-indigo-600" />
    },
    {
      step: '4',
      title: 'Track Progress',
      description: 'Monitor your progress and get updated recommendations as you advance.',
      icon: <TrendingUp className="h-8 w-8 text-green-600" />
    }
  ];

  const stats = [
    { number: '95%', label: 'Accuracy Rate', description: 'in recommendations' },
    { number: '50K+', label: 'Resources', description: 'in our database' },
    { number: '24/7', label: 'AI Support', description: 'always available' },
    { number: '200+', label: 'Exam Types', description: 'supported' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-800/50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-white">Our</span>
              <span className="text-orange-500">
                {' '}AI-Powered Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our cutting-edge AI technology transforms the way you prepare for exams, 
              making your study journey more efficient and effective.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:transform hover:scale-105"
              >
                <div className="mb-6 text-white">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-400">
                      <Star className="h-4 w-4 text-orange-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How ExamMate Works
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI-powered platform makes finding the right study materials simple and effective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gray-700 rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 border border-gray-600">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-orange-500 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Thousands
            </h2>
            <p className="text-xl text-orange-100">
              Our AI technology delivers results that students love
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-orange-100 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI Technology
              </h2>
              <p className="text-lg text-blue-100 mb-6">
                Our recommendation engine uses machine learning algorithms trained on millions 
                of student success patterns, book reviews, and learning outcomes to provide 
                the most accurate suggestions possible.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-blue-200">
                  <Star className="h-5 w-5 text-orange-500 mr-3" />
                  Natural Language Processing for content analysis
                </li>
                <li className="flex items-center text-blue-200">
                  <Star className="h-5 w-5 text-orange-500 mr-3" />
                  Collaborative filtering for personalized recommendations
                </li>
                <li className="flex items-center text-blue-200">
                  <Star className="h-5 w-5 text-orange-500 mr-3" />
                  Deep learning models for pattern recognition
                </li>
                <li className="flex items-center text-blue-200">
                  <Star className="h-5 w-5 text-orange-500 mr-3" />
                  Real-time adaptation based on user feedback
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-700 p-6 rounded-xl shadow-md text-center border border-gray-600">
                  <Users className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">50K+</div>
                  <div className="text-gray-300">Active Users</div>
                </div>
                <div className="bg-gray-700 p-6 rounded-xl shadow-md text-center border border-gray-600">
                  <BookOpen className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">10K+</div>
                  <div className="text-gray-300">Books Analyzed</div>
                </div>
                <div className="bg-gray-700 p-6 rounded-xl shadow-md text-center border border-gray-600">
                  <Video className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">5K+</div>
                  <div className="text-gray-300">Video Resources</div>
                </div>
                <div className="bg-gray-700 p-6 rounded-xl shadow-md text-center border border-gray-600">
                  <TrendingUp className="h-8 w-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white">95%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;