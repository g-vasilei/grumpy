export const pageview = (GA_MEASUREMENT_ID: string, url: string) => {
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

export const event = (action: string, params: Record<string, string | number>) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params)
  }
}

export const trackDownload = (type: 'image' | 'story', slug: string) => {
  event('download', {
    event_category: 'engagement',
    event_label: slug,
    download_type: type,
  })
}

export const trackShare = (platform: string, slug: string) => {
  event('share', {
    method: platform,
    content_type: 'quote',
    item_id: slug,
  })
}
