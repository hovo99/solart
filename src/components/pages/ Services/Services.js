import React, {useState} from "react";
import './ Services.css';
import {Link} from 'react-router-dom';
import {serviceData} from "../../data";
import Modal from "react-modal";
// import imgChef from "./../../../images/members/unnamed.png";
Modal.setAppElement('#root')

const Services = () => {


    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [openedItemId, setId] = useState(null);
    const serData = serviceData.find(x=>x.id===openedItemId);
    // const qwe = (serData?.title.charAt(0).toLowerCase() + serData?.title.slice(1).trim()).toString()
    const openModal = (id) => {
        setId(id);
        setModalIsOpen(true)
    }
//     const sectionStyle = {
//         backgroundImage: "url(" + { imgChef } + ")"
// }
    return (
        <div id="services" className='services'>
            <div className="sec-container">
                <p className="section-name">Services</p>
                <div className="content-line">
                </div>
                <div className="serviceCard">
                    {
                        serviceData.map(({id,img,title}) => (
                            <div key={id} className="serCard">
                                <Link onClick={() => openModal(id)} to=''>
                                    <figure>
                                        <img src={img} alt=""/>
                                        <figcaption>
                                            <span>{title}</span><br/>
                                        </figcaption>
                                    </figure>
                                </Link>
                            </div>
                        ))
                    }
                    <Modal  isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                        <p className="service-name">{serData?.title}</p>
                        <h2 className="service-content">{serData?.name}</h2>
                        <ul>
                                {serData?.li.map((li) =>(
                                    <li key={li.id}>
                                        {li.li}
                                    </li>
                                ))}
                        </ul>
                        <button onClick={() => setModalIsOpen(false)}>
                            close
                        </button>
                    </Modal>
                </div>
            </div>
            <div className="clear">
            </div>
        </div>
    )
}
export default Services;
