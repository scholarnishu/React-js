import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'
export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading} />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-whitemb-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit incidunt possimus, ut repellat, soluta quidem doloribus, aut quo quasi explicabo fuga facere totam. Blanditiis, doloremque! Ea corporis earum omnis, fuga quae cupiditate animi voluptatem blanditiis! Ex laborum vitae iure earum! Sapiente quis veniam odit voluptates amet inventore, recusandae atque ea voluptatem numquam rem aspernatur maxime consequatur officiis? Quam, provident consequuntur.
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    )
}
