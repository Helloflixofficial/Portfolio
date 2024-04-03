export const Sidebar = () => {
  return (
    <div className="bg-eerie-black-2 border border-jet rounded-lg p-4 shadow-z-1 z-10">
      <div className="relative flex items-center justify-start gap-4">
        <figure className="bg-gradient-to-br from-gray-900 to-black rounded-lg">
          <img
            height={100}
            width={100}
            alt="logo"
            src="https://tse3.mm.bing.net/th?id=OIP.yL98CHypeT0JQEKEVwf_rAHaHa&pid=Api&P=0&h=180"
          />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Sharmaji">
            BOBY
          </h1>
          <p className="title">Full</p>
        </div>
        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>
          {/* <ion-icon name="chevron-down"></ion-icon> */}
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="size-full h-px bg-gradient-to-r from-indigo-500 my-4 "></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="mail-outline"></ion-icon> */}
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:shboby7@gmail.com" className="contact-link">
                shboby7@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="phone-portrait-outline"></ion-icon> */}
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+91 74" className="contact-link">
                +91 74
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="calendar-outline"></ion-icon> */}
            </div>
            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              {/* <time datetime="1982-06-23">April 26, 2003</time> */}
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              {/* <ion-icon name="location-outline"></ion-icon> */}
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              {/* <address href="https://www.google.com/maps?q=28.5440653,77.3013517&z=17&hl=en">New Delhi, India</address> */}
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.facebook.com/adil.?mibextid=ZbWKwL"
              className="social-link"
            >
              {/* <ion-icon name="logo-facebook"></ion-icon> */}
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://twitter.com/sharmajisenpai?t=DsYHRYBesHTex8hClrkB4g&s=09"
              className="social-link"
            >
              {/* <ion-icon name="logo-twitter"></ion-icon> */}
            </a>
          </li>
          <li className="social-item">
            <a href="#" className="social-link">
              {/* <ion-icon name="logo-instagram"></ion-icon> */}
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/helloflixofficial?tab=repositories"
              className="social-link"
            >
              {/* <ion-icon name="logo-github"></ion-icon> */}
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/helloflixofficial/"
              className="social-link"
            >
              {/* <ion-icon name="logo-linkedin"></ion-icon> */}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
