import React, {useState} from 'react';
import icone1 from '../assets/image/icone/E-WEB-Goal-01.png'
import icone2 from '../assets/image/icone/E-WEB-Goal-02.png'
import icone3 from '../assets/image/icone/E-WEB-Goal-03.png'
import icone4 from '../assets/image/icone/E-WEB-Goal-04.png'
import icone5 from '../assets/image/icone/E-WEB-Goal-05.png'
import icone6 from '../assets/image/icone/E-WEB-Goal-06.png'
import icone7 from '../assets/image/icone/E-WEB-Goal-07.png'
import icone8 from '../assets/image/icone/E-WEB-Goal-08.png'
import icone9 from '../assets/image/icone/E-WEB-Goal-09.png'
import icone10 from '../assets/image/icone/E-WEB-Goal-10.png'
import icone11 from '../assets/image/icone/E-WEB-Goal-11.png'
import icone12 from '../assets/image/icone/E-WEB-Goal-12.png'
import icone13 from '../assets/image/icone/E-WEB-Goal-13.png'
import icone14 from '../assets/image/icone/E-WEB-Goal-14.png'
import icone15 from '../assets/image/icone/E-WEB-Goal-15.png'
import icone16 from '../assets/image/icone/E-WEB-Goal-16.png'
import icone17 from '../assets/image/icone/E-WEB-Goal-17.png'

const arrImg = [{src: icone1, active: false}, {src: icone2, active: false}, {src: icone3, active: false},
    {src: icone4, active: false}, {src: icone5, active: false}, {src: icone6, active: false}, {
        src: icone7,
        active: false
    },
    {src: icone8, active: false}, {src: icone9, active: false}, {src: icone10, active: false}, {
        src: icone11,
        active: false
    }, {src: icone12, active: false},
    {src: icone13, active: false}, {src: icone14, active: false}, {src: icone15, active: false}, {
        src: icone16,
        active: false
    }, {src: icone17, active: false}]
const IconeSelect = () => {
    const [images, setImages] = useState(arrImg)
    const toogleClick = (i, active) => {
        const newArray = images.map((el, index) => {
            if (index === i) el.active = !active;
            return el
        });
        setImages(newArray)
    }
    return (
        <div className='icone-select'>
            {images.length > 0 && images.map((el, index) =>
                <div key={index + el.src} onClick={() => toogleClick(index, el.active)}
                     className={`icone-item ${el.active ? 'active' : 'def'}`}>
                    <img src={el.src} alt="img"/>
                </div>)}
        </div>
    );
};

export default IconeSelect;
