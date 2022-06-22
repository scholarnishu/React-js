import React from 'react'
import Heading from './Heading'
import { Link } from 'gatsby'

export default function Dualinfoblcok({ heading }) {
    return (
        <section className="my-4 py-4 bg-theme">
            <div className="container">
                <Heading title={ heading } />
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea voluptatem repudiandae odio cupiditate earum, et illo? At numquam consequuntur delectus sed illo quis dolorem distinctio dicta. Nemo repellat soluta ea sed omnis, voluptates earum expedita labore quidem rerum ab sint fugiat doloribus dolore? Eligendi consequuntur accusamus sunt repellendus atque cupiditate. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis possimus veniam facilis quibusdam, unde recusandae debitis doloremque tenetur provident. Quae deleniti sit quaerat delectus eum libero excepturi, praesentium, voluptatem laudantium ab repellendus architecto itaque cum debitis mollitia harum doloremque consequuntur? Soluta, beatae laboriosam. Deserunt, hic sint repudiandae voluptatibus officia beatae? Asperiores aspernatur quibusdam minima maiores, nisi quaerat eveniet quod at consequatur esse voluptas aliquam tenetur. Repellendus cum obcaecati nobis impedit corrupti quae porro, reiciendis aspernatur voluptate itaque sunt quod esse quam eum consequuntur molestiae distinctio, ut est non ad ullam? Totam odit praesentium itaque omnis quis similique deserunt, provident voluptates.
                        </p>
                    </div>
                        <div className="col-4">
                            <div className="card bg-dark">
                            <img src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-success">Just click photos</h5>
                                    <p className="card-text text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum saepe rerum facere expedita facilis officia adipisci ipsa? Fugit odit eius excepturi dolorem quasi eos perferendis esse deleniti maxime accusantium!</p>
                                    {/* <a href="https://courses.learncodeonline.in/" className="btn btn-warning btn-block"> {heading} </a> */}
                                    <Link to="https://courses.learncodeonline.in/" className="btn btn-warning btn-block">
                                    {heading} 
                                    </Link>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    )
}
