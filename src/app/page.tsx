import CarRentalFaq from '@/components/ui/HomePageSections/Faq';
import Promotion from '@/components/ui/HomePageSections/Promotion';
import ServiceSection from '@/components/ui/HomePageSections/ServiceSection';
import Testimonial from '@/components/ui/HomePageSections/Testimonial';
import Landing from '@/components/ui/Landing/Landing';
import DefaultHeader from '@/components/view/Header/DefaultHeader';

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

// const baseUrl =
//   process.env.NODE_ENV === 'production'
//     ? process.env.NEXT_PUBLIC_API_BASE_URL
//     : 'http://localhost:5000/api/v1';

export default async function Home() {
  const res = await fetch(`${baseUrl}/services`, {
    // cache: "no-cache",
    next: {
      revalidate: 24 * 60 * 60, // time based revalidation
      //on demand revalidation
      tags: ['services'],
    },
  });
  const { data } = await res.json();

  return (
    <>
      <DefaultHeader />
      <Landing data={data} />
      <ServiceSection />
      <Promotion />
      <Testimonial />
      <CarRentalFaq />
    </>
  );
}

export { baseUrl };
