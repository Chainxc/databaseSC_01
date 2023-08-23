import {
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faCircleXmark,
  faPersonChalkboard,
  faLightbulb,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { Fragment, useEffect, useState } from 'react'
import MetaHeader from '../components/metaHeader'
import Head from 'next/head'
import TourCard from '../components/tourcard'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Link from 'next/link'

const motionProp = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 },
}


export default function meetMWIT() {
  const [descriptionVisible, setDescriptionVisible] = useState({});
  const toggleDescription = (dateIndex, slotIndex, actIndex) => {
    setDescriptionVisible(prevState => ({
      ...prevState,
      [`${dateIndex}-${slotIndex}-${actIndex}`]: !prevState[`${dateIndex}-${slotIndex}-${actIndex}`]
    }));
  };
  const [selected, setSelected] = useState(0)
  const [nameOpen, setNameOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    router.query.place &&
    place.find((p) => p.name.replaceAll(' ', '_') === router.query.place)
      ? setSelected(
          place.findIndex(
            (p) => p.name.replaceAll(' ', '_') === router.query.place,
          ),
        )
      : setSelected(0)
  }, [router.query.place])

const meta = {
    title: 'MWIT School Tour | MWIT Open House 2022',
    url: 'schtour',
    description:
      'MWIT School Tour เปิดบ้านให้ทุกท่านได้มาเยี่ยมชมโรงเรียนมหิดลวิทยานุสรณ์แบบออนไลน์ สามารถรับชมได้ 24 ชั่วโมงผ่านเว็บไซต์ MWIT Open House ได้เลย | MWIT Open House 2022',
    img: 'img/ogimage.png',
}

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
          content='https://openhouse.mwit.ac.th/img/ogimage.png'
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta property='twitter:domain' content='openhouse.mwit.ac.th' />
        <meta property='twitter:url' content={meta.url} />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta
          name='twitter:image'
          content='https://openhouse.mwit.ac.th/img/ogimage.png'
        />
      </Head>

      <main className='w-full bg-white/20'>
        <div className='flex flex-col text-black items-center mx-auto justify-self-center w-full max-w-6xl px-6 pt-10 pb-4'>
          <a className='font-CS font-bold text-bmw text-3xl md:text-4xl lg:text-5xl'>
            "น้อง" ถาม "พี่" ตอบ
          </a>
        </div>
        <div className='flex flex-col relative overflow-y-hidden max-w-6xl mx-auto px-6 justify-center gap-4 pt-4 pb-10'>
          <a className='w-full relative group shadow-lg flex flex-col md:flex-row rounded-xl overflow-hidden min-h-[15rem] justify-end'>
            <div
              style={{ backgroundImage: `url("/img/catimg/1.jpg")` }}
              className='relative md:absolute bg-cover bg-bottom bg-no-repeat w-full aspect-[16/5] md:inset-0'
            />
            <div className='w-full md:w-fit md:max-w-md bg-white/70 group-hover:bg-yellow-100/90 transition-colors duration-300 backdrop-blur-md px-4 py-3 flex flex-col'>
              <span className='font-CS font-semibold text-xl md:text-2xl text-bmw'>
                "น้อง" ถาม "พี่" ตอบ
              </span>
              <span className='font-IBMPlex font-semibold text-sm md:text-base text-gray-700'>
                🙌🏻 ใครที่อยากรู้ว่าพี่ ๆ MWIT เตรียมตัวสอบเข้ายังไง การใช้ชีวิตในโรงเรียนเป็นยังไง เรียนอะไรบ้าง พลาดกิจกรรมนี้ไม่ได้แล้ว!<br></br>
                💬 กิจกรรมที่เปิดโอกาสให้มีการพูดคุย ถามตอบ ระหว่างรุ่นน้องและรุ่นพี่ คลายข้อสงสัย และทำให้รู้จักโรงเรียนได้ดีมากขึ้น<br></br>
                🔥มีทั้งรูปแบบการคุยแบบ 1:1 และกลุ่ม 🔥
              </span>
            </div>
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3 mt-4 ml-5 mr-5 lg:ml-16 lg:mr-16">
          <div className="flex flex-col items-center w-full bg-white border border-gray-200 rounded-lg shadow rounded-t-2xl hover:bg-sky-100">
            <img src="/img/catimg/2.jpg" className='rounded' /> 
          </div>
          <div className="flex flex-col items-center w-full bg-white border border-gray-200 rounded-lg shadow rounded-t-2xl hover:bg-pink-100">
            <img src="/img/catimg/3.jpg" className='rounded' />
          </div>
          <div className="mt-5"></div>
        </div>
        <center>
          <span className='font-CS font-bold text-bmw text-3xl md:text-4xl lg:text-5xl'>
            พบกันได้ที่ .................
          </span>
          <div className="mt-16"></div>
          <span className='font-CS font-bold text-bmw text-3xl md:text-4xl lg:text-5xl'>
            กิจกรรมบรรยายพิเศษ
          </span>
        </center>
        
      </main>
    </>
  )
}
