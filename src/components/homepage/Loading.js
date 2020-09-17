import React from 'react';
import '../style/loading.css';
import {Link} from 'react-router-dom'

export default function Loading() {
    return (
    <section class="loading">
        <div class="row" id="row-loading">

            <div class="col-md-6" id="loading-text" >
                <div class="subscribe" >
                    <h4>Sleak Design</h4>
                    <p>Polished Art</p>
                    <Link to="/blogs">subscribe</Link>
                </div>
            </div>
        </div>
    </section>
        )
}
