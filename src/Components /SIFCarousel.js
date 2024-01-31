import React from 'react';
import { Link } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './CardCarousel.css'; // Add your CSS file for additional styling

const SIFCarousel = () => {
  const slides = [
    {
      EquipmentName: 'UV-VIS Spectrometer',
      EquipmentMake: 'Perkin Elmer',
      EquipmentModel: 'Lambda 365',
      text: `UV-Vis spectroscopy is an analytical technique that measures the amount of discrete wavelengths of UV or visible light that are absorbed by or transmitted through a sample in comparison to a reference or blank sample. This property is influenced by the sample composition, potentially providing information on what is in the sample and at what concentration. `,
      imageUrl: './SIF-1.jpg',
    },
    {
      EquipmentName: 'FTIR Spectrometer',
      EquipmentMake: 'Perkin Elmer',
      EquipmentModel: 'Spectrum Two',
      text: `This technique is based upon the identification of functional groups within molecules where such groups vibrate (either through stretching or bending in various ways) when irradiated with specific wavelengths of light. These vibrations and their intensity (% transmission) are plotted against the frequency of light (cm−1) to which the sample is exposed to produce an FTIR spectrum. Portions of the FTIR spectrum are unique to the compound under test. `,
      imageUrl: './SIF-2.jpg',
    },
    {
      EquipmentName: 'Differential Scanning Calorimeter (DSC)',
      EquipmentMake: 'SETARAM',
      EquipmentModel: 'DSC SETLINE',
      text: `Differential scanning calorimetry is an analytical technique used to measure the amount of heat released or absorbed by a sample during heating or cooling over a range of temperature. As well as being used to characterize the thermal properties of a material, a differential scanning calorimeter is used to determine the temperature at which particular phase transitions occur, including glass transition temperature, fusion and crystallization events. `,
      imageUrl: './SIF-3.jpg',
    },
    {
      EquipmentName: 'Thermogravimetric Analyzer (TGA)',
      EquipmentMake: 'SETARAM',
      EquipmentModel: 'Labsys Evo',
      text: `TGA is a method of thermal analysis in which the mass of a sample is measured over time as the temperature changes. This measurement provides information about physical phenomena, such as phase transitions, absorption, adsorption and desorption; as well as chemical phenomena including chemisorptions, thermal decomposition, and solid-gas reactions (e.g., oxidation or reduction). `,
      imageUrl: './SIF-4.png',
    },

    {
      EquipmentName: 'C-Therm Trident Thermal Conductivity Analyzer',
      EquipmentMake: 'C-Therm Technologies Ltd.',
      EquipmentModel: 'Trident',
      text: `Used for the measurement of Thermal Conductivity, Thermal Effusivity and heat capacity of various samples such as Tests solids, liquids, powders, pastes, etc. `,
      imageUrl: './SIF-5.jpg',
    },
    {
      EquipmentName: 'Rheometer',
      EquipmentMake: 'AntonPaar',
      EquipmentModel: 'MCR 92',
      text: `Rheometer is an instrument which can measure the rheological properties of a polymer solution, using the principle of fluid rheology, in which the shear stresses can be measured by varying the shear rate. `,
      imageUrl: './SIF-6.jpg',
    },
    {
      EquipmentName: 'Force tensiometer',
      EquipmentMake: 'Bioline Scientifics',
      EquipmentModel: 'Sigma 700',
      text: `Force Tensiometer is used to measure surface tension, interfacial tension, critical micelle concentration, density etc. of liquid samples. `,
      imageUrl: './SIF-7.png',
    },
    {
      EquipmentName: 'Laser Flash Apparatus',
      EquipmentMake: 'NETZSCH Instruments',
      EquipmentModel: 'LFA467 Hyperflash',
      text: `LFA is used for the measurement of the thermal diffusivity of a variety of materials. Thermal diffusivity ( with the unit mm2/s) is a material-specific property for characterizing unsteady heat conduction. This value describes how quickly a material reacts to a change in temperature. `,
      imageUrl: './SIF-8.jpg',
    },

    {
      EquipmentName: 'Contact Angle Meter',
      EquipmentMake: 'Apex Instruments Ltd.',
      EquipmentModel: 'Acam-NSC',
      text: `Contact Angle Meters (also known as goniometers) are used for the determination of wetting characteristics of solid materials. It allow the direct measurements of contact angle, tilt angle etc. `,
      imageUrl: './SIF-9.png',
    },
    {
      EquipmentName: 'KD2 Pro Thermal Conductivity Analyzer',
      EquipmentMake: 'Decagon Devices, Inc.',
      EquipmentModel: 'KD2 Pro',
      text: `The KD2 Pro is a fully portable field and lab thermal properties analyzer. It uses the transient line heat source method to measure thermal conductivity, thermal resistivity, thermal diffusivity, and specific heat.  `,
      imageUrl: './SIF-10.jpg',
    },
    {
      EquipmentName: 'Thermal Cycling Chamber',
      EquipmentMake: 'CME Bangalore',
      EquipmentModel: 'PAC-120-A-7K',
      text: `Thermal cycling tests are designed to help with increasing strength and enhancing quality of products and components. It allows for the alternating cooling and heating of materials such as PCMs, composites, plastics, ceramics and more. `,
      imageUrl: './SIF-11.jpg',
    },
    {
      EquipmentName: 'LCR Meter',
      EquipmentMake: 'HIOKI',
      EquipmentModel: 'LCR METER IM3536',
      text: `LCR Meters are used for the AC calibration of inductance, capacitance and resistance standards, dielectric constant measurements with a variety of dielectric cells , and production testing of components and sensors. `,
      imageUrl: './SIF-12.png',
    },
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
          <div className="SIFCarousel">
            <div className="SIFCarouselContent">
              <div className="SIFCarouselHeading">
                Equipment Name: <strong>{slide.EquipmentName}</strong>
              </div>
              <div className="SIFCarouselHeading">
                Equipment Maker: <strong>{slide.EquipmentMake}</strong>
              </div>
              <div className="SIFCarouselHeading">
                Equipment Model: <strong>{slide.EquipmentModel}</strong>
              </div>
              <div className="SIFCarouselText">{slide.text}</div>
              {/* <Link to={slide.link} className="CarouselButton" target="_blank">
                <div className="CarouselButtonContent">KNOW MORE</div>
              </Link> */}
            </div>
            <div className="SIFCarouselBackground">
              <img src={slide.imageUrl} alt="" className="SIFCarouselPicture" />
            </div>
          </div>
        </div>
      ))}
    </AliceCarousel>
  );
};

export default SIFCarousel;
