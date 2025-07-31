import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Stethoscope, 
  Calculator, 
  Building, 
  Shield, 
  Briefcase, 
  Globe, 
  Cpu,
  ArrowRight,
  Star,
  Users,
  Clock,
  Target
} from 'lucide-react';

const Streams = () => {
  const [selectedStream, setSelectedStream] = useState<string | null>(null);

  const streams = [
    {
      id: 'engineering',
      title: 'Engineering',
      icon: <Cpu className="h-8 w-8" />,
      description: 'Technical and engineering competitive exams',
      gradient: 'from-blue-600 to-purple-600',
      exams: [
        { name: 'JEE Main & Advanced', difficulty: 'High', applicants: '12L+', duration: '3 hours' },
        { name: 'GATE', difficulty: 'High', applicants: '8L+', duration: '3 hours' },
        { name: 'BITSAT', difficulty: 'Medium', applicants: '2L+', duration: '3 hours' },
        { name: 'VITEEE', difficulty: 'Medium', applicants: '1.5L+', duration: '2.5 hours' },
        { name: 'COMEDK', difficulty: 'Medium', applicants: '1L+', duration: '3 hours' }
      ]
    },
    {
      id: 'medical',
      title: 'Medical',
      icon: <Stethoscope className="h-8 w-8" />,
      description: 'Medical and healthcare entrance exams',
      gradient: 'from-green-500 to-teal-600',
      exams: [
        { name: 'NEET UG', difficulty: 'High', applicants: '18L+', duration: '3 hours' },
        { name: 'NEET PG', difficulty: 'Very High', applicants: '2L+', duration: '3.5 hours' },
        { name: 'AIIMS', difficulty: 'Very High', applicants: '5L+', duration: '3.5 hours' },
        { name: 'JIPMER', difficulty: 'High', applicants: '3L+', duration: '2.5 hours' }
      ]
    },
    {
      id: 'commerce',
      title: 'Commerce & Management',
      icon: <Calculator className="h-8 w-8" />,
      description: 'Business, management and commerce exams',
      gradient: 'from-orange-500 to-red-500',
      exams: [
        { name: 'CAT', difficulty: 'High', applicants: '2.5L+', duration: '3 hours' },
        { name: 'XAT', difficulty: 'High', applicants: '1L+', duration: '3.5 hours' },
        { name: 'MAT', difficulty: 'Medium', applicants: '50K+', duration: '2.5 hours' },
        { name: 'SNAP', difficulty: 'Medium', applicants: '40K+', duration: '2 hours' },
        { name: 'CMAT', difficulty: 'Medium', applicants: '80K+', duration: '3 hours' }
      ]
    },
    {
      id: 'civil-services',
      title: 'Civil Services',
      icon: <Building className="h-8 w-8" />,
      description: 'Government and administrative service exams',
      gradient: 'from-indigo-600 to-purple-600',
      exams: [
        { name: 'UPSC CSE', difficulty: 'Very High', applicants: '10L+', duration: 'Multi-stage' },
        { name: 'State PCS', difficulty: 'High', applicants: '5L+', duration: 'Multi-stage' },
        { name: 'IAS', difficulty: 'Very High', applicants: '10L+', duration: 'Multi-stage' },
        { name: 'IPS', difficulty: 'Very High', applicants: '8L+', duration: 'Multi-stage' }
      ]
    },
    {
      id: 'defense',
      title: 'Defense',
      icon: <Shield className="h-8 w-8" />,
      description: 'Military and defense force examinations',
      gradient: 'from-red-600 to-orange-600',
      exams: [
        { name: 'NDA', difficulty: 'High', applicants: '6L+', duration: '2.5 hours' },
        { name: 'CDS', difficulty: 'High', applicants: '4L+', duration: '2 hours' },
        { name: 'AFCAT', difficulty: 'Medium', applicants: '2L+', duration: '2 hours' },
        { name: 'Indian Navy', difficulty: 'Medium', applicants: '1L+', duration: '1.5 hours' }
      ]
    },
    {
      id: 'banking',
      title: 'Banking & Finance',
      icon: <Briefcase className="h-8 w-8" />,
      description: 'Banking, finance and insurance exams',
      gradient: 'from-teal-600 to-green-600',
      exams: [
        { name: 'SBI PO', difficulty: 'High', applicants: '25L+', duration: '3 hours' },
        { name: 'IBPS PO', difficulty: 'High', applicants: '20L+', duration: '3 hours' },
        { name: 'RBI Grade B', difficulty: 'Very High', applicants: '3L+', duration: '3 hours' },
        { name: 'LIC AAO', difficulty: 'Medium', applicants: '5L+', duration: '2.5 hours' }
      ]
    },
    {
      id: 'ssc',
      title: 'SSC & Railways',
      icon: <Globe className="h-8 w-8" />,
      description: 'Staff Selection Commission and Railway exams',
      gradient: 'from-pink-600 to-purple-600',
      exams: [
        { name: 'SSC CGL', difficulty: 'Medium', applicants: '40L+', duration: '2 hours' },
        { name: 'SSC CHSL', difficulty: 'Medium', applicants: '35L+', duration: '1 hour' },
        { name: 'Railway NTPC', difficulty: 'Medium', applicants: '1.2Cr+', duration: '1.5 hours' },
        { name: 'Railway Group D', difficulty: 'Low', applicants: '1Cr+', duration: '1.5 hours' }
      ]
    },
    {
      id: 'law',
      title: 'Law',
      icon: <BookOpen className="h-8 w-8" />,
      description: 'Legal studies and law entrance exams',
      gradient: 'from-gray-700 to-gray-900',
      exams: [
        { name: 'CLAT', difficulty: 'High', applicants: '60K+', duration: '2 hours' },
        { name: 'AILET', difficulty: 'High', applicants: '25K+', duration: '1.5 hours' },
        { name: 'LSAT India', difficulty: 'Medium', applicants: '15K+', duration: '2.5 hours' }
      ]
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Low': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'High': return 'text-orange-600 bg-orange-100';
      case 'Very High': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">

      {/* Header */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gray-800/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
            Choose Your
            <span className="block text-orange-500">
              Academic Stream
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto relative z-10">
            Explore different educational streams and discover the competitive exams that match your career goals.
          </p>
        </div>
      </section>

      {/* Streams Grid */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {streams.map((stream) => (
              <div
                key={stream.id}
                className="group cursor-pointer"
                onClick={() => setSelectedStream(selectedStream === stream.id ? null : stream.id)}
              >
                <div className="bg-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-700">
                  <div className="text-white mb-4">
                    {stream.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {stream.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {stream.description}
                  </p>
                  <div className="flex items-center text-orange-500 text-sm">
                    <span>View Exams</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>

                {/* Expanded Exam List */}
                {selectedStream === stream.id && (
                  <div className="mt-4 bg-white rounded-2xl p-6 shadow-xl border border-gray-300 animate-fadeIn">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">
                      {stream.title} Exams
                    </h4>
                    <div className="space-y-3">
                      {stream.exams.map((exam, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-semibold text-gray-900">{exam.name}</h5>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(exam.difficulty)}`}>
                              {exam.difficulty}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              <span>{exam.applicants}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              <span>{exam.duration}</span>
                            </div>
                          </div>
                          <div className="mt-3 flex space-x-2">
                            <Link
                              to={`/chatbot?exam=${encodeURIComponent(exam.name)}`}
                              className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-orange-600 transition-all duration-200 text-center"
                            >
                              Get AI Recommendations
                            </Link>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
                              Learn More
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Personalized Guidance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Chat with our AI assistant to get customized book and video recommendations for your chosen exam.
            </p>
            <Link
              to="/chatbot"
              className="inline-flex items-center bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Target className="h-5 w-5 mr-2" />
              <span>Ask AI Assistant</span>
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Streams;