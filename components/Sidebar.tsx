import Image from "next/image";
import me from "@/app/Images/me.jpeg";
export const Sidebar = () => {
  return (
    <section className="bg-[#A79277] bg-eerie-black-2 border border-jet rounded-lg p-4 shadow-z-1 z-10">
      <div className="relative flex items-center justify-start gap-4  rounded-custom">
        <figure className="bg-gradient-to-br from-gray-900 to-black">
          <Image
            className="rounded-custom"
            src={me}
            alt="GitHub Avatar"
            width={100}
            height={100}
          />
        </figure>
        <div className="text-white-2 text-fs-3 font-medium tracking-wider leading-normal mb-4">
          <h1 className="name" title="Sharmaji">
            BOBY SHARMA
          </h1>
          <p className="title">Devloper</p>
        </div>
      </div>
      {/* LINE  */}
      <div className="opacity-100 visible">
        <div className="size-full h-px bg-gradient-to-r from-indigo-500 my-4"></div>
      </div>
    </section>
  );
};
