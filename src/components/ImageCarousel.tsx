import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageCarouselProps {
  images: string[];
  alt?: string;
}

const ImageCarousel = ({ images, alt = "Project Screenshot" }: ImageCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-muted via-background to-muted">
      {/* Image Display */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center p-4 lg:p-8"
        >
          <img
            src={images[currentImage]}
            alt={`${alt} ${currentImage + 1}`}
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 via-transparent to-transparent pointer-events-none" />

      {/* Navigation Buttons - Only show if multiple images */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="icon"
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm z-10 transition-all hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm z-10 transition-all hover:scale-110"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Image Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImage
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>

          {/* Image Counter */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium z-10">
            {currentImage + 1} / {images.length}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
