
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to an API
    console.log("Form data:", formData);
    
    // Show success toast
    toast({
      title: "Message sent successfully!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    
    // Clear form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
          <p className="text-xl text-indigo-200">Get in touch for collaborations, opportunities, or just to say hello</p>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6">Send Me a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-gray-700 font-medium">Your Name</label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="John Doe" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-gray-700 font-medium">Your Email</label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        placeholder="john@example.com" 
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-gray-700 font-medium">Subject</label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      placeholder="How can I help you?" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-gray-700 font-medium">Message</label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      placeholder="Your message here..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="bg-indigo-700 hover:bg-indigo-800 w-full md:w-auto">
                    <Send size={16} className="mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="text-indigo-600 mr-4" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-800">Email</h3>
                      <a href="mailto:guptaashi655@gmail.com" className="text-indigo-600 hover:underline">guptaashi655@gmail.com</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-indigo-600 mr-4" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-800">Phone</h3>
                      <a href="tel:+918791379845" className="text-indigo-600 hover:underline">+91-8791379845</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin className="text-indigo-600 mr-4" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-800">LinkedIn</h3>
                      <a href="https://www.linkedin.com/in/ashi-gupta-48590a9/" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">ashi-gupta-48590a9</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Github className="text-indigo-600 mr-4" size={20} />
                    <div>
                      <h3 className="font-medium text-gray-800">GitHub</h3>
                      <a href="https://github.com/Ashi12218694" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">Ashi12218694</a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-indigo-900 mb-6">Available For</h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    <span>Freelance Projects</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    <span>Full-time Opportunities</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    <span>Consulting</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                    <span>Collaborations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
