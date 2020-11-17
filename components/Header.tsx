import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation, Link } from '../i18n'


const Header: React.FC<Props> = ({
    title,
    t}) => {
    return (

    <div>
        <Link href='/'>
        <h1>{title}</h1>
        </Link>
        <nav>
            <Link href='/kultur'>{t('culture')}</Link>
            <Link href='/impressum'>{t('imprint')}</Link>
        </nav>
    </div>
    )
}

Header.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

Header.propTypes = {
    t: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
}

export default withTranslation('common')(Header)