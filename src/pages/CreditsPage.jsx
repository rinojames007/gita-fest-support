import React, { useEffect, useState } from "react";import CreditsBox from "../Components/Credits/CreditsBox";
import { Link } from "react-router-dom";

const CreditsPage = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 700);
    };

    window.addEventListener("scroll", handleScroll);

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

  const creditDetails = [
    {
      name: "Aryan ku Mohapatra",
      role: "Tech Team Head",
      insta: "https://www.instagram.com/aryan_mohapatra_35/",
      linkedIn: "https://www.linkedin.com/in/aryan-kumar-mohapatra-2751361a9/",
      twitter:"https://twitter.com/AryanKumarMoha5",
      photo: "https://i.postimg.cc/NMx7DN3G/Aryan.webp",
    },
    {
      name: "Rino James",
      role: "Tech Team Head",
      insta: "https://www.instagram.com/rinojames007?igsh=MWJ5MnZxMGN4MzVtag==/",
      linkedIn: "https://www.linkedin.com/in/rino-james-4ba710238/",
      twitter:"https://twitter.com/rinojames03",
      photo: "https://i.postimg.cc/yxQh4D6w/Rino.webp",
    },
    {
      name: "Manish ku Samal",
      role: "Tech Team Head",
      insta: "http://surl.li/oumal",
      linkedIn: "http://surl.li/oulzz",
      twitter:"https://x.com/ManishK08285543?t=notMjDfmJn9h8Mco5GUkDw&s=09",
      photo: "https://i.postimg.cc/fLsfx4gg/Manish.webp",
    },
    {
      name: "Ancil Antichan",
      role: "Design and Media",
      insta: "https://www.instagram.com/ancil_offical?igsh=ZnJ3Nm5iZWo4azM1",
      linkedIn: "https://www.linkedin.com/in/ancil-antichan-b2762b1aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      twitter:"https://twitter.com/mathew_ancil?t=0ScmUDKEaN8NsBroE4tgpA&s=09",
      photo: "https://i.postimg.cc/wjSVjR5z/Ancil.webp",
    },
    {
      name: "Himanshu Shekhar Nayak",
      role: "Design and Media",
      insta: "https://www.instagram.com/_himanshu_nayak_/",
      linkedIn: "https://www.linkedin.com/in/himanshu-shekhar-nayak-9b829a249",
      twitter:"https://twitter.com/NoNeed15032003?t=VVER07HhOO_MrWcvgvZb_w&s=09",
      photo: "https://i.postimg.cc/43V174w9/Himanshu.webp",
    },
  ];
  return (
    <div className="w-full bg-gradient-to-b from-black via-purple-900 to-black min-h-screen h-full py-12">
     
      <div className="absolute top-4 left-4">
        <Link to="/" className="w-fit">
          <button className="bg-slate-600 px-5 py-2 text-lg font-semibold rounded-md hover:scale-90 hover:text-red-600 text-white">
            Back
          </button>
        </Link>
      </div>
      <h1 className="text-white text-4xl font-bold text-center pt-[25px]">
        Credits
      </h1>
      <div className="flex pt-[40px] pb-[60px] flex-wrap justify-center items-center md:my-[100px] space-y-7 md:space-y-0 md:space-x-5">
        {creditDetails.map((item) => (
          <CreditsBox
            key={item.name}
            name={item.name}
            role={item.role}
            insta={item.insta}
            linkedIn={item.linkedIn}
            twitter={item.twitter}
            photo={item.photo}
          />
        ))}
      </div>
      {showBackToTop && (
          <button
            className="fixed bottom-8 right-8 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={scrollToTop}
          >
            Back to Top
          </button>
        )}
    </div>
  );
};

export default CreditsPage;
