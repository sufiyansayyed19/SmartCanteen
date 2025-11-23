// Form validation utilities

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!emailRegex.test(email)) return 'Please enter a valid email address';
  return '';
};

export const validatePassword = (password) => {
  if (!password) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  return '';
};

export const validateUsername = (username) => {
  if (!username) return 'Username is required';
  if (username.length < 3) return 'Username must be at least 3 characters';
  if (username.length > 20) return 'Username must be less than 20 characters';
  if (!/^[a-zA-Z0-9_]+$/.test(username)) return 'Username can only contain letters, numbers, and underscores';
  return '';
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phone) return 'Phone number is required';
  if (!phoneRegex.test(phone)) return 'Please enter a valid 10-digit mobile number';
  return '';
};

export const validateRequired = (value, fieldName = 'This field') => {
  if (!value || value.toString().trim() === '') {
    return `${fieldName} is required`;
  }
  return '';
};

export const validatePrice = (price) => {
  if (!price) return 'Price is required';
  if (isNaN(price) || price <= 0) return 'Price must be a positive number';
  return '';
};

export const validateForm = (values, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach((field) => {
    const rule = rules[field];
    const value = values[field];
    
    if (rule.required) {
      const error = validateRequired(value, rule.label || field);
      if (error) {
        errors[field] = error;
        return;
      }
    }
    
    if (rule.type === 'email') {
      const error = validateEmail(value);
      if (error) errors[field] = error;
    }
    
    if (rule.type === 'password') {
      const error = validatePassword(value);
      if (error) errors[field] = error;
    }
    
    if (rule.type === 'phone') {
      const error = validatePhone(value);
      if (error) errors[field] = error;
    }
    
    if (rule.min && value.length < rule.min) {
      errors[field] = `${rule.label || field} must be at least ${rule.min} characters`;
    }
    
    if (rule.max && value.length > rule.max) {
      errors[field] = `${rule.label || field} must be less than ${rule.max} characters`;
    }
    
    if (rule.custom && typeof rule.custom === 'function') {
      const error = rule.custom(value);
      if (error) errors[field] = error;
    }
  });
  
  return errors;
};
