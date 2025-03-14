import React from "react";
import { CiGift } from "react-icons/ci";
import "../Campaigns.css";
import { Breadcrumb, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Campaigns() {
  return (
    <div>
      <Container fluid>
        <Breadcrumb>
          <Breadcrumb.Item
            linkAs={Link}
            linkProps={{ to: "/" }}
            title="Sigortam.net"
          >
            Sigortam.net
          </Breadcrumb.Item>
          <Breadcrumb.Item
            linkAs={Link}
            linkProps={{ to: "/campaigns" }}
            title="Kampanyalar"
            active
          >
            Kampanyalar
          </Breadcrumb.Item>
        </Breadcrumb>
      </Container>
      <Container className="campaigns-page__items">
        <h1 className="campaigns-page__itemsTitle">Öne Çıkan Kampanya</h1>
        <Link
          to="/turk-telekom-kampanyasi"
          className="campaign-card-link"
          title="Türk Telekom Müşterilerine Özel Tam 1.650 TL Hediye!"
        >
          <Card className="campaign-card">
            <div className="campaign-card__row d-flex">
              <div className="campaign-card__col">
                <Card.Img
                  src="https://cdnsnet.mncdn.com/cmsv2/24100407-kampanya-turktelekom-688x376px(1)a77a0f2d-d07a-4b48-8a08-b3780ae5d577.webp"
                  alt="Türk Telekom"
                  className="campaign-card__image"
                />
              </div>
              <div className="campaign-card__col">
                <Card.Body className="campaign-card">
                  <Card.Title className="campaign-card__title">
                    Türk Telekom Müşterilerine Özel Tam 1.650 TL Hediye!
                  </Card.Title>
                  <Card.Text className="campaign-card__description">
                    Sigortam.net'te kaçırılmayacak 1.650 TL indirim Türk Telekom
                    müşterilerini bekliyor!
                  </Card.Text>
                  <Card.Text className="campaign-card__meta">
                    <strong>Kampanya Bitiş Tarihi:</strong> 31.12.2025
                  </Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </Link>
      </Container>
      <Container className="mt-4">
        <div className="card special-campaign-card campaigns-page__specialCampaignCard">
          <div className="special-campaign-card__inner">
            <div className="special-campaign-card__description">
              <div className="mb-2 mb-md-0">
                <CiGift style={{ width: "100px", height: "100px" }} />
              </div>
              <div className="ml-0 ml-md-7 d-flex justify-content-center flex-column">
                <h3>Hesabına git, sana özel indirimleri keşfet!</h3>
                <p>
                  İndirimlerin varsa görüntüleyebilir, poliçe alımında bu
                  indirimleri kullanabilirsin.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="campaigns-page__otherTitle">Tüm kampanyalar</div>
      </Container>
      <div className="container">
        <div className="row">
          {[
            {
              title:
                "Chippin ile Kasko ve Sağlık poliçelerinde Yeni İş müşterilerimize %7 İndirim",
              description:
                "Chippin ile Kasko ve Sağlık Poliçelerinde Yeni İş Müşterilerimize %7 İndirim",
              date: "Kampanya Bitiş Tarihi: 01.05.2025",
              image:
                "https://cdnsnet.mncdn.com/cmsv2/20250306_SNet_Chippin-688x376px422fde1b-b958-4a9f-b78b-5589877119e4.png",
              link: "/chippin-ile-indirim-kampanyasi",
            },
            {
              title: "Türk Telekom Müşterilerine Özel Tam 1.650 TL Hediye!",
              description:
                "Sigortam.net'te kaçırılmayacak 1.650 TL indirim Türk Telekom müşterilerini bekliyor!",
              date: "Kampanya Bitiş Tarihi: 31.12.2025",
              image:
                "https://cdnsnet.mncdn.com/cmsv2/24100407-kampanya-turktelekom-688x376px(1)a77a0f2d-d07a-4b48-8a08-b3780ae5d577.webp",
              link: "/turk-telekom-kampanyasi",
            },
            {
              title:
                "Türk Telekom Prime Müşterilerine Özel Tam 2.250 TL Hediye!",
              description:
                "Sigortam.net'te kaçırılmayacak 2.250 TL indirim Türk Telekom Prime müşterilerini bekliyor!",
              date: "Kampanya Bitiş Tarihi: 31.12.2025",
              image:
                "https://cdnsnet.mncdn.com/cmsv2/20241204-kampanya-ttprime-688x376px2b7858cf-977b-408e-b475-3655d15b462b.webp",
              link: "/turk-telekom-prime-musterilerine-ozel-indirim-hediyesi",
            },
            {
              title: "Sigortam.net Müşterilerine Özel HangiKredi'den Hediye!",
              description:
                "Sigortam.net Müşterilerine Özel HangiKredi'den Finansal Rapor Hediyesi!",
              date: "Kampanya Bitiş Tarihi: 31.12.2025",
              image:
                "https://cdnsnet.mncdn.com/cmsv2/20241204-kampanya-hangikredi-688x376px689c7ed4-2919-4bc0-96d4-7aee7aa3ae56.webp",
              link: "/finansal-rapor",
            },
            {
              title:
                "Sigortam.net'ten Poliçe Alanlara Özel n11'den İndirim Kuponları",
              description:
                "Sigortam.net'lilere Özel n11 üzerinden Yapılan Her 500 TL'lik Alışverişe Anında 100 TL'lik Kupon İndirimi!",
              date: "Kampanya Bitiş Tarihi: 31.03.2025",
              image:
                "https://cdnsnet.mncdn.com/cmsv2/24120404-kampanya-n11-688x376pxc01bda1a-ddaf-4df7-89ca-a6eb859811ec.webp",
              link: "/n11",
            },
            {
              title:
                "Sigortam.net'ten Sağlık Sigortası Alanlara Özel n11'den İndirim Kuponları",
              description:
                "Sigortam.net'lilere Özel n11 üzerinden Yapılan Her 3.000 TL'lik Alışverişe Anında 500 TL'lik Kupon İndirimi!",
              date: "Kampanya Bitiş Tarihi: 30.04.2025",
              image:
                "https://cdnsnet.mncdn.com/cmsv2/25010407-n11-saglik-kampanya-688x776pxb5b23dcd-dd20-421e-bbf8-8da99fa9135b.jpg",
              link: "/n11",
            },
            {
              title: "Juzdan Müşterilerine Özel 4.500 TL'ye Varan İndirim",
              description:
                "Juzdan Müşterilerine Özel 4.500 TL'ye Varan İndirim Fırsatını Kaçırma!",
              date: "Kampanya Bitiş Tarihi: 01.01.2026",
              image:
                "https://cdnsnet.mncdn.com/cmsv2/20250117_SNet_Juzdan-kampanya-688x376px64b1274e-9461-4f0d-bb53-d4c22f4cb224.png",
            },
            {
              title: "Petrol Ofisi Müşterilerine Özel İndirimler!",
              description:
                "Petrol Ofisi Müşterilerine Kasko, Sağlık ve Trafik Sigortası Poliçelerinde Özel İndirimler!",
              date: "Kampanya Bitiş Tarihi: 01.01.2026",
              image:
                "https://cdnsnet.mncdn.com/cmsv2/20250117_SNet_PetrolOfisi-kampanya-688x376px7e5c186a-377b-438f-baf9-1e0bce373cad.png",
            },
            {
              title:
                "750 TL İndirimle Aracına Özel Periyodik Bakım Hizmeti Arabam Garaj'da!",
              description:
                "750 TL İndirimle Aracına Özel Periyodik Bakım Hizmeti Arabam Garaj'da!",
              date: "Kampanya Bitiş Tarihi: 25.03.2025",
              image:
                "https://cdnsnet.mncdn.com/cmsv2/20241204-kampanya-arabamgaraj-688x376px7bb340d4-d707-445b-b2ef-7f689f808338.webp",
            },
            {
              title: "Elektrikli Araçlar için Kasko Sigortasında %10 İndirim! ",
              description:
                "Elektrikli aracın için hemen kaskonu yaptır, indirimli fiyatlardan yararlan!",
              date: "Kampanya Bitiş Tarihi: 31.03.2025",
              image:
                "https://cdnsnet.mncdn.com/cmsv2/20241204-kampanya-elektrikliarac-688x376px3945f9c8-7209-44e7-a11b-bbfba9d2a93c.webp",
            },
            {
              title: "Sigortam.net'ten Paylaş Kazan Kampanyası!",
              description:
                "Sigortam.net'ten Paylaş Kazan Kampanyası! Hemen arkadaşlarını davet et, hem sen hem...",
              date: "Kampanya Bitiş Tarihi: 31.12.2025",
              image:
                "https://cdnsnet.mncdn.com/cmsv2/24100407-kampanya-paylaskazan-688x376pxfedc0775-68e7-4556-bf2a-07658fc189e0.webp",
            },
            {
              title:
                "Beşiktaş Jimnastik Kulübü Taraftara Özel Seyahat Sağlık Sigortası",
              description:
                "Beşiktaş Jimnastik Kulübü Taraftara Özel Seyahat Sağlık Sigortası",
              date: "Kampanya Bitiş Tarihi: 31.12.2025",
              image:
                "https://cdnsnet.mncdn.com/cmsv2/24100407-kampanya-bjk-688x376pxc887b926-0a72-4970-a98e-e035cb5a3484.webp",
            },
          ].map((campaign, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <a
                href={campaign.link}
                target="_self"
                title={campaign.title}
                className="text-decoration-none"
              >
                <div className="blog-post-card">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="card-img-top"
                  />
                  <div className="blog-post-card-body">
                    <h5 className="blog-post-card-title">{campaign.title}</h5>
                    <p className="blog-post-card-text">
                      {campaign.description}
                    </p>
                    <p className="blog-post-card-text">
                      <small className="text-muted">{campaign.date}</small>
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
