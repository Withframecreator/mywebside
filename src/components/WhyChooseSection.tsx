import { Check } from 'lucide-react';

export function WhyChooseSection() {
  const points = [
    { value: "5+ Years", label: "Experience" },
    { value: "100+ Films", label: "Weddings covered" },
    { value: "Cinematic", label: "Storytelling" },
    { value: "Limited", label: "Bookings" },
    { value: "Personal", label: "Supervision" }
  ];

  return (
    <section className="py-16 bg-charcoal-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Why Choose With Frame Creator?
          </h2>
          <div className="h-0.5 w-16 bg-gold mt-2 rounded" />
        </div>

        {/* Responsive grid of cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {points.map((pt, i) => (
            <div
              key={i}
              className="bg-charcoal-light/40 border border-white/5 rounded-xl p-5 flex flex-col justify-center items-start text-left shadow-lg hover:border-gold/20 transition-all group"
            >
              <div className="flex items-center gap-1.5 text-gold-light font-extrabold text-sm sm:text-base font-display">
                <Check className="w-4 h-4 text-gold stroke-[3]" />
                <span>{pt.value}</span>
              </div>
              <span className="text-xs text-zinc-400 mt-1 font-sans">
                {pt.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
