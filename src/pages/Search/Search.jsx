import React, { useEffect, useState } from 'react';
import iconUser from '../../assets/icon/fi_users.svg';
import iconSetting from '../../assets/icon/fi_settings.svg';
import iconCalendar from '../../assets/icon/fi_calendar.svg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';

export default function Search() {

  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    handleData()
  }, [])

  const handleData = async () => {
    setLoading(true);
    try {
      const res = await axios(
        "https://rent-cars-api.herokuapp.com/customer/car"
      );
      setDataList(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleGoDetail = (id) => {
    navigate(`/detail/${id}`)
  }

  return (
    <section className="page-search">
      <div className="row">
        <div className="col head"></div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-10">
            {/* Box Form */}
            <div className="box">
              <div className="row">
                <div className="col">
                  <p><strong>Pencarianmu</strong></p>
                </div>
              </div>
              <form>
                <div className="row row-input">
                  <div className="col-auto">
                    <span>Tipe Driver</span>
                    <div className="input-group">
                      <select class="form-select" id="inputGroupSelect01">
                        <option selected>Pilih Tipe Driver</option>
                        <option value="1">Menggunakan Supir</option>
                        <option value="2">Lepas Kunci</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>Tanggal</span>
                    <div className="input-group">
                      <input type="date" class="form-control" />
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>Waktu Jemput atauAmbil</span>
                    <div className="input-group">
                      <select class="form-select" id="inputGroupSelect01">
                        <option selected>Pilih Waktu</option>
                        <option value="1">08.00 WIB</option>
                        <option value="2">09.00 WIB</option>
                        <option value="3">10.00 WIB</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>Jumlah Penumpang (optional)</span>
                    <div className="input-group">
                      <input type="number" className="form-control" placeholder="Jumlah Penumpang" />
                    </div>
                  </div>
                  <div className="col-auto align-self-end">
                    <button className="btn btn-edit">Edit</button>
                  </div>
                </div>
              </form>
            </div>
            {loading && (<Loader />)}
            {/* End Box Form */}
            <div className="card-mobil mt-4">
              <div className="row">
                <div className="col-md-12">
                  <div className="row">
                    {dataList.map((item) => {
                      return(
                        <div className="col-md-4">
                          <div class="card" key={item.id}>
                            <div class="card-body">
                              <h5 class="card-title">
                                  <img width={275} src={item.image} alt="img-car" />
                              </h5>
                              <p>{item.name}</p>
                              <h6>Rp {item.price} / hari</h6>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, quae.</p>
                              <p class="card-text">
                                  <img src={iconUser} alt="icon-key" />4 Orang
                              </p>
                              <p class="card-text">
                                  <img src={iconSetting} alt="icon-clock" />Manual
                              </p>
                              <p class="card-text">
                                  <img src={iconCalendar} alt="icon-clock" />Tahun 2020
                              </p>
                              <div class="btn-group" aria-label="Basic example">
                                  <button type="button" class="btn btn-pilih" onClick={() => handleGoDetail(item.id)}>Pilih Mobil
                                  </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
