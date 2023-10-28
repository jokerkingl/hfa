import React, {useState} from "react";
import {Routes, Route, Navigate, useNavigate, useLocation} from "react-router-dom";
// page
import Resolution from "../resolution";
import Customer from "../customer"
import Contact from "../contact";
// style
import './admin.scss'
// image
import QR1 from "../../assets/image/QRcode1.png"
import QR2 from "../../assets/image/QRcode2.jpg"
import QR3 from "../../assets/image/QRcode3.jpg"

const Admin = ()=>{
    const navigate = useNavigate()

    const [nav] = useState(['/', 'resolution', 'customer', 'contact'])
    const [navName] = useState(['首页', '解决方案', '合作客户', '联系我们'])
    const [curPage, setCurPage] = useState(useLocation().pathname)

    const redirect = (to)=>{
        navigate(to)
        setCurPage(to)
    }

    return (
        <div id={'all'}>
            <div id={'top-nav'}>
                <div className={'logo'} />
                <div className={'nav-group'}>
                    {
                        nav.map((v, i)=>{
                            return (
                                <div key={v}
                                     id={`nav-${v}`}
                                     className={`nav-button ${curPage===v?'text-Pink':''}`}
                                     onClick={()=>redirect(v)}>
                                    {navName[i]}
                                </div>
                            )
                        })
                    }
                </div>
                <div className={'login nav-button'}>企业登录</div>
                <div className={'language'}>
                    <div id={"chinese"} className={'nav-button'}>中</div>/<div id={"english"} className={'nav-button'}>英</div>
                </div>
            </div>
            <div id={'main'}>
                <Routes>
                    <Route path={'resolution'} element={<Resolution />} />
                    <Route path={'customer'} element={<Customer />} />
                    <Route path={'contact'} element={<Contact />} />
                    {/* 重定向 */}
                    <Route path={''} element={<Navigate to={'/'} />} />
                    <Route path={'*'} element={<Navigate to={'/'} />} />
                </Routes>
            </div>
            <div className="bottom-footer">
                <div className="bottom-left">
                    <p>Contact Phone: +1-123-456-7890</p>
                    <p>
                        <a href="https://example.com">Visit our website</a>
                    </p>
                    <p>
                        <a href="https://example.com/compliance">Compliance Documents</a>
                    </p>
                </div>
                <div className="bottom-right">
                    <img src={QR1} alt="QR Code 1" />
                    <img src={QR2} alt="QR Code 2" />
                    <img src={QR3} alt="QR Code 3" />
                </div>
            </div>
        </div>
    )
}

export default Admin