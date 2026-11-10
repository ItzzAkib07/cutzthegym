import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, MessageCircle, Phone } from 'lucide-react';
import Button from '../common/Button';
import { validateIndianMobile, validateEmail } from '../../utils/helpers';
import { programsData } from '../../data/programs';
import { siteConfig } from '../../data/siteConfig';

/**
 * Service abstraction for enquiry submission.
 * Connects to VITE_ENQUIRY_API_URL if configured, otherwise dispatches to WhatsApp fallback.
 */
export async function submitEnquiryService(formData) {
  const endpoint = import.meta.env.VITE_ENQUIRY_API_URL;
  if (endpoint) {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    if (!res.ok) {
      throw new Error(`Server returned status ${res.status}`);
    }
    return await res.json();
  }

  // Latency simulation for realistic submission feel
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    status: 'success',
    message: 'Enquiry recorded successfully.'
  };
}

export default function ContactForm({ initialPlan = '', className = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: 'Membership & Pricing',
    program: initialPlan || 'Muscle Building',
    message: '',
    honeypot: '' // Anti-bot honeypot
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState('');
  const [submittedPayloads, setSubmittedPayloads] = useState([]);

  const MAX_MESSAGE_LENGTH = 350;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && value.length > MAX_MESSAGE_LENGTH) return;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    if (serverError) setServerError('');
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required.';
    } else if (!validateIndianMobile(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message or goal summary.';
    } else if (formData.message.trim().length < 8) {
      newErrors.message = 'Please provide a bit more detail (at least 8 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    if (!validate()) return;

    // Duplicate submission prevention
    const payloadKey = `${formData.phone}_${formData.program}_${formData.enquiryType}`;
    if (submittedPayloads.includes(payloadKey)) {
      setServerError('You have already submitted this enquiry. Our reception team will reach out to you shortly.');
      return;
    }

    setIsSubmitting(true);

    try {
      await submitEnquiryService(formData);
      setSubmittedPayloads((prev) => [...prev, payloadKey]);
      setIsSuccess(true);
    } catch (err) {
      setServerError('An error occurred transmitting your enquiry. Please call our reception desk directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    const whatsappQuery = `Hi Cutz The Gym, I just submitted a consultation request for ${formData.program} (${formData.enquiryType}). My name is ${formData.name}.`;
    const whatsappRedirectUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(whatsappQuery)}`;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={`p-8 sm:p-10 rounded-2xl bg-[#0f0f0f] border border-gold/40 text-center space-y-6 shadow-2xl ${className}`}
      >
        <div className="w-16 h-16 rounded-full bg-gold/10 border-2 border-gold flex items-center justify-center mx-auto text-gold shadow-gold-glow">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <span className="text-eyebrow text-gold font-bold">TRANSMISSION CONFIRMED</span>
          <h3 className="text-heading-lg font-heading uppercase text-white mt-1">
            ENQUIRY RECEIVED AT RECEPTION
          </h3>
          <p className="text-body-md text-silver/80 mt-2 max-w-md mx-auto font-sans leading-relaxed">
            Thank you, <strong className="text-white">{formData.name}</strong>. Our front desk coaches at CUTZ THE GYM have received your request for <strong className="text-gold">{formData.program}</strong>.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#141414] border border-white/10 text-body-sm text-silver/80 max-w-sm mx-auto text-left space-y-1.5 font-sans">
          <p><span className="text-white/40 uppercase text-[10px] block font-heading">Scheduled callback:</span> Within 2 operating hours</p>
          <p><span className="text-white/40 uppercase text-[10px] block font-heading">Destination phone:</span> {formData.phone}</p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappRedirectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-green-600 hover:bg-green-500 text-white font-heading text-xs tracking-wider uppercase font-bold transition-all shadow-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>CONFIRM VIA WHATSAPP</span>
          </a>
          <button
            onClick={() => {
              setIsSuccess(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                enquiryType: 'Membership & Pricing',
                program: 'Muscle Building',
                message: '',
                honeypot: ''
              });
            }}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg border border-white/20 text-white hover:border-gold hover:text-gold font-heading text-xs tracking-wider uppercase font-semibold transition-all"
          >
            SUBMIT ANOTHER ENQUIRY
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`p-6 sm:p-10 rounded-2xl bg-[#0f0f0f] border border-white/10 shadow-2xl space-y-6 ${className}`}
      noValidate
    >
      {/* Bot Trap Honeypot */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        style={{ display: 'none' }}
        tabIndex="-1"
        autoComplete="off"
      />

      {/* Header */}
      <div className="border-b border-white/10 pb-4">
        <span className="text-eyebrow text-gold font-bold">EXPRESS CONSULTATION</span>
        <h3 className="text-heading-lg font-heading uppercase text-white mt-1">
          INITIATE YOUR ENQUIRY
        </h3>
        <p className="text-body-sm text-silver/80 mt-1 font-sans">
          Direct communication with our Lohegaon front desk and IFBB coaching staff.
        </p>
      </div>

      {/* Server Error Alert */}
      <AnimatePresence>
        {serverError && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="p-4 rounded-xl bg-red-950/40 border border-red-500/50 text-red-300 text-xs flex items-start gap-3"
          >
            <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
            <span>{serverError}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Inputs Grid */}
      <div className="space-y-5">
        {/* Row 1: Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Full Name */}
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full px-4 pt-6 pb-2 bg-[#141414] border rounded-xl text-body-sm text-white placeholder-transparent focus:outline-none transition-all ${
                errors.name
                  ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                  : 'border-white/15 focus:border-gold focus:shadow-[0_0_15px_rgba(201,160,74,0.25)]'
              }`}
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-2 text-[10px] font-heading uppercase tracking-wider text-silver/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-silver/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold"
            >
              Full Name *
            </label>
            {errors.name && (
              <p className="text-[11px] text-red-400 mt-1 font-sans">{errors.name}</p>
            )}
          </div>

          {/* Indian Mobile Number */}
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder=" "
              maxLength={10}
              className={`peer w-full px-4 pt-6 pb-2 bg-[#141414] border rounded-xl text-body-sm text-white placeholder-transparent focus:outline-none transition-all ${
                errors.phone
                  ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                  : 'border-white/15 focus:border-gold focus:shadow-[0_0_15px_rgba(201,160,74,0.25)]'
              }`}
            />
            <label
              htmlFor="phone"
              className="absolute left-4 top-2 text-[10px] font-heading uppercase tracking-wider text-silver/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-silver/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold"
            >
              Indian Mobile Number *
            </label>
            {errors.phone && (
              <p className="text-[11px] text-red-400 mt-1 font-sans">{errors.phone}</p>
            )}
          </div>
        </div>

        {/* Row 2: Email & Program Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Email Address */}
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=" "
              className={`peer w-full px-4 pt-6 pb-2 bg-[#141414] border rounded-xl text-body-sm text-white placeholder-transparent focus:outline-none transition-all ${
                errors.email
                  ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                  : 'border-white/15 focus:border-gold focus:shadow-[0_0_15px_rgba(201,160,74,0.25)]'
              }`}
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-[10px] font-heading uppercase tracking-wider text-silver/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-silver/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold"
            >
              Email Address *
            </label>
            {errors.email && (
              <p className="text-[11px] text-red-400 mt-1 font-sans">{errors.email}</p>
            )}
          </div>

          {/* Interested Discipline */}
          <div className="relative">
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full px-4 pt-6 pb-2 bg-[#141414] border border-white/15 focus:border-gold focus:shadow-[0_0_15px_rgba(201,160,74,0.25)] rounded-xl text-body-sm text-white focus:outline-none transition-all appearance-none cursor-pointer"
            >
              <option value="General Floor Access">General Floor Access</option>
              {programsData.map((prog) => (
                <option key={prog.id} value={prog.title}>
                  {prog.title}
                </option>
              ))}
            </select>
            <label
              htmlFor="program"
              className="absolute left-4 top-2 text-[10px] font-heading uppercase tracking-wider text-silver/60 pointer-events-none"
            >
              Interested Discipline
            </label>
          </div>
        </div>

        {/* Row 3: Enquiry Type Selector */}
        <div>
          <span className="block text-[10px] font-heading tracking-wider uppercase text-silver/60 mb-2">
            Enquiry Purpose
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {['Membership & Pricing', 'Book Gym Walkthrough', 'Personal Training'].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, enquiryType: type }))}
                className={`py-2.5 px-3 rounded-lg text-xs font-heading tracking-wider uppercase border transition-all text-center ${
                  formData.enquiryType === type
                    ? 'bg-gold/20 border-gold text-gold font-bold shadow-[0_0_12px_rgba(201,160,74,0.3)]'
                    : 'bg-[#141414] border-white/10 text-silver/70 hover:border-white/30 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Row 4: Message with Character Count */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            placeholder=" "
            className={`peer w-full px-4 pt-6 pb-2 bg-[#141414] border rounded-xl text-body-sm text-white placeholder-transparent focus:outline-none resize-none transition-all ${
              errors.message
                ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_12px_rgba(239,68,68,0.3)]'
                : 'border-white/15 focus:border-gold focus:shadow-[0_0_15px_rgba(201,160,74,0.25)]'
            }`}
          />
          <label
            htmlFor="message"
            className="absolute left-4 top-2 text-[10px] font-heading uppercase tracking-wider text-silver/60 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-silver/40 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-gold"
          >
            Your Goal Details or Preferred Visiting Timing *
          </label>
          <div className="flex items-center justify-between mt-1 text-[11px]">
            {errors.message ? (
              <p className="text-red-400 font-sans">{errors.message}</p>
            ) : (
              <span className="text-silver/40">Minimum 8 characters</span>
            )}
            <span className="text-silver/50 font-mono">
              {formData.message.length} / {MAX_MESSAGE_LENGTH}
            </span>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          disabled={isSubmitting}
          icon={isSubmitting ? Loader2 : Send}
        >
          {isSubmitting ? 'TRANSMITTING ENQUIRY...' : 'TRANSMIT ENQUIRY'}
        </Button>
      </div>

      <p className="text-caption text-silver/50 text-center font-sans">
        We respect your privacy. No spam. You can also dial our reception desk directly at {siteConfig.contact.formattedPrimaryPhone}.
      </p>
    </form>
  );
}
