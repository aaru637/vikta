import React from 'react'
import { gcelogo, assoclogo, college1, college2, department, association1, association2, vikta, sympo, sympoDate, secretary, secretaryNames, rain, hello } from '../../utils/HomeUtils'
import './home.css'
import Lottie from 'react-lottie'

const Home = () => {
    return (
        <div className='text-white flex flex-col items-center font-bold gap-10'>

            {/* Rain Animation */}
            <div className='w-fit h-full z-10 fixed'>
                <Lottie options={LottieAnimation(rain)} isClickToPauseDisabled={true} style={{ cursor: "auto" }} />
            </div>

            {/* College Name */}
            <div className='w-full text-white text-lg flex sm:flex-row flex-col items-center justify-evenly gap-8 pt-7'>
                <img src={gcelogo} alt='gce logo' className='w-16 h-16 rounded-full sm:home-img' />
                <div className='flex flex-col items-center self-center college'>
                    <p className='font-patua sm:home-college block'>{college1}</p>
                    <p className='font-patua sm:home-college block'>{college2}</p>
                </div>
                <img src={assoclogo} alt='assoc logo' className='w-16 h-16 rounded-full sm:home-img' />
            </div>

            {/* Department Name */}
            <p className='font-exo sm:home-department text-lg department'>{department}</p>

            {/* Association */}
            <div className='flex flex-col items-center association p-3'>
                <p className='font-oswald sm:home-association text-sm'>{association1}</p>
                <p className='font-oswald sm:home-association text-sm'>{association2}</p>
            </div>

            {/* Vikta */}
            <p className='font-signika sm:home-vikta text-3xl vikta'>{vikta}</p>

            {/* Sympo */}
            <p className='font-roboto sm:home-sympo sympo text-sm'>{sympo}</p>

            {/* Sympo Date */}
            <p className='font-roboto sm:home-sympo-date sympoDate text-sm'>{sympoDate}</p>

            {/* Secretary Details */}
            <div className='flex flex-row w-full justify-evenly'>
                {secretary.map((value, index) => (
                    <div className='flex flex-col items-center'>
                        <p className='font-signika sm:home-secretary secretary text-lg'>{secretaryNames[index]}</p>
                        <p className='font-exo sm:secretary-name secretary-name text-sm'>{value}</p>
                    </div>
                ))}
            </div>

            {/* Hello Animation */}
            <div className='w-32 h-24'>
                <Lottie options={LottieAnimation(hello)} isClickToPauseDisabled={true} style={{ cursor: "auto" }} />
            </div>

        </div>
    )
}
const LottieAnimation = (animationData) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return defaultOptions;
};
export default Home
