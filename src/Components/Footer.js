import React from "react";
import "../HomePage.css";
import { Col, Nav, Container, Row } from "react-bootstrap";
export default function Footer() {
  return (
    <div>
      <footer className="footer app-footer">
        <Container className="app-footer__inner">
          <div
            className="app-footer__snet"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div className="mb-5 app-footer__snetBrand">
              <div className="app-footer__logoFlex">
                <img
                  alt="Sigortam.net"
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-goat.svg"
                  height="38"
                  width="38"
                  className="app-footer__snetGoat"
                />
                <img
                  alt="Sigortam.net"
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg"
                  height="38"
                  width="235"
                  className="app-footer__snetLogo"
                />
              </div>
              <span className="app-footer__copyright">
                © 2000-2025 Sigortam.net
              </span>
            </div>
            <a href="/odullerimiz-hakkinda">
              <div className="app-footer__snetAward">
                <img
                  alt="Sigortam.net"
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/snet-gold-winner-badge.webp"
                  height="58"
                  width="58"
                />
                <img
                  alt="Sigortam.net"
                  src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/if-design-award-2024-horizontal.webp"
                  height="64"
                  width="125"
                />
              </div>
            </a>
          </div>
          <Row>
            <Col md={3} sm={12}>
              <h5>Ürünlerimiz</h5>
              <Nav className="flex-column">
                <Nav.Link href="/kasko-sigortasi">Kasko Sigortası</Nav.Link>
                <Nav.Link href="/trafik-sigortasi">Trafik Sigortası</Nav.Link>
                <Nav.Link href="/imm-sigortasi">İMM Sigortası</Nav.Link>
                <Nav.Link href="/tamamlayici-saglik-sigortasi">
                  Tamamlayıcı Sağlık Sigortası
                </Nav.Link>
                <Nav.Link href="/ozel-saglik-sigortasi">
                  Özel Sağlık Sigortası
                </Nav.Link>
                <Nav.Link href="/konut-sigortasi">Konut Sigortası</Nav.Link>
                <Nav.Link href="/dask-sigortasi">DASK</Nav.Link>
                <Nav.Link href="/evim-guvende-sigortasi">
                  Evim Güvende Sigortası
                </Nav.Link>
                <Nav.Link href="/ferdi-kaza-sigortasi">
                  Ferdi Kaza Sigortası
                </Nav.Link>
                <Nav.Link href="/cep-telefonu-sigortasi">
                  Telefon Kaskosu
                </Nav.Link>
                <Nav.Link href="/evcil-hayvan-sigortasi">
                  Evcil Hayvan Sigortası
                </Nav.Link>
                <Nav.Link href="/seyahat-saglik-sigortasi">
                  Seyahat Sağlık Sigortası
                </Nav.Link>
              </Nav>
            </Col>
            <Col md={3} sm={12}>
              <h5>Merak Edilenler</h5>
              <Nav className="flex-column">
                <Nav.Link href="/aylik-kasko-nedir">
                  Günlük, Haftalık ve Aylık Kasko
                </Nav.Link>
                <Nav.Link href="/dogum-sigortasi">
                  Doğum Sigortası Fiyatları
                </Nav.Link>
                <Nav.Link href="/hamileyken-ozel-saglik-sigortasi-yaptirilir-mi">
                  Hamileyken Doğum Sigortası
                </Nav.Link>
                <Nav.Link href="/limitsiz-ihtiyari-mali-mesuliyet-teminati">
                  IMM Sigortası Nedir
                </Nav.Link>
                <Nav.Link href="/trafik-sigortasi-internetten-yapilir-mi-yaptirmak-guvenli-mi">
                  Internetten Trafik Sigortası Yaptırmak
                </Nav.Link>
                <Nav.Link href="/saglik-sigortasi-nasil-karsilastirilir">
                  Sağlık Sigortası Karşılaştırma
                </Nav.Link>
                <Nav.Link href="/sbm-trafik-sigortasi">SBM Teklif Al</Nav.Link>
                <Nav.Link href="/trafik-sigortasi-sirketleri-hangileridir">
                  Trafik Sigortası Şirketleri
                </Nav.Link>
                <Nav.Link href="/tamamlayici-saglik-sigortasi-dogum-paketi">
                  TSS Doğum Paketi
                </Nav.Link>
              </Nav>
            </Col>
            <Col md={3} sm={12}>
              <h5>Hızlı Erişim</h5>
              <Nav className="flex-column">
                <Nav.Link href="/arac-yakit-hesaplama">
                  Araç Yakıt Hesaplama
                </Nav.Link>
                <Nav.Link href="/kasko-arac-deger-listesi">
                  Kasko Değer Listesi
                </Nav.Link>
                <Nav.Link href="/mtv-hesaplama-ve-odeme">
                  MTV Hesaplama
                </Nav.Link>
                <Nav.Link href="/arac-otv-kdv-hesaplama">
                  ÖTV Hesaplama
                </Nav.Link>
                <Nav.Link href="/trafik-sigortasi-police-basamak-hesaplama">
                  Trafik Sigortası Basamakları Hesaplama
                </Nav.Link>
                <Nav.Link href="/tramer-nedir">Tramer Kaydı Sorgulama</Nav.Link>
                <Nav.Link href="/trafik-sigortasi-tavan-fiyatlari">
                  Zorunlu Trafik Sigortası Fiyatları
                </Nav.Link>
              </Nav>
            </Col>
            <Col md={3} sm={12}>
              <h5>Hakkımızda</h5>
              <Nav className="flex-column">
                <Nav.Link href="/hakkimizda">Biz Kimiz?</Nav.Link>
                <Nav.Link href="/iletisim">İletişim</Nav.Link>
                <Nav.Link href="/odullerimiz">Ödüllerimiz</Nav.Link>
                <Nav.Link href="/islem-rehberi">İşlem Rehberi</Nav.Link>
                <Nav.Link href="/is-basvurusu">Kariyer</Nav.Link>
                <Nav.Link href="/kullanici-sozlesmesi">
                  Kullanıcı Sözleşmesi
                </Nav.Link>
                <Nav.Link href="/veri-politikasi">
                  Kişisel Verilerin Korunması
                </Nav.Link>
                <Nav.Link href="/gizlilik-politikasi">
                  Gizlilik ve Çerez Politikası
                </Nav.Link>
                <Nav.Link href="/sigortamnet-basketbol-takimi">
                  Sigortam.net Basketbol Takımı
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
          <Container
            style={{
              display: "flex",
              alignItems: "center",
              height: "102px",
              borderTop: "1px solid #ccc",
              paddingTop: "10px",
            }}
          >
            <div className="app-footer-infoBar__inner">
              <Row className="align-items-center">
                <Col xs={12} md={6}>
                  <div className="app-footer-infoBar-ilab-copy">
                    <span>Sigortam.net bir</span>
                    <a
                      href="https://www.ilab.com.tr"
                      title="iLab Ventures"
                      className="cursor-pointer"
                    >
                      <img
                        src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/ilab@2022.svg"
                        alt="iLab Ventures"
                        height="25"
                        width="69"
                        className="app-footer-infoBar-ilab-copy__logo"
                        style={{ margin: " 0 12px" }}
                      />
                    </a>
                    <span>grup şirketidir.</span>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="app-footer-partnerList">
                    <a href="https://www.kariyer.net" rel="nofollow noopener">
                      Kariyer.net
                    </a>
                    <span className="app-footer-partnerList__linkDivider">
                      {" "}
                      -{" "}
                    </span>
                    <a href="https://www.arabam.com" rel="nofollow noopener">
                      Arabam.com
                    </a>
                    <span className="app-footer-partnerList__linkDivider">
                      {" "}
                      -{" "}
                    </span>
                    <a href="https://www.cimri.com" rel="nofollow noopener">
                      Cimri
                    </a>
                    <span className="app-footer-partnerList__linkDivider">
                      {" "}
                      -{" "}
                    </span>
                    <a href="https://www.emlakjet.com" rel="nofollow noopener">
                      Emlakjet
                    </a>
                    <span className="app-footer-partnerList__linkDivider">
                      {" "}
                      -{" "}
                    </span>
                    <a
                      href="https://www.endeksa.com/tr/"
                      rel="nofollow noopener"
                    >
                      Endeksa
                    </a>
                    <span className="app-footer-partnerList__linkDivider">
                      {" "}
                      -{" "}
                    </span>
                    <a
                      href="https://www.hangikredi.com/"
                      rel="nofollow noopener"
                    >
                      HangiKredi
                    </a>
                    <span className="app-footer-partnerList__linkDivider">
                      {" "}
                      -{" "}
                    </span>
                    <a href="https://www.neredekal.com" rel="nofollow noopener">
                      Neredekal.com
                    </a>
                    <span className="app-footer-partnerList__linkDivider">
                      {" "}
                      -{" "}
                    </span>
                    <a
                      href="https://www.chemorbis.com/tr/"
                      rel="nofollow noopener"
                    >
                      ChemOrbis
                    </a>
                    <span className="app-footer-partnerList__linkDivider">
                      {" "}
                      -{" "}
                    </span>
                    <a
                      href="https://tr.steelorbis.com/"
                      rel="nofollow noopener"
                    >
                      SteelOrbis
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </Container>
      </footer>
    </div>
  );
}
