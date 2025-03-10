import React, { useEffect, useState } from "react";
import "../HomePage.css";
import {
  Button,
  Col,
  Image,
  Container,
  Row,
  Tab,
  Tabs,
  Carousel,
  Card,
  Accordion,
} from "react-bootstrap";
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
      <section className="home-page__landingTabs">
        <Container>
          <h2 className="landing-tabs__title">
            Sigortam.net'te sana özel neler var?
          </h2>
          <Tabs
            id="landing-tabs "
            className="mb-3 d-flex justify-content-center"
          >
            <Tab eventKey="discounts" title="İndirimler & Kampanyalar">
              <Carousel className="discount-carousel">
                {[
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/turk-telekom.webp",
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/bjk-seyahat-saglik.webp",
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/bjk-seyahat-saglik.webp ",
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/bjk-seyahat-saglik.webp",
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/petrol-ofisi-kampanya.webp",
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/kasko-hasarsizlik.webp",
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/meslek-indirimi.webp",
                ].map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={image}
                      alt={`Discount ${index + 1}`}
                      className="d-block "
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Tab>
            <Tab eventKey="ads" title="Reklam Filmleri">
              <Carousel>
                {[
                  "https://www.youtube.com/watch?v=6E-D_8dq3sg",
                  "fhttps://www.youtube.com/watch?v=6E-D_8dq3sg",
                  "-https://www.youtube.com/watch?v=6E-D_8dq3sg",
                  "https://www.youtube.com/watch?v=6E-D_8dq3sg",
                  "https://www.youtube.com/watch?v=6E-D_8dq3sg",
                ].map((video, index) => (
                  <Carousel.Item key={index}>
                    <div className="embed-responsive embed-responsive-16by9">
                      <iframe
                        className="embed-responsive-item"
                        src={`https://www.youtube.com/embed/${video}?rel=0&mute=1`}
                        title={`Youtube Video ${index}`}
                        allowFullScreen
                      ></iframe>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Tab>
            <Tab eventKey="featured" title="Öne Çıkanlar">
              <Carousel>
                {[
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/turk-telekom.webp",
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/bjk-seyahat-saglik.webp",
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/bjk-seyahat-saglik.webp ",
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/bjk-seyahat-saglik.webp",
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/petrol-ofisi-kampanya.webp",
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/kasko-hasarsizlik.webp",
                  "https://cdnsnet.mncdn.com/facelift/assets/img/elements/landing-carousel/campaigns/desktop/meslek-indirimi.webp",
                ].map((image, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={image}
                      alt={`featured ${index + 1}`}
                      className="d-block "
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Tab>
          </Tabs>
        </Container>
      </section>
      <section className="home-page__commentList">
        <Container className="mt-5">
          <div className="comment-list">
            <h2 className="comment-list__title">
              10 Milyon Mutlu Müşteri, 50+ Milyon Poliçe Teklifi
            </h2>
            <div className="comment-list__cards">
              <Row>
                <Col xs={11} md={4} className="comment-list__card">
                  <Card className="comment-card">
                    <Card.Body>
                      <span className="comment-card__interpretation">
                        Internetten alınan bir poliçeden{" "}
                        <span className="font-weight-bold">
                          çok daha fazlası.
                        </span>{" "}
                        Kaza anında çekicinin gelmesinden tutun sağlık
                        durumunuza kadar{" "}
                        <span className="font-weight-bold">
                          her şeyle ilgileniyorlar.
                        </span>
                      </span>
                      <span className="comment-card__customer">Kasım Ş.</span>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={11} md={4} className="comment-list__card">
                  <Card className="comment-card">
                    <Card.Body>
                      <span className="comment-card__interpretation">
                        Sigortam.net sayesinde evden çıkmadan{" "}
                        <span className="font-weight-bold">
                          tek bir telefonla
                        </span>{" "}
                        trafik sigortası ve kaskoyu yaptırdım.{" "}
                        <span className="font-weight-bold">
                          Hızlı, sorunsuz ve güvenilir.
                        </span>
                      </span>
                      <span className="comment-card__customer">Murat İ.</span>
                    </Card.Body>
                  </Card>
                </Col>

                <Col xs={11} md={4} className="comment-list__card">
                  <Card className="comment-card">
                    <Card.Body>
                      <span className="comment-card__interpretation">
                        Piyasadan alabileceğim kasko poliçesini aynı kapsamda{" "}
                        <span className="font-weight-bold">
                          taksitle, daha ucuza ve profesyonel hizmetle
                        </span>{" "}
                        Sigortam.net üzerinden satın aldım.
                      </span>
                      <span className="comment-card__customer">Şaban K.</span>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
      <section className="home-page__awardList color-bg-03">
        <Container>
          <Row className="award-carousel__content align-items-center">
            {/* Sol kısım: Yazı kısmı */}
            <Col sm={12} md={6} className="award-carousel__detail">
              <h2 className="award-carousel__detailTitle">
                Ödüllerimizden bahsetmiş miydik?
              </h2>
              <p>
                Dünyanın en prestijli ödüllerinden biri olan Stevie Awards’ta{" "}
                <br className="d-none d-xl-block" />
                Sigorta Sektörünün En İyi Websitesi Ödülü’nü kazandık.{" "}
                <br className="d-none d-xl-block" />
                Sizinle yürüdüğümüz bu yolda nice ödülleri kucaklamak
                dileğiyle...
              </p>
              <Button variant="link" className="award-carousel__button">
                Detaylı Bilgi
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </Button>
            </Col>

            {/* Sağ kısım: Ödül resimleri */}
            <Col sm={12} md={6} className="award-carousel__image">
              <a href="/odullerimiz-hakkinda">
                <img
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/snet-gold-winner-badge.webp"
                  width="auto"
                  height="238"
                  alt="Sigortam.net Stevie Winner"
                />
              </a>
              <a href="/odullerimiz-hakkinda">
                <img
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/if-design-award-2024-vertical.webp"
                  width="auto"
                  height="238"
                  alt="If Design Award 2024"
                />
              </a>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="home-page__contractedCompanyCardList">
        <Container>
          <div className="contracted-company-card-list">
            <h2 className="contracted-company-card-list__title">
              25’ten fazla sigorta şirketinden teklif al
            </h2>
            <Row className="contracted-company-card-list__row">
              {[
                {
                  name: "Acıbadem Sigorta",
                  imgSrc:
                    "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/acibadem-sigorta.webp",
                  link: "/acibadem-saglik-hayat-sigorta",
                },
                {
                  name: "Ak Sigorta",
                  imgSrc:
                    "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/ak-sigorta.webp",
                  link: "/aksigorta",
                },
                {
                  name: "Allianz Sigorta",
                  imgSrc:
                    "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/allianz.webp",
                  link: "/allianz-sigorta",
                },
                {
                  name: "Anadolu Sigorta",
                  imgSrc:
                    "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/anadolu-sigorta.webp",
                  link: "/anadolu-sigorta",
                },
                {
                  name: "Anadolu Hayat Emeklilik",
                  imgSrc:
                    "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/anadolu-hayat-emeklilik.webp",
                  link: "/anadolu-hayat-emeklilik",
                },
                {
                  name: "Ankara Sigorta",
                  imgSrc:
                    "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/ankara-sigorta.webp",
                  link: "/ankara-sigorta",
                },
                {
                  name: "Axa Sigorta",
                  imgSrc:
                    "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/axa-sigorta.webp",
                  link: "/axa-sigorta",
                },
                {
                  name: "Axa Hayat Emeklilik",
                  imgSrc:
                    "https://cdnsnet.mncdn.com/facelift/assets/img/elements/companies-icon/axa-hayat-emeklilik.webp",
                  link: "/axa-hayat-emeklilik",
                },
              ].map((company, index) => (
                <Col
                  key={index}
                  xs={6}
                  sm={4}
                  md={3}
                  xl={2}
                  className="contracted-company-card-list__col"
                >
                  <a
                    href={company.link}
                    className="contracted-company-card-list__link"
                  >
                    <img
                      src={company.imgSrc}
                      alt={company.name}
                      width="106"
                      height="50"
                      className="contracted-company-card-list__img"
                    />
                  </a>
                </Col>
              ))}
            </Row>
          </div>
        </Container>
      </section>
      <section
        className="container my-5"
        style={{ maxWidth: "800px", margin: "0 auto" }}
      >
        <h2 className="text-center mb-4">
          Sigortam.net Hakkında En Merak Edilen 5 Soru
        </h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item className="mb-3" eventKey="0">
            <Accordion.Header>
              Neden Sigortam.net’i tercih etmeliyim, farkınız nedir?
            </Accordion.Header>
            <Accordion.Body>
              Sigortam.net Türkiye’nin ilk ve lider online sigorta brokeridir.
              Müşterilerimizin menfaatleri doğrultusunda hareket eder, 20+
              sigorta şirketi teklifini tek sayfada görmelerini sağlar ve en iyi
              sigortayı seçmelerine yardımcı olur. 7/24 destek sunar.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="mb-3" eventKey="1">
            <Accordion.Header>
              Poliçe satışında müşterilerden ek ücret alıyor musunuz?
            </Accordion.Header>
            <Accordion.Body>
              Hayır, hiçbir ek ücret almıyoruz. Sadece sigorta şirketinin
              belirlediği poliçe fiyatını tahsil ediyoruz.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="mb-3" eventKey="2">
            <Accordion.Header>
              Poliçe fiyatlarında indirim yapıyor musunuz?
            </Accordion.Header>
            <Accordion.Body>
              Evet, müşteriye özel Sigortam.net indirimleri uygulanabilir. Ödeme
              sonrası indirim tutarı karta iade edilir.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="mb-3" eventKey="3">
            <Accordion.Header>
              En iyi sigorta teklifini nasıl seçeceğim?
            </Accordion.Header>
            <Accordion.Body>
              Sigorta şirketlerinin tekliflerini fiyat ve teminat açısından
              karşılaştırarak, ihtiyacınıza en uygun poliçeyi kolayca
              bulabilirsiniz.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="mb-3" eventKey="4">
            <Accordion.Header>
              Sigortam.net’te kişisel bilgilerim güvende mi?
            </Accordion.Header>
            <Accordion.Body>
              Evet, tüm bilgileriniz SSL protokolü ile korunur ve ödeme
              bilgileri işlem sonrası kayıtlı tutulmaz.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <Container className="my-5">
          <h2 className="text-center mb-4">
            Sigortam.net Hakkında En Merak Edilen 5 Soru
          </h2>
          <Row>
            {[
              {
                title: "Trafik Sigortası",
                link: "/trafik-sigortasi",
                img: "traffic.svg",
              },
              { title: "Kasko", link: "/kasko-sigortasi", img: "auto-v2.svg" },
              { title: "İMM", link: "/imm-sigortasi", img: "imm.svg" },
              {
                title: "Tamamlayıcı Sağlık",
                link: "/tamamlayici-saglik-sigortasi",
                img: "complementhealth-v2.svg",
              },
              {
                title: "Özel Sağlık",
                link: "/ozel-saglik-sigortasi",
                img: "health-v2.svg",
              },
              {
                title: "Seyahat Sağlık",
                link: "/seyahat-saglik-sigortasi",
                img: "travel.svg",
              },
              { title: "DASK", link: "/dask-sigortasi", img: "dask.svg" },
              {
                title: "Evim Güvende",
                link: "/evim-guvende-sigortasi",
                img: "home.svg",
              },
              {
                title: "Konut Sigortası",
                link: "/konut-sigortasi",
                img: "housing.svg",
              },
              {
                title: "Ferdi Kaza",
                link: "/ferdi-kaza-sigortasi",
                img: "personal-accident-blue.svg",
              },
              {
                title: "Evcil Hayvan",
                link: "/evcil-hayvan-sigortasi",
                img: "pet-v2.svg",
              },
              {
                title: "Cep Telefonu",
                link: "/cep-telefonu-sigortasi",
                img: "phone.svg",
              },
            ].map((category, index) => (
              <Col key={index} className="mb-4">
                <Card
                  className="h-100 text-center"
                  style={{ width: "180px", height: "90px" }}
                >
                  <Card.Img
                    variant="top"
                    src={`https://cdnsnet.mncdn.com/facelift/assets/img/elements/branchs/category/${category.img}`}
                    alt={category.title}
                    className="p-3"
                    style={{
                      width: "121px",
                      height: "90px",
                      objectFit: "contain",
                      margin: "0 auto",
                    }}
                  />
                  <Card.Body style={{ with: "100px", height: "90px" }}>
                    <Card.Title>
                      <a href={category.link}>{category.title}</a>
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
