import { AppProvider } from '@shopify/polaris'
import enTranslations from '@shopify/polaris/locales/en.json';
import {Avatar, Badge, Page, Thumbnail} from '@shopify/polaris';
import React from 'react'
import './style.css'

function Nominate() {
    return (
        <AppProvider i18n={enTranslations}>
            <Page
                breadcrumbs={[{ content: 'Home', url: '/' }]}
                title="Home Page"
                thumbnail={
                    <Thumbnail
                        source="https://i.gyazo.com/47c3836cf89d1463bf584cc00c4edde9.png"
                        alt="Home Icon"
                    />
                }
            >
                <p>Page content</p>
            </Page>
        </AppProvider>
    )
}

export default Nominate