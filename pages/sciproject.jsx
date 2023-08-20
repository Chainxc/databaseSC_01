import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { Fragment, useEffect, useState,useRef } from 'react'
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
    { src: '/img/2023/slide/slidesp/sp1.jpg',description: 'รางวัล NSM President\u2019s Science Communication Award สนับสนุนโดย องค์การพิพิธภัณฑ์วิทยาศาสตร์แห่งชาติ (อพวช.) โครงงานเรื่อง “แนวคิดใหม่แห่งวงการชีวเคมีทางการแพทย์: การตรวจสอบ DNA ของมะเร็งบนผิวเม็ดเลือดแดงโดยใช้เลือดไก่เป็นแบบในการศึกษา เพื่อพัฒนาสู่นวัตกรรมใหม่ในการวินิจฉัยโรคมะเร็งที่รวดเร็ว” ผลงานของ นายวงศกร มาลาลักษมี นักเรียนชั้น ม.6/5  นางสาวมทินา บุญเต็ม นักเรียนชั้น ม.6/5 และ นางสาวชุตินันต์ สุขพงศ์จิรากุล นักเรียนชั้น ม.6/5  โดยมี ดร.เกียรติภูมิ รอดพันธ์  ครูสาขาวิชาเคมี และ รองศาสตราจารย์ ดร.นายแพทย์ปีติ ธุวจิตต์ จาก ภาควิชาวิทยาภูมิคุ้มกัน คณะแพทยศาสตร์ศิริราชพยาบาล มหาวิทยาลัยมหิดล เป็นที่ปรึกษาโครงงาน' } ,
    { src: '/img/2023/slide/slidesp/sp3.jpg' ,description: 'รางวัล First Prize สาขา Applied Sciences จากงาน ASPC 2023 โครงงานเรื่อง “นวัตกรรมเครื่องมือวัดปริมาณแคลเซียมจากปลายเล็บโดยวิธีแคลอริเมตริกและการดูดกลืนแสงเพื่อใช้ในการประเมินปริมาณแคลเซียมและความเสี่ยงต่อโรคกระดูก” ผลงานของ นายณภัทร ด่านชนะ นักเรียนชั้น ม.6/9 นายภัทรพล ใจเย็น นักเรียนชั้น ม.6/4 และ นายธีรัตม์ สันติลินนท์ นักเรียนชั้น ม.6/9 มีดร.เกียรติภูมิ รอดพันธ์ และอาจารย์วีรวุฒิ เทียนขาว ครูสาขาวิชาเคมี เป็นที่ปรึกษาโครงงาน'},
    // Add more image paths and alt text here
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);


  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    setShowFullDescription(false);
  };

  const showPrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setShowFullDescription(false);
  };
  
  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
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
              MWIT Science Project
        </span>
        <div className='flex flex-wrap relative overflow-y-hidden max-w-6xl mx-auto px-6 justify-center gap-4 pt-2 pb-10'>
          <div className='max-w-[640px] max-h-[480px] min-w-max w-[16rem] md:w-[32rem] h-screen m-auto py-5 px-4 relative group relative w-full '>
            <img
              src={images[currentImageIndex].src}
              alt={`Image ${currentImageIndex + 1}`}
              className="w-full h-full rounded-2xl bg-center bg-cover duration-100"
            />
            <div  className="absolute bottom-5 left-0  mx-4 w-full md:w-[95.4%] bg-black bg-opacity-50 text-white  transition-opacity duration-300  rounded-b-2xl overflow-hidden">
              <p className={`text-left pt-3 px-5 font-CS font-bold text-xl `}>
              {showFullDescription
              ? images[currentImageIndex].description
                : images[currentImageIndex].description.slice(0, 100) + '...'}
              </p>
              {images[currentImageIndex].description.length > 100 && (
              <button
                className={` ml-5 font-CS text-yellow-300 cursor-pointer transition-opacity duration-300 ${
                  showFullDescription ? 'opacity-0' : 'opacity-100'
                }`}
                onClick={toggleDescription}
              >
                {showFullDescription ? 'Read less' : 'Read more'}
              </button>
            )}
            {images[currentImageIndex].description.length > 100 && showFullDescription && (
              <button
                className="text-yellow-300 font-CS cursor-pointer transition-opacity duration-300 mt-2  "
                onClick={toggleDescription}
              >
                Read less
              </button>
            )}
            </div>
            <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-3 bg-black/40 text-white cursor-pointer '>
                  <FontAwesomeIcon icon={faChevronLeft} onClick={showPrevImage} size='lg' />
                </div>
                <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-3 bg-black/40 text-white cursor-pointer'>
                  <FontAwesomeIcon icon={faChevronRight} onClick={showNextImage} size='lg' />
            </div>
            <div className="absolute -mt-10 bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
               <button
                key={index}
                className={`w-4 h-4 rounded-full ${
                index === currentImageIndex ? 'bg-blue-700' : 'bg-gray-400'
                }`}
                onClick={() => {goToImage(index);
                setShowFullDescription(false);}}
                
            ></button>
                ))}
            </div>
          </div>
          <div className='flex flex-col gap-3'>
                <AnimateSharedLayout type='crossfade'>
                  <motion.div
                    className='flex flex-col gap-1 bg-white/40 shadow-lg backdrop-blur-sm px-4 py-5 rounded-xl bg-yellow-200'
                    layoutId='welcome-canvas'
                  >
                    <motion.span
                      layoutId={'welcome-desc'}
                      className='font-CS text-base md:text-lg lg:text-xl text-black font-bold'
                    >
                      กิจกรรมการนำเสนอโครงงานของนักเรียน MWIT กว่า 91 โครงงาน ที่กลับมาให้รับชมในรูปแบบ on-site 
                    </motion.span>
                    
                    {/*<button
                      onClick={() => setShowWC(true)}
                      className='text-sm md:text-base bg-white/30 w-fit hover:bg-white/60 hover:text-bmw transition-all duration-300 backdrop-blur-sm text-bmw/70 rounded-full px-4 py-1 mt-2 font-IBMPlex font-semibold'
                    >
                      Read full text
                    </button>*/}
                  </motion.div>
                  
                  </AnimateSharedLayout>
                  </div>
        </div>
      </div>
    </div>
  </>
  )
}

