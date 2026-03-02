import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Button } from './ui/button';

export function FlagshipServices() {
  const plans = [
    {
      label: 'Primary Service',
      title: 'Bi-Annual Plans',
      description: 'Comprehensive bi-annual service packages designed to keep your property pristine year-round with strategic seasonal maintenance and professional care.',
      benefits: [
        'Strategic planning & execution',
        'Ongoing performance optimization',
        'Dedicated support & reporting',
      ],
    },
    {
      label: 'Primary Service',
      title: 'Quarterly Plans',
      description: 'Structured quarterly service programs that ensure consistent maintenance excellence and continuous property enhancement through regular professional care.',
      benefits: [
        'Strategic planning & execution',
        'Ongoing performance optimization',
        'Dedicated support & reporting',
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Flagship Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium recurring service plans designed for long-term property care
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-lg border-2 border-gray-200 p-8 lg:p-10 shadow-sm hover:shadow-lg hover:border-[#1F3C88] transition-all duration-300"
            >
              {/* Eyebrow Label */}
              <div className="inline-block px-3 py-1 bg-[#1F3C88]/10 rounded-full mb-4">
                <span className="text-sm font-semibold text-[#1F3C88] uppercase tracking-wide">
                  {plan.label}
                </span>
              </div>

              {/* Main Heading */}
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {plan.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {plan.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {plan.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#1F3C88]/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-[#1F3C88]" />
                    </div>
                    <span className="text-gray-700 text-base">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a href="#estimate">
                <Button 
                  className="w-full sm:w-auto bg-[#1F3C88] hover:bg-[#1F3C88]/90 text-white px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}