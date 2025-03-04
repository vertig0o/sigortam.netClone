import React from "react";
import "../App.css";
import Container from "react-bootstrap/Container";
import { BsArrowRight } from "react-icons/bs";

import { Nav, Navbar, NavDropdown, Button, Image } from "react-bootstrap";
function Header() {
  return (
    <Navbar bg="light" expand="lg" className="header-app">
      <Navbar.Brand href="/">
        <img
          src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-goat.svg"
          alt="sigortam.net"
          height="27"
          width="26"
        />
        <img
          src="https://cdnsnet.mncdn.com/facelift/assets/img/core/logo/app-logo-title.svg"
          alt="Sigortam.net Logo"
          height="27"
          width="167"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav" className="navbar-nav">
        <Nav className="me-auto">
          <NavDropdown
            title="Ürünlerimiz"
            id="nav-dropdown-products"
            className="custom-dropdown"
          >
            <Container className="mega-menu-content">
              <strong className="mega-menu-title">
                Sigortam.net'i keşfedin
              </strong>
              <div className="mega-menu-grid">
                {/* Üst Satır: Aracım ve Sağlığım */}
                <div className="mega-menu-item">
                  <div className="mega-menu-head">
                    <h6>Aracım</h6>
                    <Image
                      src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/car.svg"
                      width="80"
                      height="60"
                    />
                  </div>
                  <div className="mega-menu-title">
                    <NavDropdown.Item
                      href="/kasko-sigortasi"
                      className="nav-item-with-icon"
                    >
                      Kasko
                      <span className="icon ml-auto">
                        <BsArrowRight />
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/trafik-sigortasi"
                      className="nav-item-with-icon"
                    >
                      Trafik Sigortası
                      <span className="icon ml-auto">
                        <BsArrowRight />
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/imm-sigortasi"
                      className="nav-item-with-icon"
                    >
                      İMM Sigortası
                      <span className="icon ml-auto">
                        <BsArrowRight />
                      </span>
                    </NavDropdown.Item>
                  </div>
                </div>

                <div className="mega-menu-item">
                  <div className="mega-menu-head">
                    <h6>Sağlığım</h6>
                    <Image
                      src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/health.svg"
                      width="51"
                      height="64"
                    />
                  </div>
                  <div className="mega-menu-title">
                    <NavDropdown.Item
                      href="/tamamlayici-saglik-sigortasi"
                      className="nav-item-with-icon"
                    >
                      Tamamlayıcı Sağlık
                      <span className="icon ml-auto">
                        <BsArrowRight />
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/ozel-saglik-sigortasi"
                      className="nav-item-with-icon"
                    >
                      Özel Sağlık
                      <span className="icon ml-auto">
                        <BsArrowRight />
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/seyahat-saglik-sigortasi"
                      className="nav-item-with-icon"
                    >
                      Seyahat Sağlık
                      <span className="icon ml-auto">
                        <BsArrowRight />
                      </span>
                    </NavDropdown.Item>
                  </div>
                </div>
                {/* Alt Satır: Evim ve Diğer */}
                <div className="mega-menu-item">
                  <div className="mega-menu-head">
                    <h6>Evim</h6>
                    <Image
                      src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/home.svg"
                      width="75"
                      height="94"
                    />
                  </div>
                  <div className="mega-menu-title">
                    <NavDropdown.Item
                      href="/dask-sigortasi"
                      className="nav-item-with-icon"
                    >
                      DASK
                      <span className="icon ml-auto">
                        <BsArrowRight />
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/konut-sigortasi"
                      className="nav-item-with-icon"
                    >
                      Konut Sigortası
                      <span className="icon ml-auto">
                        <BsArrowRight />
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/evim-guvende-sigortasi"
                      className="nav-item-with-icon"
                    >
                      Evim Güvende
                      <span className="icon ml-auto">
                        <BsArrowRight />
                      </span>
                    </NavDropdown.Item>
                  </div>
                </div>

                <div className="mega-menu-item">
                  <div className="mega-menu-head">
                    <h6>Diğer</h6>
                    <Image
                      src="https://cdnsnet.mncdn.com/facelift/assets/img/elements/mega-menu/other.svg"
                      width="35"
                      height="44"
                    />
                  </div>
                  <div className="mega-menu-title">
                    <NavDropdown.Item
                      href="/cep-telefonu-sigortasi"
                      className="nav-item-with-icon"
                    >
                      Cep Telefonu
                      <span className="badge bg-secondary">Yeni</span>
                      <span className="icon ml-auto">
                        <BsArrowRight />
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/evcil-hayvan-sigortasi"
                      className="nav-item-with-icon"
                    >
                      Evcil Hayvan{" "}
                      <span className="icon ml-auto">
                        <BsArrowRight />
                      </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/ferdi-kaza-sigortasi"
                      className="nav-item-with-icon"
                    >
                      Ferdi Kaza{" "}
                      <span className="badge bg-secondary">Yeni</span>{" "}
                      <span className="icon ml-auto">
                        <BsArrowRight />
                      </span>
                    </NavDropdown.Item>
                  </div>
                </div>
              </div>
            </Container>
          </NavDropdown>
          <Nav.Link href="/kampanyalar">Kampanyalar</Nav.Link>
          <Nav.Link href="/police-iptal/basvuru">
            Poliçe İptal İşlemleri
          </Nav.Link>
          <NavDropdown title="Bilgi Merkezi" id="nav-dropdown">
            <NavDropdown.Item href="/blog">Sigorta Blog</NavDropdown.Item>
            <NavDropdown.Item href="/hakkimizda">Hakkımızda</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="tel:4442400">Yardımcı olmaya hazırız</Nav.Link>
        </Nav>
        <Button className="button app-button app-button--default app-button--xs">
          Giriş yap/Üye ol
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
