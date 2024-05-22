import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { Header } from '../components/Header/header';
import { Intro } from '../components/Intro/intro';
import { Pose } from '../components/Pose/pose';
import image from "../img/yoga-pose.jpg"

const texts = {
    title: 'Jogíni',
    heading: 'Vítejte mezi Jogíny',
    text: `Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
         něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
         Postupně se seznámíte se základními principy jógy, jak přístupovat k
         sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
         svoje tělo, pocity a emoce.`
}

document.querySelector('#root').innerHTML += render(
<div className="container">
      < Header title={texts.title} />
      < Intro heading={texts.heading} text={texts.text} />
      <div className='image'> < Pose src={image} /> </div>
</div>
);
  
