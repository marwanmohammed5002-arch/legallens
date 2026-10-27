import Button from '../components/Button'
import Input from '../components/Input'
import './ProfilePage.css'

function ProfilePage() {
  return (
    <div className="profile-page">
      <h2 className="profile-title">تعديل البيانات</h2>

      <div className="profile-card">
        <div className="profile-avatar">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
          </svg>
        </div>

        <div className="profile-grid">
          <Input label="الاسم الكامل" placeholder="اكتب اسمك" />
          <Input label="البريد الإلكتروني" type="email" placeholder="name@gmail.com" />
          <Input label="رقم الهاتف" type="tel" placeholder="01xxxxxxxxx" />
          <Input label="السن" type="number" placeholder="السن" />
        </div>

        <div className="profile-actions">
          <Button>حفظ التغييرات</Button>
          <Button variant="secondary">إلغاء</Button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
