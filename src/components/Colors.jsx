import React, { useState } from 'react';
import '../components/Colors.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// react-spring and intersection observer imports 
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import riccio from '../media/riccio.jpg';
import riccio2 from "../media/riccioBagno.jpeg";
import riccio3 from "../media/riccioBagno2.jpeg";
import riccio4 from "../media/riccioBagno3.jpg";
import riccio5 from "../media/riccioDark.jpg";
import luminaire from '../media/luminaire.jpeg';
import luminaire2 from "../media/luminaireBagno.jpg";
import luminaire3 from "../media/luminaireDark.jpg";
import luminaire4 from "../media/luminaire2.jpeg";
import fico from '../media/fico.jpg';
import fico2 from '../media/fico2.jpg';
import lavanda from '../media/lavanda.jpg';
import lavanda2 from '../media/lavandaBagno.jpg';
import lavanda3 from '../media/lavanda2.jpg';
import maioliche from '../media/maioliche.jpg';
import maioliche2 from '../media/maioliche2.jpg';

export default function Colors() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  // Array di oggetti che rappresentano le informazioni delle card
  const rooms = [
    { 
      name: "Riccio di Mare", 
      description: "La camera più ampia presente in struttura, offre la possibilità di aggiungere un letto singolo e/o una culla.", 
      image: riccio, 
      details: "La camera più ampia presente in struttura, ideale per famiglie o gruppi di amici che desiderano più spazio e comfort. La camera è dotata di tutti i servizi necessari per un soggiorno piacevole e rilassante.\n\nDettagli:\n- Letto matrimoniale e possibilità di aggiungere un letto singolo\n- Ampio spazio per muoversi",
      gallery: [riccio, riccio2, riccio3,, riccio5, riccio4] 
    },
    { 
      name: "Luminarie", 
      description: "La camera più luminosa della struttura, offre la possibilità di aggiungere un letto singolo o una culla.", 
      image: luminaire, 
      details: "La camera più luminosa della struttura, perfetta per chi ama la luce naturale e desidera un ambiente arioso e accogliente. La camera è arredata con gusto e dotata di tutti i comfort moderni.\n\nDettagli:\n- Letto matrimoniale con opzione per letto singolo\n- Ampie finestre che lasciano entrare molta luce\n- Arredamento moderno e confortevole",
      gallery: [luminaire, luminaire2, luminaire3, luminaire4] 
    },
    { 
      name: "Fico D'India", 
      description: "La camera più riservata del B&B, ha una porta finestra apribile che affaccia sul cortile interno.", 
      image: fico, 
      details: "La camera più riservata del B&B, ideale per chi cerca tranquillità e privacy. La camera è dotata di tutti i comfort necessari per un soggiorno rilassante e piacevole.\n\nDettagli:\n- Letto matrimoniale\n- Vista sul cortile interno\n- Ambiente tranquillo e riservato",
      gallery: [fico, fico2, luminaire] 
    },
    { 
      name: "Lavanda", 
      description: "Una camera matrimoniale standard, perfetta per le coppie che cercano un soggiorno intimo e rilassante.", 
      image: lavanda, 
      details: "Una camera matrimoniale standard, arredata con colori tenui e rilassanti, creando un'atmosfera accogliente e serena. Dotata di tutti i comfort moderni per un soggiorno piacevole.\n\nDettagli:\n- Letto matrimoniale\n- Arredamento accogliente e rilassante\n- Ambiente intimo e sereno",
      gallery: [lavanda, lavanda2, lavanda3] 
    },
    { 
      name: "Maioliche", 
      description: "Camera piccola, ideale per viaggiatori singoli. Senza vista esterna ma confortevole e completa.", 
      image: maioliche, 
      details: "Camera piccola, perfetta per chi cerca un alloggio funzionale e ben arredato. La camera è dotata di tutti i servizi necessari per un soggiorno confortevole.\n\nDettagli:\n- Letti singoli\n- Arredamento funzionale\n- Ambiente confortevole e completo",
      gallery: [maioliche, maioliche2, riccio] 
    },
  ];
  

  // Funzione per aprire la modale con i dettagli della stanza selezionata
  const handleDetailClick = (room) => {
    setSelectedRoom(room);
  };

  // Utilizzo di useInView per rilevare quando il carosello entra nel viewport (solo per desktop)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Definizione dell'animazione con useSpring (solo per desktop)
  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.9)',
    config: { mass: 1, tension: 180, friction: 12 },
  });

  return (
    <>
      <div className="container mt-5 px-lg-5">
        <div className="row justify-content-around">
          <h2 className="text-center my-5 fw-bold text1 font1">OUR COLORS</h2>

          {/* Desktop: Inserire card nel carosello */}
          <animated.div style={animationProps} ref={ref} className="col-12 d-none d-lg-block">
            <Swiper
              cssMode={true}
              navigation={true}
              pagination={true}
              mousewheel={true}
              keyboard={true}
              slidesPerView={2}
              modules={[Navigation, Pagination, Mousewheel, Keyboard]}
              className="mySwiper"
            >
              {rooms.map((room, index) => (
                <SwiperSlide key={index}>
                  <div className="card border-0 rounded-0 bg0 p-2">
                    <div className='overflow-hidden'>
                      <img src={room.image} className="card-img-top border-0" alt={room.name} />
                    </div>
                    <div className="card-body">
                      <span
                        className='text1 font1 fw-bold fs-4'
                        onClick={() => handleDetailClick(room)}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: 'pointer' }}
                      >
                        {room.name}
                      </span>
                      <p className="card-text font2 text3 mb-2">{room.description}</p>
                      <button
                        type="button"
                        className="btn btn-lg bg1 text0 cardbtn font2"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => handleDetailClick(room)}
                      >
                        Dettagli
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </animated.div>

          {/* Mobile: Mantieni layout standard con 5 card, aggiungendo l'animazione */}
          <div className="col-12 d-lg-none">
            {rooms.map((room, index) => {
              // Utilizzo di useInView per rilevare quando la card entra nel viewport (solo per mobile)
              const { ref: mobileRef, inView: mobileInView } = useInView({
                triggerOnce: true,
                threshold: 0.2,
              });

              // Definizione dell'animazione con useSpring (solo per mobile)
              const mobileAnimationProps = useSpring({
                opacity: mobileInView ? 1 : 0,
                transform: mobileInView ? 'translateY(0)' : 'translateY(50px)',
                config: { mass: 1, tension: 180, friction: 12 },
              });

              return (
                <animated.div key={index} style={mobileAnimationProps} ref={mobileRef} className="col-12 col-lg-5">
                  <div className="card border-0 rounded-0 bg0 mt-lg-5 mb-3 mb-lg-0 pb-3 pb-lg-0 p-2 p-lg-0">
                    <div className='overflow-hidden'>
                      <img src={room.image} className="card-img-top border-0" alt={room.name} />
                    </div>
                    <div className="card-body">
                      <span
                        className='text1 font1 fw-bold fs-4'
                        onClick={() => handleDetailClick(room)}
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        style={{ cursor: 'pointer' }}
                      >
                        {room.name}
                      </span>
                      <p className="card-text font2 text3 mb-2">{room.description}</p>
                      <button
                        type="button"
                        className="btn btn-lg bg1 text0 cardbtn font2"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        onClick={() => handleDetailClick(room)}
                      >
                        Dettagli
                      </button>
                    </div>
                  </div>
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedRoom && (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl modal-dialog-centered">
            <div className="modal-content rounded-0">
              <div className="modal-header bg0 border-0">
                <h2 className="modal-title fs-4 ms-3 font1 text1 fw-bold " id="staticBackdropLabel">{selectedRoom.name}</h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body bg0 border-0 font2 text3">
                <div className="container">
                  <div className="row">
                    <div className="col-12 p-3 swiperCol">
                      <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        pagination={{ clickable: true }}
                        grabCursor={true}
                        modules={[Pagination]}
                        className="mySwiper"
                      >
                        {selectedRoom.gallery.map((image, index) => (
                          <SwiperSlide key={index}><img src={image} alt={`${selectedRoom.name} ${index + 1}`} /></SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    <div className="col-12 mt-lg-3">
                      <p>{selectedRoom.details.split('\n\nDettagli:')[0]}</p>
                      <ul id='detailsBulletList'>
                        {selectedRoom.details.split('\n\nDettagli:\n-')[1].split('\n-').map((item, index) => (
                          <li key={index}>{item.trim()}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer bg0 border-0">
                <button type="button" className="btn closebtn" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn modalbtn">
                  <a target='blank' href="https://copacabanahoteldesign.beddy.io/#/(beddy:home)?lang=it">Prenota</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
