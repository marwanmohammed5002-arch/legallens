import Button from '../components/Button'
import Input from '../components/Input'
import Card from '../components/Card'

function LoginPage() {
  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: 16 }}>
      <h2 style={{ marginBottom: 16 }}>مرحباً بعودتك</h2>
      <Card>
        <Input label="البريد الإلكتروني" type="email" placeholder="name@gmail.com" />
        <Input label="كلمة السر" type="password" />
        <Button>تسجيل الدخول</Button>
      </Card>
    </div>
  )
}

export default LoginPage