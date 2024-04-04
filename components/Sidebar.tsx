export const Sidebar = () => {
  return (
    <div className="bg-eerie-black-2 border border-jet rounded-lg p-4 shadow-z-1 z-10">
      <div className="relative flex items-center justify-start gap-4">
        <figure className="bg-gradient-to-br from-gray-900 to-black rounded-lg">
          <img
            height={100}
            width={100}
            alt="logo"
            src="https://avatars.githubusercontent.com/u/73479034?v=4"
          />
        </figure>
        <div className="text-white-2 text-fs-3 font-medium tracking-wider leading-normal mb-4">
          <h1 className="name" title="Sharmaji">
            BOBY sire
          </h1>
          <p className="title">Full st dev</p>
        </div>
        <button
          className="absolute top-0 right-0 rounded-br-lg text-xs text-orange-yellow-crayola bg-border-gradient-onyx p-2 shadow-shadow-2 transition-all z-10"
          data-sidebar-btn
        >
          <span>Contacts</span>
          {/* <ion-icon name="chevron-down"></ion-icon> */}
        </button>
      </div>

      <div className="opacity-100 visible">
        <div className="size-full h-px bg-gradient-to-r from-indigo-500 my-4 "></div>
        <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
          <li className="min-w-full flex items-center gap-4">
            <div className="relative bg-border-gradient-onyx w-30 h-30 rounded-md flex items-center justify-center text-16 text-orange-yellow-crayola shadow-shadow-1 z-10">
              {/* <ion-icon name="mail-outline"></ion-icon> */}
            </div>
            <div className="max-w-calc-100-w-46 w-calc-100-w-46">
              <p className="text-light-gray-70 text-fs-8 uppercase mb-1">
                Email Address
              </p>
              <a href="mailto:shboby7@gmail.com" className="contact-link">
                shboby7@gmail.com
              </a>
            </div>
          </li>
          <li className="min-w-full flex items-center gap-4">
            <div className="relative bg-border-gradient-onyx w-30 h-30 rounded-lg flex items-center justify-center text-16 text-orange-yellow-crayola shadow-shadow-1 z-10">
              {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
