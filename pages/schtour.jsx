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

const place = [
  {
    name: 'ศูนย์กีฬา',
    img: '01',
    ct: [{ vid: 'Lgl308DxpGI' }],
  },
  {
    name: 'หลวงพ่อวัดไร่ขิง',
    img: '02',
    ct: [{ vid: 'x1kT3cpxHCw' }],
  },
  {
    name: 'สนามหน้าโรงเรียน',
    img: '03',
    ct: [
      { name: 'สนามฟุตบอล', vid: 'KHCni-9hUCk' },
      { name: 'สนามเปตอง', vid: 'anpLXV8Cl9o' },
      { name: 'สแตนด์เชียร์', vid: 'lxeLmFjNXt0' },
      { name: 'ลู่วิ่ง', vid: 'X1YbBZzw-pU' },
    ],
  },
  {
    name: 'อาคารโรงอาหาร',
    img: '04',
    ct: [
      {
        name: 'โรงอาหาร',
        vid: 'r_95iMKGx1A',
      },
      {
        name: 'ร้านค้าสมาคมผู้ปกครองฯ',
        vid: 'Cq4VikX15GE',
      },
      {
        name: 'หอประชุมพระอุบาลีคุณูปมาจารย์ (ปัญญา อินฺทปญฺโญ)',
        vid: 'GxJuGWyPMjo',
      },
    ],
  },
  {
    name: 'หอพักนักเรียนชาย (หอ 9)',
    img: '05',
    ct: [
      { name: 'ห้องซ้อมดนตรี', vid: '2iutHSf9IsA' },
      { name: 'ห้องนาฏศิลป์', vid: 'NEVzhT8c1To' },
      { name: 'Study Room (หอชาย)', vid: 'lyF4nOdumIQ' },
      { name: 'ภายในหอชาย', vid: 'oKvfq6seB3M' },
      { name: 'ใต้หอชาย', vid: 'Y0_V2zO48K0' },
    ],
  },
  {
    name: 'เครื่องซักผ้าและห้องผ้า',
    img: '06',
    ct: [{ vid: 'r7oRs_5nsig' }],
  },
  {
    name: 'สวนอาทิตย์',
    img: '07',
    ct: [{ vid: 'sJXnh5Ch-8g' }],
  },
  {
    name: 'สนามฟุตซอล',
    img: '08',
    ct: [{ vid: 'bcjpr6p25ZU' }],
  },
  {
    name: 'หอพักนักเรียนหญิง (หอ 7 และหอ 8)',
    img: '09',
    ct: [
      { name: 'ภายในหอพักหญิง', vid: '35BDhYbEwxQ' },
      { name: 'Common Room (หอหญิง)', vid: 'zzOkuBA3ZaE' },
    ],
  },
  {
    name: 'ห้องพยาบาล',
    img: '10',
    ct: [{ vid: 'bqm29vSCm38' }],
  },
  {
    name: 'ห้องครัว',
    img: '11',
    ct: [{ vid: 'ScCD_XKLDUg' }],
  },
  {
    name: 'อาคารมหิดลวิทยานุสรณ์ 1',
    img: '12',
    ct: [
      { name: 'ห้องเรียน', vid: 'PeQdKiCwXHk' },
      { name: 'ห้องสตูดิโอ', vid: 'PlMCzMuW4j4' },
      { name: 'ห้องประชุม ดร.โกวิท วรพิพัฒน์', vid: 'OET3I6VIEF4' },
    ],
  },
  {
    name: 'อาคารมหิดลวิทยานุสรณ์ 2',
    img: '13',
    ct: [
      { name: 'Smart Classroom', vid: '5jWbB5BRKpc' },
      { name: 'ห้องดาราศาสตร์สามมิติ', vid: '8yyI-1XNGN4' },
      {
        name: 'ห้องประชุม ศาสตราจารย์เกียรติคุณ นายแพทย์ ดร.ณัฐ ภมรประวัติ',
        vid: 'zy-_1R6bkkA',
      },
    ],
  },
  {
    name: 'ศูนย์วิทยบริการ (ห้องสมุด)',
    img: '14',
    ct: [{ vid: 'upzRfygdU-w' }],
  },
  {
    name: 'อาคารมหิดลวิทยานุสรณ์ 3',
    img: '15',
    ct: [{ name: 'ห้องปฏิบัติการวิทยาศาสตร์', vid: 'P4gs717jLM0' }],
  },
  {
    name: 'โรงฝึกงานและโรงเพาะชำ',
    img: '16',
    ct: [
      { name: 'โรงฝึกงาน', vid: '03knMU5FOa8' },
      { name: 'โรงเพาะชำ', vid: 'udvTHgumfhk' },
    ],
  },
]

