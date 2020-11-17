import React from 'react'
import Header from './Header'
import { i18n, withTranslation } from '../i18n'

import Footer from './Footer'
import PropTypes from "prop-types";
import styles from '../styles/Home.module.css'
import StartPage from "./StartPage";


const Layout: React.FC<Props> = ({t, children}) => {

    return(
    <div className={styles.container}>

    <Header title={t('h1')}>

    </Header>
        <button
            type='button'
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
        >
            {i18n.language === 'en' ? 'DE' : 'EN'}

        </button>

        {children}
    <Footer></Footer>

    </div>
    )
}

Layout.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Layout.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Layout)