import Image from "next/image"
import logo from '../images/logo.webp'
import yIcon from '../images/svg/youtube-icon.svg'
import vIcon from '../images/svg/vk-icon.svg'
import Link from "next/link"

const Footer = () => {
  return (
    <>
        <div className="footer">
            <div className="container footer-block">
                <div className="footer-left">
                    <div className='footer-logo'>
                        <Image src={logo} alt='logo' />
                    </div>
                    <div className='footer-logo2'>
                        <div className="footer-logo-item">ГК «Точка Роста»</div>
                        <div className="footer-logo-item">ИНН: 2130128742</div>
                        <div className="footer-logo-item">ОГРН: 1132130015555</div>
                    </div>
                </div>
                <Link href='/policy'><div className="footer-logo-item footer-mid policy">Политика конфиденциальности</div></Link>
                <div className="footer-right">
                    <Link href='/policy'><div className="footer-logo-item d-mid policy">Политика конфиденциальности</div></Link>
                    <div className="footer-logo-item right-icons-text">
                        <div className="f-icons">
                            <div className="y-icon"><Image src={vIcon} /></div>
                            <div className="v-icon"><Image src={yIcon} /></div>
                        </div>
                        <div>
                        Copyright ZAGA-GAME © 2018. Все права защищены.
                        </div>
                    </div>
                </div>
                <div className="f-icons vis-mid">
                    <div className="y-icon"><Image src={vIcon} /></div>
                    <div className="v-icon"><Image src={yIcon} /></div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer