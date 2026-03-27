import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { subscribeToGallery } from "../services/cmsService";
import { GalleryImage } from "../types";
import { Camera } from "lucide-react";

export default function Gallery() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToGallery((data) => {
      setImages(data);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">
              Our Facility
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-black mb-6 uppercase tracking-tighter">
              GYM <span className="text-accent">GALLERY</span>
            </h1>
            <p className="text-subtext max-w-2xl mx-auto text-lg">
              Take a virtual tour of AimFit Gym. See our state-of-the-line equipment, 
              training zones, and the environment where transformations happen.
            </p>
          </motion.div>
        </header>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-subtext font-bold uppercase tracking-widest text-xs">Loading Gallery...</p>
          </div>
        ) : images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative aspect-square rounded-[2rem] overflow-hidden border border-white/5 bg-secondary"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <h3 className="text-xl font-bold text-white mb-1">{image.title}</h3>
                  <p className="text-accent text-xs font-bold uppercase tracking-widest">AimFit Gym India</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
              <Camera className="w-10 h-10 text-subtext" />
            </div>
            <h3 className="text-xl font-bold mb-2">No Photos Yet</h3>
            <p className="text-subtext max-w-xs">Check back soon to see photos of our amazing facility!</p>
          </div>
        )}
      </div>
    </div>
  );
}
