"use client"

import Animation from './components/animation/animation'
import { TypeAnimation } from 'react-type-animation'
import { Button, Card, CardBody, CardFooter, CardHeader, Chip, CircularProgress, Image, Link } from '@nextui-org/react'
import LibTableComponent from './components/LibTable/LibTableComponent'
import LensBlurIcon from '@mui/icons-material/LensBlur';

export default function Home() {

  const tyre = require("../../public/images/tyre-bgno2.png").default.src
  const tyrev1 = require("../../public/images/tyrev1.jpg").default.src
  const tyrev2 = require("../../public/images/tyrev2.jpg").default.src

  const aiTextStyle = {
    padding: '2px',
    marginRight: '2px',
    fontWeight: '700',
    color: 'transparent',
    background: 'linear-gradient(to right, rgb(232 121 249), rgb(219 39 119))',
    fontSize: '2rem',
    height: "5rem",
    WebkitBackgroundClip: 'text',
  };

  // Then, in your JSX, you can apply the style to your element:
  <mark style={aiTextStyle}>Ai</mark>


  const coder = require("../../public/images/coder.svg").default.src

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-6 mb-20">
      <div className="w-full flex sm:justify-center h-full p-0 mb-20">
        <TypeAnimation
          className='text-xl mb-10 sm:text-4xl font-semibold'
          sequence={[
            'Tyre',
            500,
            'Tyre Ai ile',
            500,
            'Tyre Ai ile lastik kalitenizi',
            1000,
            'Tyre Ai ile lastik kalitenizi öğrenin.',
            1000,
          ]}
          wrapper="span"
          style={aiTextStyle}
          speed={50}
          repeat={Infinity}
        />
      </div>

      <div className="m10 mt-5 sm:mt-10 mb-10 mt-20">
        <Animation />
      </div>

      <div className="mb-10">
        <div className=" mt-10">
          <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 flex items-center">
            <div className="w-full col-span-2 sm:col-span-1 py-5 mt-20">
              <h1 className="mb-3 mt-2 text-4xl md:text-4xl lg:text-4xl font-extrabold leading-none tracking-tight dark:text-white">
                Tyre
                <mark className="px-2 mr-2 font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Ai
                </mark>
                Teknolojisi
              </h1>
              <p className="text-base text-md dark:text-gray-400 mt-7">
                Son teknoloji yapay zeka modeli, lastik kusurlarını %86 başarı oranıyla tespit ederek endüstriyel kalite kontrolünü baştan sona yeniden tanımlıyor. Bu inovasyon, lastik üretim süreçlerini hızlandırmak, atık maliyetlerini düşürmek ve kaliteyi artırmak için büyük bir fırsat sunuyor. Yapay zeka modeli sürekli öğrenmeye tabi tutularak geliştiriliyor ve endüstriyel sektörde büyük bir değişimi işaret ediyor. İnsan gözetimiyle birleştirilerek kullanıldığında, bu teknoloji, gelecekte endüstriyel kalite kontrolünün vazgeçilmez bir parçası olabilir.
              </p>
            </div>

            <div className="w-full col-span-2 sm:col-span-1 flex md:justify-end sm:mt-20">
              <Image
                width={300}
                height={120}
                className="mt-20 rounded "
                src={tyre}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-10">
        <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 gap-20 flex items-center w-full">

          <div className="col-span-2 sm:col-span-1">
            <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">Genel kontroller</p>
                <h4 className="text-white/90 font-medium text-xl">Analizle kontrol sağlayın.</h4>
              </CardHeader>
              <Image
                alt="Relaxing app background"
                className="z-0 w-full h-full object-cover"
                src={tyrev2}

              />
              <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    alt="Breathing app icon"
                    className="rounded-full w-10 h-11 bg-black"
                    src={tyrev1}
                  />
                  <div className="flex flex-col">
                    <p className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">final model v1,13</p>
                    <p className="text-tiny text-white/60">Olarak Eğitildi</p>
                  </div>
                </div>
                <Button className='bg-gradient-to-r from-purple-400 to-pink-600 text-black' radius="full" size="sm">Geliştiriliyor</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="col-span-2 sm:col-span-1 text-base text-md dark:text-gray-400">
            Bu son teknoloji yapay zeka modelleri, endüstriyel kalite kontrolünü kökten değiştiriyor. Özellikle lastik üretiminde kullanılan bu modeller, %86 başarı oranıyla lastik kusurlarını tespit edebiliyor. Bu, endüstriyel kalite kontrolünün verimliliğini artırmak, atık maliyetlerini düşürmek ve kaliteyi yükseltmek anlamına geliyor. Bu alandaki gelişmeler, sürekli olarak bu yapay zeka modellerini daha da güçlendirmek için devam ediyor ve gelecekte endüstriyel kalite kontrolünü daha da iyileştirmek amacıyla yeni inovasyonlar bekleniyor. Bu teknolojinin geliştirme süreci, endüstriyel sektörde büyük bir dönüşümü işaret ediyor. </div>
        </div>

      </div>

      <div className="mb10">
        <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 gap-20 flex items-center w-full">
          <div className="col-span-2 sm:col-span-1 ">
            <h2 className='text-4xl font-extrabold mb-10 mt-6'>
              Hemen Deneyin
            </h2>
            <div className="col-span-2 sm:col-span-1 text-base text-md dark:text-gray-400">
              lastik yüzeyinin fotoğrafına göre kusurlu ve kusursuz alanları belirleyebiliyor. Bu inovasyon, endüstride verimliliği artırırken atık maliyetlerini düşürüyor ve ürün kalitesini yükseltiyor. Üretim süreçlerinde hızlı ve hassas bir denetim sağlayan bu yapay zeka modeli, endüstriyel sektörde büyük bir dönüşümü temsil ediyor ve gelecekte kalite kontrolünü daha da geliştirmeye yönelik umut verici bir adım olarak ön plana çıkıyor.
            </div>
          </div>


          <div className="col-span-2 sm:col-span-1 flex justify-center">
            <Button as={Link} href='/upload' size="lg" color="success" className='text-white font-extrabold bg-gradient-to-r from-purple-400 to-pink-600' endContent={<LensBlurIcon className='mx-1 text-white' />}>
              Deneyimle
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-10 mt-10 container mx-auto w-full">

        <h2 className='text-5xl font-extrabold text-center mb-10 mt-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Modüller</h2>

        <LibTableComponent />
      </div>

      <div className="mb-20">

        <h2 className='text-5xl font-extrabold text-center mb-10 mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Oran</h2>

        <div className="container mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 gap-20 flex items-center w-full">
          <div className="col-span-2 sm:col-span-1 flex justify-center">
            <Card className="w-[240px] h-[240px] border-none ">
              <CardBody className="justify-center items-center pb-0">
                <CircularProgress
                  classNames={{
                    svg: "w-36 h-36 drop-shadow-md text-success",
                    indicator: "stroke-success",
                    track: "stroke-white/10",
                    value: "text-3xl font-extrabold text-success",
                  }}
                  value={84}
                  strokeWidth={4}
                  showValueLabel={true}
                />
              </CardBody>
              <CardFooter className="justify-center items-center pt-0">
                <Chip
                  classNames={{
                    base: "p-3 bg-gradient-to-r from-purple-400 to-pink-600 text-black",
                    content: "text-black text-small font-semibold p-3 py-5 ",
                  }}
                  variant="bordered"
                >
                  Doğruluk oranı
                </Chip>
              </CardFooter>
            </Card>
          </div>


          <div className="col-span-2 sm:col-span-1 flex justify-center">
            <Card className="w-[240px] h-[240px] border-none ">
              <CardBody className="justify-center items-center pb-0">
                <CircularProgress
                  classNames={{
                    svg: "w-36 h-36 drop-shadow-md text-danger",
                    indicator: "stroke-danger",
                    track: "stroke-white/10",
                    value: "text-3xl font-extrabold text-danger",
                  }}
                  value={16}
                  strokeWidth={4}
                  showValueLabel={true}
                />
              </CardBody>
              <CardFooter className="justify-center items-center pt-0">
                <Chip
                  classNames={{
                    base: "p-3 bg-gradient-to-r from-purple-400 to-pink-600 text-black",
                    content: "text-black text-small font-semibold p-3 py-5 ",
                  }}
                  variant="bordered"
                >
                  Hata oranı
                </Chip>
              </CardFooter>
            </Card>
          </div>

        </div>
      </div>




    </main>
  )
}
