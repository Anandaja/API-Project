import React from 'react'
import { Link } from 'react-router-dom'
import { agencyType1, area, city, customStyles, propertCategory } from '../../../core/common/select'
import Select from 'react-select'

export const AgencySidebar = () => {
    return (
        <div>
            <div className="left-sidebar-widget">
                <div className="collapse-card">
                    <h4 className="card-title">
                        <Link
                            className="collapsed"
                            data-bs-toggle="collapse"
                            to="#search"
                            aria-expanded="false"
                        >
                            Search
                        </Link>
                    </h4>
                    <div id="search" className="card-collapse collapse show">
                        <ul className="show-list">
                            <li className="review-form">
                                <label>Agency Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                />
                            </li>
                            <li className="review-form">
                                <label>Agency Type</label>
                                <Select options={agencyType1} defaultValue={agencyType1[0]} className="select" styles={customStyles} />

                            </li>
                            <li className="review-form">
                                <label>Select City</label>
                                <Select options={city} defaultValue={city[0]} className="select" styles={customStyles} />

                            </li>
                            <li className="review-form">
                                <label>Select Area</label>
                                <Select options={area} defaultValue={area[0]} className="select" styles={customStyles} />

                            </li>
                            <li className="review-form">
                                <label>Select Category</label>
                                <Select options={propertCategory} defaultValue={propertCategory[0]} className="select" styles={customStyles} />

                            </li>
                        </ul>
                    </div>
                </div>
                <div className="collapse-card">
                    <h4 className="card-title">
                        <Link
                            className="collapsed"
                            data-bs-toggle="collapse"
                            to="#categiries"
                            aria-expanded="false"
                        >
                            Categories
                        </Link>
                    </h4>
                    <div id="categiries" className="card-collapse collapse show">
                        <ul className="checkbox-list">
                            <li>
                                <label className="custom_check">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Rental (41)
                                </label>
                            </li>
                            <li>
                                <label className="custom_check">
                                    <input type="checkbox" name="username" />
                                    <span className="checkmark" /> Sales (15)
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

