import React from 'react'
import Layout from "../components/Layout";
import { withTranslation } from '../i18n'
import { TFunction } from 'next-i18next';
import PropTypes from "prop-types";

const Impressum : React.FC = ({t}: { readonly t: TFunction }) => (
    <Layout>
    <h1>{t('headline')}</h1>
        <p>{t('subline')}</p>
    </Layout>
)

Impressum.getInitialProps = async () => ({
    namespacesRequired: ['imprint'],
})

Impressum.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('imprint')(Impressum)
