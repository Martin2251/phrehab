"use client"
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { sendEmail } from '@/app/utils/send-email'
import { useState } from 'react'

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const initialValues = {
    name: '',
    email: '',
    telephone: '',
    message: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be less than 50 characters')
      .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .max(100, 'Email must be less than 100 characters')
      .required('Email is required'),
    telephone: Yup.string()
      .matches(/^[\+]?[0-9\s\-\(\)]{10,15}$/, 'Please enter a valid phone number')
      .required('Telephone is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .max(1000, 'Message must be less than 1000 characters')
      .required('Message is required'),
  })

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    return input
      .trim()
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
      .replace(/[<>]/g, '') // Remove < and > characters
      .slice(0, 1000) // Limit length as extra precaution
  }

  // Rate limiting check (simple client-side)
  const checkRateLimit = (): boolean => {
    const lastSubmission = localStorage.getItem('lastFormSubmission')
    const now = Date.now()
    
    if (lastSubmission && now - parseInt(lastSubmission) < 60000) { // 1 minute cooldown
      toast.error('Please wait before submitting another message', { position: 'top-center' })
      return false
    }
    
    localStorage.setItem('lastFormSubmission', now.toString())
    return true
  }

  const handleSubmit = async (values: typeof initialValues, { resetForm }: { resetForm: () => void }) => {
    // Prevent double submission
    if (isSubmitting) return

    // Rate limiting check
    if (!checkRateLimit()) return

    setIsSubmitting(true)

    try {
      // Sanitize all inputs
      const sanitizedValues = {
        name: sanitizeInput(values.name),
        email: sanitizeInput(values.email),
        telephone: sanitizeInput(values.telephone),
        message: sanitizeInput(values.message),
      }

      // Additional validation
      if (!sanitizedValues.name || !sanitizedValues.email || !sanitizedValues.message) {
        throw new Error('All fields are required')
      }

      const responseMessage = await sendEmail(sanitizedValues)
      toast.success(responseMessage, { position: 'top-center' })
      resetForm()
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Failed to send message. Please try again later.', { position: 'top-center' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, dirty }) => (
        <Form className="w-full max-w-lg p-6 mx-auto my-12 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>

          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Name *
            </label>
            <Field 
              name="name" 
              type="text" 
              maxLength={50}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
            <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email *
            </label>
            <Field 
              name="email" 
              type="email" 
              maxLength={100}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email address"
            />
            <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-4">
            <label htmlFor="telephone" className="block text-gray-700 text-sm font-medium mb-2">
              Telephone *
            </label>
            <Field 
              name="telephone" 
              type="tel" 
              maxLength={15}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
            <ErrorMessage name="telephone" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
              Message *
            </label>
            <Field 
              as="textarea" 
              name="message" 
              rows={4}
              maxLength={1000}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
              placeholder="Enter your message (minimum 10 characters)"
            />
            <ErrorMessage name="message" component="div" className="text-red-600 text-sm mt-1" />
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting || !isValid || !dirty}
            className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          <p className="text-xs text-gray-500 mt-4 text-center">
            * Required fields. We'll never share your information with third parties.
          </p>
        </Form>
      )}
    </Formik>
  )
}

export default ContactForm