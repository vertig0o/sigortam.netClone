import React from "react";
import "../HomePage.css";
import { Button } from "react-bootstrap";
export default function HomePage({ toggleDropdown }) {
  return (
    <div className="container">
      <section className="list-branch-list">
        <div className="col px-0">
          <h1 className="branch-list__title">Sigortada Güvenin Adresi</h1>
          <div className="branch-list__subTitle">
            Doğru Ürün. İyi Fiyat. 7/24 Hizmet.
          </div>

          {/* Üstte 3 Kart */}
          <div className="row mb-4">
            {/* Kasko */}
            <div className="col-4  col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <a href="/kasko-sigortasi" className="branch-list__boxItem card">
                <img
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/auto-v2.svg"
                  alt="Kasko Sigortası Branş Sayfası"
                  width="110"
                  height="90"
                  className="ls-is-cached lazyloaded card-img-top"
                />
                <div className="card-body">
                  <span>Kasko</span>
                </div>
              </a>
            </div>

            {/* Elektrikli Araç Kaskosu */}
            <div className="col-4  col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
              <a
                href="/elektrikli-arac-kasko"
                className="branch-list__boxItem card"
              >
                <img
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/electric-vehicle-orange.svg"
                  alt="Elektrikli Araç Kaskosu Branş Sayfası"
                  width="110"
                  height="90"
                  className="ls-is-cached lazyloaded card-img-top"
                />
                <div className="card-body">
                  <span>Elektrikli Araç Kaskosu</span>
                </div>
              </a>
            </div>

            {/* Tamamlayıcı Sağlık */}
            <div className="col-4  col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
              <a
                href="/tamamlayici-saglik-sigortasi"
                className="branch-list__boxItem card"
              >
                <img
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/complementhealth-v2.svg"
                  alt="Tamamlayıcı Sağlık Sigortası Branş Sayfası"
                  width="110"
                  height="90"
                  className="ls-is-cached lazyloaded card-img-top"
                />
                <div className="card-body">
                  <span>Tamamlayıcı Sağlık</span>
                </div>
              </a>
            </div>
          </div>

          {/* Diğer Kartlar */}
          <div className="row justify-content-center mb-5">
            <div className="col-2">
              <a href="/trafik-sigortasi" className="branch-list__boxItem card">
                <img
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/traffic-orange.svg"
                  alt="Trafik Sigortası Branş Sayfası"
                  width="122"
                  height="91"
                  className="ls-is-cached lazyloaded card-img-top"
                />
                <div className="card-body">
                  <span>Trafik Sigortası</span>
                </div>
              </a>
            </div>

            <div className="col-2">
              <a href="/imm-sigortasi" className="branch-list__boxItem card">
                <img
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/imm.svg"
                  alt="İMM Branş Sayfası"
                  width="122"
                  height="91"
                  className="ls-is-cached lazyloaded card-img-top"
                />
                <div className="card-body">
                  <span>İMM</span>
                </div>
              </a>
            </div>

            <div className="col-2">
              <a
                href="/ozel-saglik-sigortasi"
                className="branch-list__boxItem card"
              >
                <img
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/healthOrange.svg"
                  alt="Özel Sağlık Sigortası Branş Sayfası"
                  width="122"
                  height="91"
                  className="ls-is-cached lazyloaded card-img-top"
                />
                <div className="card-body">
                  <span>Özel Sağlık</span>
                </div>
              </a>
            </div>

            <div className="col-2">
              <a
                href="/seyahat-saglik-sigortasi"
                className="branch-list__boxItem card"
              >
                <img
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/travel.svg"
                  alt="Seyahat Sağlık Sigortası Branş Sayfası"
                  width="122"
                  height="91"
                  className="ls-is-cached lazyloaded card-img-top"
                />
                <div className="card-body">
                  <span>Seyahat Sağlık</span>
                </div>
              </a>
            </div>

            <div className="col-2">
              <a href="/dask-sigortasi" className="branch-list__boxItem card">
                <img
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/dask-v2.svg"
                  alt="DASK Sigortası Branş Sayfası"
                  width="122"
                  height="91"
                  className="ls-is-cached lazyloaded card-img-top"
                />
                <div className="card-body">
                  <span>DASK</span>
                </div>
              </a>
            </div>
          </div>

          <div className="branch-list__seeAllProducts">
            <Button
              variant="link"
              aria-hidden="true"
              className="branch-list__button text-decoration-none font-weight: 700"
              onClick={toggleDropdown}
            >
              Tüm Ürünleri Gör
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
