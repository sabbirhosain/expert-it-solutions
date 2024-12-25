import { Helmet } from 'react-helmet'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <header>
        <Header />
      </header>

      <main className='main_section'>
        {children}
      </main>

      <section>
        <Footer />
      </section>
    </>
  )
}

export default Layout