import Head from 'next/head'
import { useState, useEffect } from 'react'
import { Header } from '../components/homePage/Header'
import { Servise } from '../components/homepage/Servise'
import { WhyMe } from '../components/homepage/WhyMe'
import { Skills } from '../components/homepage/Skills'
import styles from '../styles/Index.module.css'
import { MyWorks } from '../components/homepage/MyWorks'
import { Form } from '../components/homepage/Form'
import { Footer } from '../components/Footer'
import { Burger } from '../components/Burger'
import { ModalButton } from '../components/modal/ModaButton'
import { ModalContent } from '../components/modal/ModalContent'

export default function Home() {
  const [isMenuOpen, setIsMenuopen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false)
  useEffect(()=>{
    isMenuOpen || isModalOpen 
    ? document.body.classList = 'menuActive'
    : document.body.classList.remove('menuActive');

    isModalOpen ? setIsMenuopen(false) : '';

    isMenuOpen ? setIsModalOpen(false) : ''
  })
  
  return (
    <>
      <ModalContent isOpen={isModalOpen} />
      <Burger active={isMenuOpen} setActive={setIsMenuopen} />
      <div 
        onClick={() => {setIsMenuopen(false); isModalOpen ? setIsModalOpen(false) : ''}}  
        className={styles.wrapper}
      >
        <Head>
          <title>Фриланс услуги</title>
          <meta name="description" content="Описание посадочной страгницы лендинга" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <div className={isMenuOpen || isModalOpen ? styles.blur : null}>
          <Header>
             <ModalButton onClick={()=>setIsModalOpen(true)} isOpen={isModalOpen} setIsOpen={setIsModalOpen}/> 
          </Header>
          <Servise/>
          <WhyMe />
          <Skills />
          <MyWorks />
          <Form />
          <Footer />
        </div>
        
      </div>
      
    </>

  )
}

