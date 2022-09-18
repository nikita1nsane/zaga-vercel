import Image from "next/image"
import logo from '../images/logo.webp'

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
                <div className="footer-logo-item footer-mid">Политика конфиденциальности</div>
                <div className="footer-right">
                    <div className="footer-logo-item">Политика конфиденциальности</div>
                    <div className="footer-logo-item">
                        Copyright ZAGA-GAME © 2018. Все права защищены.
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer