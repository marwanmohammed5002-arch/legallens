import { useState, useEffect } from 'react'
import './ChatPage.css'
import ErrorMessage from '../components/ErrorMessage'
// import { apiClient } from '../services/apiClient' // فعّله لما الـ API يجهز

const suggestions = [
  'هل يجوز رفع الإيجار؟',
  'ما مدة الإخطار؟',
  'متى يرد التأمين؟',
]

const STORAGE_KEY = 'legallens_chat_messages'

const welcomeMessage = {
  id: 1,
  role: 'bot',
  text: 'أهلاً! اسألني عن أي بند في عقدك أو عن القوانين المصرية.',
}

function loadMessages() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : [welcomeMessage]
  } catch {
    return [welcomeMessage]
  }
}

function ChatPage() {
  const [messages, setMessages] = useState(loadMessages)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
    } catch {
      // تجاهل الخطأ لو التخزين مش متاح
    }
  }, [messages])

  async function sendMessage(text) {
    const question = text.trim()
    if (!question || loading) return

    setMessages((prev) => [...prev, { id: Date.now(), role: 'user', text: question }])
    setInput('')
    setError(null)
    setLoading(true)

    try {
      // رد تجريبي لحد ما الـ API يجهز
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const data = {
        answer: 'هذا رد تجريبي. سيظهر هنا الجواب الحقيقي بعد ربط الـ AI.',
        sources: [{ title: 'قانون الإيجارات', article: 'مادة 18' }],
      }

      // لما الـ endpoint يجهز، بدّل الرد التجريبي اللي فوق بالسطر ده:
      // const data = await apiClient.post('/chat/ask', { sessionId, question })

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'bot',
          text: data.answer,
          sources: data.sources,
        },
      ])
    } catch {
      setError('تعذر الحصول على إجابة، حاول مرة أخرى')
    } finally {
      setLoading(false)
    }
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
            {msg.sources && msg.sources.length > 0 && (
              <div className="bubble-sources">
                المصادر:{' '}
                {msg.sources.map((s) => `${s.title} - ${s.article}`).join('، ')}
              </div>
            )}
          </div>
        ))}

        {loading && <div className="bubble bubble-bot">جارٍ الكتابة...</div>}
        {error && <ErrorMessage message={error} onRetry={() => setError(null)} />}
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
