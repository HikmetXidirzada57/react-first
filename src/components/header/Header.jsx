import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.scss';
import { UpDownIcon, UnlockIcon } from '@chakra-ui/icons'
import {IntlProvider,FormattedMessage} from "react-intl"

const Header = () => {
    const localeLang=localStorage.getItem("myLang");
    const [bgColor, setbgColor] = useState("");
    const [lang, setLang] = useState(localeLang ? localeLang:"az-AZ")

    const myMessage = {
        "az-AZ": {
            title: "Salam Alis",
            description: "Lorem Baby"   
        },
        "en-EN": {
            title: "Hello Alish",
            description: "sjsjsj"
        }
    }
    useEffect(()=>{
        localStorage.setItem("myLang",lang)
    },[lang])
    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            setbgColor("active-header")
        } else {
            setbgColor("")
        }
    })
    return (
        <header className={`header ${bgColor} d-flex justify-content-between`}>
            <IntlProvider locale={lang} message={myMessage[lang]}>
                <div className='Logo mt-2'>
                    <h4>Logo</h4>
                    <img src="/image/logo.svg" alt="" />
                </div>
                <div className='d-flex'>
              <button onClick={()=>setLang("az-AZ")}>Az</button>
              <button onClick={()=>setLang("en-EN")}>En</button>
                </div>
                <ul className="list-unstyled d-flex">
                    <li>
                        <Link to="/"> 
                            <FormattedMessage id="title"/>
                            <br />
                            <FormattedMessage id="description"/>

                        </Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/shop">Shop</Link>
                    </li>

                </ul>
                <div className="shopping-icon mt-2">
                    <UpDownIcon className='m-2' />
                    <UnlockIcon />
                </div>
            </IntlProvider>


        </header>
    )
}
export default Header