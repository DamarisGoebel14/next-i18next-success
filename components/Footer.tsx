import React from 'react'
import { withTranslation, Link } from '../i18n'
import { TFunction } from 'next-i18next';
import PropTypes from 'prop-types'



const Footer: React.FC = ({t}: { readonly t: TFunction }) => {

    return (

        <footer>

            <div >
                <p>      {t('address')}
                </p>
                <Link href='/impressum'>
                <p>      {t('imprint')}
                </p>
                </Link>

                <svg width="100px" height="50px" viewBox="0 0 500 500" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">
                    <g id="Artboard" stroke="none" stroke-width="1" fill="#dcdce4" fill-rule="evenodd">
                        <rect id="Rectangle"  x="0" y="0" width="500" height="500"></rect>
                        <g id="06-Ressources-/-Logo-/-Inverted-[white]"
                                           transform="translate(123.000000, 124.000000)" fill="#FFFFFF">
                            <polygon id="Path" points="0 226 94.7517167 87.6964559 114.758373 57 134.740864 87.6964559 225 226 170.478569 226 114.758373 138.974551 50.6959112 226"></polygon>
                            <path d="M210.5,0 C234.524387,0 254,19.4756134 254,43.5 C254,67.5243866 234.524387,87 210.5,87 C186.475613,87 167,67.5243866 167,43.5 C167,19.4756134 186.475613,0 210.5,0 Z M210.5,29 C202.491871,29 196,35.4918711 196,43.5 C196,51.5081289 202.491871,58 210.5,58 C218.508129,58 225,51.5081289 225,43.5 C225,35.4918711 218.508129,29 210.5,29 Z" id="Oval-2"></path>
                                        </g>
                                    </g>
                </svg>
            </div>

        </footer>
    )
}

Footer.getInitialProps = async () => ({
    namespacesRequired: ['footer'],
})

Footer.propTypes = {
    t: PropTypes.func.isRequired,
}

export default withTranslation('footer')(Footer)
