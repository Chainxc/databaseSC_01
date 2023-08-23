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
          <Link scroll={false} href={'/schtour'}>
            <a className='font-CS font-bold text-bmw text-5xl md:text-4xl lg:text-5xl'>
              "น้อง" ถาม "พี่" ตอบ
            </a>
          </Link>
        </div>
        <div className='ml-32 mr-32'>
          <center>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 lg:gap-3 mt-4 ">
              <div className="flex flex-col items-center w-full max-w-sm pt-5 pb-5 col-span-1">
                <img
                  className='w-full'
                  src={
                    '/img/catimg/1.jpg'
                  }
                />
              </div>
              <div className="flex flex-col items-center w-full max-w-sm pt-5 pb-5 col-span-2">
                <div className="border border-1 border-black rounded bg-white w-full h-full">
                  sdsdd
                </div>
              </div>
              
            </div>
          </center>
        </div>
      </main>
    </>
  )
}
