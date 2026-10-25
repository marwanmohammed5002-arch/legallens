import { useState } from 'react'
import './ChatPage.css'

const suggestions = [
  'هل يجوز رفع الإيجار؟',
  'ما مدة الإخطار؟',
  'متى يرد التأمين؟',
]

function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'bot',
      text: 'أهلاً! اسألني عن أي بند في عقدك أو عن القوانين المصرية.',
    },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  function sendMessage(text) {
    const question = text.trim()
    if (!question || loading) return

    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', text: question }])
    setInput('')
    setLoading(true)

    // رد تجريبي لحد ما الـ API يجهز
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'bot',
          text: 'هذا رد تجريبي. سيظهر هنا الجواب الحقيقي بعد ربط الـ AI.',
          sources: ['مصدر تجريبي'],
        },
      ])
      setLoading(false)
    }, 1000)
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendMessage(input)
  }

  return (
    <div className="chat-page">
      <h2 className="chat-title">المساعد الذكي</h2>

      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`bubble bubble-${msg.role}`}>
            <p>{msg.text}</p>
            {msg.sources && (
              <div className="bubble-sources">
                المصادر: {msg.sources.join('، ')}
              </div>
            )}
          </div>
        ))}

        {loading && <div className="bubble bubble-bot">جارٍ الكتابة...</div>}
      </div>

      <div className="chat-suggestions">
        <span>أسئلة مقترحة:</span>
        {suggestions.map((s) => (
          <button key={s} type="button" onClick={() => sendMessage(s)}>
            {s}
          </button>
        ))}
      </div>

      <form className="chat-input-row" onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="اكتب سؤالك هنا"
        />
        <button type="submit" className="chat-send" disabled={loading}>
          إرسال
        </button>
      </form>
    </div>
  )
}

export default ChatPage