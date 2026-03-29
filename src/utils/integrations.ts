/**
 * External Integrations Configuration
 * Formspree, Google Analytics, etc.
 */

// Formspree Configuration
export const FORMSPREE_CONFIG = {
  // Update this with your actual Formspree ID
  formId: 'xyzabc123', // Replace with your Formspree form ID
  endpoint: 'https://formspree.io/f/xyzabc123', // Replace with your endpoint
};

// Google Analytics Configuration (GA4)
export const GA4_CONFIG = {
  measurementId: 'G-XXXXXXXXXX', // Replace with your GA4 ID
};

/**
 * Submit form to Formspree
 * @param formData - FormData object with form fields
 * @returns Promise with response
 */
export async function submitToFormspree(formData: Record<string, any>) {
  try {
    const response = await fetch(FORMSPREE_CONFIG.endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Formspree error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Form submission error:', error);
    throw error;
  }
}

/**
 * Initialize Google Analytics GA4
 * Add this to your head tag or call it in a script
 */
export function initializeGA4() {
  // Script is typically added via <script async src="..."></script>
  // Or use gtag() function if Google Analytics script is loaded
  if (typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('config', GA4_CONFIG.measurementId);
  }
}

/**
 * Track custom event in Google Analytics
 * @param eventName - Name of the event
 * @param eventData - Event properties
 */
export function trackEvent(eventName: string, eventData: Record<string, any> = {}) {
  if (typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('event', eventName, eventData);
  }
}

/**
 * Track page view in Google Analytics
 * @param pagePath - Page path to track
 * @param pageTitle - Page title
 */
export function trackPageView(pagePath: string, pageTitle: string) {
  if (typeof (window as any).gtag !== 'undefined') {
    (window as any).gtag('config', GA4_CONFIG.measurementId, {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
}
