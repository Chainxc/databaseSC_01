import Head from 'next/head'
/*import Modal from "../components/Modal";*/
import { Fragment, useEffect, useRef, useState } from 'react'
import { AnimateSharedLayout, motion, useScroll } from 'framer-motion'
import { clamp } from 'lodash'
import Link from 'next/link'
import ActCard from '../components/actcard'
import Image from 'next/image'
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
const events = [
  
  {
    id: '',
    name: '',
    description: '',
    location: '',
    time: '',
    img: '',
    reccommend :[],
    locate:
      {
        top:'',
        left:'',
        size:'',
      }

  },
  {
    id: '1',
    name: 'กิจกรรมนำเสนอโครงงาน กิจกรรมเปิดบ้าน',
    description: '2 งาน นำเสนอโครงงาน กิจกรรมเปิดบ้าน',
    location: 'ตึก 1',
    time: 'นำเสนอโครงงานช่วง 9-12, กิจกรรมเปิดบ้าน 9-16',
    img: 'img/2023/journey/1Building.png',
    reccommend :[2,3,4],
    locate:
      {
        top:'21%',
        left:'15.5%',
        size:'3.5vw',
      }
  },
  {
    id: '2',
    name: 'name',
    description: 'description',
    location: 'location',
    time: 'time',
    img: 'img/2023/journey/2Building.png',
    reccommend :[1,5,6],
    locate:
      {
        top:'12.7%',
        left:'22%',
        size:'4.5vw',
      }
  },
  {
    id: '3',
    name: 'name',
    description: 'description',
    location: 'location',
    time: 'time',
    img: 'img/2023/journey/3Building.png',
    reccommend :[4,5,6],
    locate:
      {
        top:'15%',
        left:'37%',
        size:'4.5vw',
      }
  },
  {
    id: '4',
    name: 'name',
    description: 'description',
    location: 'location',
    time: 'time',
    img: 'img/2023/journey/5Building.png',
    reccommend :[1,5,6],
    locate:
      {
        top:'8%',
        left:'56%',
        size:'4.5vw',
      }
  },
  {
    id: '5',
    name: 'name',
    description: 'description',
    location: 'location',
    time: 'time',
    img: 'img/2023/journey/6Building.png',
    reccommend :[1,3,6],
    locate:
      {
        top:'12%',
        left:'77%',
        size:'4.5vw',
      }
  },
  {
    id: '6',
    name: 'name',
    description: 'description',
    location: 'location',
    time: 'time',
    img: 'img/2023/journey/9Building.png',
    reccommend :[1,5,6],
    locate:
      {
        top:'58%',
        left:'77%',
        size:'4.5vw',
      }
  },
]

export default function Customerjourney() {
  const [event, seteventVisible] = useState({});
  const toggleevent = (eventid) => {
    seteventVisible(prevState => ({
      ...prevState,
      [`${eventid}`]: !prevState[`${eventid}`]
    }));
  };
  const changeColor = (id) => {
    const colors = ['rgba(255, 0, 0, 1)', 'rgba(0, 255, 0, 0.8)', 'rgba(0, 0, 255, 0.6)'];
    const currentIndex = colors.indexOf(document.getElementById(id).style.backgroundColor);
    const newIndex = (currentIndex + 1) % colors.length;
    const newColor = colors[newIndex];

    document.getElementById(id).style.backgroundColor = newColor;
  };
  
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
        <div className='w-screen h-[200vh]'>
          <div className='grid justify-items-center font-CS font-bold text-3xl md:text-4xl lg:text-5xl py-12 '>
            Customers Journey
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
                  <div>
                    <a
                      className='ds-btn ds-btn-sm ds-btn-secondary hover:scale-105 transition-all duration-200 font-IBMPlex font-bold md:ds-btn-md md:text-xl lg:ds-btn-lg lg:text-2xl space-x-2'
                      target='_blank'
                      rel='noopener noreferrer'
                    >  
                      <button  className="cursor-pointer ">
                        <img
                          type='button'
                          id='test'
                          className='bg-origin-padding bg-black rounded-md p-[0.3vw] absolute w-[4.1vw] top-[39%] left-[36.3%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/tour.png'
                          onClick={() => changeColor('test')}
                        />
                        <img
                          className='absolute w-[4.5vw] top-[21%] left-[15.5%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/1Building.png'
                        />
                        <img
                          className='absolute  w-[4.5vw] top-[12.7%] left-[22%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/2Building.png'
                        />
                        <img
                          className='absolute w-[4.5vw] top-[15%] left-[37%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/3Building.png'
                        />
                        <img
                          className='absolute w-[4.5vw] top-[8%] left-[56%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/5Building.png'
                        />
                        <img
                          className='absolute w-[4.5vw] top-[12%] left-[77%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/6Building.png'
                        />
                        <img
                          className='absolute w-[4.5vw] top-[58%] left-[37.5%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/9Building.png'
                        />
                        <img
                          className='absolute w-[3.3vw] top-[70%] left-[41%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/9regis.png'
                        />
                        <img
                          className='absolute w-[2.5vw] top-[40%] left-[63%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/coverway.png'
                        />
                        <img
                          className='absolute w-[4.5vw] top-[81%] left-[42.36%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/entrance_rear.png'
                        />
                        <img
                          className='absolute w-[8vw] top-[35.6%] left-[78%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/front_entrance.png'
                        />
                        <img
                          className='absolute w-[3vw] top-[14.5%] left-[28%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/library.png'
                        />
                        <img
                          className='absolute w-[3vw] top-[40%] left-[85%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/frontregis.png'
                        />
                        <img
                          className='absolute w-[3.5vw] top-[8.5%] left-[27.7%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/movie_3d.png'
                        />
                        <img
                          className='absolute w-[3.5vw] top-[64%] left-[65%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/soccer_field.png'
                        />
                        <img
                          className='absolute w-[3.5vw] top-[8.5%] left-[27.7%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/movie_3d.png'
                        />
                        <img
                          className='absolute w-[2.5vw] top-[25%] left-[27%] translate-y-[-50%] translate-x-[-50]'
                          src='img/2023/journey/flag.png'
                        />
                      </button>                    
                        
                      
                          
                    </a>
                    
                  </div>
                </div>
                {events.map((p,pID) => (
                  <>
                    <div key={pID} className='grid justify-self-center justify-items-center justify-center gap-1 bg-white/40 shadow-lg backdrop-blur-sm px-4 py-5 rounded-xl w-[60%]'>
                      {p.description}
                    </div>
                  </>
                )
                )}
              </div>
            </div>
          </div>
        </div>
      </>
      
    )
}