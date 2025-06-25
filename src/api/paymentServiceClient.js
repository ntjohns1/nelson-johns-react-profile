/**
 * Payment Service API Client
 * Generated client for the Turbolessons Payment Service API
 */

// For local development with Vite proxy, we use relative URLs
// In production, we can set VITE_API_BASE_URL to the absolute URL if needed
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

/**
 * Generic API call function
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {string} endpoint - API endpoint
 * @param {Object} data - Request payload (for POST, PUT)
 * @param {string} errorPrefix - Error message prefix
 * @returns {Promise<Object>} Promise resolving to response data
 */
const apiCall = async (method, endpoint, data = {}, errorPrefix = 'API Error:') => {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    };

    if (method !== 'GET' && Object.keys(data).length > 0) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(`${API_BASE_URL}/api${endpoint}`, options);
    
    if (!response.ok) {
      throw new Error(`${errorPrefix} ${response.statusText}`);
    }
    
    // Check if response has content
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    }
    
    return {};
  } catch (error) {
    console.error(`${errorPrefix}`, error);
    throw error;
  }
};

// Customer endpoints
export const listAllCustomers = async () => {
  return apiCall('GET', '/payments/customer', {}, 'Error fetching customers:');
};

export const getCustomer = async (id) => {
  return apiCall('GET', `/payments/customer/${id}`, {}, 'Error fetching customer:');
};

export const createCustomer = async (customerData) => {
  return apiCall('POST', '/payments/customer', customerData, 'Error creating customer:');
};

export const updateCustomer = async (id, customerData) => {
  return apiCall('PUT', `/payments/customer/${id}`, customerData, 'Error updating customer:');
};

export const deleteCustomer = async (id) => {
  return apiCall('DELETE', `/payments/customer/${id}`, {}, 'Error deleting customer:');
};

// Invoice endpoints
export const listAllInvoices = async () => {
  return apiCall('GET', '/payments/invoice', {}, 'Error fetching invoices:');
};

export const getInvoice = async (id) => {
  return apiCall('GET', `/payments/invoice/${id}`, {}, 'Error fetching invoice:');
};

export const createInvoice = async (invoiceData) => {
  return apiCall('POST', '/payments/invoice', invoiceData, 'Error creating invoice:');
};

export const finalizeInvoice = async (id) => {
  return apiCall('POST', `/payments/invoice/${id}/finalize`, {}, 'Error finalizing invoice:');
};

export const payInvoice = async (id) => {
  return apiCall('POST', `/payments/invoice/${id}/pay`, {}, 'Error paying invoice:');
};

// Payment Intent endpoints
export const listAllPaymentIntents = async () => {
  return apiCall('GET', '/payments/paymentintent', {}, 'Error fetching payment intents:');
};

export const getPaymentIntent = async (id) => {
  return apiCall('GET', `/payments/paymentintent/${id}`, {}, 'Error fetching payment intent:');
};

export const createPaymentIntent = async (paymentIntentData) => {
  return apiCall('POST', '/payments/paymentintent', paymentIntentData, 'Error creating payment intent:');
};

export const confirmPaymentIntent = async (id) => {
  return apiCall('POST', `/payments/paymentintent/${id}/confirm`, {}, 'Error confirming payment intent:');
};

export const cancelPaymentIntent = async (id) => {
  return apiCall('POST', `/payments/paymentintent/${id}/cancel`, {}, 'Error canceling payment intent:');
};

// Subscription endpoints
export const listAllSubscriptions = async () => {
  return apiCall('GET', '/payments/subscription', {}, 'Error fetching subscriptions:');
};

export const getSubscription = async (id) => {
  return apiCall('GET', `/payments/subscription/${id}`, {}, 'Error fetching subscription:');
};

export const createSubscription = async (subscriptionData) => {
  return apiCall('POST', '/payments/subscription', subscriptionData, 'Error creating subscription:');
};

export const updateSubscription = async (id, subscriptionData) => {
  return apiCall('PUT', `/payments/subscription/${id}`, subscriptionData, 'Error updating subscription:');
};

export const cancelSubscription = async (id) => {
  return apiCall('DELETE', `/payments/subscription/${id}`, {}, 'Error canceling subscription:');
};

// Product endpoints
export const listAllProducts = async () => {
  return apiCall('GET', '/payments/product', {}, 'Error fetching products:');
};

export const getProduct = async (id) => {
  return apiCall('GET', `/payments/product/${id}`, {}, 'Error fetching product:');
};

export const createProduct = async (productData) => {
  return apiCall('POST', '/payments/product', productData, 'Error creating product:');
};

export const updateProduct = async (id, productData) => {
  return apiCall('PUT', `/payments/product/${id}`, productData, 'Error updating product:');
};

export const deleteProduct = async (id) => {
  return apiCall('DELETE', `/payments/product/${id}`, {}, 'Error deleting product:');
};

// Price endpoints
export const listAllPrices = async () => {
  return apiCall('GET', '/payments/price', {}, 'Error fetching prices:');
};

export const getPrice = async (id) => {
  return apiCall('GET', `/payments/price/${id}`, {}, 'Error fetching price:');
};

export const createPrice = async (priceData) => {
  return apiCall('POST', '/payments/price', priceData, 'Error creating price:');
};

export const updatePrice = async (id, priceData) => {
  return apiCall('PUT', `/payments/price/${id}`, priceData, 'Error updating price:');
};
