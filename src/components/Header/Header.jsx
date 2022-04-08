import React from 'react';
import Mobil from '../../assets/img/img_carmobil.png';

export default function Header() {
  return (
    <>
      <section class="hero py-5" id="hero">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 align-self-center mt-5">
              <h2 class="pb-3">Sewa & Rental Mobil Terbaik di kawasan Depok</h2>
              <p class="pb-3">
                Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas <br />  terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu <br /> untuk sewa mobil selama 24 jam.
              </p>
              <a href="#" class="btn btn-get-started">Mulai Sewa Mobil</a>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="hero-img">
                <img class="img-fluid" src={Mobil} alt="hero images" />
              </div>
            </div>
          </div> 
        </div>
      </section>
    </>
  )
}
