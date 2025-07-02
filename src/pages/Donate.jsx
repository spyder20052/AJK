import React from 'react';
import { Helmet } from 'react-helmet';
import DonateHero from '@/components/donate/DonateHero.jsx';
import WhyDonate from '@/components/donate/WhyDonate.jsx';
import ImpactSection from '@/components/donate/ImpactSection.jsx';
import DonationForm from '@/components/donate/DonationForm.jsx';
import ProjectsToFund from '@/components/donate/ProjectsToFund.jsx';
import OtherDonationMethods from '@/components/donate/OtherDonationMethods.jsx';

const Donate = () => {
  return (
    <>
      <Helmet>
        <title>Faire un don - Association des Jeunes de Konney-Souazo (AJK)</title>
        <meta name="description" content="Soutenez l'Association des Jeunes de Konney-Souazo par un don. Contribuez au développement de notre communauté et à nos projets d'avenir." />
      </Helmet>
      <DonateHero />
      <WhyDonate />
      <ImpactSection />
      <DonationForm />
      <ProjectsToFund />
      <OtherDonationMethods />
    </>
  );
};

export default Donate;