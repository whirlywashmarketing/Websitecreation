import { motion } from 'motion/react';
import { ServiceCard } from './service-card';

// Use your custom service images from public/assets folder
const windowCleaningImage = '/images/Exterior_window_cleaning.JPEG';
const interiorWindowImage = '/images/Interior_window_cleaning.jpeg';
const screenCleaningImage = '/images/screen_cleaning.JPG';
const skylightCleaningImage = '/images/Skylight_cleaning.JPEG';
const powerWashingImage = '/images/powerwashing.JPEG';

// Fallback images for preview (will use your real images on Netlify)
const windowCleaningFallback = 'https://images.unsplash.com/photo-1761689502577-0013be84f1bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHRlcmlvciUyMHdpbmRvdyUyMGNsZWFuaW5nJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MjQ3NTYxNnww&ixlib=rb-4.1.0&q=80&w=1080';
const interiorWindowFallback = 'https://images.unsplash.com/photo-1762500825301-569628303acb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMHdpbmRvdyUyMGNsZWFuaW5nJTIwaG9tZXxlbnwxfHx8fDE3NzI0NzU2MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080';
const screenCleaningFallback = 'https://images.unsplash.com/photo-1607355298884-7663019fa61e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kb3clMjBzY3JlZW4lMjBjbGVhbmluZyUyMG1lc2h8ZW58MXx8fHwxNzcyNDc1NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080';
const skylightCleaningFallback = 'https://images.unsplash.com/photo-1527270997612-014349a46e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza3lsaWdodCUyMHdpbmRvdyUyMGNsZWFuaW5nJTIwcm9vZnxlbnwxfHx8fDE3NzI0NzU2MTd8MA&ixlib=rb-4.1.0&q=80&w=1080';
const powerWashingFallback = 'https://images.unsplash.com/photo-1735399588751-3cdd6effeac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzc3VyZSUyMHdhc2hpbmclMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc3MjQ3NTYyMXww&ixlib=rb-4.1.0&q=80&w=1080';

export function Services() {
  const services = [
    {
      icon: '',
      title: 'Exterior Window Cleaning',
      description: 'Sparkling clean windows that let the light shine through. We remove dirt, grime, and hard water stains.',
      image: windowCleaningImage,
      objectPosition: 'object-[center_65%]',
      fallbackImage: windowCleaningFallback,
      scrollTarget: 'pricing-comparison',
    },
    {
      icon: '',
      title: 'Interior Window Cleaning',
      description: 'Streak-free interior windows that make your home feel bright and welcoming.',
      image: interiorWindowImage,
      fallbackImage: interiorWindowFallback,
      scrollTarget: 'pricing-comparison',
    },
    {
      icon: '',
      title: 'Screen Cleaning',
      description: 'Professional screen cleaning and repair service to improve air flow and visibility.',
      image: screenCleaningImage,
      objectPosition: 'object-[center_65%]',
      fallbackImage: screenCleaningFallback,
      scrollTarget: 'pricing-comparison',
    },
    {
      icon: '',
      title: 'Skylight Cleaning',
      description: 'Safe and effective skylight cleaning that brightens up your entire home.',
      image: skylightCleaningImage,
      fallbackImage: skylightCleaningFallback,
      scrollTarget: 'pricing-comparison',
    },
    {
      icon: '',
      title: 'Power Washing',
      description: 'Transform your driveway, siding, and deck with our professional pressure washing services.',
      image: powerWashingImage,
      fallbackImage: powerWashingFallback,
      scrollTarget: 'pricing-comparison',
    },
    {
      icon: '',
      title: 'Holiday Lighting',
      description: 'Professional holiday lighting installation and removal. Make your home shine this season.',
      image: 'https://images.unsplash.com/photo-1765242115312-7a27f513ec03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xpZGF5JTIwbGlnaHRpbmclMjBjaHJpc3RtYXMlMjBob3VzZXxlbnwxfHx8fDE3NzIzMDQ3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      scrollTarget: 'pricing-comparison',
    },
  ];

  const pricingPlans = [
    {
      icon: '',
      title: 'ONE-TIME SERVICE',
      description: 'Single visit exterior cleaning with no recurring benefits or loyalty incentives.',
      badge: 'PRIMARY SERVICE',
      checklist: [
        { text: 'No discount', included: false },
        { text: 'No free RainBlock technology', included: false },
        { text: 'No 7-day rain guarantee', included: false },
        { text: 'No free hard water removal (5 panes)', included: false },
      ],
      footerNote: 'No discount. No bonus benefits.',
      highlighted: false,
      scrollTarget: 'estimate',
    },
    {
      icon: '',
      title: 'BI-ANNUAL PLAN',
      description: 'Twice-per-year professional service with seasonal maintenance savings.',
      badge: 'PRIMARY SERVICE',
      checklist: [
        { text: '$50 off service', included: true },
        { text: 'Free RainBlock technology not included', included: false },
        { text: '7-day rain guarantee not included', included: false },
        { text: 'Free hard water removal (5 panes)', included: false },
      ],
      footerNote: 'Discount included. No bonus services.',
      highlighted: false,
      scrollTarget: 'estimate',
    },
    {
      icon: '',
      title: 'QUARTERLY PLAN',
      description: 'Routine quarterly service designed for maximum protection, consistency, and premium maintenance benefits.',
      badge: 'PRIMARY SERVICE',
      checklist: [
        { text: '$100 off service', included: true },
        { text: 'Free RainBlock technology', included: true },
        { text: '7-day rain guarantee', included: true },
        { text: 'Free hard water removal', included: true },
      ],
      footerNote: 'Discount + bonus benefits included.',
      highlighted: true,
      scrollTarget: 'estimate',
    },
  ];

  return (
    <>
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive exterior cleaning services to make your home shine
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            id="pricing-comparison"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Plans Comparison</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs and budget
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ServiceCard {...plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}