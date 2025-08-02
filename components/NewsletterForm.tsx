'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export function NewsletterForm() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto"
      id="mc_embed_shell"
    >
      <form 
        action="https://metafictionmedia.us6.list-manage.com/subscribe/post?u=ad09522c5956208af4ac8afda&amp;id=80c5d438d9&amp;f_id=00d0c2e1f0" 
        method="post" 
        id="mc-embedded-subscribe-form" 
        name="mc-embedded-subscribe-form" 
        className="validate" 
        target="_blank"
      >
        <div id="mc_embed_signup_scroll" className="space-y-4">
          <div className="mc-field-group">
            <input 
              type="email" 
              name="EMAIL" 
              className="required email w-full px-6 py-4 bg-secondary rounded-lg outline-none focus:ring-2 focus:ring-primary transition-all" 
              id="mce-EMAIL" 
              required 
              placeholder="Enter your email"
            />
          </div>
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
            <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
          </div>
          <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
            <input type="text" name="b_ad09522c5956208af4ac8afda_80c5d438d9" tabIndex={-1} value="" readOnly />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input 
                type="submit" 
                name="subscribe" 
                id="mc-embedded-subscribe" 
                className="button w-full py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity cursor-pointer" 
                value="Join the Metafiction Universe" 
              />
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  )
}