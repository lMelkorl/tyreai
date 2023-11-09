/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import { Button, Card, CardBody, CardHeader, Spinner } from '@nextui-org/react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import LensBlurIcon from '@mui/icons-material/LensBlur';

export default function ImageClassification() {
  const [image, setImage] = useState<any>(null);
  const [result, setResult] = useState('');

  const modelPath = 'modeljson/model.json';

  const loadModel = async () => {
    console.log(modelPath)
    const model = await tf.loadLayersModel(modelPath);
  
    if (image) {
      const img = new Image();
      img.src = URL.createObjectURL(image);
      img.onload = async () => {
        const input = tf.browser.fromPixels(img);
        const resized = tf.image.resizeBilinear(input, [100, 100]);
        const expanded = resized.expandDims(0);
        const prediction = model.predict(expanded) as tf.Tensor; // Cast to Tensor
  
        const classIndex = prediction.argMax(-1).dataSync()[0]; // Use argMax(-1)
        setResult(`${classIndex === 1 ? "Kusursuz" : "Kusurlu"}`);
      };
    }
  };
  

  const handleImageUpload = (e:any) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const removeImage = () => {
    setResult('')
    setImage(null);
  };

  return (
    <div className='w-full  px-20'>
      <div className="flex items-center justify-center w-full my-5 mb-20">
        {image ? (
          <div className="relative">
            {/* <img src={URL.createObjectURL(image)} alt="Uploaded" className="w-[20rem] h-[15rem] object-contain" />
            <Button color='danger' size='sm' variant="faded" isIconOnly className="absolute top-1 right-1" onClick={removeImage}>
                <RemoveCircleIcon/>
            </Button> */}
                <Card className={`py-4 border border-2 ${result === "Kusurlu" ? "border-danger" : result === "Kusursuz" ? "border-success" : "border-none"}`}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{image.name}</p>
        <small className="text-default-500">Resim</small>
        {
            result && (
                <h4 className="font-bold text-lg flex items-center">Tahmin sonucu: {result ? result : <Spinner className='px-2' size='sm' color='secondary' />}</h4>
            )
        }
        <Button color='danger' size='sm' variant="faded" isIconOnly className="absolute top-2 right-2" onClick={removeImage}>
                <RemoveCircleIcon/>
            </Button>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <img
          alt="Card background"
          className="w-[20rem] h-[15rem] object-contain"
          src={URL.createObjectURL(image)}
        />
      </CardBody>
    </Card>
          </div>
        ) : (
          <label htmlFor="imageUpload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-dark hover:bg-stone-900">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <CloudUploadIcon className="text-5xl text-gray-500 dark-text-gray-400" />
              <p className="mb-2 text-xl text-gray-500 dark-text-gray-400">
                <span className="font-semibold">Görsel yüklemek için tıklayın</span>
              </p>
              <p className="text-xl text-gray-500 dark-text-gray-400">PNG, JPEG veya JPG</p>
            </div>
          </label>
        )}
      </div>
      <input className='hidden' id='imageUpload' type="file" accept="image/*" onChange={handleImageUpload} />
      <div className='flex justify-center'>
      <Button variant='faded' className='text-white font-semibold bg-gradient-to-r from-purple-400 to-pink-600' endContent={  <LensBlurIcon fontSize="large" className="text-white"/>} color="success" onClick={loadModel}>Tahmin et</Button>
      </div>
    </div>
  );
}
