import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { Fragment, useEffect, useState } from 'react'
import MetaHeader from '../components/metaHeader'
import Head from 'next/head'
import TourCard from '../components/tourcard'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  faBook,
  faCircleXmark,
  faFileInvoice,
  faFlaskVial,
  faPeopleRobbery,
  faPuzzlePiece,
  faChevronLeft,
  faChevronRight,
  faCircle
} from '@fortawesome/free-solid-svg-icons'

const motionProp = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 },
}
const meta = {
  title: 'Science Project | MWIT Open House 2023',
  url: 'Science Project',
  description:
    'description',
  img: 'ogimage.png',
}



export default function SciProject(){

  const images = [
    { src: '/img/2023/slide/slidesp/sp1.jpg',description: 'โครงงานโน1' } ,
    { src: '/img/2023/slide/slidesp/sp2.jpg' ,description: 'โครงงานโน1'},
    // Add more image paths and alt text here
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <Head>
    <title>{meta.title}</title>
        <meta name='description' content={meta.description} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property='og:url'
          content={'https://openhouse.mwit.ac.th/' + meta.url}
        />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta
          property='og:image'
          content='https://openhouse.mwit.ac.th/img/2023/thumb2023.png'
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content=' openhouse.mwit.ac.th' />
        <meta property='twitter:url' content={meta.url} />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta
          name='twitter:image'
          content='https://openhouse.mwit.ac.th/img/ogimage.png'
        />   
    </Head>
    <div className='flex flex-col w-full'>
      <div className='w-full bg-cover bg-[url(/img/2023/bg_starlight.webp)] bg-repeat sm:bg-fixed min-h-[180vh] space-y-2 '>
        <span className='flex justify-center font-CS font-bold text-3xl xmd:text-4xl lg:text-5xl pt-16 text-bmw'>
              Science project
        </span>
        <div className='flex flex-wrap relative overflow-y-hidden max-w-6xl mx-auto px-6 justify-center gap-4 pt-2 pb-10'>
          <div className='max-w-[640px] max-h-[480px] min-w-max w-[16rem] md:w-[32rem] h-screen m-auto py-5 px-4 relative group relative w-full '>
            <img
              src={images[currentImageIndex].src}
              alt={`Image ${currentImageIndex + 1}`}
              className="w-full h-full rounded-2xl bg-center bg-cover duration-100"
            />
            <div className="absolute bottom-5 left-0 mx-4 w-[12rem] md:w-[41.2rem] bg-black bg-opacity-50 text-white  transition-opacity duration-300  rounded-b-2xl">
              <p className="text-left py-5 px-5 font-CS font-bold text-xl">
              {images[currentImageIndex].description}
              </p>
            </div>
            <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-3 bg-black/40 text-white cursor-pointer '>
                  <FontAwesomeIcon icon={faChevronLeft} onClick={showPrevImage} size='lg' />
                </div>
                <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-3 bg-black/40 text-white cursor-pointer'>
                  <FontAwesomeIcon icon={faChevronRight} onClick={showNextImage} size='lg' />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

