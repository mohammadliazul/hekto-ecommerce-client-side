import React from 'react';
import { Button } from 'react-bootstrap';
import cartIcon from '../../../Images/featuredIcon/fluent_cart-24-regular.svg';
import heartIcon from '../../../Images/featuredIcon/uil_heart-alt.svg';
import searchPlusIcon from '../../../Images/featuredIcon/search-plus.svg';
import { Link } from 'react-router-dom';
import './FeaturedPductCard.css';


const FeaturedPductCard = (props) => {




    // console.log(props.fPd);
    const item = props.fPd;
    const { _id, title, thumbnail, code, price } = item;

    return (

        // <div className='col-lg-3 col-md-6 md-12'>
        <div className='featuredCard'>
            <div className='fCard-header'>
                <div className='d-flex f-Icon'>


                <Link to={`/purchase/${_id}`}><img className='img-fluid f-cartIcon mt-2 ms-2' src={cartIcon} alt="" /></Link>


                    {/* <img className='img-fluid f-cartIcon mt-2 ms-2' onClick={addToCart} src={cartIcon} alt="" /> */}
                    <img className='img-fluid f-heartIcon mt-2' src={heartIcon} alt="" />
                    <img className='img-fluid f-searchPlus mt-2' src={searchPlusIcon} alt="" />
                </div>
                <div className='f-img-btn'>
                    <div className='text-center f-card-img'>
                        <img className='img-fluid' src={thumbnail} alt="" />
                    </div>
                    <div className='d-flex justify-content-center mt-1'>
                        <Link className='view-details-link' to={`/purchase/${_id}`}><Button className='fpd-view-dtails mt-4'>View Details</Button></Link>
                    </div>
                </div>
            </div>
            <div className='fCard-footer text-center mt-3'>
                <h5>{title}</h5>
                <div className='rectangleColor d-flex justify-content-center mb-2'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <h6>Code - {code}</h6>
                <h6>${parseInt(price).toFixed(2)}</h6>
            </div>
        </div>
        // </div>
    );
};

export default FeaturedPductCard;