import React, { useState, useEffect } from "react";
import "./ContactsMap.css"

import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import landline from "../media/landlineicon.png"
import mobile from "../media/mobilephoneicon.png"
import mail from "../media/mailicon.png"
import location from "../media/locationicon.png"

export default function ContactsMap(){

    const [dimensions, setDimensions] = useState(getIframeDimensions());

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getIframeDimensions());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // handleresize viene chiamata ogni volta la finestra cambia di width, e nel caso setta le dimensions

    function getIframeDimensions() {
        const width = window.innerWidth;
        if (width < 576) {
            return { width: "400", height: "200" };
        } else if (width < 767) {
            return { width: "600", height: "300" };
        } else if (width < 992) {
            return { width: "850", height: "400" };
        } else {
            return { width: "1300", height: "600" };
        }
    }
    // vede la width della pagina e in base a quella setta le dimensioni desiderate per la mappa

    // Animazione per i contatti (flip da sinistra a destra)
    const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 1 });
    const contactFlip = useSpring({
        transform: contactInView ? 'rotateY(0deg)' : 'rotateY(-90deg)',
        opacity: contactInView ? 1 : 0,
        config: { mass: 5, tension: 500, friction: 80, duration: 400 },
    });

    // Animazione per i campi del form (flip da destra a sinistra)
    const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 1 });
    const formFlip = useSpring({
        transform: formInView ? 'rotateY(0deg)' : 'rotateY(90deg)',
        opacity: formInView ? 1 : 0,
        config: { mass: 5, tension: 500, friction: 80, duration: 400 },
    });

    // Animazione per la mappa 
    const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const mapFlip = useSpring({
        from: { opacity: 0, transform: 'rotateX(180deg)' },
        to: { 
            opacity: mapInView ? 1 : 0, 
            transform: mapInView ? 'rotateX(0deg)' : 'rotateX(180deg)'
        },
        config: { mass: 5, tension: 500, friction: 80 },
    });
    
    return(
        <>
        <div className="container pt-5 mb-5">
            <div className="row justify-content-between">

                {/* Contact Handles */}
                <animated.div className="col-lg-4 ps-4 ps-lg-1 mb-lg-4 text3" ref={contactRef} style={contactFlip}>
                    <h3 className="mb-4 pb-3 pb-lg-0 text1 fw-bold font1">CONTATTI</h3>

                    <div className="d-flex flex-column flex-lg-row">
                        <span className="mb-2 mb-lg-0"><img src={landline} className="contactsIcons p-1 me-3" alt=""/></span>
                        <div className="d-flex flex-column mb-2">
                            <p className="h4 text1 font2">Telefono</p>
                            <p className="font2 fs-4">0883 65 59 49
                            </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-lg-row">
                        <span className="mb-2 mb-lg-0"><img src={mobile} className="contactsIcons p-1 me-3" alt=""/></span>
                        <div className="d-flex flex-column mb-2">
                            <p className="h4 text1 font2">Cellulare</p>
                            <p className="font2 fs-4">335 772 86 11</p>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-lg-row">
                        <span className="mb-2 mb-lg-0"><img src={mail} className="contactsIcons p-1 me-3" alt=""/></span>
                        <div className="d-flex flex-column mb-2">
                            <p className="h4 text1 font2">E-mail</p>
                            <p className="font2 fs-4">info@copacabanahoteldesign.com</p>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-lg-row">
                        <span className="mb-2 mb-lg-0"><img src={location} className="contactsIcons p-1 me-3" alt=""/></span>
                        <div className="d-flex flex-column mb-2">
                            <p className="h4 text1 font2">Copacabana Colors</p>
                            <p className="font2 fs-4">Via Vittorio Veneto 139/E
                            </p>
                        </div>
                    </div>
                </animated.div>
                {/* contact handles  */}



                {/* Form */}
                <animated.div className="col-lg-7 mb-lg-4" ref={formRef} style={formFlip}>
                    <div className="ps-1 ps-lg-0">
                        <h3 className="mb-4 p-3 p-lg-0 text1 mt-4 mt-lg-0 fw-bold ps-2 ps-lg-0 font1">SCRIVICI</h3>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Enter your name" />
                        <label htmlFor="floatingInput">Nome</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="mail" className="form-control" id="floatingInput" placeholder="Enter your email" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control emailMessage" style={{ resize: 'none' }} placeholder="Leave a message here" id="floatingTextarea"></textarea>
                        <label htmlFor="floatingTextarea">Messaggio</label>
                    </div>
                    <button className="btn formbtn">
                        Invia
                    </button>
                </animated.div>
                {/* form  */}


         {/* map */}
        <animated.div className="col-12 mt-5" ref={mapRef} style={mapFlip}>
            <div className="ps-1 ps-lg-0">
                <h3 className="mb-4 text1 mt-4 mt-lg-0 fw-bold ps-2 ps-lg-0 font1">DOVE SIAMO</h3>
            </div>
            
            <div className="pe-lg-5 mapResponsive">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5988.290646282114!2d16.15517938754379!3d41.37092728609005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133820282f38259f%3A0xea6c4f0f79dbf496!2sB%20%26%20B%20Copacabana%20Colors!5e0!3m2!1sen!2sit!4v1725457084473!5m2!1sen!2sit" 
                    width={dimensions.width} 
                    height={dimensions.height}  
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </animated.div>
        {/* map */}


            </div>
        </div>
        </>
    )
} 

