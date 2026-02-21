import React from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah L.',
    title: 'Happy Renter',
    quote: 'Finding a new apartment was so easy and stress-free with this platform. I found the perfect place in just a few days!',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    name: 'Mike D.',
    title: 'Landlord',
    quote: 'I listed my property and found a reliable tenant within a week. The process was seamless and professional.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
  },
  {
    name: 'Emily R.',
    title: 'First-time Renter',
    quote: 'As a first-time renter, I was nervous, but the support team was incredibly helpful and guided me through the entire process.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
  },
];

const Testimonials = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-orange-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Users Say
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We are proud to have helped so many people find their new home.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="relative bg-white p-6 rounded-lg shadow-sm">
                <dt>
                    <Quote className="h-8 w-8 text-orange-500" aria-hidden="true" />
                    <p className="mt-4 text-base text-gray-500">{testimonial.quote}</p>
                </dt>
                <dd className="mt-4 flex items-center">
                    <img className="h-10 w-10 rounded-full" src={testimonial.avatar} alt={testimonial.name} />
                    <div className="ml-3">
                        <p className="text-base font-medium text-gray-900">{testimonial.name}</p>
                        <p className="text-base text-gray-500">{testimonial.title}</p>
                    </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;