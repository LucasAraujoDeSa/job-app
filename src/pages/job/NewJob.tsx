import React, { FormEvent, useState } from 'react';
import {Container} from '../../styles/pages/job/sNewJob'

import { useRouter } from 'next/router'
import api from '../../services/api';


const NewJob: React.FC = (): JSX.Element => {

  const [title, setTitle] = useState('')
  const [company_name, setCompanyName] = useState('')
  const [contact, setContact] = useState('')
  const [description, setDescription] = useState('')
  const [erro, setErro] = useState(false)

  const router = useRouter()


  const handleReset = () => {
    setTitle('')
    setCompanyName('')
    setContact('')
    setDescription('')

    router.push('/')
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const {data, status} = await api.post('/job', {
      title,
      description,
      company_name,
      contact
    })

    if(status == 201){
      router.push('/')
    }else if(status == 500){
      setErro(true)
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className={erro ? 'erro-msg-active' : 'erro-msg'}>
          <p id="close" onClick={event => setErro(false)}>x</p>
          Ops, Ocorreu um Erro :(, Por Favor volte mais tarde ou tente novamente !!!
        </div>
        <div className="job-details">
          <div className="form_group field">
            <input
              type="input"
              className="new-job-input"
              placeholder="Title"
              name="title"
              id='title'
              required
              autoComplete="off"
              value={title}
              onChange={event => setTitle(event.target.value)}
            />
            <label htmlFor="title" className="new-job-label">
              Name
            </label>
          </div>

          <div className="form_group field">
            <input
              type="input"
              className="new-job-input"
              placeholder="Company name"
              name="company_name"
              id='company_name'
              required
              autoComplete="off"
              value={company_name}
              onChange={event => setCompanyName(event.target.value)}
            />
            <label htmlFor="company_name" className="new-job-label">Company</label>
          </div>
        </div>
        <div className="job-contact">
          <div className="form_group field">
            <input
              type='email'
              className="new-job-input"
              placeholder="Contact"
              name="contact"
              id='contact'
              required
              autoComplete="off"
              value={contact}
              onChange={event => setContact(event.target.value)}
            />
            <label htmlFor="contact" className="new-job-label">Contact</label>
          </div>
        </div>
        <div className="job-description">
          <textarea
            name="description"
            id="description"
            className="new-job-text-area"
            placeholder="Type your Description Here...."
            value={description}
            onChange={event => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div className="job-btn">
          <button className="jobButton" type="submit">Salvar</button>
          <button className="jobButton-cancel" type="reset" onClick={handleReset}>Cancelar</button>
        </div>
      </form>
    </Container>
  )
}

export default NewJob
