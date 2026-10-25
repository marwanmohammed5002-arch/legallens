import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'
import './LoginPage.css'

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-logo">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <path d="M14 2v6h6" />
            <path d="M8 13h8M8 17h8" />
          </svg>
        </div>

        <h2>مرحباً بعودتك</h2>
        <p className="login-subtitle">سجّل دخولك لتحليل وإنشاء عقودك</p>

        <Input label="البريد الإلكتروني أو رقم الهاتف" type="email" placeholder="name@gmail.com" />
        <Input label="كلمة السر" type="password" />

        <Link to="/forgot-password" className="login-link">نسيت كلمة السر؟</Link>

        <Button>تسجيل الدخول</Button>

        <p className="login-footer">
          ليس لديك حساب؟ <Link to="/register">إنشاء حساب</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage