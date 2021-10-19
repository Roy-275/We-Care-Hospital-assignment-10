import React from 'react';
import img1 from '../../images/at a glance/image1.jpg';
import img2 from '../../images/at a glance/image2.jpg';
import img3 from '../../images/at a glance/image3.jpg';
import img4 from '../../images/at a glance/image4.jpg';
import img5 from '../../images/at a glance/image5.jpg';
import img6 from '../../images/at a glance/image6.jpg';
import img7 from '../../images/at a glance/image7.jpg';
import img8 from '../../images/at a glance/image8.jpg.crdownload';
import img9 from '../../images/at a glance/image9.jpg';
import Image from '../Image/Image';

const Photos = () => {
    const images = [
        { url: img1, key: 1, caption: 'Hospital bed' },
        { url: img2, key: 2, caption: 'Waiting room' },
        { url: img3, key: 3, caption: 'Canteen' },
        { url: img4, key: 4, caption: 'Our lab' },
        { url: img5, key: 5, caption: 'Receiption' },
        { url: img6, key: 6, caption: 'Doctor chamber' },
        { url: img7, key: 7, caption: 'Waiting room 2' },
        { url: img8, key: 8, caption: 'Cabin for patients' },
        { url: img9, key: 9, caption: 'Corridor' },
    ]
    return (
        <div>
            <h1 className="md:text-6xl sm:text-2xl font-bold text-yellow-700 md:p-5 sm:p-1 ">At a glance our hospital</h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                {
                    images.map(image => <Image key={image.key} url={image.url} caption={image.caption}></Image>)
                }
            </div>
        </div>
    );
};

export default Photos;