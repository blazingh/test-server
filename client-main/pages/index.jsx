import axios from 'axios';
import getConfig from 'next/config';
import { useState } from 'react';
import ImageSlider from '~/components/ImageSlider';
import TreatmentButton from '~/components/TreatmentButton';

export default function Home() {
  const [inn, setInn] = useState();
  const { publicRuntimeConfig: config } = getConfig()

    const fun1 = () => {
  console.log('config:', JSON.stringify(config))        
    axios.get(`${config.SERVICE_TEST1}`).then((res) => console.log(res));
  };
  const fun2 = () => {
    console.log(process.env.LUUMEN, inn);
    axios.get(inn).then((res) => console.log(res));
  };
  return (
    <div>
      <ImageSlider
        className="mb-2 rounded-md overflow-hidden"
        showNav
        showBullets
      />
      <button onClick={fun1}>get lumen1</button>
      oooooo
      <button onClick={fun2}>get lumen2</button>
      <input
        defaultValue={inn}
        onChange={(e) => setInn(e.target.value)}
      ></input>
      <TreatmentButton />
    </div>
  );
}
