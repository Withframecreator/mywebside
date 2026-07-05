import { ArrowRight } from 'lucide-react';

interface PackagesSectionProps {
  onOpenBooking: () => void;
}

export function PackagesSection({ onOpenBooking }: PackagesSectionProps) {
  const customPackages = [
    {
      id: "pkg_silver",
      title: "Silver",
      price: "₹75,000",
      subText: "Starting price",
      features: [
        "Photo + highlights",
        "Basic album options",
        "Delivery timeline shared"
      ]
    },
    {
      id: "pkg_gold",
      title: "Gold",
      price: "₹1,25,000",
      subText: "Starting price",
      features: [
        "Cinematic wedding film",
        "Premium edits",
        "Album upgrades"
      ]
    },
    {
      id: "pkg_platinum",
      title: "Platinum",
      price: "₹2,00,000",
      subText: "Starting price",
      features: [
        "Full cinematic storytelling",
        "Luxury album & prints",
        "Priority delivery"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0B0B0B] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 text-left">
          <div>
            <h2 className="text-3xl font-extrabold text-white font-display">Transparent Packages</h2>
            <p className="text-zinc-400 text-sm mt-1">
              All packages are customizable based on your events & coverage.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors group cursor-pointer self-start md:self-center"
          >
            <span>Request a custom package</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {customPackages.map((pkg) => {
            return (
              <div
                key={pkg.id}
                style={{ borderColor: "rgba(225, 186, 109, 0.2)" }}
                className="bg-[#141414] border rounded-[24px] p-8 sm:p-10 text-left flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                <div>
                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold text-white font-display">
                    {pkg.title}
                  </h3>
                  
                  {/* Price */}
                  <div className="mt-2 mb-1">
                    <span 
                      style={{ color: "#E1BA6D" }}
                      className="text-3xl sm:text-4xl font-bold font-display"
                    >
                      {pkg.price}
                    </span>
                  </div>
                  
                  {/* Price label */}
                  <span className="text-[13px] text-[#999999] font-normal block mb-6">
                    {pkg.subText}
                  </span>

                  {/* Feature list */}
                  <ul className="space-y-3.5">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-[#E5E5E5] font-normal">
                        <span className="text-white select-none shrink-0 mt-1 text-xs">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <button
                    onClick={onOpenBooking}
                    className="w-full py-3 rounded-xl text-xs font-black transition-all cursor-pointer bg-zinc-800 hover:bg-zinc-750 text-white"
                  >
                    Select {pkg.title}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
