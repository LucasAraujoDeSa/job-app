import {  GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType } from 'next';
import React from 'react';
import { useFecth } from '../../hooks/useFetch';
import api from '../../services/api';
import { Container } from '../../styles/pages/job/sJob';
import { NavBar } from '../../ui/NavBar/NavBar';



interface IJob{
  id: any,
  title: string,
  description: string,
  company_name: string,
  contact: string,
  created_at: Date
}

const Job : React.FC = ({job}: InferGetServerSidePropsType<typeof getServerSideProps> ): JSX.Element => {

  return (
    <>
      <NavBar/>
      <Container>
        <header>
          <h1>{job.title}</h1>
          <span>{job.company_name}</span>
        </header>

        <main>
          <section className="description">
            {job.description}
          </section>

          <section className="contacts">
            Envie Sua Candidatura Para:<br/>
            <p>{job.contact}</p>
          </section>
        </main>
      </Container>
    </>
  )
}






export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

  const id = context.params.id

  const response = await api.get(`/job/${id}`)

  const job: IJob = await response.data



  return {
    props: {job}
  }
}

export default Job
