import React, { useEffect, useState } from "react";
import "../HomePage.css";
import { Button, Col, Image, Container, Row } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
export default function HomePage({ toggleDropdown }) {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scaleAmount = Math.min(1, Math.max(0.5, 1 + Math.sin(scrollY / 200)));
  // Math.sin(scrollY / 500) * 0.8 + 0.1;
  // Math.max(0.1, 0.2 + scrollY / 2000);
  //  Math.max(0.5, 1 - scrollY / 1200);
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
      <section>
        <Container>
          <h2 className="text-center font-weight-semibold">
            Poliçemi neden Sigortam.net’ten almalıyım?
          </h2>
          <div className="why-policy-buy-list__content">
            <Row className="justify-content-center">
              <Col md={4} className="text-center">
                <div className="why-policy-buy-list__contentItem">
                  <Image
                    src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-trustworthy.svg"
                    alt="Doğru Ürün"
                    width={90}
                    height={90}
                    fluid
                  />
                  <h5 className="font-weight-semibold">Doğru Ürün</h5>
                  <p>
                    Yenilenen yapay zekâmızla, onlarca sigorta teklifi arasından
                    ucuzunu, sana uygununu ve kapsamlısını buluyoruz. Net
                    teminatlar ve net fiyatlarla kararın hep net olsun.
                  </p>
                </div>
              </Col>

              <Col md={4} className="text-center">
                <div className="why-policy-buy-list__contentItem">
                  <Image
                    src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-price.svg"
                    alt="İyi Fiyat"
                    width={90}
                    height={90}
                    fluid
                  />
                  <h5 className="font-weight-semibold">İyi Fiyat</h5>
                  <p>
                    Önceliğimiz her zaman sensin. Çalıştığımız tüm şirketlerde
                    bütçeni düşünerek “en iyi fiyat garantisi” sunuyoruz.
                  </p>
                </div>
              </Col>

              <Col md={4} className="text-center">
                <div className="why-policy-buy-list__contentItem">
                  <Image
                    src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/policy-with-you.svg"
                    alt="7/24 Hizmet"
                    width={90}
                    height={90}
                    fluid
                  />
                  <h5 className="font-weight-semibold">7/24 Hizmet</h5>
                  <p>
                    24 yıllık tecrübemiz ve uzman sigorta danışmanlarımızla 7/24
                    her ihtiyacında yanındayız. Üstelik hasar anında saniyeler
                    içinde bize ulaşabilirsin.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <Container className="landing-cover">
          <Row>
            {/* Sol kısım */}
            <Col xs={12} lg={5} className="landing-cover__box">
              <div className="landing-cover__boxItem">
                <div className="landing-cover__boxItemMobileImage d-block d-lg-none">
                  <img
                    src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/feature1-mobile.webp"
                    alt="En iyi sigorta teklifi"
                    width="345"
                    height="388"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <span className="d-block d-lg-none">
                  Görseldeki fiyatlar temsilidir. Aracına özel fiyatları
                  tekliflerde görebilirsin.
                </span>
                <h2 className="landing-cover__title">
                  Hangi ürün bana en uygun diye düşünme, biz senin için en net
                  teklifleri sıraladık bile!
                </h2>
                <p className="landing-cover__detail">
                  Tüm teminatları tek tek inceledik, ihtiyaçlarına en uygun olan
                  teminatları belirledik. Sana özel kapsamlı ve fiyatı uygun
                  ürün önerileri hazırladık.
                </p>
                <span variant="primary" className="landing-cover__button">
                  Hemen Teklif Al
                  <span className="icon ml-auto">
                    <BsArrowRight />
                  </span>
                </span>
              </div>

              <div className="landing-cover__boxItem">
                <div className="landing-cover__boxItemMobileImage d-block d-lg-none">
                  <img
                    src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/feature2-mobile.webp"
                    alt="En iyi sigorta teklifi"
                    width="345"
                    height="452"
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
                <span className="d-block d-lg-none">
                  Görseldeki fiyatlar temsilidir. Aracına özel fiyatları
                  tekliflerde görebilirsin.
                </span>
                <h2 className="landing-cover__title">
                  Sadece 2 dakikada tüm teklifleri kolayca karşılaştır.
                </h2>
                <p className="landing-cover__detail">
                  20+ sigorta şirketinden teklifleri tek platformda karşılaştır,
                  internete özel indirimlerle uygun fiyata sigortan anında
                  başlasın.
                </p>
                <span variant="primary" className="landing-cover__button">
                  Hemen Teklif Al
                  <span className="icon ml-auto">
                    <BsArrowRight />
                  </span>
                </span>
              </div>
            </Col>

            {/* Sağ kısım */}
            <Col xs={12} lg={7} className="d-none d-lg-block text-end">
              <div className="landing-cover__phoneWrapper">
                {/* Telefon Mockup */}
                <section>
                  <Container className="landing-cover ">
                    <div className="landing-cover__mockUpContent">
                      <img
                        className="landing-cover__mockUpImage"
                        src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/phone-mockup.webp"
                        alt="Telefon Mockup"
                        width="260"
                        height="528"
                        loading="lazy"
                      />

                      {/* Animasyonlu Görsel */}
                      <div className="landing-cover__imageContainer">
                        <div
                          className="landing-cover__imageAnimate"
                          style={{
                            transform: `scale(${scaleAmount})`,
                          }}
                        >
                          <img
                            src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/feature1.svg"
                            alt="En iyi sigorta teklifi"
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>
                  </Container>
                </section>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
