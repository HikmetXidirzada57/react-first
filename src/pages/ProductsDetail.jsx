import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './proDetail.scss';
export const ProductsDetail = () => {
    const { id } = useParams();
    const [singlepro, setSinglepro] = useState(null);
    useEffect(() => {
        fetch(`/api/products/${id}`).
            then(c => c.json())
            .then(c => setSinglepro(c))
    }, [id])
    return (
        <section className='pro-detail'>

            <div className="container">
                {singlepro != null ? (
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="pro-detail">
                                <div className="pro-img">
                                    <img className='img-fluid' src={singlepro.image} alt={singlepro.title} />
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-7">
                            <div className="pro-info">
                                <span>{singlepro.category}</span>
                                <h2>{singlepro.title}</h2>
                                <p>{singlepro.description}</p>

                            </div>
                            <button className='btn btn-success'>Add to Cart</button>
                        </div>
                    </div>
                ) : (
                    <div className="row align-items-center">
                        <div className="col-lg-5">

                            <Skeleton count={5} />
                        </div>
                        <div className="col-lg-7">
                            <Skeleton count={1} width={"60%"} />
                            <Skeleton count={1} width={"60%"} />
                            <Skeleton count={1} width={"60%"} />

                        </div>
                    </div>
                )}

            </div>


        </section>
    )
}
