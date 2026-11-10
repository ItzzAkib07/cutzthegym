/**
 * Validates Indian mobile number (10 digits, starting with 6, 7, 8, or 9)
 */
export function validateIndianMobile(phone) {
  const cleaned = phone.replace(/[\s\-\+]/g, '');
  const pattern = /^(?:91)?[6-9]\d{9}$/;
  return pattern.test(cleaned);
}

/**
 * Validates standard email address
 */
export function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

/**
 * Class name merging helper
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formats phone string for display
 */
export function formatPhoneNumber(phone) {
  if (!phone) return '';
  return phone.replace(/(\d{5})(\d{5})/, '$1 $2');
}

