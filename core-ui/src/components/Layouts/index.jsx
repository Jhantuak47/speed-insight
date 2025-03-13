import React from 'react'
import MainHeader from './components/MainHeader'

const BaseLayout = ({ children }) => {
    return (
        <div className="layout-wrapper flex flex-col">
            <div className="main-header sticky">
                {/* <MainHeader /> */}
            </div>
            <div className="main-content  h-screen">
                <div className="content">{children}</div>
            </div>
        </div>
    )
}

export default BaseLayout