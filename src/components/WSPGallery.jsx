import { galleryImages } from "../constants";

const WSPGallery = () => {

  return (
    <div className="flex items-center justify-center w-full h-full min-h-screen">
      <div className="flex flex-wrap gap-3 items-center justify-center max-w-[60%] my-0 mx-auto">
        {galleryImages &&
          galleryImages.map((slide, index) => (
            <div 
							key={index} 
							className="max-w-[250px] cursor-pointer"
						>
              <img 
								src={slide.src} 
								alt={slide.alt} 
								className="max-w-full hover:scale-110"
							/>
            </div>
          ))}
      </div>
    </div>
  );
};

export default WSPGallery;
