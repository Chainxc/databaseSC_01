import { faFlaskVial,
    faFileImport
    ,faVideo } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
    import Link from 'next/link'
    import MetaHeader from '../../components/metaHeader'
    
    export default function VirtualLab() {
      const meta = {
        title:
          'Math&Com Rally in Gather.town - สาขาวิชาคณิตศาสตร์และวิทยาการคำนวณ | Virtual Lab & Activity | MWIT Open House 2022',
        url: 'lab/mathcom',
        description:
          'นิทรรศการออนไลน์เกี่ยวกับเรื่องราวที่น่าสนใจทางคณิตศาสตร์และวิทยาการคำนวณ โดยจะมีเกม walk rally ให้ผู้เข้าชมตามหาคำถามที่ซ่อนไว้ในบริเวณต่าง ๆ แล้วจึงตอบให้ถูกต้องใน Google Form เพื่อชิงเงินรางวัล | MWIT Open House 2022',
        img: 'ogimage.png',
      }
    const peData = [
        {
          name: 'กิจกรรม Amazing bicep',
          desc: 'กิจกรรม แนะนํา อุปกรณ์เน้นอธิบายการทํางานและใช้งานของเครื่องอธิบายการเข้าใช้งานสถานที่ และกิจกรรม hands-on เน้นการลงมือทําและได้ค้นพบเครื่องมือการออกกําลังกายใหม่ๆ',
          type : 'รูปแบบกิจกรรม ได้แก่ (1) กิจกรรมแนะนําอุปกรณ์ต่างในห้องฟิตเนสและวิธีการใช้คร่าวๆ (2)กิจกรรม hands-on ให้ผู้เข้าร่วมได้ลองใช้และทําใบกิจกรรมเพื่อแลกของรางวัล',
          place : 'ห้องจัดกิจกรรม ห้องฟิตเนส ชั้น 3',
        },
        {
          name: 'กิจกรรม bang the ball',
          desc: '**กิจกรรมจัดชวงบ่ายเท่านั้น**',
          type : 'รูปแบบกิจกรรม ได้แก่ (1)กิจกรรมแนะนําสถานที่ทั้งหมดในศูนย์กีฬาและแนะนํากิจกรรมต่างๆ เกี่ยวกับกีฬาในโรงเรียน (2) กิจกรรม hands-on ให้ผู้เข้าร่วมได้ลองใช้สนามบาสศูนย์กีฬาซึ่งจะมีมินิเกมต่างๆให้เล่น',
          place : 'สถานที่จัดกิจกรรม สนามบาสศูนย์กีฬา ชั้น 4',
        },
      ]
      return (
        <>
          <MetaHeader meta={meta} />
    
          <main className='w-full bg-bvl/60'>
            <div className='flex flex-col text-center text-black items-center mx-auto justify-self-center w-full max-w-6xl px-6 pt-10 pb-4'>
              <span className='font-CS font-bold text-bmw text-3xl md:text-4xl lg:text-5xl'>
              สาขาวิชาวิชาศิลปศาสตร์
              </span>
              <span className='font-CS font-bold text-bbk text-xl md:text-2xl lg:text-3xl'>
              “Discover Liberal Arts @MWIT”
              </span>
            </div>
            <div className='flex flex-col relative overflow-y-hidden max-w-6xl mx-auto px-6 justify-center gap-4 pt-4 pb-10'>
              <div className='flex relative flex-col gap-2 items-center shadow-lg py-3 px-4 bg-pink-200/40 backdrop-blur-md rounded-xl'>
              <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center mt-2'>
              กิจกรรม “Discover Wood Cut”
                </span>
                <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center mt-2'>
                รายละเอียดกิจกรรม: ร่วมค้นหาเทคนิควิธีการของศิลปะภาพพิมพ์ เช่น การทำแม่พิมพ์ กระบวนการพิมพ์ ตลอดจนทดลองสร้างสรรค์ผลงานศิลปะภาพพิมพ์เทคนิคแกะไม้ (wood cut) 
                </span>
                <div className='grid grid-flow-row md:grid-flow-col gap-4 justify-items-center'>
                  <img
                  /*  src={process.env.CDN_URL + '/img/lab/' + 'mathact.webp'}
                    className='w-full max-w-sm rounded-xl' */
                  />
                  <div className='flex flex-col justify-center gap-2'>
                    <span className='font-IBMPlexLoop text-sm md:text-base font-semibold'>
                    •รูปแบบกิจกรรม
                    </span>
                    <span  className='font-IBMPlexLoop text-sm md:text-base list-inside list-disc space-y-1'>
                    จัดเป็นรอบ รอบละ 30 นาที รับรอบละไม่เกิน 12 คน วันละ 4 รอบ ดังนี้
	- รอบเช้า 10.30-11.00 น. และ 11.30-12.00 น.
	- รอบบ่าย 13.00 -13.30 น. และ 14.00-14.30 น.
                    </span >
                    <span className='font-IBMPlexLoop text-sm md:text-base font-semibold'>
                    สถานที่จัดกิจกรรม: ห้องปฏิบัติการศิลปะ 1109
                    </span>  
                  </div>
                </div>
                </div>
              <div className='flex relative flex-col gap-2 items-center shadow-lg py-3 px-4 bg-pink-200/40 backdrop-blur-md rounded-xl'>
                <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center'>
                ห้องที่ 2 - ผีอังกฤษ (ผีแฟรงเกนสไตน์)
                </span>
                  <div className='flex flex-col justify-center gap-2'>
                    <span className='font-IBMPlexLoop text-sm md:text-base font-semibold'>
                    •วิธีเล่นเกม
                    </span>
                    <span  className='font-IBMPlexLoop text-sm md:text-base list-inside list-disc space-y-1'>
                    ไกด์จะเดินตามมาเเล้วบรีฟว่าต้องทำเพื่อคืนชีพแฟงค์กินสไลล์ โดยเริ่มเเรกต้องไปเล่มเกมสั้นๆ เช่นเกม tongue twister กับคนเเรกเพื่อคืนชีพเเขน เเขนผีเเฟงค์ก็จะกระตุกเเล้วชี้ไปยังคนที่สองเพื่อไปเล่นเกมเเล้วฟื้นคืนชีพหัว ผีเเฟงค์ก็จะพูดได้เเล้ว โดยบอกผู้เล่นให้ไปเเปล riddle เเล้วหาคำตอบไฟฟื้นชีพขา เมื่อฟื้นครบทุกส่วน ผีเเฟงค์จะตื่นขึ้นเเล้วช่วยให้ไปห้องต่อไปได้
                    </span >
                  </div>
              </div>
              <div className='flex relative flex-col gap-2 items-center shadow-lg py-3 px-4 bg-pink-200/40 backdrop-blur-md rounded-xl'>
                <span className='text-lg md:text-xl lg:text-2xl font-CS font-semibold text-center'>
                ห้องที่ 3 - ผียุโรป (ผีตุ๊กตา)
                </span>
                  <div className='flex flex-col justify-center gap-2'>
                    <span className='font-IBMPlexLoop text-sm md:text-base font-semibold'>
                    •วิธีเล่นเกม
                    </span>
                    <span  className='font-IBMPlexLoop text-sm md:text-base list-inside list-disc space-y-1'>
                    ไกลด์จะเดินตามมาเเล้วบรีฟว่าในการจะผ่านต้องทำการหาเเละเรียงลำดับตุ๊กตาให้ถูก โดยจะมีกระดาษเเปะคำศัพท์เเละความหมายของมัน มีทั้งหมด 3 ใบ ผู้เล่นต้องเเปลคำใบ้เเละหาตุ๊กตาที่มีลักษณะตามนั้นมาใส่ให้ถูกเพื่อให้สามารถเปิดห้องได้
                    </span >
                  </div>
              </div>
            </div>
          </main>
        </>
      )
    }