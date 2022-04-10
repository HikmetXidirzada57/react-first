import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom';
import './productList.scss';
import image from '../../Images/2.jpg'
import {IntlProvider,FormattedMessage} from "react-intl"

export const ProductList = ({ loading, data }) => {
    return (
        <>
            <section className="prodcut-list">
                {loading ? (
                    <div className="container">
                        <div className="row">
                            {data.map(pro => (
                                <div className='col-lg-3' key={pro.id}>
                                    <div className="api-images">
                                        <img style={{ height: "250px", objectFit: "contain" }} className='img-fluid' src={image} alt="" />
                                        <p>{pro.price}Azn</p>
                                        {

                                            pro.productRecords.map((language) => {
                                                return(
                                                    <div>
                                                    <h4>
                                                        <Link to={`/proDetail/${pro.id}`}>
                                                            {language.name}
                                                        </Link>
                                                    </h4>
                                                    <p>{language.description}</p>
    
                                                </div>
                                                )
                                            
                                            })}

                                    </div>

                                </div>

                            ))}
                        </div>
                    </div>
                ) :
                    <div className="container">
                        <div className="row">
                            <div className='col-lg-3'>
                                <Skeleton variant="text" />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={118} />
                            </div>
                            <div className='col-lg-3'>
                                <Skeleton variant="text" />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={118} />
                            </div>
                            <div className='col-lg-3'>
                                <Skeleton variant="text" />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={118} />
                            </div>
                            <div className='col-lg-3'>
                                <Skeleton variant="text" />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={118} />
                            </div>
                            <div className='col-lg-3'>
                                <Skeleton variant="text" />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={118} />
                            </div>
                            <div className='col-lg-3'>
                                <Skeleton variant="text" />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={118} />
                            </div>
                            <div className='col-lg-3'>
                                <Skeleton variant="text" />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={118} />
                            </div>
                            <div className='col-lg-3'>
                                <Skeleton variant="text" />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={118} />
                            </div>
                            <div className='col-lg-3'>
                                <Skeleton variant="text" />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={118} />
                            </div>
                            <div className='col-lg-3'>
                                <Skeleton variant="text" />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={118} />
                            </div>
                            <div className='col-lg-3'>
                                <Skeleton variant="text" />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={118} />
                            </div>
                            <div className='col-lg-3'>
                                <Skeleton variant="text" />
                                <Skeleton variant="circular" width={40} height={40} />
                                <Skeleton variant="rectangular" width={210} height={118} />
                            </div>
                        </div>

                    </div>}

            </section>


        </>

    );
}