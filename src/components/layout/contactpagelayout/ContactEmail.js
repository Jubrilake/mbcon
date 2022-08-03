import React from 'react'

const ContactEmail = () => {
  return (
    <section className='contact-mail'>
      <div className="container">
        <p className='contact-text'>Feel free to email us or fill our contact form below</p>
      <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate" />
          <label for="icon_prefix">First Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">email</i>
          <input id="email" type="email" class="validate" />
          <label for="icon_telephone">Telephone</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
        <i class="material-icons prefix">mode_edit</i>
          <textarea id="textarea1" class="materialize-textarea"></textarea>
          <label for="textarea1">Message</label>
        </div>
      </div>
      <div className='hero-button'>
          <a style={{"width":"100%"}} class="primary-bg btn register"> Submit </a>
          </div>

    </form>


      </div>
      
    </section>
  )
}

export default ContactEmail