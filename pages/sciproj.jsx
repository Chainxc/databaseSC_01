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
const meta = {
  title: 'Science Project | MWIT Open House 2023',
  url: 'Science Project',
  description:
    'description',
  img: 'ogimage.png',
}
export default function SciProject(){
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
      <div className='w-full bg-cover bg-[url(/img/2023/bluefade.webp)] bg-repeat sm:bg-fixed min-h-[180vh] space-y-2 '>
      <span className='flex justify-center font-CS font-bold text-2xl md:text-3xl lg:text-4xl pt-16 text-white'>
              Science project
          </span>
      </div>
    </div>
    </>
  )
}
