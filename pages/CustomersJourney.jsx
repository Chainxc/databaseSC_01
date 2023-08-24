import Head from 'next/head'
/*import Modal from "../components/Modal";*/
import { Fragment, use, useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion, useScroll,AnimatePresence } from 'framer-motion'
import { clamp } from 'lodash'
import Link from 'next/link'
import ActCard from '../components/actcard'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {events} from './Journeypath'
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
        <div className='w-screen h-[300vh] '>
          <div className='grid justify-items-center font-CS font-bold text-3xl md:text-4xl lg:text-5xl py-12 '>
            Customers Journey
          </div>
          <div className='flew flex-row pb-6'>
            <div className=' grid justify-items-start gap-1 pl-8 md:pl-32 w-fit '>
              <p className='font-CS text-3xl md:text-4xl font-bold text-bmw rounded-xl px-4 py-5 bg-white/40 shadow-lg backdrop-blur-sm '>
                แก้ไขจุดเริ่มต้น
              </p>
              <div className='grid grid-cols-3 pt-3'>
                <div className=''>
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

                <div className='inline-block'>
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
                <div className=''>
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
            <div className='max-w-[640px] max-h-[480px] h-screen min-w-max w-[16rem] md:w-[32rem] m-auto py-16 px-4 relative group'>
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
                {`ขณะนี้คุณกำลังดู:${events[currentIndex].name}`}
              </span>
              <div className='grid justify-center w-fit'>
                <div className='grid grid-row-span-3'>
                <p className='grid justify-items-sta font-CS text-2xl py-[3vh] px-6 text-justify'>
                  {events[currentIndex].description}
                </p>
                <span className='grid justify-items-start font-CS text-2xl py-[3vh] px-6 text-justify'>
                  {`กิจกรรมภายใน: ${events[currentIndex].activity}`}
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