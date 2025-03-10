export default function Gallery() {
    const images = [
      { src: "/gallery/image1.jpg", alt: "Description 1" },
      { src: "/gallery/image2.jpg", alt: "Description 2" },
      { src: "/gallery/image3.jpg", alt: "Description 3" },
      { src: "/gallery/image4.jpg", alt: "Description 4" },
      { src: "/gallery/image5.jpg", alt: "Description 5" },
      { src: "/gallery/image6.jpg", alt: "Description 6" },
    ];
  
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">Gallery</h1>
        <div className="h-1 w-16 bg-amber-400 mb-8"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-zinc-900 rounded-lg overflow-hidden">
              <div className="h-64 bg-zinc-800 flex items-center justify-center">
                {/* Replace with actual images later */}
                <span className="text-gray-400">Gallery Image</span>
              </div>
              <div className="p-3">
                <p className="text-gray-300">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }