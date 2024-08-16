import React from 'react'
import ImageWithBasePath from '../../img'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../feature-module/router/all_routes'
import { BreadCrumbInterface } from '../interface'


const BreadCrumb = ({ title, pageTitle }: BreadCrumbInterface) => {
    const routes = all_routes
    return (
        <div>
            {/* Breadcrumb */}
            <div className="breadcrumb">
                <div className="container">
                    <div className="bread-crumb-head">
                        <div className="breadcrumb-title">
                            <h2>{title}</h2>
                        </div>
                        <div className="breadcrumb-list">
                            <ul>
                                <li>
                                    <Link to={routes.home}>{pageTitle} </Link>
                                </li>
                                <li>{title}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="breadcrumb-border-img">
                        <ImageWithBasePath src="assets/img/bg/line-bg.png" alt="Line Image" />
                    </div>
                </div>
            </div>
            {/* Breadcrumb */}
        </div>
    )
}

export default BreadCrumb
