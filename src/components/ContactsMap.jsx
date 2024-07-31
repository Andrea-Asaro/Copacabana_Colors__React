import "./ContactsMap.css"
import React, { useState, useEffect } from "react";

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
            return { width: "450", height: "300" };
        } else if (width < 992) {
            return { width: "690", height: "400" };
        } else {
            return { width: "855", height: "600" };
        }
    }
    // vede la width della pagina e in base a quella setta le dimensioni desiderate per la mappa

    return(
        <>
        <div className="container pt-5 mb-5">
            <div className="row">


                <div className="col-lg-4 ps-4 ps-lg-0 text3">
                    <h3 className="mb-4 text1 fw-bold font1">CONTATTI</h3>
                    <div className="d-flex flex-column mb-2">
                        <p className="h4 text1 font2">Telefono</p>
                        <p className="font2 fs-4">123456789</p>
                    </div>
                    <div className="d-flex flex-column mb-2">
                        <p className="h4 text1 font2">Whatsapp</p>
                        <p className="font2 fs-4">123456789</p>
                    </div>
                    <div className="d-flex flex-column mb-2">
                        <p className="h4 text1 font2">Mail</p>
                        <p className="font2 fs-4">mail@mail.com</p>
                    </div>
                </div>


                <div className="col-lg-8">
                    <div className="ps-1 ps-lg-0">
                        <h3 className="mb-4 text1 mt-4 mt-lg-0 fw-bold ps-2 ps-lg-0 font1">DOVE SIAMO</h3>
                    </div>

                    <div className="pe-lg-5 mapResponsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748.4938900326804!2d16.15151871454879!3d41.37461570703148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13382025fbb79855%3A0xb7749c4547df0136!2sVia%20Principe%20Amedeo%2C%201%2C%2076016%20Margherita%20di%20Savoia%20BT!5e0!3m2!1sen!2sit!4v1721811894757!5m2!1sen!2sit" width={dimensions.width} height={dimensions.height}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

            </div>
        </div>
        </>
    )
}