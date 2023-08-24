import Head from 'next/head'
import { Fragment, useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion, useScroll } from 'framer-motion'
import { clamp } from 'lodash'
import Link from 'next/link'
import ActCard from '../components/actcard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faCircleXmark,
  faFileInvoice,
  faFlaskVial,
  faPeopleRobbery,
  faPuzzlePiece,
  faChevronLeft,
  faChevronRight,
  faCircle,
  faLocationDot
} from '@fortawesome/free-solid-svg-icons'
const wcText = "Hi"




export default function clubfes() {
  const slides1 = [
    {
      url: '/img/2023/slide/slide1/ch1.jpeg'
    },
    {
      url: '/img/2023/slide/slide1/ch2.jpeg'
    },
    {
      url: '/img/2023/slide/slide1/ch3.jpeg'
    },
    {
      url: '/img/2023/slide/slide1/sq1.jpeg'
    },
    {
      url: '/img/2023/slide/slide1/sq2.jpeg'
    },
    {
      url: '/img/2023/slide/slide1/sq3.jpeg'
    }
  ]
 const [currentIndex, setCurrentIndex] = useState(0);


  function prevSlide() {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides1.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }


  function nextSlide() {
    const isLastSlide = currentIndex === slides1.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }


  function goToSlide(slideIndex) {
    setCurrentIndex(slideIndex)
  }


  const meta = {
    title: 'Virtual Lab & Activity | MWIT Open House 2022',
    url: 'lab',
    description:
      'Virtual lab & activity ร่วมทำกิจกรรมการทดลองของแต่ละสาขาวิชาผ่านเว็บไซต์ สำหรับผู้เข้าร่วมงาน MWIT Open House 2022 ทุกคน โดยไม่ต้องทะเบียน | MWIT Open House 2022',
    img: 'ogimage.png',
  }


  const course = [
    {
      title: 'กิจกรรมส่งเสริมสุขภาพกายใจ',
      subtt:
        'ดูแลสุขภาพกายและใจ ลดความเครียดจากการเรียน',
      img: 'sport',
      desc: 'เลือกออกกำลังกายได้ตามใจ ที่โรงเรียนมีพื้นที่ให้เล่นกีฬามากมายทั้งฟุตบอล บาสเกตบอล แบดมินตัน ปิงปอง เปตอง หรือแม้แต่ห้องฟิตเนส มีกิจกรรมสนุก ๆ อย่างบาสสายห้อง รวมถึงได้ดูแลสุขภาพใจจากคลินิกคลายเครียดในทุกสัปดาห์ด้วย',
      href: 'mathcom',
    },
    {
      title: 'กิจกรรมแนะแนวการศึกษา',
      subtt:
        '3 ปีในโรงเรียนกับการปูทางมุ่งสู่อนาคต',
      img: 'exchange',
      desc: 'การแนะแนวการศึกษา ให้คำแนะนำเกี่ยวกับเส้นทางในการเรียนต่อในอนาคต เปิดใจค้นหาตัวเอง เพื่อเปิดโลกไปสู่สาขาวิชาที่ชอบ พร้อมด้วยการวางกรอบและเป้าหมายที่ใช่ เพื่อเตรียมพร้อมเข้าสู่มหาวิทยาลัยที่ปรารถนา',
    },
    {
      title: 'กิจกรรมเรียนรู้นอกห้องเรียน',
      subtt:
        'ฟังบรรยายพิเศษจากศิษย์เก่าและผู้เชี่ยวชาญ ทัศนศึกษา และค่ายวิชาการ',
      img: 'outside',
      desc: 'เรียนรู้มุมมอง แนวคิด วิธีการทำงานจากบุคคลที่มีความสามารถ ส่งเสริมความรู้รอบด้าน และได้เรียนรู้การใช้วิทยาศาสตร์ในชีวิตจริง ',
    },
    {
      title: 'กิจกรรม STEM challlenge',
      subtt:
        'บูรณาการความคิด แข่งขันพิชิตโจทย์ปัญหา STEM',
      img: 'challenge',
      desc: 'กิจกรรมแก้ปัญหาที่กำหนดให้ในแต่ละปีโดยใช้การบูรณาการความรู้วิทยาศาสตร์ คณิตศาสตร์ วิศวกรรมศาสตร์ และเทคโนโลยี โดยเข้าร่วมการแข่งขันแบบกลุ่ม ได้ทั้งทักษะการทำงานเป็นทีม การประยุกต์และพลิกแพลงแก้ไขปัญหา และความท้าทายของกิจกรรม',
    },
    {
      title: 'กิจกรรมส่งเสริมการอ่าน',
      subtt:
        'อ่านหนังสืออันทรงคุณค่า พัฒนาทั้งความรู้และความคิด',
      img: 'book',
      desc: 'ทีมนักอ่านมาทางนี้ ! ชั่วโมงอ่านหนังสือ พัฒนาทักษะกระบวนการคิดจากการสรุปเรื่องราวและวิเคราะห์ และยังมีกิจกรรม MWIT Read & Share ที่นำหนังสือเล่มโปรดมาจัดกิจกรรมเพื่อแลกเปลี่ยน พูดคุย และวิเคราะห์เนื้อหาร่วมกับคนอื่น ๆ ที่สนใจหนังสือเล่มนี้เช่นกัน',
    },
    {
      title: 'กิจกรรมส่งเสริมคุณธรรมจริยธรรม',
      subtt:
        'ปลูกฝังคุณธรรมและการใช้ชีวิตในศตวรรษที่ 21',
      img: 'moral',
      desc: 'เสริมสร้างภาวะผู้นำในตนเอง การตระหนักรู้และจัดการตนเองได้ เสริมสร้างความมุ่งมั่น ความกล้าที่จะเปลี่ยนแปลง มีคุณธรรมจริยธรรม',
    },
    {
      title: 'กิจกรรมจิตอาสา',
      subtt:
        'ปลูกฝังความเป็นผู้ให้ และการพัฒนาสังคม',
      img: 'social',
      desc: 'กิจกรรมบำเพ็ญประโยชน์สู่สังคม การจัดค่ายบำเพ็ญประโยชน์เพื่อส่งเสริมความเป็นผู้นำ และการประดิษฐ์ของใช้เพื่อนำไปมอบให้กับโรงพยาบาลหรือสถานสงเคราะห์เพื่อปลูกฝังจิตสำนึกที่ดี',
    },
    {
      title: 'กิจกรรม MWIT Ambassador',
      subtt:
        'พัฒนาความสามารถและการทำงานร่วมกับผู้อื่น',
      img: 'ambassador',
      desc: 'พัฒนาความสามารถและพัฒนาสัมพันธ์ภาพกับผู้อื่น มีจิตสาธารณะ มีความสามารถขับเคลื่อนการทำงานเป็นทีมได้อย่างมีประสิทธิภาพ การเป็นผู้นำและเป็นส่วนหนึ่งของโรงเรียน นำเสนอกิจกรรมของโรงเรียน',
      href: 'physic',
    },
    {
      title: 'กิจกรรมจิตสำนึกความเป็นไทย และความเป็นพลเมืองโลก',
      subtt:
        'อนุรักษ์ความเป็นไทย และก้าวไปสู่การเป็นพลเมืองโลก',
      img: 'thai',
      desc: 'อนุรักษ์ขนบธรรมเนียมประเพณีและศิลปวัฒนธรรมไทยในการแข่งขันทักษะศิลปศาสตร์ ทั้งประกกวดการวาด ร้อง แรป เรียงความ แต่งกลอน ร่วมแลกเปลี่ยนความคิดเห็นในประเด็นสังคมไทย',
    },
  ]


return (
  <>
  <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>MWIT Open House 2023</title>
        <meta
          name='description'
          content='MWIT Open House 2023 เปิดบ้านโรงเรียนมหิดลวิทยานุสรณ์ พบกับกิจกรรมและนิทรรศการมากมายตลอดวันที่ 25 และ 26 สิงหาคม 2566 ในรูปแบบออนไซต์'
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property='og:url' content='https://openhouse.mwit.ac.th/' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='MWIT Open House 2023' />
        <meta
          property='og:description'
          content='MWIT Open House 2023 เปิดบ้านโรงเรียนมหิดลวิทยานุสรณ์ พบกับกิจกรรมและนิทรรศการมากมายตลอดวันที่ 25 และ 26 สิงหาคม 2566 ในรูปแบบออนไซต์'
        />
        <meta
          property='og:image'
          content='https://openhouse.mwit.ac.th/img/2023/thumb2023.png'
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='openhouse.mwit.ac.th/' />
        <meta property='twitter:url' content='https://openhouse.mwit.ac.th/' />
        <meta name='twitter:title' content='MWIT Open House 2023' />
        <meta
          name='twitter:description'
          content='MWIT Open House 2023 เปิดบ้านโรงเรียนมหิดลวิทยานุสรณ์ พบกับกิจกรรมและนิทรรศการมากมายตลอดวันที่ 25 และ 26 สิงหาคม 2566 ในรูปแบบออนไซต์'
        />
        <meta
          name='twitter:image'
          content='https://openhouse.mwit.ac.th/img/2023/thumb2023.png'
        />
      </Head>
  <div className="flex flex-col relative overflow-y-hidden max-w-6xl mx-auto px-6 justify-center gap-4 pt-6 pb-10
  font-CS font-bold text-2xl md:text-3xl lg:text-4xl pt-16">


    <header>
      <h1 className='mx-auto px-8 font-CS font-bold text-bmw text-3xl md:text-4xl lg:text-5xl flex justify-center'>
        กิจกรรมตามสาขาวิชา & CLUB ROAD
      </h1>
      <div className='font-CS font-bold text-2xl md:text-3xl lg:text-4xl flex justify-center'>
          MWIT club road
      </div>
      <div className='max-w-[800px] max-h-[450px] min-w-max w-[16rem] md:w-[32rem] h-auto m-auto py-2 px-4 relative group'>
        <motion.img
          src = '/img/clubfes/clubfes_1.jpg'
          className='w-[300px]  w-[120] md:w-[500px] md:h-[300] lg:w-[600px] flex self-center '
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
          duration: 0.8,
          delay: 0.5,
          bounce: 0.4,
          type: 'spring',
            }}                                                                                                      
        />
      </div>
     
      <div class = "w-full max-w-7xl grid grid-rows-2 grid-flow-col gap-4 items-center justify-items-center mx-auto py-8 px-6">
            <div>
            <div className="font-IBMPlex font-semibold text-sm col-start-2 col-end-4 container mx-auto px-8 bg-white rounded-lg shadow-md p-4 text-l">
              <h2 className="text-2xl font-bold">สร้างสิ่งใหม่อย่างสร้างสรรค์</h2>
              <p>นำเสนอกิจกรรมชุมนุมใน MWIT ที่นักเรียนเป็นผู้จัดตั้งขึ้นเอง เวทีเปิดโอกาสให้ได้ชมผลงานของแต่ละชุมนุม ไม่ว่าจะเป็นด้านดนตรี ศิลปะ หรือเกม</p>
            </div>
          </div>
          <div>
            <div className= "font-IBMPlex font-semibold text-sm container mx-auto px-8 bg-amber-200 rounded-lg shadow-md p-4 text-l">
              <FontAwesomeIcon icon={faLocationDot} size='s'/>
                <h2 className="text-2xl font-bold">สถานที่จัดแสดง Club road</h2>
                <p>สถานที่จัด: ลู่แดงฝั่ง covered walkway, ลานหน้าเสาธง</p>
                <p>เวลา: 9:00 - 16:00 ทั้งสองวัน</p>
            </div>
          </div>


      </div>
     
      <main className='bg-amber-200/60 mx-auto px-8'>
        <div className='flex flex-col text-black items-center mx-auto justify-self-center w-full max-w-6xl px-6 pt-10 pb-4'>
          <span className='font-CS font-bold text-bmw text-3xl md:text-4xl lg:text-5xl'>
            กิจกรรมพัฒนาผู้เรียน
          </span>
          <span className='font-IBMPlex text-center text-gray-700 text-base md:text-lg lg:text-xl'>
            หลักสูตรโรงเรียนปี 2566 กิจกรรมพัฒนาผู้เรียนที่มุ่งส่งเสริมการพัฒนาตนเอง
          </span>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-3'>
            <Link href={'/download/หลักสูตรโรงเรียนมหิดลวิทยานุสรณ์ 2566.pdf'}>
              <motion.a
                className='relative bg-white/50 hover:bg-ymw hover:text-black cursor-pointer transition-colors duration-200 py-1 md:py-2 px-3 md:px-4 rounded-full font-CS font-bold text-lg md:text-xl lg:text-2xl text-bmw'
                initial={{ opacity: 0, scale: 0.7, y: 10, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.3,
                  bounce: 0.4,
                  type: 'spring',
                }}
              >
              <motion.div
                className='absolute text-xs md:text-sm text-white -right-2 -top-2 bg-oft font-semibold px-[0.35rem] md:px-2 rounded-full'
                initial={{ opacity: 0, scale: 0.7, y: 10, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 6 }}
                transition={{
                  duration: 0.8,
                  delay: 1.9,
                  bounce: 0.5,
                  type: 'spring',
                }}
              >
                  New!
                </motion.div>
                <span className='whitespace-nowrap'>
                  อัปเดตหลักสูตรปีล่าสุด
                </span>
              </motion.a>
            </Link>
        </div>
          <div className='pt-6'>
            <div className= "font-IBMPlex font-semibold text-sm container mx-auto px-8 bg-amber-200 rounded-lg shadow-md p-4 text-l">
              <FontAwesomeIcon icon={faLocationDot} size='s'/>
                <h2 className="text-2xl font-bold">สถานที่จัดนิทรรศการกิจกรรมพัฒนาผู้เรียน</h2>
                <p>สถานที่จัด: ในศูนย์วิทยบริการ (ห้องสมุด) </p>
                <p>เวลา: 9:00 - 16:00 ทั้งสองวัน</p>
            </div>
          </div>
        <div className='flex flex-col relative overflow-y-hidden max-w-6xl mx-auto px-6 justify-center gap-4 pt-4 pb-10'>
          {course.map((l, li) => (
         
              <a
                className={
                  'w-full relative group shadow-lg flex flex-col md:flex-row rounded-xl overflow-hidden min-h-[15rem] '
                  +(li % 2 === 1 && 'justify-end')
                }
              >
                <div
                  style={{
                    backgroundImage: `url(${'/img/' + 'clubfes/' + l.img + '.png'})`,
                  }}
                  className='relative md:absolute bg-auto bg-bottom bg-no-repeat w-full aspect-[16/5] md:inset-0'
                />
                <div className='w-full md:w-fit md:max-w-md bg-white/70 group-hover:bg-white/90 transition-colors duration-300 backdrop-blur-md px-4 py-3 flex flex-col'>
                  <span className='font-CS font-semibold text-xl md:text-2xl text-bmw'>
                    {l.title}
                  </span>
                  <span className='font-IBMPlex font-semibold text-sm md:text-base text-gray-700'>
                    {l.subtt}
                  </span>
                  <span className='font-IBMPlex text-xs md:text-sm leading-relaxed md:leading-relaxed pt-2'>
                    {l.desc}
                  </span>
                </div>
              </a>
          ))}
        </div>
    </main>


    </header>
  </div>
  </>
    )
  }
 

