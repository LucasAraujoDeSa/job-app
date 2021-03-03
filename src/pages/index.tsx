import React, { useState } from 'react'
import Head from 'next/head'
import api from '../services/api'
import { GetServerSideProps, InferGetServerSidePropsType} from 'next'

import { useFecth } from '../hooks/useFetch'
import { Container } from '../styles/pages/Home'
import Image from 'next/image'

import company from '../public/images/company.svg'
import { NavBar } from '../ui/NavBar/NavBar'
import Link from 'next/link'


interface Job{
  id: string,
  title: string,
  company_name: string
}


const Home: React.FC = ({jobs}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {


  const {data} = useFecth('/job', jobs)


  return (
    <Container>
      <Head>
        <title>
          home
        </title>
      </Head>
      <NavBar/>
      <section className="search-container">
        <div className="search-content">
          <h1 className="search-title">Sua Vaga Ideal Esta aqui</h1>
        </div>
      </section>
      <main className="jobs-section">
        {
          data.map(({id,title,company_name}: Job)=>{
            return(
              <section key={id} className="job-card">
                <div className="job-container">
                  <div className="companyImage">
                    <Image
                      src={company}
                      width={80}
                      height={80}
                    />
                  </div>

                  <div className="info-section">
                    <p>{title}</p>
                    <h2>{company_name}</h2>
                  </div>
                </div>

                <div className="btn-section">
                  <Link href={`/job/${id}`}>
                    <button>
                      <a>See Job</a>
                    </button>
                  </Link>
                </div>

              </section>
            )
          })
        }
      </main>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async() => {
  const response = await api.get('/job')
  const jobs:Job[] = await response.data
  return {
    props:{
      jobs
    }
  }
}

export default Home
