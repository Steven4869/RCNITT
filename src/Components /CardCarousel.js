import React from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './CardCarousel.css'; // Add your CSS file for additional styling

const Carousel = () => {
  const slides = [
    {
      heading: 'NIT-Trichy inks MoU with Datanetiix',

      text: `The National Institute of Technology, Trichy (NIT-T), recently inked a significant Memorandum of Understanding (MoU) with Datanetiix Solutions India Pvt Ltd. This collaborative partnership aims to foster innovation and knowledge exchange between academia and industry, potentially paving the way for groundbreaking advancements in technology and research initiatives within the region`,
      imageUrl: './DTNIX.jpeg',
      link: 'https://timesofindia.indiatimes.com/city/trichy/nit-trichy-inks-mou-with-datanetiix-solutions/articleshow/101972581.cms',
    },
    {
      heading: 'NIT Trichy organises Workshop on Land cover, Climate Change, and Water Resources',
      text: `The National Institute of Technology, Trichy (NIT Trichy), has embarked on a journey to address some of the most pressing environmental challenges with the commencement of a five-day Global Initiative for Academic Networks (GIAN) workshop. The workshop, titled 'Assessing Impact of Landcover and Climate Change on Water Resources Using Soil Water Assessment Tool (SWAT),' was inaugurated at the Seminar Hall, Department of Civil Engineering, NIT Trichy, on September 25, 2023.
      `,
      imageUrl: './GlobalWorkshop.jpg',
      link: 'https://timesofindia.indiatimes.com/city/trichy/workshop-on-climate-change-impact-on-water-resources-modelling/articleshow/106108449.cms',
    },

    {
      heading: 'NIT-T, Illinois Tech to offer joint degree in Data Science, AI',
      text: `
      The National Institute of Technology-Tiruchi (NIT-T) on Monday signed a Memorandum of Understanding (MoU) with the Illinois Institute of Technology (Illinois Tech) that enables both institutions to offer a degree programme in Data Science and AI commencing in Fall 2024.`,
      imageUrl: './illonis.jpeg',
      link: 'https://www.thehindu.com/news/cities/Tiruchirapalli/nit-t-illinois-tech-to-offer-joint-degree-in-data-science-ai/article67554328.ece',
    },
    {
      heading: 'NIT Trichy and Armored Vehicles Nigam Ltd(AVNL) signs MoU',
      text: `NITT and AVNL/AVANI propose to collaborate/continue to collaborate in
      the followingbroad directions: Research, consultancy, advisory,
      education, training, and projectsunder Corporate Social
      Responsibilities (CSR).`,
      imageUrl: './AVNL.jpeg',
      link: 'https://timesofindia.indiatimes.com/city/trichy/nit-t-signs-mou-with-avnl-for-defence-research/articleshow/99199439.cms',
    },
    {
      heading: 'NIT-T and ISRO team review technology development projects',
      text: `A joint management committee of National Institute of Technology — Tiruchi (NIT-T) and Indian Space Research Organisation (ISRO) recently reviewed the technology development projects undertaken by Space Technology Incubation Centre (STIC), established at the NITT campus as part of an ongoing collaboration between the two institutions.`,
      imageUrl: './ISRO2023.jpeg',
      link: 'https://www.thehindu.com/news/cities/Tiruchirapalli/nit-t-and-isro-team-review-technology-development-projects/article67259695.ece',
    },
    {
      heading: 'NIT Trichy hosts Perkin Elmer programme',
      text: `NIT Tiruchirappalli hosted a one-day program titled ‘PerkinElmer Academia Research Forum 2023’ in collaboration with PerkinElmer India. The focus of the event was a Knowledge Conclave on current research trends and relevant solutions within the Research Domain and Equipment Health Inspection, as part of Swacchatha Special Campaign 3.0 and Diamond Jubilee Celebration.`,
      imageUrl: './Perkin.jpeg',
      link: 'https://pib.gov.in/PressReleasePage.aspx?PRID=1963872',
    },
    {
      heading: 'DCO, NIT-T ink MoU on census data analysis workstation',
      text: `The Directorate of Census Operations (DCO) Tamil Nadu signed a Memorandum of Understanding (MoU) with National Institute of Technology – Tiruchi (NIT-T) on Thursday to establish a workstation to promote research on census data.`,
      imageUrl: './DCO.jpeg',
      link: 'https://www.thehindu.com/news/cities/Tiruchirapalli/dco-nit-t-ink-mou-on-census-data-analysis-workstation/article66838534.ece',
    },
    {
      heading:
        'Genesis’23: NIT Tiruchirappalli Institute Innovation Council Inspires Innovation and Entrepreneurship',
      text: `Genesis'23, the flagship event of the Institute Innovation Council of National Institute of Technology
      Tiruchirappalli (IIC-NITT), held on September 20th, 2023, showcased the Institute's commitment to entrepreneurship among its talented student community.`,
      imageUrl: './Genesis_1.JPG',
      link: 'https://pib.gov.in/PressReleseDetail.aspx?PRID=1959764',
    },
    // NITT Trichy and Armored Vehicles Nigam Ltd(AVNL) signs MoU
  ];

  const responsive = {
    0: { items: 1 },
    600: { items: 1 },
    1024: { items: 1 },
  };

  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={7000}
      responsive={responsive}
      buttonsDisabled={true} // Disable default buttons
      dotsDisabled={false}
      infinite={true}
    >
      {slides.map((slide, index) => (
        <div key={index} className="CarouselItem">
          <div className="Carousel">
            <div className="CarouselContent">
              <div className="CarouselHeading">{slide.heading}</div>
              <div className="CarouselText">{slide.text}</div>
              <Link to={slide.link} className="CarouselButton" target="_blank">
                <div className="CarouselButtonContent">KNOW MORE</div>
              </Link>
            </div>
            <div className="CarouselBackground">
              <img src={slide.imageUrl} alt="" className="CarouselPicture" />
            </div>
          </div>
        </div>
      ))}
    </AliceCarousel>
  );
};

export default Carousel;
