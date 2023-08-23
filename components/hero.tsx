import VideoThumb from '@/public/images/hero-image.png'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">We help you get shortlisted <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> Fast </span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-4" data-aos="zoom-y-out" data-aos-delay="150">
                Personalized ATS approved Cover Letter with just your resume and dream job link. Loved by hiring managers - ready in under 60 seconds.
              </p>
            </div>
            <form className="w-full lg:w-auto mb-4 mx-auto"> {/* Added mx-auto to center the form */}
              <div className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto bg-white rounded-lg p-4 shadow-md">
                <input type="email" className="form-input flex-grow appearance-none border focus:border-gray-600 rounded-l-sm px-2 py-32text-gray-700 placeholder-gray-600" placeholder="Enter your email..." aria-label="Your email…" />
                <a className="btn text-white bg-blue-600 hover:bg-blue-700 flex-shrink-0 rounded-r-sm" href="#0">Submit</a>
              </div>
            </form>
            <div className="text-center mt-2">
              <p className="text-sm text-red-500">9 slots left</p>
            </div>
            <div className="text-center mt-4">
              <span className="text-lg text-gray-600 font-semibold">easycoverletter is currently in private beta. Sign up to get your invitation.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
