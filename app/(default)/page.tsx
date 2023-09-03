export const metadata = {
  title: 'Easy Cover Letter',
  description: 'Page description',
}

import Head from 'next/head';
import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'

export default function Home() {
  return (
    <>
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-4N4Y02Y9NL"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-4N4Y02Y9NL');
              `
            }}
          />
        </Head>
      <Hero />
      {/* <Features /> */}
      {/* <FeaturesBlocks /> */}
      {/* <Testimonials /> */}
      {/* <Newsletter /> */}
    </>
  )
}
