import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import image1 from "../media/ChisiamoPageImage1.jpg";
import image2 from "../media/riccioBagno.jpeg";
import image3 from "../media/luminaireBagno.jpg";
import image4 from "../media/ChisiamoPageImage4.jpeg";
import hero1 from '../media/hero1.jpg';


export default function GalleryPage() {

    // Animazioni per le immagini
    const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.3 });
    const fadeIn1 = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? 'translateY(0px)' : 'translateY(70px)',
        config: { duration: 500 },
    });

    const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.3 });
    const fadeUp2 = useSpring({
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? 'translateY(0px)' : 'translateY(40px)',
        config: { duration: 500 },
    });

    const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.3 });
    const zoom3 = useSpring({
        transform: inView3 ? 'scale(1)' : 'scale(0.8)',
        opacity: inView3 ? 1 : 0,
        config: { duration: 500 },
    });

    const [ref4, inView4] = useInView({ triggerOnce: true, threshold: 0.3 });
    const fadeIn4 = useSpring({
        opacity: inView4 ? 1 : 0,
        transform: inView4 ? 'translateY(0px)' : 'translateY(70px)',
        config: { duration: 500 },
    });

    const [ref5, inView5] = useInView({ triggerOnce: true, threshold: 0.3 });
    const fadeUp5 = useSpring({
        opacity: inView5 ? 1 : 0,
        transform: inView5 ? 'translateY(0px)' : 'translateY(40px)',
        config: { duration: 500 },
    });

    const [ref6, inView6] = useInView({ triggerOnce: true, threshold: 0.3 });
    const zoom6 = useSpring({
        transform: inView6 ? 'scale(1)' : 'scale(0.8)',
        opacity: inView6 ? 1 : 0,
        config: { duration: 500 },
    });
    // Animazioni per le immagini

    return (
        <>
            <div className="container">
                <div className="row pb-5">
                    <div className="col-12 py-3">
                        <h2 className="text-center my-5 py-2 fw-bold text1 font1">LA NOSTRA GALLERY</h2>
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <animated.img
                            src={image1}
                            className="w-100 rounded-0 mb-4"
                            alt="Boat on Calm Water"
                            style={fadeIn1}
                            ref={ref1}
                        />

                        <animated.img
                            src={image4}
                            className="w-100 rounded-0 mb-4"
                            alt="Wintry Mountain Landscape"
                            style={zoom3}
                            ref={ref3}
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <animated.img
                            src={image3}
                            className="w-100 rounded-0 mb-4"
                            alt="Mountains in the Clouds"
                            style={fadeUp2}
                            ref={ref2}
                        />

                        <animated.img
                            src={hero1}
                            className="w-100 rounded-0 mb-4"
                            alt="Boat on Calm Water"
                            style={fadeUp5}
                            ref={ref5}
                        />
                    </div>

                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <animated.img
                            src={image2}
                            className="w-100 rounded-0 mb-4"
                            alt="Waves at Sea"
                            style={zoom6}
                            ref={ref6}
                        />

                        <animated.img
                            src={image3}
                            className="w-100 rounded-0 mb-4"
                            alt="Yosemite National Park"
                            style={fadeIn4}
                            ref={ref4}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
