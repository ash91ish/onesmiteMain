'use client'
import { useState } from 'react'
import { submitContactForm } from '@/app/actions/contact'
import { CheckCircle, Loader2, Send } from 'lucide-react'

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState('')

  function validate() {
    const nextErrors = {}
    if (!values.name.trim()) nextErrors.name = 'Name is required.'
    if (!values.email.trim()) nextErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!values.message.trim()) nextErrors.message = 'Message is required.'
    return nextErrors
  }

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (serverError) setServerError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    setServerError('')

    try {
      const result = await submitContactForm({
        name: values.name,
        email: values.email,
        subject: values.subject,
        message: values.message,
      })

      if (!result.success) {
        throw new Error(result.error)
      }
      setSubmitted(true)
    } catch (err) {
      console.error('Contact form submission failed:', err)
      setServerError(err.message || 'Something went wrong. Please email us at contact@onesmite.com.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="border border-emerald-400/25 bg-emerald-400/[0.08] p-7 text-center"
      >
        <div className="mb-4 flex justify-center">
          <CheckCircle size={38} className="text-[#62d28f]" />
        </div>
        <div className="font-heading text-xl font-extrabold text-primary">Message received.</div>
        <p className="mt-2 text-[0.95rem] leading-[1.7] text-muted">
          Thanks for reaching out. We will reply at <span className="font-semibold text-primary">{values.email}</span>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5" aria-label="Contact form">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          required
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Your full name"
          error={errors.name}
        />
        <Field
          label="Email"
          required
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          error={errors.email}
        />
      </div>

      <Field
        label="Subject"
        id="contact-subject"
        name="subject"
        type="text"
        value={values.subject}
        onChange={handleChange}
        placeholder="General inquiry, partnership, product support, feedback..."
      />

      <div>
        <label htmlFor="contact-message" className="mb-2 block font-mono text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-muted">
          Message <span className="text-[var(--danger)]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={values.message}
          onChange={handleChange}
          placeholder="How can we help you? Describe your query..."
          className="form-input min-h-[150px] resize-y"
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-2 text-[0.82rem] text-[var(--danger)]">
            {errors.message}
          </p>
        )}
      </div>

      {serverError && (
        <p role="alert" className="text-[0.86rem] text-[var(--danger)]">
          {serverError}
        </p>
      )}

      <button type="submit" disabled={loading} className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit">
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending
          </>
        ) : (
          <>
            <Send size={16} />
            Send message
          </>
        )}
      </button>
    </form>
  )
}

function Field({ label, required = false, error, id, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-muted">
        {label} {required && <span className="text-[var(--danger)]">*</span>}
      </label>
      <input
        id={id}
        className="form-input"
        aria-required={required ? 'true' : undefined}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-[0.82rem] text-[var(--danger)]">
          {error}
        </p>
      )}
    </div>
  )
}
