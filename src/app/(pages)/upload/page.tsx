"use client"
import ImageClassification from '@/app/components/imageClassification/imageClassification'
import { Image } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

export default function Page() {
    const using = require("./using.png").default.src

    const {
      isFallback,
  } = useRouter();
  
  if (isFallback) {
      return <h1>Fallback</h1>;
  }

  return (
    <div className='container mx-auto mt-20'>
         <div className="mb-10 ">
        <div className="container px-20 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 flex items-center w-full">
          <div className="col-span-2 sm:col-span-1 ">
            <h2 className='text-4xl font-extrabold mb-6 mt-6 text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hemen Deneyin
            </h2>
            <div className="col-span-2 sm:col-span-1 text-base text-lg dark:text-gray-400">
              Örnekteki gibi lastiğinizin yüzey kısmının resmini çekerek yükleyebilirsiniz,unutmayın kullanılan mevcut model geliştirme aşamasında olup %86 doğruluk payı içeren bir yapay zeka modelidir.
                 </div>
          </div>


          <div className="col-span-2 sm:col-span-1 flex justify-end px-10">
          <Image
                width={200}
                height={200}
                className="rounded "
                src={using}
                alt=""
              />
          </div>
        </div>
      </div>


      <div className="mt-20 mb-20">
      <ImageClassification/>
      </div>
    </div>
  )
}
