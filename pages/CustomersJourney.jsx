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
/*const events = [
  {
    name: '',
    description: '',
    location: '',
    time: '',
    img: ''
  },
]
const eventfri = [
  {
    name: '',
    description: '',
    location: '',
    time: '',
    img: ''
  },
]

const eventsat = [
  {
    name: '',
    description: '',
    location: '',
    time: '',
    img: ''
  },
]*/
export default function Customerjourney() {
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
        <div className='w-screen h-screen'>
          <div className='grid justify-items-center font-CS font-bold text-3xl md:text-4xl lg:text-5xl py-12 '>
            Customer's Journey
          </div>
          <div className='grid justify-items-center'>          
            <div className='grid justify-items-center justify-center gap-1 bg-white/40 shadow-lg backdrop-blur-sm px-4 py-5 rounded-xl w-5/6'>
              <div className='font-CS text-3xl md:text-4xl font-bold text-bmw'>
                {"แผนที่แนะนำการเข้าชม MWIT OPENHOUSE"}
              </div>
              <div className='grid grid-cols-2'>
                <div className='col-span-1'>
                <img
                  className='w-full'
                  src={'/img/tour/bg.webp'}
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      
    )
}