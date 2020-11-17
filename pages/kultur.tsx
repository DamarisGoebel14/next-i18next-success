import React from 'react'
import Layout from "../components/Layout";
import { withTranslation } from '../i18n'
import { TFunction } from 'next-i18next';
import PropTypes from "prop-types";


const  Kultur: React.FC = ({t}: { readonly t: TFunction }) => (
    <Layout>
        <h1>{t('headline')}</h1>
        <p>{t('subline')}</p>

    </Layout>
)

Kultur.getInitialProps = async () => ({
    namespacesRequired: ['culture'],
})

Kultur.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('culture')(Kultur)

