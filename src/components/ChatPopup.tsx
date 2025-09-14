import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  X, 
  Send,
  Minimize2,
  User,
  Bot
} from "lucide-react";

const ChatPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Erick's AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show popup when user scrolls to 50% of the page
      const scrollPercentage = scrollY / (documentHeight - windowHeight);
      if (scrollPercentage >= 0.5 && !isVisible) {
        setIsVisible(true);
        setTimeout(() => setIsOpen(true), 1000); // Auto-open after 1 second
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Thanks for your message! For immediate assistance, please use the 'Contact The Dev' button below to reach out on WhatsApp.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleContactDev = () => {
    window.open("https://wa.me/254114090740?text=Hi%20Erick!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.", "_blank");
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && !isMinimized && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="mb-4"
          >
            <Card className="w-72 h-80 bg-card border shadow-glow">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-primary/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Erick's Assistant</h3>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-muted-foreground">Online</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMinimized(true)}
                    className="h-6 w-6 p-0"
                  >
                    <Minimize2 className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-6 w-6 p-0"
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-44">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    {message.isBot && (
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Bot className="w-2.5 h-2.5 text-primary-foreground" />
                      </div>
                    )}
                    <div
                    className={`max-w-48 px-2 py-1.5 rounded-lg text-xs ${
                      message.isBot
                        ? "bg-muted text-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                      {message.text}
                    </div>
                    {!message.isBot && (
                      <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-2.5 h-2.5 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact Dev Button */}
              <div className="p-2 border-t">
                <Button
                  onClick={handleContactDev}
                  size="sm"
                  className="w-full bg-green-600 hover:bg-green-700 text-white gap-1 text-xs"
                >
                  <MessageCircle className="w-3 h-3" />
                  Contact The Dev
                </Button>
              </div>

              {/* Input */}
              <div className="p-2 border-t">
                <div className="flex gap-1">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 px-2 py-1.5 text-xs border rounded-md bg-background focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="sm"
                    className="px-2 h-7"
                  >
                    <Send className="h-2.5 w-2.5" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <AnimatePresence>
        {(!isOpen || isMinimized) && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <Button
              onClick={() => {
                setIsOpen(true);
                setIsMinimized(false);
              }}
              size="lg"
              className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90 shadow-glow relative"
            >
              <MessageCircle className="h-5 w-5" />
              {isVisible && !isOpen && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 bg-red-500 text-white animate-pulse text-xs">
                  1
                </Badge>
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatPopup;
