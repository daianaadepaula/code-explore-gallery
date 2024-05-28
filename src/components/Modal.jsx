// import { images } from "../constants";

import { images } from "../constants";

const Modal = ({ isOpen, setModalOpen, chidren }) => {
  if (isOpen) {
    return (
      <ul className="fixed top-0 left-0 right-0 bottom-0 z-1000 bg-black/60 w-full h-full min-h-screen">
        {images.map((item) => (
          <li key={item.id} className="p-4">
            <img
              src={item.src}
              alt={item.alt}
              className="scale-75 rounded-lg"
            />
          </li>
        ))}
      </ul>
    );

    // return (
    //   <div className="fixed top-0 left-0 right-0 bottom-0 z-1000 bg-black/60 w-full h-full min-h-screen">
    //     <div className="h-full w-full flex flex-col items-center justify-center">
    //       <button onClick={setModalOpen}>X</button>
    //       <img src={chidren} alt="" />
		// 			{images.filter(item.id)}
    //     </div>
    //   </div>
    // );
  }

  return null;
};

export default Modal;
