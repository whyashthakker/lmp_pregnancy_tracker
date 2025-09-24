import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCountryBySlug, getAllCountries } from '@/lib/baby-cost-data';
import BabyCostCalculatorClient from './BabyCostCalculatorClient';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const countries = getAllCountries();
  return countries.map((country: { slug: string }) => ({
    slug: country.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const countryData = getCountryBySlug(slug);
  
  if (!countryData) {
    return {
      title: 'Country Not Found',
    };
  }

  const { name, currency, totalMinCost, totalMaxCost } = countryData;
  const minFormatted = new Intl.NumberFormat(countryData.locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(totalMinCost);
  
  const maxFormatted = new Intl.NumberFormat(countryData.locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(totalMaxCost);

  return {
    title: `Cost of Having a Baby in ${name} ${countryData.flag} - Complete Calculator`,
    description: `Calculate the complete cost of having a baby in ${name}. From prenatal care to 5-year child expenses. Budget ranges from ${minFormatted} to ${maxFormatted}. Free calculator with local currency & age-based costs.`,
    keywords: [
      `baby cost ${name.toLowerCase()}`,
      `cost of having baby ${name.toLowerCase()}`,
      `child expenses ${name.toLowerCase()}`,
      `pregnancy cost ${name.toLowerCase()}`,
      `maternity expenses ${name.toLowerCase()}`,
      `newborn budget ${name.toLowerCase()}`,
      `delivery cost ${name.toLowerCase()}`,
      `prenatal care cost ${name.toLowerCase()}`,
      `childcare costs ${name.toLowerCase()}`,
      currency.toLowerCase(),
      `${name.toLowerCase()} baby expenses`,
      `${name.toLowerCase()} maternity budget`,
      `age-based child costs`
    ],
    openGraph: {
      title: `Cost of Having a Baby in ${name} ${countryData.flag}`,
      description: `Complete cost breakdown for having a baby in ${name}. Budget ${minFormatted} - ${maxFormatted}. Age-based calculations from 0-5 years.`,
      type: 'website',
    },
    alternates: {
      canonical: `/tools/cost-of-having-a-baby/${slug}`,
    },
  };
}

export default async function BabyCostCalculatorPage({ params }: PageProps) {
  const { slug } = await params;
  const countryData = getCountryBySlug(slug);
  
  if (!countryData) {
    notFound();
  }

  return <BabyCostCalculatorClient countryData={countryData} />;
}