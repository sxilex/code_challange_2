import Carousel from "@/components/carousel";

export default function Testimonial() {
  const carouselItems = [
    {
      imageUrl: "/bomb.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      imageUrl: "/ensten.jpg",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      imageUrl: "/boyen.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <section id="testimonial-section">
      <div className="w-screen h-auto lg:pt-[56px] pt-[96px] grid bg-black place-items-center text-white">
        <div className="bg-gray-700 shadow-md h-full w-[80%] grid place-items-center mx-12 pt-4 pb-6 px-4 rounded-4xl">
          <p className="font-extrabold p-4 text-white">Kata-kata dari Client</p>

          <div className="h-auto md:w-[60%] w-[95%] flex flex-col justify-center items-center p-4 text-center ">
            <Carousel items={carouselItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
