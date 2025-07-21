import React, { useState, useEffect } from 'react';
import { ChevronDown, Clock, Star, CheckCircle, Users, Zap, Shield, ArrowRight } from 'lucide-react';

function App() {
  // Load the form embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://links.successstrategy.design/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  // This will need to be replaced with: {{ custom_values.office_manager_gpt_beta_count }}
  // For now showing placeholder - integrate with your GoHighLevel custom field
  const [betaCount, setBetaCount] = useState(() => {
    // In production, this should be: {{ custom_values.office_manager_gpt_beta_count }}
    const customValue = "{{ custom_values.office_manager_gpt_beta_count }}";
    
    // If the custom field hasn't been processed, it will still contain the template syntax
    if (customValue.includes("{{")) {
      if (import.meta.env.DEV) {
        // In development, use a default value without showing error
        return 5; // Default to 5 spots taken for demo purposes
      } else {
        console.error("Custom field not processed. Please integrate with GoHighLevel custom fields.");
        return 0; // Show all 10 spots available as fallback in production
      }
    }
    
    return parseInt(customValue) || 0;
  });
  const spotsRemaining = 10 - betaCount;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#e8efff]">
      {/* Header */}
      <header className="bg-[#001128] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <img 
              src="https://storage.googleapis.com/msgsndr/Qk3syjlyBnoyf2IyyWT1/media/6870376b82ba63e1958b1643.png"
              alt="Success Strategy by Design"
              className="h-12 w-12 rounded-lg"
            />
            <div className="text-white text-xl font-bold">Office Manager GPT</div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001128] via-[#002347] to-[#0038ff] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center bg-[#0038ff] text-white px-4 py-2 rounded-full text-sm font-medium mb-8 animate-pulse">
            <Clock className="w-4 h-4 mr-2" />
            Limited Beta Access - Only {spotsRemaining} Spots Left
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#001128] mb-6 leading-tight">
            Revolutionary AI for
            <span className="block text-[#0038ff]">GoHighLevel</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
            Be among the first to experience the future of business automation with our exclusive 
            <strong> MCP integration tool</strong> that transforms how you manage your agency.
          </p>

          {/* Beta Counter */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8 max-w-md mx-auto border-2 border-[#0038ff]">
            <div className="text-center">
              <div className="text-6xl font-bold text-[#0038ff] mb-2">{spotsRemaining}</div>
              <div className="text-gray-600 text-lg">Beta Spots Remaining</div>
              <div className="mt-4 bg-[#e8efff] rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-[#0038ff] h-full transition-all duration-500 ease-out"
                  style={{ width: `${(betaCount / 10) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm text-gray-500 mt-2">{betaCount} of 10 spots taken</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('signup')}
              className="bg-[#0038ff] hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Join Waitlist Now
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('beta-details')}
              className="bg-white hover:bg-gray-50 text-[#0038ff] px-8 py-4 rounded-xl text-lg font-semibold border-2 border-[#0038ff] transition-all duration-300"
            >
              Learn More About Beta
            </button>
          </div>

          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-[#0038ff] mx-auto" />
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001128] mb-6">
              See Office Manager GPT in Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of AI-driven automation with our cutting-edge interface
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="group">
              <div className="bg-[#e8efff] rounded-2xl p-6 transition-all duration-300 group-hover:shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/msgsndr/Qk3syjlyBnoyf2IyyWT1/media/687d6f294d6fb718dfb9111f.png"
                  alt="Office Manager GPT Login Screen"
                  className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="text-xl font-bold text-[#001128] mt-4 mb-2">Intuitive Dashboard</h3>
                <p className="text-gray-600">Clean, professional interface designed for seamless workflow management</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-[#e8efff] rounded-2xl p-6 transition-all duration-300 group-hover:shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/msgsndr/Qk3syjlyBnoyf2IyyWT1/media/687d6fe00b60d23e426b3ebe.png"
                  alt="AI Models Interface"
                  className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="text-xl font-bold text-[#001128] mt-4 mb-2">Multiple AI Models</h3>
                <p className="text-gray-600">Access to various AI models with chat functionality you know and love</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-[#e8efff] rounded-2xl p-6 transition-all duration-300 group-hover:shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/msgsndr/Qk3syjlyBnoyf2IyyWT1/media/687d71b1ddc9c11db05888db.png"
                  alt="Custom Instructions"
                  className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="text-xl font-bold text-[#001128] mt-4 mb-2">Custom Instructions</h3>
                <p className="text-gray-600">Personalize AI behavior with custom instructions for your specific needs</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-[#e8efff] rounded-2xl p-6 transition-all duration-300 group-hover:shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/msgsndr/Qk3syjlyBnoyf2IyyWT1/media/687d708e0b60d29c866b3f89.png"
                  alt="Tool Mode Settings"
                  className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="text-xl font-bold text-[#001128] mt-4 mb-2">Advanced Tool Modes</h3>
                <p className="text-gray-600">Flexible automation with Auto, Manual, and Custom tool configurations</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group">
              <div className="bg-[#e8efff] rounded-2xl p-6 transition-all duration-300 group-hover:shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/msgsndr/Qk3syjlyBnoyf2IyyWT1/media/687d6f294d6fb7750fb9111e.png"
                  alt="Demo Conversation 1"
                  className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="text-xl font-bold text-[#001128] mt-4 mb-2">Real Conversations</h3>
                <p className="text-gray-600">See how Office Manager GPT handles complex business scenarios</p>
              </div>
            </div>

            <div className="group">
              <div className="bg-[#e8efff] rounded-2xl p-6 transition-all duration-300 group-hover:shadow-2xl">
                <img 
                  src="https://storage.googleapis.com/msgsndr/Qk3syjlyBnoyf2IyyWT1/media/687d6f29ddc9c11d505886b5.png"
                  alt="Demo Conversation 2"
                  className="w-full rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="text-xl font-bold text-[#001128] mt-4 mb-2">Advanced Automation</h3>
                <p className="text-gray-600">Witness the power of intelligent workflow automation in action</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form Section */}
      <section id="signup" className="py-20 bg-[#e8efff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001128] mb-6">
              Secure Your Beta Access
            </h2>
            <p className="text-xl text-gray-600">
              Complete the form below to qualify for exclusive beta testing opportunities
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="h-[2051px]">
              <iframe
                src="https://links.successstrategy.design/widget/form/MquIEbI1AtxudO3bhWnd"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                id="inline-MquIEbI1AtxudO3bhWnd" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Office Manager GPT - Beta Access Qualification Form"
                data-height="2051"
                data-layout-iframe-id="inline-MquIEbI1AtxudO3bhWnd"
                data-form-id="MquIEbI1AtxudO3bhWnd"
                title="Office Manager GPT - Beta Access Qualification Form"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Beta Testing Details */}
      <section id="beta-details" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001128] mb-6">
              Exclusive Beta Testing Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lock in lifetime pricing and shape the future of AI-powered business automation
            </p>
          </div>

          {/* Pricing Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-700 mb-4">Regular Pricing</h3>
                <div className="text-red-600 text-sm font-medium mb-2">After Public Launch</div>
                <div className="text-4xl font-bold text-gray-900 mb-2">$1,350</div>
                <div className="text-gray-600 mb-4">One-time installation</div>
                <div className="text-2xl font-bold text-gray-900 mb-2">$135/month</div>
                <div className="text-gray-600">Ongoing usage</div>
              </div>
            </div>

            <div className="bg-[#0038ff] rounded-2xl p-8 border-2 border-[#0038ff] relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Star className="w-6 h-6 text-yellow-400 fill-current" />
              </div>
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-4">Beta Tester Pricing</h3>
                <div className="text-green-400 text-sm font-medium mb-2">Limited Time - 10 Spots Only</div>
                <div className="text-4xl font-bold mb-2">$500</div>
                <div className="text-blue-100 mb-4">One-time installation</div>
                <div className="text-2xl font-bold mb-2">$75/month</div>
                <div className="text-blue-100 mb-4">For life - locked-in rate</div>
                <div className="bg-yellow-400 text-[#001128] px-4 py-2 rounded-lg text-sm font-bold">
                  SAVE $850 + $60/mo Forever
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="bg-[#e8efff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#0038ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#001128] mb-3">Exclusive Access</h3>
              <p className="text-gray-600">Be among the first 10 users to experience cutting-edge AI automation</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#e8efff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#0038ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#001128] mb-3">Early Features</h3>
              <p className="text-gray-600">Get access to new features before they're available to the public</p>
            </div>

            <div className="text-center p-6">
              <div className="bg-[#e8efff] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[#0038ff]" />
              </div>
              <h3 className="text-xl font-bold text-[#001128] mb-3">Lifetime Pricing</h3>
              <p className="text-gray-600">Lock in your $75/month rate forever, regardless of future price increases</p>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-[#e8efff] rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-[#001128] mb-8 text-center">What's Included in Beta Access</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Full GoHighLevel MCP integration',
                'Access to multiple AI models',
                'Custom instruction capabilities',
                'Advanced tool automation modes',
                'Priority support and feedback channel',
                'Influence on product roadmap',
                'Exclusive beta tester community',
                'Lifetime locked-in pricing'
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Roadmap CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-[#001128] mb-4">Want to see what's coming next?</h3>
            <a 
              href="https://roadmap.successstrategy.design/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-[#0038ff] hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Our Roadmap
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#001128] mb-6">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What makes Office Manager GPT different from other AI tools?",
                answer: "Office Manager GPT is specifically designed for GoHighLevel users with deep MCP integration. It provides seamless automation, multiple AI model access, and custom workflow management that's tailored for agency operations."
              },
              {
                question: "How does the beta pricing work?",
                answer: "Beta testers pay only $500 for installation (vs. $1,350 regular) and $75/month for life (vs. $135/month regular). This pricing is locked in forever, even as we raise prices for new customers."
              },
              {
                question: "What if I'm not satisfied with the beta?",
                answer: "We're confident you'll love Office Manager GPT, but beta testers get exclusive support and direct input on product development. Your feedback helps shape the final product."
              },
              {
                question: "When will the beta program start?",
                answer: "Beta access begins immediately upon acceptance and payment. You'll receive setup instructions and onboarding within 24 hours of joining."
              },
              {
                question: "Will there be training provided?",
                answer: "Yes! Beta testers receive priority training, documentation, and access to our exclusive community where you can get help and share best practices."
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "As a beta tester, you already have access to our premium features at the locked-in rate. Future feature additions will be included at no extra cost."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-[#001128] mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#001128] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="https://storage.googleapis.com/msgsndr/Qk3syjlyBnoyf2IyyWT1/media/6870376b82ba63e1958b1643.png"
              alt="Success Strategy by Design"
              className="h-12 w-12 rounded-lg mx-auto mb-4"
            />
            <div className="text-2xl font-bold mb-4">Office Manager GPT</div>
            <p className="text-gray-400 mb-6">
              Revolutionizing business automation with AI-powered GoHighLevel integration
            </p>
            <div className="text-sm text-gray-500">
              © 2025 Success Strategy by Design. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;