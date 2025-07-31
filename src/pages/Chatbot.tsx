import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, BookOpen, Video, Star, ExternalLink } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  recommendations?: Recommendation[];
}

interface Recommendation {
  type: 'book' | 'video';
  title: string;
  author?: string;
  rating: number;
  description: string;
  link: string;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI study companion. I can help you find the best books and videos for your exam preparation. What exam are you preparing for?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mockRecommendations: { [key: string]: Recommendation[] } = {
    'jee': [
      {
        type: 'book',
        title: 'Concepts of Physics',
        author: 'H.C. Verma',
        rating: 4.8,
        description: 'Comprehensive physics concepts with excellent problem-solving approach.',
        link: '#'
      },
      {
        type: 'book',
        title: 'Mathematics for JEE Main & Advanced',
        author: 'R.D. Sharma',
        rating: 4.7,
        description: 'Complete mathematics coverage with extensive practice problems.',
        link: '#'
      },
      {
        type: 'video',
        title: 'Physics Wallah JEE Course',
        author: 'Alakh Pandey',
        rating: 4.9,
        description: 'Comprehensive video lectures covering all JEE physics topics.',
        link: '#'
      }
    ],
    'cat': [
      {
        type: 'book',
        title: 'How to Prepare for CAT',
        author: 'Arun Sharma',
        rating: 4.6,
        description: 'Strategic approach to CAT preparation with practice tests.',
        link: '#'
      },
      {
        type: 'video',
        title: 'CAT Quantitative Aptitude',
        author: 'Unacademy',
        rating: 4.5,
        description: 'Detailed video series on quantitative aptitude for CAT.',
        link: '#'
      }
    ],
    'upsc': [
      {
        type: 'book',
        title: 'Indian Polity',
        author: 'M. Laxmikanth',
        rating: 4.9,
        description: 'Authoritative book on Indian political system and governance.',
        link: '#'
      },
      {
        type: 'book',
        title: 'History of Modern India',
        author: 'Bipan Chandra',
        rating: 4.7,
        description: 'Comprehensive coverage of modern Indian history.',
        link: '#'
      }
    ]
  };

  const generateBotResponse = (userMessage: string): { text: string; recommendations?: Recommendation[] } => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('jee') || message.includes('joint entrance')) {
      return {
        text: "Great! JEE is one of India's most competitive engineering entrance exams. Here are some excellent resources I recommend for JEE preparation:",
        recommendations: mockRecommendations['jee']
      };
    } else if (message.includes('cat') || message.includes('management')) {
      return {
        text: "CAT preparation requires strategic planning and consistent practice. Here are my top recommendations for CAT:",
        recommendations: mockRecommendations['cat']
      };
    } else if (message.includes('upsc') || message.includes('civil service')) {
      return {
        text: "UPSC Civil Services is a prestigious and challenging exam. Here are some essential resources for your preparation:",
        recommendations: mockRecommendations['upsc']
      };
    } else if (message.includes('hello') || message.includes('hi')) {
      return {
        text: "Hello! I'm here to help you with exam preparation. Tell me about the exam you're preparing for, and I'll suggest the best books and videos for you."
      };
    } else if (message.includes('thank')) {
      return {
        text: "You're welcome! I'm always here to help you succeed in your studies. Is there anything else you'd like to know about exam preparation?"
      };
    } else {
      return {
        text: "I'd be happy to help you find the right study materials! Could you please specify which exam you're preparing for? For example: JEE, NEET, CAT, UPSC, GATE, or any other competitive exam."
      };
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI processing time
    setTimeout(() => {
      const botResponse = generateBotResponse(inputMessage);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse.text,
        sender: 'bot',
        timestamp: new Date(),
        recommendations: botResponse.recommendations
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    "Help me with JEE preparation",
    "Best books for CAT exam",
    "UPSC study materials",
    "NEET preparation resources",
    "How to stay motivated?"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <div className="bg-gray-800 shadow-sm border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <Bot className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">ExamMate AI Assistant</h1>
              <p className="text-sm text-gray-400">Get personalized book and video recommendations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-gray-800 rounded-2xl shadow-lg h-[600px] flex flex-col border border-gray-700">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start space-x-3 max-w-3xl ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-blue-600' 
                      : 'bg-orange-500'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-4 w-4 text-white" />
                    ) : (
                      <Bot className="h-4 w-4 text-white" />
                    )}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-700 text-white border border-gray-600'
                  }`}>
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Recommendations */}
            {messages[messages.length - 1]?.recommendations && (
              <div className="space-y-3">
                {messages[messages.length - 1].recommendations!.map((rec, index) => (
                  <div key={index} className="bg-gray-700 border border-gray-600 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        rec.type === 'book' ? 'bg-orange-500/20' : 'bg-orange-500/20'
                      }`}>
                        {rec.type === 'book' ? (
                          <BookOpen className="h-5 w-5 text-orange-500" />
                        ) : (
                          <Video className="h-5 w-5 text-orange-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-white">{rec.title}</h4>
                            {rec.author && <p className="text-sm text-gray-400">by {rec.author}</p>}
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-orange-500 fill-current" />
                            <span className="text-sm font-medium text-white">{rec.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300 mt-2">{rec.description}</p>
                        <button className="mt-3 text-orange-500 hover:text-orange-400 text-sm font-medium flex items-center space-x-1">
                          <span>View Details</span>
                          <ExternalLink className="h-3 w-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-3 max-w-3xl">
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <div className="bg-gray-700 rounded-2xl px-4 py-3 border border-gray-600">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          {messages.length <= 1 && (
            <div className="px-6 py-3 border-t border-gray-700">
              <p className="text-sm text-gray-400 mb-3">Quick questions to get started:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    className="px-3 py-2 bg-gray-700 text-white rounded-full text-sm hover:bg-gray-600 transition-colors duration-200 border border-gray-600"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <div className="p-6 border-t border-gray-700">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about books, videos, or study tips..."
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;