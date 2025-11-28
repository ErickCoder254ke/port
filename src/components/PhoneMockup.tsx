import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PhoneMockupProps {
  images: string[];
  alt?: string;
}

const PhoneMockup = ({ images, alt = "App Screenshot" }: PhoneMockupProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Phone Frame */}
      <div className="relative z-10 h-full flex items-center justify-center py-4">
        {/* Phone Container with Shadow */}
        <div className="relative phone-mockup max-h-full">
          {/* Phone Body */}
          <div className="relative w-[160px] lg:w-[180px] bg-gradient-to-b from-gray-900 to-black rounded-[2rem] lg:rounded-[2.5rem] p-2 lg:p-2.5 shadow-2xl border-4 lg:border-6 border-gray-900">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 lg:w-28 h-5 lg:h-6 bg-black rounded-b-2xl lg:rounded-b-3xl z-20 flex items-center justify-center gap-2">
              <div className="w-12 h-1 bg-gray-800 rounded-full" />
              <div className="w-2 h-2 bg-gray-800 rounded-full" />
            </div>

            {/* Screen */}
            <div className="relative bg-white rounded-[1.75rem] lg:rounded-[2rem] overflow-hidden h-[300px] lg:h-[360px] shadow-inner">
              {/* Image Carousel */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImage}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <img
                    src={images[currentImage]}
                    alt={`${alt} ${currentImage + 1}`}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons - Only show if multiple images */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm z-10"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm z-10"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          index === currentImage
                            ? "w-6 bg-white"
                            : "w-1.5 bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Home Indicator */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-1 bg-gray-700 rounded-full" />
          </div>

          {/* Volume Buttons */}
          <div className="absolute -left-1 top-28 w-1 h-8 bg-gray-900 rounded-l-lg" />
          <div className="absolute -left-1 top-40 w-1 h-8 bg-gray-900 rounded-l-lg" />
          
          {/* Power Button */}
          <div className="absolute -right-1 top-32 w-1 h-12 bg-gray-900 rounded-r-lg" />
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl rounded-full scale-110" />
      </div>

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
          {currentImage + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

export default PhoneMockup;
