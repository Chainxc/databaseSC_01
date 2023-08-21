import { faFlaskVial } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import MetaHeader from '../../components/metaHeader'

export default function Biology() {
  const meta = {
    title:
      'สาขาวิชาชีววิทยาและวิทยาศาสตร์สุขภาพ | Virtual Lab & Activity | MWIT Open House 2022',
    url: 'lab/biology',
    description:
      'เรียนรู้เกี่ยวกับสิ่งมีชีวิต ดีเอ็นเอ ส่วนของสมองมนุษย์ และการเล่นกีฬาผ่านกิจกรรมและคลิปวิดีโอต่าง ๆ เพื่อตอบคำถามลุ้นรับของรางวัลอีกมากมาย | MWIT Open House 2022',
    img: 'ogimage.png',
  }
const peData = [
    {
      name: 'กิจกรรม: เรียนรู้การตีลูกหน้ามือ ในกีฬาแบดมินตัน',
      desc: 'โดย อ.นริศรา หาหอม และ อ.ธิษณะ ชอบธรรม',
      vid: 'https://www.youtube.com/embed/LP4QcGFob8s?modestbranding=1&color=white&iv_load_policy=3',
      button: [
        {
          name: 'ชมวิดีโอ',
          href: 'https://youtu.be/LP4QcGFob8s',
          icon: faVideo,
        },
      ],
    },
    {
      name: 'กิจกรรม: เรียนรู้การตีลูกหลังมือ ในกีฬาแบดมินตัน',
      desc: 'โดย อ.นริศรา หาหอม และ อ.ธิษณะ ชอบธรรม',
      vid: 'https://www.youtube.com/embed/ugHg0oWE5Ps?modestbranding=1&color=white&iv_load_policy=3',
      button: [
        {
          name: 'ชมวิดีโอ',
          href: 'https://youtu.be/ugHg0oWE5Ps',
          icon: faVideo,
        },
      ],
    },
    {
      name: 'กิจกรรม: นอกห้องเรียนของ P.E.',
      desc: 'โดย อ.อาริตา ปลื้มถนอม และ อ.สุชาวดี บูรณสมภพ',
      vid: 'https://drive.google.com/file/d/141M6Ov2axR9U15yxhel0H2T4j_BHoP2S/preview',
      button: [
        {
          name: 'ชมวิดีโอ',
          href: 'https://drive.google.com/file/d/141M6Ov2axR9U15yxhel0H2T4j_BHoP2S/view',
          icon: faVideo,
        },
      ],
    },
  ]
  return (
    <>
      <MetaHeader meta={meta} />

      <main className='w-full bg-bvl/60'>
        <div className='flex flex-col text-center text-black items-center mx-auto justify-self-center w-full max-w-6xl px-6 pt-10 pb-4'>
          <span className='font-CS font-bold text-bmw text-3xl md:text-4xl lg:text-5xl'>
          สาขาวิชาชีววิทยาและวิทยาศาสตร์สุขภาพ
          </span>
          <span className='font-CS font-bold text-bbk text-xl md:text-2xl lg:text-3xl'>
            Lab & Activities
          </span>
        </div>
        <div className='flex flex-col relative overflow-y-hidden max-w-6xl mx-auto px-6 justify-center gap-4 pt-4 pb-10'>
          <div className='flex relative flex-col gap-2 items-center shadow-lg py-3 px-4 bg-pink-200/40 backdrop-blur-md rounded-xl'>
            <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center mt-2'>
            กิจกรรม OPH ฐานชีววิทยา
            </span>
            <bc>ชื่อกิจกรรม : Who ไคร้ข่า</bc>
            <div className='grid grid-flow-row md:grid-flow-col gap-4 justify-items-center'>
              <img
              /*  src={process.env.CDN_URL + '/img/lab/' + 'mathact.webp'}
                className='w-full max-w-sm rounded-xl' */
              />
              <div className='flex flex-col justify-center gap-2'>
                <span className='font-IBMPlexLoop text-sm md:text-base'>
                มาช่วยกันร่วมตามหาฆาตกร ใคร!เป็น!คน!ท า!ไปด้วยกัน เพราะ
                หลักฐานที่อยู่ รหัสลับ กลอุบาย การต่อรองผู้มองเห็นความจริง มีเพียงหนึ่งเดียวถึงตัวจะเป็นเด็ก แต่สมองเป็น
                ผู้ใหญ่ชื่อของเขาคือยอดนักสืบ CSI
                </span>
                <span className='font-IBMPlexLoop text-sm md:text-base font-semibold'>
                  พบกับนักเรียนปัจจุบัน ในช่วงเวลาดังนี้
                </span>
                <ol className='font-IBMPlexLoop text-sm md:text-base list-inside list-disc space-y-1'>
                  <li>จำนวนผู้เข้าร่วม : 20 คน</li>
                  <li>
                  สถานที่จัด: 3401, 3403
                  </li>
                   <li>ของรางวัล: เครื่องเขียน</li>
                </ol>
                <Link
                  href={
                    'https://app.gather.town/app/RJ7jsDxnstdu3JVS/MWIT_MathCom'
                  }
                >
                  <a
                    target='_blank'
                    rel='noopener noreferrer'
                    className='self-center text-sm md:text-base flex gap-1 items-center mt-2 px-3 py-1 rounded-full font-IBMPlex font-semibold bg-ymw/60 hover:bg-ymw transition-colors duration-300'
                  >
                    <FontAwesomeIcon icon={faFlaskVial} className='w-[1em]' />
                    <span>เข้าร่วมกิจกรรม</span>
                  </a>
                </Link>
              </div>
            </div>
            <Link href={'/lab'}>
              <a className='absolute text-sm md:text-base left-3 font-IBMPlex font-semibold text-gray-600 hover:text-black transition-colors duration-300 -top-4 bg-purple-300/60 hover:bg-purple-300/80 rounded-full py-1 px-3'>
                {'< Back'}
              </a>
            </Link>
          </div>
        </div>
        
        <div className='flex relative flex-col gap-2 items-center shadow-lg py-3 px-4 bg-white backdrop-blur-md rounded-xl'>
            <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center'>
              กลุ่มสาระสุขศึกษาและพลศึกษา
            </span>
            <div className='grid grid-flow-row md:grid-flow-col gap-4 justify-items-center'>
              <div className='flex flex-col justify-center gap-2'>
                <span className='font-IBMPlexLoop text-sm md:text-base font-semibold'>
                  หมวดพลศึกษาจะมีการเรียนรู้เกี่ยวกับการเล่นกีฬาแบดมินตัน
                  และกิจกรรมนอกห้องเรียน
                </span>

                <ol className='font-IBMPlexLoop text-sm md:text-base list-inside list-disc space-y-1'>
                  {peData.map((b, bi) => (
                    <li key={bi}>{b.name}</li>
                  ))}
                </ol>
                <span className='font-IBMPlexLoop text-red-500 text-center text-sm md:text-base font-semibold'>
                  หลังชมวิดีโอแล้วสามารถร่วมตอบคำถามลุ้นรับรางวัล
                </span>
              </div>
            </div>
            <Link
              href={
                'https://docs.google.com/forms/d/e/1FAIpQLSfEwCsL0_sxIsb4pAt_JSO-nj-A9_v5L51y1OTAIalSRhVoqw/viewform'
              }
            >
              <a
                target='_blank'
                rel='noopener noreferrer'
                className='self-center text-sm md:text-base flex gap-1 items-center mt-2 px-3 py-1 rounded-full font-IBMPlex font-semibold bg-ymw/60 hover:bg-ymw transition-colors duration-300'
              >
                <FontAwesomeIcon icon={faFileImport} />
                <span>ร่วมตอบคำถามลุ้นรางวัล</span>
              </a>
            </Link>
          </div>
          {peData.map((l, li) => (
            <div
              key={li}
              className='flex relative flex-col gap-2 items-start shadow-lg py-3 px-4 bg-white backdrop-blur-md rounded-xl'
            >
              <div className='grid grid-flow-row md:grid-flow-col gap-4'>
                <iframe
                  type='text/html'
                  className='w-full sm:w-[30rem] aspect-video rounded-xl'
                  src={l.vid}
                  frameBorder='0'
                  allowFullScreen
                />
                <div className='flex flex-col justify-center gap-2 '>
                  <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold'>
                    {l.name}
                  </span>
                  <span className='font-IBMPlexLoop text-sm md:text-base'>
                    {l.desc}
                  </span>
                  <div className='flex flex-wrap gap-1'>
                    {l.button.map((b, bi) => (
                      <Link key={bi} href={b.href}>
                        <a
                          target='_blank'
                          rel='noopener noreferrer'
                          className='self-center text-sm md:text-base flex gap-1 items-center mt-2 px-3 py-1 rounded-full font-IBMPlex font-semibold bg-ymw/60 hover:bg-ymw transition-colors duration-300'
                        >
                          <FontAwesomeIcon icon={b.icon} />
                          <span>{b.name}</span>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </main>
    </>
  )
}
