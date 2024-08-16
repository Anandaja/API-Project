import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../core/img'
import Select from 'react-select'
import { availableFrom, constructedYear, countryandState, currencyType, customStyles, embedVideo, propertCategory, propertType, structureType } from '../../core/common/select'
import BreadCrumb from '../../core/common/breadCrumb'
import { all_routes } from '../router/all_routes'
// import BreadCrumb from '../../core/common/breadCrumb'
const AddNewPropertyRental = () => {
    const routes = all_routes
    const [activeTab, setActiveTab] = useState('#propertyinfo');

    const handleTabClick = (tab: any) => {
        setActiveTab(tab);
    };
    return (
        <>
            <BreadCrumb title="Add New Property" pageTitle="Home" />
            {/* Content */}
            <div className="content inner-content">
                <div className="container">
                    <div className="property-tabs">
                        <ul className="prop-tab">
                            <li>
                                <Link to="#propertyinfo" className={activeTab === '#propertyinfo' ? 'active' : ''} onClick={() => handleTabClick('#propertyinfo')}>

                                    Property Information
                                </Link>
                            </li>
                            <li>

                                <Link to="#property-details" className={activeTab === '#property-details' ? 'active' : ''} onClick={() => handleTabClick('#property-details')}>Property Details</Link>

                            </li>
                            <li>
                                <Link to="#amenities">Amenities</Link>
                            </li>
                            <li>
                                <Link to="#documents">Documents</Link>
                            </li>
                            <li>
                                <Link to="#gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link to="#videos">Videos</Link>
                            </li>
                            <li>
                                <Link to="#description">Description</Link>
                            </li>
                            <li>
                                <Link to="#floor-plan">Floor Plans</Link>
                            </li>
                            <li>
                                <Link to="#location">Location</Link>
                            </li>
                        </ul>
                    </div>
                    {/* Property Information */}
                    <div className="row" id="propertyinfo">
                        <div className="col-lg-4">
                            <div className="property-info">
                                <h4>Property Information</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="add-property-wrap">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="review-form">
                                            <label>Property Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Name"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="review-form">
                                            <label>Property Type</label>
                                            <Select options={propertType} defaultValue={propertType[1]} className="select" styles={customStyles} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="review-form">
                                            <label>Property Category</label>
                                            <Select options={propertCategory} defaultValue={propertCategory[0]} className="select" styles={customStyles} />

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="review-form">
                                            <label>Currency Type</label>
                                            <Select options={currencyType} defaultValue={currencyType[0]} className="select" styles={customStyles} />

                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="review-form">
                                            <label>Sale Price</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Sale Price"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="review-form">
                                            <label>Offer Price</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Offer Price"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Property Information */}
                    {/* Property Details */}
                    <div className={activeTab === '#property-details' ? 'active-tab-content' : 'tab-content'} id="property-details">

                        <div className="row">
                            <div className="col-lg-4">
                                <div className="property-info">
                                    <h4>Property Details</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="add-property-wrap">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="review-form">
                                                <label>Property Id</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Value"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="review-form">
                                                <label>Price per Sqft</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter  Price"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="review-form">
                                                <label>Structure type</label>
                                                <Select options={structureType} defaultValue={structureType[0]} className="select" styles={customStyles} />

                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="review-form">
                                                <label>No of Bedooms</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Value"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="review-form">
                                                <label>No of Bathrooms</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter  Value"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="review-form">
                                                <label>Sqft</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Value"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="review-form">
                                                <label>No of Floors</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Value"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="review-form">
                                                <label>Garage size</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Value"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="review-form">
                                                <label>Available From</label>
                                                <Select options={availableFrom} defaultValue={availableFrom[0]} className="select" styles={customStyles} />

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="review-form">
                                                <label>No of Garage</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Value"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="review-form">
                                                <label>Year Constructed</label>
                                                <Select options={constructedYear} defaultValue={constructedYear[0]} className="select" styles={customStyles} />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Property Details */}
                    {/* Amenities */}
                    <div className="row" id="amenities">
                        <div className="col-lg-4">
                            <div className="property-info">
                                <h4>Amenities</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="add-property-wrap">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" defaultChecked={true} />
                                                <span className="checkmark" /> Air Conditioning
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" defaultChecked={true} />
                                                <span className="checkmark" /> Lawn
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" />
                                                <span className="checkmark" /> Swimming Pool
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" />
                                                <span className="checkmark" /> Barbeque
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" defaultChecked={true} />
                                                <span className="checkmark" /> Microwave
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" />
                                                <span className="checkmark" /> Wide-Open Spaces
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" defaultChecked={true} />
                                                <span className="checkmark" /> Billiards Table
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" />
                                                <span className="checkmark" /> Valet Trash
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" />
                                                <span className="checkmark" /> TV Cable
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" />
                                                <span className="checkmark" /> Dryer
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" />
                                                <span className="checkmark" /> Outdoor Shower
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" defaultChecked={true} />
                                                <span className="checkmark" /> Washer
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" defaultChecked={true} />
                                                <span className="checkmark" /> Gym
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" />
                                                <span className="checkmark" /> Parks
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" defaultChecked={true} />
                                                <span className="checkmark" /> Clubhouse
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" defaultChecked={true} />
                                                <span className="checkmark" /> Sporting Facilities
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" />
                                                <span className="checkmark" /> Refrigerator
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" defaultChecked={true} />
                                                <span className="checkmark" /> WiFi
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" />
                                                <span className="checkmark" /> Laundry
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" defaultChecked={true} />
                                                <span className="checkmark" /> Sauna
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" />
                                                <span className="checkmark" /> Window Coverings
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" defaultChecked={true} />
                                                <span className="checkmark" /> Rooftop Gardens
                                            </label>
                                        </div>
                                        <div className="review-form">
                                            <label className="custom_check mb-0">
                                                <input type="checkbox" name="amenity1" />
                                                <span className="checkmark" /> Spa
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Amenities */}
                    {/* Property Documents */}
                    <div className="row" id="documents">
                        <div className="col-lg-4">
                            <div className="property-info">
                                <h4>Property Documents</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="add-property-wrap">
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="review-form">
                                            <label>Property Documents</label>
                                            <div className="upload-file">
                                                <span>Select Documents</span>
                                                <input type="file" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="review-form">
                                            <label className="d-none d-md-block">&nbsp;</label>
                                            <button className="btn btn-primary btn-upload">
                                                <i className="bx bx-cloud-upload" />
                                                Upload Documents
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="upload-list">
                                            <ul>
                                                <li>The maximum size is 8 MB. Format: PDF. </li>
                                                <li>Maximum number of files upload will be 5 files.</li>
                                            </ul>
                                            <p>
                                                <i className="bx bx-check-double" />
                                                Document uploaded successfully
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Property Documents */}
                    {/* Property gallery */}
                    <div className="row" id="gallery">
                        <div className="col-lg-4">
                            <div className="property-info">
                                <h4>Property Gallery</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="add-property-wrap">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="gallery-property">
                                            <ul>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/gallery/gallery-01.jpg"
                                                        alt="img"
                                                    />
                                                    <Link to="#">
                                                        <i className="bx bx-trash" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/gallery/gallery-02.jpg"
                                                        alt="img"
                                                    />
                                                    <Link to="#">
                                                        <i className="bx bx-trash" />
                                                    </Link>
                                                </li>
                                                <li>
                                                    <ImageWithBasePath
                                                        src="assets/img/gallery/gallery-03.jpg"
                                                        alt="img"
                                                    />
                                                    <Link to="#">
                                                        <i className="bx bx-trash" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="review-form">
                                            <label>Photo</label>
                                            <div className="upload-file">
                                                <span>Select Photo</span>
                                                <input type="file" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="review-form">
                                            <label className="d-none d-md-block">&nbsp;</label>
                                            <button className="btn btn-primary btn-upload">
                                                <i className="bx bx-cloud-upload" />
                                                Upload Photos
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="upload-list">
                                            <ul>
                                                <li>
                                                    The maximum photo size is 8 MB. Formats: jpeg, jpg, png.
                                                    Put the main picture first
                                                </li>
                                                <li>Maximum number of files upload will be 10 files.</li>
                                            </ul>
                                            <p>
                                                <i className="bx bx-check-double" />
                                                Photo uploaded successfully
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Property gallery */}
                    {/* Property Video */}
                    <div className="row" id="videos">
                        <div className="col-lg-4">
                            <div className="property-info">
                                <h4>Property Video</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="add-property-wrap">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="review-form">
                                            <label>Embed Video Link </label>
                                            <Select options={embedVideo} defaultValue={embedVideo[0]} className="select" styles={customStyles} />

                                        </div>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="review-form">
                                            <label className="d-none d-md-block">&nbsp;</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Video Link"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Property Video */}
                    {/* Property Description */}
                    <div className="row" id="description">
                        <div className="col-lg-4">
                            <div className="property-info">
                                <h4>Description</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="add-property-wrap">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="review-form">
                                            <label>Enter Description of Property</label>
                                            <textarea
                                                className="form-control"
                                                rows={8}
                                                placeholder="Description"
                                                defaultValue={""}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Property Description */}
                    {/* Floor Plan */}
                    <div className="row" id="floor-plan">
                        <div className="col-lg-4">
                            <div className="property-info">
                                <h4>Floor Plan</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="add-property-wrap">
                                <div className="add-info">
                                    <div className="row add-cont">
                                        <div className="col-md-12">
                                            <div className="review-form">
                                                <label>Plan Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Plan Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="review-form">
                                                <label>No of Bedooms</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Value"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="review-form">
                                                <label>No of Bathrooms</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Value"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="review-form">
                                                <label>Sqft</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Value"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="review-form">
                                                <label>Currency Type</label>
                                                <Select options={currencyType} defaultValue={currencyType[0]} className="select" styles={customStyles} />

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="review-form">
                                                <label>Sale Price</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Value"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="review-form">
                                                <label>Enter Description of Property</label>
                                                <textarea
                                                    className="form-control"
                                                    rows={8}
                                                    placeholder="Description"
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="review-form">
                                                <label>Photo</label>
                                                <div className="upload-file">
                                                    <span>Select Photo</span>
                                                    <input type="file" className="form-control" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="review-form">
                                                <label className="d-none d-md-block">&nbsp;</label>
                                                <button className="btn btn-primary btn-upload">
                                                    <i className="bx bx-cloud-upload" />
                                                    Upload Photos
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="review-form text-end">
                                            <Link to="#" className="add-more">
                                                <i className="bx bx-plus" /> Add More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Floor Plan */}
                    {/* Property location */}
                    <div className="row" id="location">
                        <div className="col-lg-4">
                            <div className="property-info">
                                <h4>Property Location</h4>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="add-property-wrap">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="review-form">
                                            <label>Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Address"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="review-form">
                                            <label>County / State</label>
                                            <Select options={countryandState} defaultValue={countryandState[0]} className="select" styles={customStyles} />

                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="review-form">
                                            <label>City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter City"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="review-form">
                                            <label>Landmark</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Landmark"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="review-form">
                                            <label>Zip Code</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Zip Code"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="review-form google-maps">
                                            <iframe
                                                title="Google Maps Embed"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8862835683544!2d-73.98256668525309!3d41.93829486962529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0ee3286615b7%3A0x42bfa96cc2ce4381!2s132%20Kingston%20St%2C%20Kingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1670922579281!5m2!1sen!2sin"
                                                allowFullScreen={true}
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Property location */}
                    {/* Property location */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="property-submit">
                                <Link to="#" className="btn btn-lightred">
                                    Reset
                                </Link>
                                <Link to={routes.buyPropertyGrid} className="btn btn-primary">
                                    Add Property
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Content */}
        </>

    )
}

export default AddNewPropertyRental
