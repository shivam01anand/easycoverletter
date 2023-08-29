import ContactForm from "@/components/ContactForm";

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
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">We help Job Applicants get <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> Shortlisted </span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-4" data-aos="zoom-y-out" data-aos-delay="150">
                Transform your Resume into a compelling
                <span className="font-semibold"> Cover Letter</span>,
                for
                <span className="font-semibold"> ANY job link</span>.
                Personalized,
                <span className="font-semibold"> ATS approved</span> &
                Favored by hiring managers, our cover letters are
                <span> Crafted </span>
                in
                <span className="font-semibold"> under 60 seconds</span>.
              </p>
            </div>
            <ContactForm />
            <div className="text-center mt-4">
              <span className="text-lg text-gray-600 font-semibold">easycoverletter is currently in private beta. Sign up to get your invite.</span>              
            </div>            
          </div>

        </div>
      </div>
    </section>
  )
}
