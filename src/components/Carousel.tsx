import React,{useEffect,useState} from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Carousel = () => {
    const slides = [
      {
        url: '/images/bimbi-ai.webp',
        description: 'Bimbi AI',
        details: 'AI Chatbot for Education.',
      },
      {
        url: '/images/lms.webp',
        description: 'LMS',
        details: 'Learning Management System.',
      },
      /* {
        url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
      },
      {
        url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
      }, */
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shouldContinue, setShouldContinue] = useState(true);
  
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const prevSlideBtnClick = () => {
      setShouldContinue(false);
      setTimeout(() => setShouldContinue(true), 10000);
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlideBtnClick = () => {
      setShouldContinue(false);
      setTimeout(() => setShouldContinue(true), 10000);
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = ({ slideIndex }: { slideIndex: number }) => {
      setCurrentIndex(slideIndex);
    };
  
    //for every second change the slide
    useEffect(() => {
      //preload all images first
      slides.forEach((slide) => {
        new Image().src = slide.url;
      });
  
      const interval = setInterval(() => {
        if (shouldContinue) {
          nextSlide();
        }
      }, 5000);
      return () => clearInterval(interval);
    }, [currentIndex, shouldContinue]);
  
    return (
      <div className='h-3/4 w-auto m-auto py-0 px-4 relative group pt-8'>
        <div
          style={{
            backgroundImage: `url(${slides[currentIndex].url})`, backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
          className='w-full h-1/2 rounded-2xl bg-center bg-cover duration-500'
        >
        </div>
        <div className='w-auto h-20 mx-10 pt-7'>
          <p className='text-black text-2xl font-bold'>
            {slides[currentIndex].description}
          </p>
          <h4 className='text-black text-lg font-light h-auto'>
            {slides[currentIndex].details}
          </h4>
        </div>
        {/* Left Arrow */}
        {/* <div className='hidden group-hover:block absolute top-[36%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'> */}
        <div className='absolute top-[36%] -translate-x-0 translate-y-[-200%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlideBtnClick} size={30} />
        </div>
        {/* Right Arrow */}
        {/* <div className='hidden group-hover:block absolute top-[36%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'> */}
        <div className='absolute top-[36%] -translate-x-0 translate-y-[-200%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlideBtnClick} size={30} />
        </div>
        {/* <div className='flex justify-center py-2 pb-96'>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide({ slideIndex: slideIndex })}
              className='text-2xl cursor-pointer'
            >
              <RxDotFilled />
            </div>
          ))}
        </div> */}
      </div>
    );
  }

export default Carousel