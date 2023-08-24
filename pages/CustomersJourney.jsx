import Head from 'next/head'
/*import Modal from "../components/Modal";*/
import { Fragment, use, useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion, useScroll,AnimatePresence } from 'framer-motion'
import { clamp } from 'lodash'
import Link from 'next/link'
import ActCard from '../components/actcard'
import Image from 'next/image'
import { useRouter } from 'next/router'
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
  faCircle
} from '@fortawesome/free-solid-svg-icons'
const meta = {
    title: 'Customers Journey | MWIT Open House 2022',
    url: 'Customers Journey',
    description:
      'Customers Journey ที่จะพาทุกคนไปรู้จักับ MWIT OPENHOUSE 2023 มากขึ้น',
    img: 'ogimage.png',
  }

export default function Customerjourney() {
  const events = [
    {
        id: 0,
        name: ' โหมดเลือกสถานที่',
        description: 'ตอนนี้สามารถเลือกสถานที่ที่สนใจได้เลย',
        activity: '',
        time: '',
        img: '',
        landscape: 'img/2023/journeyLS/sport_door.jpg',
        reccommend: [
            {tour: 1},
            {tour: 2},
            {tour: 3},
            {tour: 4},
            {tour: 5},
            {tour: 6},
            {tour: 7},
            {tour: 8},
            {tour: 9},
            {tour: 10},
            {tour: 11},
            {tour: 12},
            {tour: 13},
            {tour: 14},
            {tour: 15},
        ],
        locate:
        {
            top:'top-[21%]',
            left:'left-[15.5%]',
            size:'w-[4.5vw]',
        }
    },
    {
        id: 1,
        name: 'อาคาร 1',
        description: 'ภายในตึก 1 มีกิจกรรมเช่น การบรรยายโครงงานแบบ Presentation กิจกรรมสาขาวิชา รอให้เพื่อน ๆ เข้ามาร่วมเล่นนะ',
        activity: 'Sci Project Oral Presentation และ กิจกรรมสาขาวิชา',
        time: 'Sci Project เวลา 9.00 - 12.00 น., กิจกรรมสาขาวิชา เวลา 9.00 - 16.00 น.',
        img: 'img/2023/journey/1Building.png',
        landscape: 'img/2023/journeyLS/build_1_2.jpg',
        reccommend: [
            {tour: 1},
            {tour: 14},
            {tour: 11},
        ],
        locate:
        {
            top:'top-[21%]',
            left:'left-[12.5%]',
            size:'w-[4.5vw]',
        }
    },
    {
        id: 2,
        name: 'อาคาร 2',
        description: 'ภายในตึก 2 เรามีสถานที่ให้เลือกไปมากมาย ตั้งแต่ศูนย์วิทยบริการซึ่งมีกิจกรรมพัฒนาผู้เรียน และห้องดาราศาสตร์ 3 มิติ ที่จัด Spelling bee และการบรรยายพิเศษ นอกจากนี้ ภายในอาคาร 2 ยังมีกิจกรรมสาขาวิชาอีกด้วย',
        activity: 'กิจกรรมพัฒนาผู้เรียน',
        time: 'มีกิจกรรมตลอดทั้งวัน',
        img: 'img/2023/journey/2Building.png',
        landscape: 'img/2023/journeyLS/build_2.jpg',
        reccommend: [
            {tour: 2},
            {tour: 1},
            {tour: 3},
            {tour: 11},
            {tour: 13},
            {tour: 14},
        ],
        locate:
        {
            top:'top-[13.7%]',
            left:'left-[20%]',
            size:'w-[4.5vw]',
        }
    },
    {
        id: 3,
        name: 'อาคาร 3',
        description: 'ภายในตึก 3 มีกิจกรรมสาขาวิชารอให้เพื่อน ๆ เข้ามาร่วมเล่นนะ ',
        activity: 'กิจกรรมสาขาวิชา',
        time: 'มีกิจกรรมตลอดทั้งวัน',
        img: 'img/2023/journey/3Building.png',
        landscape: 'img/2023/journeyLS/build_3.jpg',
        reccommend: [
            {tour: 3},
            {tour: 2},
            {tour: 14},
        ],
        locate:
        {
            top:'top-[17%]',
            left:'left-[36%]',
            size:'w-[3.5vw]',
        }   
    },
    {
        id: 4,
        name: 'หอประชุมพระอุบาลี',
        description: 'หอประชุมพระอุบาลี ใช้สำหรับจัด MWIT SQUARE ในวันศุกร์ และ MWIT CHALLENGE ในวันเสาร์',
        activity: 'MWIT SQUARE และ MWIT CHALLENGE',
        time: 'MWIT SQUARE วันศุกร์ และ MWIT CHALLENGE วันเสาร์',
        img: 'img/2023/journey/5Building.png',
        landscape: 'img/2023/journeyLS/UbaliHall.jpg',
        reccommend: [
            {tour: 4},
            {tour: 5},
            {tour: 8},
        ],
        locate:
        {
            top:'top-[8%]',
            left:'left-[56%]',
            size:'w-[4.5vw]',
        }
    },
    {
        id: 5,
        name: 'ศูนย์กีฬา',
        description: 'ศูนย์กีฬา เป็นสถานที่สำหรับออกกำลังกาย และมีกิจสาขา กิจพัฒ ',
        activity: 'กิจสาขา กิจพัฒ',
        time: 'มีกิจกรรมตลอดทั้งวัน',
        img: 'img/2023/journey/6Building.png',
        landscape: 'img/2023/journeyLS/sport.jpg',
        reccommend: [
            {tour: 5},
            {tour: 4},
            {tour: 12},
            {tour: 8}
        ],
        locate:
        {
            top:'top-[12%]',
            left:'left-[79.5%]',
            size:'w-[4.5vw]',
        }
    },
    {
        id: 6,
        name: 'build 9',
        description: 'อาคาร 9 เป็นอีกสถานที่mujมีกิจกรรมบรรยายโครงงานแบบ Poster',
        activity: 'Sci Project Poster Presentation',
        time: 'บรรยายโครงงานแบบ Poster ในเวลา 13.00-14.30 น.',
        img: 'img/2023/journey/9Building.png',
        landscape: 'img/2023/journeyLS/9_regis.jpg',
        reccommend: [
            {tour: 6},
            {tour: 9},
            {tour: 10},
            {tour: 12},
            {tour: 15},
        ],
        locate:
        {
            top:'top-[58%]',
            left:'left-[37.5%]',
            size:'w-[4.5vw]',
        }
    },
    {
        id: 7,
        name: 'side registration',
        description: '',
        activity: '',
        time: '',
        img: 'img/2023/journey/9regis.png',
        landscape: 'img/2023/journeyLS/9_regis.jpg',
        reccommend: [
            {tour: 7},
            {tour: 15},
            {tour: 6},
        ],
        locate:
        {
            top:'top-[70%]',
            left:'left-[41%]',
            size:'w-[3.3vw]',
        }
    },
    {
        id: 8,
        name: 'Cover Walkway',
        description: 'ที่ Cover walkway มีกิจกรรมบรรยายโครงงานแบบ Poster',
        activity: 'Sci Project Poster Presentation',
        time: 'บรรยายโครงงานแบบ Poster ในเวลา 13.00-14.30 น.',
        img: 'img/2023/journey/coverway.png',
        landscape:'img/2023/journeyLS/coverway.jpg',
        reccommend: [
            {tour: 8},
            {tour: 4},
            {tour: 5},
            {tour: 12},
            {tour: 10},
        ],
        locate:
        {
            top:'top-[40%]',
            left:'left-[63%]',
            size:'w-[2.5vw]',
        }
    },
    {
        id: 9,
        name: 'เคาน์เตอร์หอพัก',
        description: 'เพื่อน ๆ สามารถลงทะเบียน School Tour ได้ที่นี่',
        activity: 'School Tour',
        time: 'จัดทั้งสองวันตั้งแต่ 8.00 - 16.00 น.',
        img: 'img/2023/journey/tour.png',
        landscape: 'img/2023/journeyLS/tour.jpg',
        reccommend: [
            {tour: 9},
            {tour: 6},
            {tour: 14},
        ],
        locate:
        {
            top:'top-[39%]',
            left:'left-[36.3%]',
            size:'w-[4.1vw]',
        }
    },
    {
        id: 10,
        name: 'soccer field',
        description: '',
        activity: '',
        time: '',
        img: 'img/2023/journey/soccer_field.png',
        landscape: 'img/2023/journeyLS/soccer_field.jpg',
        reccommend: [
            {tour: 10},
            {tour: 6},
            {tour: 8},
            {tour: 15}
        ],
        locate:
        {
            top:'top-[64%]',
            left:'left-[65%]',
            size:'w-[3.5vw]',
        }
    },
    {
        id: 11,
        name: 'เคาน์เตอร์ห้องสมุด',
        description: 'ที่เคาน์เตอร์ห้องสมุด เรามีนิทรรศการหลักสูตรของ MWIT ซึ่งประกอบด้วย หลักสูตรสาขาวิชา และ กิจกรรมพัฒนาผู้เรียน และมีพื้นที่สำหรับพักผ่อนให้ด้วยนะ',
        activity: 'MWIT CURRICULUM DISCOVERY EXHIBITION และบูธเกมกิจกรรมพัฒนาผู้เรียน',
        time: 'จัดทั้งสองวันตั้งแต่ 9.00 - 16.00 น.',
        img: 'img/2023/journey/library.png',
        landscape:'img/2023/journeyLS/library_2.jpg',
        reccommend: [
            {tour: 11},
            {tour: 2},
        ],
        locate:
        {
            top:'top-[14.5%]',
            left:'left-[28%]',
            size:'w-[3vw]',
        }
    },
    {
        id: 12,
        name: 'front registration',
        description: '',
        activity: '',
        time: '',
        img: 'img/2023/journey/frontregis.png',
        landscape: 'img/2023/journeyLS/front_regis.jpg',
        reccommend: [
            {tour: 12},
            {tour: 5},
            {tour: 8},
        ],
        locate:
        {
            top:'top-[40%]',
            left:'left-[85%]',
            size:'w-[4.5vw]',
        }
    },
    {
        id: 13,
        name: 'ห้องดาราศาสตร์ 3 มิติ',
        description: 'ที่ห้องดาราศาสตร์ 3 มิติ มีกิจกรรมบรรยายพิเศษ และกิจกรรม',
        activity: 'กิจกรรมบรรยายพิเศษ, ',
        time: 'กิจกรรมบรรยายพิเศษ จัดเวลา 13.00 - 15.00 น.,',
        img: 'img/2023/journey/movie_3d.png',
        landscape: 'img/2023/journeyLS/3dMovie_3.jpg',
        reccommend: [
            {tour: 13},
            {tour: 2},
        ],
        locate:
        {
            top:'top-[8.5%]',
            left:'left-[27.7%]',
            size:'w-[3.5vw]',
        }
    },
    {
        id: 14,
        name: 'สนามบาสเกตบอล',
        description: 'ที่สนามบาสเกตบอล เรามีการแสดงของชุมนุมต่างๆ บนเวที ระหว่างการแสดงจะมีการประกาศรางวัลกิจกรรมพัฒนาผู้เรียนควบคู่ไปด้วย',
        activity: 'MWIT CLUB STAGE ในช่วงเวลา 12.45 - 15.45 น. ทั้ง 2 วัน,',
        time: '',
        img: 'img/2023/journey/flag.png',
        landscape: 'img/2023/journeyLS/ground.jpg',
        reccommend: [
            {tour: 14},
            {tour: 1},
            {tour: 2},
            {tour: 3},
            {tour: 9},
        ],
        locate:
        {
            top:'top-[25%]',
            left:'left-[27%]',
            size:'w-[2.5vw]',
        }
    },
    {
        id: 15,
        name: 'ห้องสมาคมผู้ปกครองฯ',
        description: 'ที่ห้องสมาคมฯ มีกิจกรรมพี่ถามน้องตามที่จะให้รุ่นน้องเข้ามาสอบถามเรื่องพี่เรื่องต่างๆ ที่สนใจเป็นแบบเดี่ยว และกลุ่ม',
        activity: 'พี่ถามน้องตอบ',
        time: 'มีกิจกรรมทั้ง 2 วัน เวลา  9.00-12.00 น. และ 13.00-16.00 น.',
        img: 'img/2023/journey/17Building.png',
        landscape: 'img/2023/journeyLS/17build_3.jpg',
        reccommend: [
            {tour: 15},
            {tour: 6},
            {tour: 7},
            {tour: 10}
        ],
        locate:
        {
            top:'top-[89%]',
            left:'left-[50.5%]',
            size:'w-[2.5vw]',
        }
    },
]

  const [color, setcolor] = useState({});
  function togglecolor(eventid) {
    setcolor(prevState => ({
      ...prevState,
      [`${eventid}`]: 'black' ? 'lightblue' : 'black'
    }))
  }
  
  const router = useRouter()
  useEffect(() => {
    
  },[])
  const [enter,setenter] = useState(12)
  const [visit,setvisit] = useState(enter)
  const [show,setshow] = useState(enter)
  useEffect(() => {
    router.query.events &&
    events.find((p) => p.name.replaceAll(' ', '_') === router.query.events)
      ? setvisit(
        events.findIndex(
          (p) => p.name.replaceAll(' ', '_') === router.query.events,
        ))
      : setvisit(12)
  },[router.query.events])
  useEffect(()=>{
    setCurrentIndex(visit)
    setCurrentpic(0)
  },[visit])
  {/*useEffect(()=>{
    router.query.events &&
    events.find((p)=>p.name.replaceAll(' ', '_') === router.query.events)
    ? setshow(
      events.findIndex((p) => p.name.replaceAll(' ', '_') === router.query.events)
      ):setshow({})
  },router.query.events)*/}
  const [currentIndex,setCurrentIndex] = useState(visit)
  const [currentpic,setCurrentpic] =useState(0)
  function prevSlide() {
    const isFirstSlide = currentIndex === visit
    const newIndex = isFirstSlide ? events[visit].reccommend[events[visit].reccommend.length-1].tour: events[visit].reccommend[(currentpic)].tour
    const cpic = (currentpic-1 < 0) ? events[visit].reccommend.length-1:currentpic-1
    setCurrentIndex(newIndex)
    setCurrentpic(cpic)
  }

  function nextSlide() {
    const isLastSlide = currentIndex === events[visit].reccommend[events[visit].reccommend.length - 1].tour
    const newIndex = isLastSlide ? visit: events[visit].reccommend[(currentpic)].tour
    setCurrentIndex(newIndex)
    setCurrentpic((currentpic+1)%(events[visit].reccommend.length))
  }


  function goToSlide(cpic,slideIndex) {
    setCurrentIndex(slideIndex)
    setCurrentpic(cpic)
  }

  const [currentIndex1, setCurrentIndex1] = useState(0);
    return (
      <>
        <Head>
          {/* <!-- HTML Meta Tags --> */}
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
            content={'https://openhouse.mwit.ac.th/img/2023/thumb2023.png'}
          />

          {/* <!-- Twitter Meta Tags --> */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta property='twitter:domain' content='openhouse.mwit.ac.th' />
          <meta property='twitter:url' content={meta.url} />
          <meta name='twitter:title' content={meta.title} />
          <meta name='twitter:description' content={meta.description} />
          <meta
            name='twitter:image'
            content={'https://openhouse.mwit.ac.th/img/2023/thumb2023.png'}
          />
        </Head>
        <div className='w-screen h-[350vh] '>
          <div className='grid justify-items-center font-CS font-bold text-3xl md:text-4xl lg:text-5xl py-12 '>
            Customers Journey
          </div>
          <div className='flew flex-row pb-6'>
            <div className=' grid justify-items-start gap-1 pl-8 md:pl-32 w-fit '>
              <p className='font-CS text-3xl md:text-4xl font-bold text-bmw rounded-xl px-4 py-5 bg-white/40 shadow-lg backdrop-blur-sm '>
                แก้ไขจุดเริ่มต้น
              </p>
              <div className='grid grid-cols-3 pt-5'>
                <div className='pr-2'>
                  <Link
                    key = {"ent1"}
                    scroll={false}
                    visit
                    href={{
                      pathname: '/CustomersJourney',
                      query: {
                        ...router.query,
                        events: events[7].name.replaceAll(' ', '_'),
                      },
                    }}
                    //onClick={()=>setshow(s.tour)}
                    passHref
                  >
                    <a className='col-span-1 font-CS text-xl md:text-2xl font-bold text-bmw rounded-xl px-4 py-3 bg-orange-400 shadow-lg backdrop-blur-sm'>
                      ประตูข้าง
                    </a>
                  </Link>
                </div>

                <div className='inline-block px-2'>
                  <Link
                    key = {"ent2"}
                    scroll={false}
                    visit
                    href={{
                      pathname: '/CustomersJourney',
                      query: {
                        ...router.query,
                        events: events[12].name.replaceAll(' ', '_'),
                      },
                    }}
                    //onClick={()=>setshow(s.tour)}
                    passHref
                  >
                    <a className='col-span-1 font-CS text-xl md:text-2xl font-bold text-bmw rounded-xl px-4 py-3 bg-white/40 shadow-lg backdrop-blur-sm'>
                      ประตูหน้า
                    </a>
                  </Link>
                </div>
                <div className='pl-2'>
                  <Link
                    key = {"ent1"}
                    scroll={false}
                    visit
                    href={{
                      pathname: '/CustomersJourney',
                      query: {
                        ...router.query,
                        events: events[0].name.replaceAll(' ', '_'),
                      },
                    }}
                    //onClick={()=>setshow(s.tour)}
                    passHref
                  >
                    <a className='col-span-1 font-CS text-xl md:text-2xl font-bold text-bmw rounded-xl px-4 py-3 bg-orange-400 shadow-lg backdrop-blur-sm'>
                      ดูทั้งหมด
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='grid justify-items-center'>          
            <div className='grid justify-items-center justify-center gap-1 bg-white/40 shadow-lg backdrop-blur-sm px-4 py-5 rounded-xl w-5/6'>
              <div className='font-CS text-3xl md:text-4xl font-bold text-bmw'>
                {"แผนที่แนะนำการเข้าชม MWIT OPENHOUSE"}
              </div>
              <div className='grid relative grid-cols-1'>
                <div className='col-span-1 relative max-w-max '>
                  <img
                    className='w-full max-h-fit'
                    src={'img/2023/journey/base.png'}
                  />
                  <a>
                    <AnimatePresence exitBeforeEnter>
                      <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className= {`absolute ${events[visit].locate.size} ${events[visit].locate.top} ${events[visit].locate.left} translate-y-[-50%] translate-x-[-50]`}
                        src={events[visit].img}
                      />
                    </AnimatePresence>
                  </a>
                  {events[visit].reccommend.map((s,sID)=>(
                    <>
                      <Link
                        key = {sID}
                        scroll={false}
                        visit
                        href={{
                          pathname: '/CustomersJourney',
                          query: {
                            ...router.query,
                            events: events[s.tour].name.replaceAll(' ', '_'),
                          },
                        }}
                        //onClick={()=>setshow(s.tour)}
                        passHref
                      >
                        <a className=''>
                          <AnimatePresence>
                            <motion.img
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5 }}
                              key={`${show}-${s.tour}`}
                              className= {`absolute ${events[s.tour].locate.size} ${events[s.tour].locate.top} ${events[s.tour].locate.left} translate-y-[-50%] translate-x-[-50]`}
                              src={events[s.tour].img}
                            />
                          </AnimatePresence>
                        </a>
                      </Link>
                    </>
                  ))}
                  
                </div>
              </div>
              
            </div>
          </div>
          <div>
            <div className='w-[80vw] h-[60vw] m-auto py-16 px-4 relative group'>
              <div
                style={{ backgroundImage: `url(${events[currentIndex].landscape})`  }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-100'
              >
              </div>
              {/* Left Arrow */}
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} size='sm' />
              </div>
              {/* Right Arrow */}
              <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} size='sm' />
              </div>
              
              <div className='flex justify-center top-4 py-2'>
                {/*<div
                  onClick={() => goToSlide(visit)}
                  className='text-2xl cursor-pointer px-2'
                >
                    <FontAwesomeIcon icon={faCircle} size='xs' />
                </div>*/}  
                {events[visit].reccommend.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex,slide.tour)}
                    className='text-2xl cursor-pointer px-2'
                  >
                    <FontAwesomeIcon icon={faCircle} size='xs' />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className='grid justify-items-center justify-center gap-1 w-screen pt-12 w-screen'>
            <div className='bg-white/40 shadow-lg backdrop-blur-sm rounded-xl w-5/6 px-6 py-6'>
              <span className='font-CS text-2xl md:text-4xl font-bold text-bmw justify-center'>
                {`ขณะนี้คุณอยู่ที่:${events[visit].name}`}
              </span>
              <div className='grid justify-center w-fit'>
                <div className='grid grid-row-span-3'>
                <p className='grid justify-items-sta font-CS text-2xl py-[3vh] px-6 text-justify'>
                  {events[currentIndex].description}
                </p>
                <span className='grid justify-items-start font-CS text-2xl py-[3vh] px-6 text-justify'>
                  {`กิจกรรม: ${events[currentIndex].activity}`}
                </span>
                <p className='grid justify-items-staer font-CS text-2xl py-[3vh] px-6 text-justify'>
                  {`ช่วงเวลาที่จัดกิจกรรม: ${events[currentIndex].time}`}
                </p>
                </div>
              </div>
              
            </div>
          </div>
          <div className='grid justify-items-center justify-center gap-1 w-screen pt-12 w-screen'>
            <div className='bg-white/40 shadow-lg backdrop-blur-sm rounded-xl w-5/6 px-6 py-6'>
              <span className='font-CS text-2xl md:text-4xl font-bold text-bmw justify-center'>
                {`ขณะนี้คุณกำลังดู:${events[currentIndex].name}`}
              </span>
              <div className='grid justify-center w-fit'>
                <div className='grid grid-row-span-3'>
                <p className='grid justify-items-sta font-CS text-2xl py-[3vh] px-6 text-justify'>
                  {events[currentIndex].description}
                </p>
                <span className='grid justify-items-start font-CS text-2xl py-[3vh] px-6 text-justify'>
                  {`กิจกรรม: ${events[currentIndex].activity}`}
                </span>
                <p className='grid justify-items-staer font-CS text-2xl py-[3vh] px-6 text-justify'>
                  {`ช่วงเวลาที่จัดกิจกรรม: ${events[currentIndex].time}`}
                </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </>
      
    )
} 