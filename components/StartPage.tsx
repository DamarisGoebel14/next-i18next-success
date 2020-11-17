import React from 'react'
import { withTranslation } from '../i18n'
import PropTypes from "prop-types"
import { TFunction } from 'next-i18next';



const StartPage: React.FC = ({t}: { readonly t: TFunction }) => {

    return (

        <div >
            <p >{t('subline')}</p>
                <h1>{t('headline')}</h1>
                    <button> &gt; git checkout jobs</button>
        </div>

    )
}

StartPage.getInitialProps = async () => ({
    namespacesRequired: ['home'],
})

StartPage.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('home')(StartPage)


