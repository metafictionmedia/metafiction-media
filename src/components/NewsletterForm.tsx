'use client'

import { useEffect } from 'react'

// Same Mailchimp list + form action as the live metafictionmedia.com/newsletter page.
export function NewsletterForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script)
    }
  }, [])

  return (
    <div id="mc_embed_shell" className="newsletter-form">
      <form
        action="https://metafictionmedia.us6.list-manage.com/subscribe/post?u=ad09522c5956208af4ac8afda&amp;id=80c5d438d9&amp;f_id=00d0c2e1f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
      >
        <div id="mc_embed_signup_scroll">
          <label htmlFor="mce-EMAIL" className="visually-hidden">Email</label>
          <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required placeholder="Enter your email" />
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: 'none' }} />
            <div className="response" id="mce-success-response" style={{ display: 'none' }} />
          </div>
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_ad09522c5956208af4ac8afda_80c5d438d9" tabIndex={-1} value="" readOnly />
          </div>
          <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="paper-button" value="Join the Metafiction Universe" />
        </div>
      </form>
    </div>
  )
}
