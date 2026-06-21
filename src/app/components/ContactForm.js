'use client'
import { useState } from 'react'
import { submitContactForm } from '@/app/actions/contact'
import { CheckCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [serverError, setServerError] = useState('')

  function validate() {
    const e = {}
    if (!values.name.trim())    e.name    = 'Name is required.'
    if (!values.email.trim())   e.email   = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      e.email = 'Please enter a valid email address.'
    if (!values.message.trim()) e.message = 'Message is required.'
    return e
  }

  function handleChange(e) {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
    if (serverError) setServerError('')
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
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
      setServerError(err.message || 'Something went wrong. Please try emailing us at contact@onesmite.com')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="p-8 border border-[rgba(92,107,255,0.3)] bg-[rgba(92,107,255,0.06)] text-center rounded-lg"
      >
        <div className="flex justify-center mb-4">
          <CheckCircle size={36} className="text-accent" />
        </div>
        <div className="font-heading text-lg font-bold text-primary mb-2">
          Message received.
        </div>
        <p className="text-[0.9375rem] text-muted">
          Thanks for reaching out — we&apos;ll be in touch soon at <span className="text-accent">{values.email}</span>.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-5"
      aria-label="Contact form"
    >
      {/* Name */}
      <div>
        <label
          htmlFor="contact-name"
          className="block font-mono text-[0.6875rem] text-muted tracking-[0.08em] uppercase mb-2"
        >
          Name <span className="text-[#FF6B6B]">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="form-input"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="text-[0.8125rem] text-[#FF6B6B] mt-1.5">
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="contact-email"
          className="block font-mono text-[0.6875rem] text-muted tracking-[0.08em] uppercase mb-2"
        >
          Email <span className="text-[#FF6B6B]">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="form-input"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-[0.8125rem] text-[#FF6B6B] mt-1.5">
            {errors.email}
          </p>
        )}
      </div>

      {/* Subject (optional) */}
      <div>
        <label
          htmlFor="contact-subject"
          className="block font-mono text-[0.6875rem] text-muted tracking-[0.08em] uppercase mb-2"
        >
          Subject <span className="text-muted opacity-40">(optional)</span>
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          placeholder="e.g. Partnership, Investor inquiry, Educator onboarding..."
          className="form-input"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="block font-mono text-[0.6875rem] text-muted tracking-[0.08em] uppercase mb-2"
        >
          Message <span className="text-[#FF6B6B]">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="What would you like to discuss?"
          className="form-input min-h-[120px] resize-y"
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="text-[0.8125rem] text-[#FF6B6B] mt-1.5">
            {errors.message}
          </p>
        )}
      </div>

      {/* Server error */}
      {serverError && (
        <p role="alert" className="text-[0.8125rem] text-[#FF6B6B] -mt-1">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary self-start flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 size={15} className="animate-spin" />
            Sending…
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}
