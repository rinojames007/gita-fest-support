import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Videos = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Add an event listener to check scroll position
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 1200); // Change 200 to adjust when the button appears
    };

    // Attach the event listener
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleIframeLoad = () => {
    // Set loading to false when the iframe has finished loading
    setLoading(false);
  };
    const links =[
        {
            url:"https://www.youtube.com/embed/SECIxFV8L0Q?si=333hwu6lZTU8MyAf"
        },
        {
            url:"https://www.youtube.com/embed/7S6Min_Fxvs?si=nwGAhuqoUUyeDvq-"
        },
        {
            url:"https://www.youtube.com/embed/M5H5q4tHPik?si=vaeY1Lx3fAX5nAfA"
        },
        {
            url:"https://www.youtube.com/embed/thMlZT-6qGU?si=DsIrZZf92Ss9lrhz"
        },
        {
            url:"https://www.youtube.com/embed/ZkluWYxc8Rs?si=pMjybMs34PmMq_xS"
        },
        {
            url:"https://www.youtube.com/embed/ln8RBpyQR5o?si=FQ-J-CPXXbXp5lZE"
        },
        {
            url:"https://www.youtube.com/embed/H6CdRnVMIK0?si=v9wHTImG11EbNow8"
        },
        {
            url:"https://www.youtube.com/embed/fDVQ7O9aUCc?si=TRwefYSS2o81VpFj"
        },
        {
            url:"https://www.youtube.com/embed/GzKPfOPSeAQ?si=KjO1-GB5McAFHUR7"
        },
        {
            url:"https://www.youtube.com/embed/FoDOP4leUok?si=dI8Dl-pqqGHyWEGk"
        },
        {
            url:"https://www.youtube.com/embed/uxhP-TXyyR4?si=P1-zreUKHSnkVf9u"
        },
        {
            url:"https://www.youtube.com/embed/A2XIJD6vd3g?si=ErnxfqJ_hPhmIsg7"
        },
        {
            url:"https://www.youtube.com/embed/NoKr2nKlOw4?si=EP6WfN3jNfVpCIdJ"
        },
        {
            url:"https://www.youtube.com/embed/S8w5L8OGYHU?si=9uO7x4jn5o-0He94"
        },
        {
            url:"https://www.youtube.com/embed/8aAOTyx5BJE?si=uu2fZqItrM6wY7_Q"
        },
        {
            url:"https://www.youtube.com/embed/Oh-7wOKgGHw?si=2OnhdJlS5H7J0xqn"
        }
        
    ]
  return (
    <div className="bg-gradient-to-b py-[50px] from-black via-purple-900 to-black min-h-screen h-full">
        <div className="absolute top-4 left-4">
        <Link to="/gallery" className="w-fit">
          <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">
            Back
          </button>
        </Link>
      </div> 
      <p className='text-white font-semibold text-lg text-center pt-[30px]'>Wait for Some Seconds to load the Videos</p>
        <div className="videos w-[90%] rounded-md flex items-center justify-center flex-col sm:flex-row flex-wrap sm:space-x-5 mx-auto space-y-8  py-6">
      {links.map((index) => (
        <div key={index} className="sm:w-[30%] rounded-md md:h-[300px] sm:h-[200px] 2xl:h-[400px] 2xl:w-[45%] h-[200px] w-full max-w-screen my-5">
          {loading && (
          <div className="flex flex-col justify-center items-center h-[220px]">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 text-white font-semibold text-lg  mt-[80px]"></div>
            <div className="loader text-center text-white font-semibold text-xl mt-6 ">Loading...</div>
          </div>
        )}
          <iframe
            className="w-full h-full"
            src={index.url}
            title={`Dance Performance ${index}`}
            onLoad={handleIframeLoad}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ))}
      {showBackToTop && (
        <button
          className="fixed bottom-9 md:bottom-[80px] md:text-xl font-semibold right-10 md:right-[160px] bg-blue-500 text-white px-4 md:w-[250px] md:py-4 py-2 rounded"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      )}
    </div>
    </div>
  )
}

export default Videos