export default function Tour() {
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
    url: 'tour',
    description:
      'MWIT School Tour เปิดบ้านให้ทุกท่านได้มาเยี่ยมชมโรงเรียนมหิดลวิทยานุสรณ์แบบออนไลน์ สามารถรับชมได้ 24 ชั่วโมงผ่านเว็บไซต์ MWIT Open House ได้เลย | MWIT Open House 2022',
    img: 'img/ogimage.png',
}

  const timetb = [
    {
      date: '25 สิงหาคม 2565',
      head: {
        title: 'Class @MWIT',
        desc: 'เรียนรู้การจัดการเรียนการสอนของ MWIT ผ่านกิจกรรมคุณครูแต่ละสาขาวิชา',
      },
      slot: [
        
      ],
    },
    {
      date: '26 สิงหาคม 2565',
      head: {
        title: 'Class @MWIT',
        desc: 'เรียนรู้การจัดการเรียนการสอนของ MWIT ผ่านกิจกรรมคุณครูแต่ละสาขาวิชา',
      },
      slot: [
        
      ],
    },
  ]

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
              School Tour
            </a>
          </Link>
        </div>
        <div className=" container px-8 md:px-24 lg:px-36 pt-5 max-w-[100rem] md:max-w-[100rem] lg:max-w-[100rem] mx-auto pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-3 mt-4">
            <div className="flex flex-col items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow rounded-t-2xl hover:bg-yellow-100">
              <span className='font-CS font-bold text-sky-500 text-4xl md:text-2xl lg:text-4xl pt-4'>สายที่ 1</span>
              <span className='font-CS text-gray-500 text-lg md:text-lg lg:text-xl'>(เหมาสำหรับนักเรียนชาย)</span>
              <ul className='mt-2 mb-4 font-CS font-bold text-black text-2xl md:text-3xl lg:text-3xl list-decimal'>
                <li>ห้องนอนหอชาย</li>
                <li>Study Room</li>
                <li>ห้องดนตรี</li>
                <li>ห้องผ้า</li>
                <li>ห้องครัว</li>
                <li>ห้องพยาบาล</li>
              </ul>
            </div>
            <div className="flex flex-col items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow rounded-t-2xl hover:bg-yellow-100">
              <span className='font-CS font-bold text-pink-500 text-4xl md:text-2xl lg:text-4xl pt-4'>สายที่ 2</span>
              <span className='font-CS text-gray-500 text-lg md:text-lg lg:text-xl'>(เหมาสำหรับนักเรียนหญิง)</span>
              <ul className='mt-2 mb-4 font-CS font-bold text-black text-2xl md:text-3xl lg:text-3xl list-decimal'>
                <li>ห้องนอนหอหญิง</li>
                <li>ห้องพยาบาล</li>
                <li>ห้องผ้า</li>
                <li>ห้องครัว</li>
              </ul>
            </div>
            <div className="flex flex-col items-center w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow rounded-t-2xl hover:bg-yellow-100">
              <span className='font-CS font-bold text-bmw text-4xl md:text-2xl lg:text-4xl pt-4'>สายที่ 3</span>
              <ul className='mt-2 mb-4 font-CS font-bold text-black text-2xl md:text-3xl lg:text-3xl list-decimal'>
                <li>ศูนย์วิทยบริการ</li>
                <li>ห้องศิลปะ</li>
                <li>โรงฝึกงาน</li>
              </ul>
            </div>
          </div>
          <div className='font-CS font-bold text-bmw text-xl md:text-2xl lg:text-3xl pt-8 place-content-center'>
            <center>
              <span>เดินชมโรงเรียนแบบ On-Site วันที่ 25-26 สิงหาคม 2566 เวลา 8.00 - 15.40 น.</span>
              <br />
              <span>ณ โรงเรียนมหิดลวิทยานุสรณ์</span>
            </center>
          </div>
        </div>
        <div className="pt-8"></div>
      </main>
    </>
  )
}
