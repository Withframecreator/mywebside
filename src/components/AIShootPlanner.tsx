import React, { useState } from 'react';
import { Sparkles, Camera, Sliders, Palette, Film, CheckCircle2, ShoppingBag, Loader2, Play, Users, MessageSquare } from 'lucide-react';
import { AIConceptResult } from '../types';

export function AIShootPlanner() {
  const [eventType, setEventType] = useState('');
  const [vibe, setVibe] = useState('');
  const [venue, setVenue] = useState('');
  const [duration, setDuration] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AIConceptResult | null>(null);

  const handlePlanShoot = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventType || !vibe) {
      alert("Please choose Event Type and Mood/Vibe first.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/plan-shoot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ eventType, vibe, venue, duration })
      });

      const data = await response.json();
      if (data.error && data.fallback) {
        setResult(data.fallback);
      } else {
        setResult(data);
      }
    } catch (err) {
      console.error(err);
      // fallback
      setResult({
        conceptTitle: "Royal Cinematic Storytelling",
        colorPalette: ["#D4AF37", "#1A1A1A", "#800020", "#F5F5DC"],
        paletteNames: ["Royal Gold", "Obsidian Black", "Burgundy Velvet", "Warm Ivory"],
        moodboardSummary: "A timeless blend of warm candid moments and high-contrast dramatic portraits designed to feel like a feature film.",
        mustHaveShots: [
          { title: "The Grand Silhouette", description: "Backlit sunset portrait capturing the couple's silhouette against dramatic clouds." },
          { title: "Raw Emotion Close-up", description: "Unposed candid reaction during the ring exchange or vows." },
          { title: "Cinematic Slow-Mo Twirl", description: "High frame-rate 4K slow motion shot of the attire spinning." }
        ],
        reelConcept: {
          hook: "Fast transition from monochrome prep shot to full vibrant color reveal.",
          trendingAudioStyle: "Cinematic orchestral build-up into modern ambient beats.",
          storyline: "0-3s Hook -> 3-15s Emotional highlights -> 15-30s High energy celebration montage."
        },
        recommendedGear: ["Sony A7S III 4K60p", "Prime 85mm f/1.4 Lens", "DJI Ronin Gimbal", "DJI Mavic 3 Drone"],
        estimatedTeamSize: "2 Cinematographers + 2 Candid Photographers + 1 Drone Pilot"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-planner" className="py-20 bg-charcoal-dark border-t border-white/5 relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gold/10 border border-gold/20 text-xs font-bold text-gold-light mb-3.5">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>AI Innovation Hub</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white font-display">AI Creative Shoot Planner</h2>
          <p className="text-zinc-350 text-sm mt-1 max-w-2xl">
            Design your custom wedding or pre-wedding concept moodboard, must-have shots, and Instagram Reel hooks instantly with With Frame Creator’s smart director.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 text-left space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-gold-light" />
            
            <div className="space-y-1">
              <h3 className="text-base sm:text-lg font-bold text-white font-display flex items-center gap-2">
                <Sliders className="w-4.5 h-4.5 text-gold" />
                <span>Planner Parameters</span>
              </h3>
              <p className="text-xs text-zinc-350 font-sans">Configure your session variables below.</p>
            </div>

            <form onSubmit={handlePlanShoot} className="space-y-4">
              
              {/* Event Type */}
              <div>
                <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wide mb-1.5">Shoot Type *</label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  required
                  className="w-full bg-charcoal-dark/80 border border-white/10 focus:border-gold focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-white"
                >
                  <option value="">Choose Shoot...</option>
                  <option value="Royal Wedding / Shaadi">Royal Wedding / Shaadi</option>
                  <option value="Destination Pre-Wedding">Destination Pre-Wedding</option>
                  <option value="Cake Smash & Baby Portrait">Cake Smash & Baby Portrait</option>
                  <option value="First Birthday Cinematic Teaser">First Birthday Cinematic Teaser</option>
                  <option value="Fashion Lookbook / Portfolio">Fashion Lookbook / Portfolio</option>
                  <option value="Corporate Brand Film">Corporate Brand Film</option>
                </select>
              </div>

              {/* Mood Vibe */}
              <div>
                <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wide mb-1.5">Mood & Aesthetic Vibe *</label>
                <select
                  value={vibe}
                  onChange={(e) => setVibe(e.target.value)}
                  required
                  className="w-full bg-charcoal-dark/80 border border-white/10 focus:border-gold focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-white"
                >
                  <option value="">Choose Aesthetic...</option>
                  <option value="Dramatic Bollywood Drama (Slow-mos, high romance)">Dramatic Bollywood Drama (Slow-mos, high romance)</option>
                  <option value="Royal Indian Heritage (Warm tones, silhouette portraits)">Royal Indian Heritage (Warm tones, silhouette portraits)</option>
                  <option value="Moody Candid Journal (Raw expressions, high-contrast monochrome)">Moody Candid Journal (Raw expressions, high-contrast monochrome)</option>
                  <option value="Vintage Pastel Dream (Light, airy, film grain overlays)">Vintage Pastel Dream (Light, airy, film grain overlays)</option>
                  <option value="High Fashion Edgy Editorial (Symmetry, architectural shadow play)">High Fashion Edgy Editorial (Symmetry, architectural shadow play)</option>
                </select>
              </div>

              {/* Venue */}
              <div>
                <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wide mb-1.5">Shoot Venue / Location</label>
                <input
                  type="text"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  placeholder="e.g. Udaipur Palace / Gurugram Studio"
                  className="w-full bg-charcoal-dark/80 border border-white/10 focus:border-gold focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500"
                />
              </div>

              {/* Scale / Duration */}
              <div>
                <label className="block text-[11px] font-bold text-zinc-300 uppercase tracking-wide mb-1.5">Shoot Scale & Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-charcoal-dark/80 border border-white/10 focus:border-gold focus:outline-none rounded-xl px-3.5 py-2.5 text-xs text-white"
                >
                  <option value="">Choose Duration...</option>
                  <option value="Half Day (4 Hours)">Half Day (4 Hours)</option>
                  <option value="Full Day (10 Hours)">Full Day (10 Hours)</option>
                  <option value="2-Day Celebration">2-Day Celebration</option>
                  <option value="3-Day Grand Destination">3-Day Grand Destination</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 bg-gradient-to-r from-gold via-gold-light to-gold hover:from-gold-light hover:to-gold text-charcoal-dark font-black text-xs sm:text-sm rounded-xl cursor-pointer flex items-center justify-center gap-2 transition-all shadow-lg shadow-gold/10 active:scale-98 font-display"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4.5 h-4.5 animate-spin" />
                    <span>AI Brainstorming Moodboard...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4.5 h-4.5 fill-charcoal-dark" />
                    <span>Generate Custom Shoot Plan →</span>
                  </>
                )}
              </button>

            </form>
          </div>

          {/* Right Column: AI Outputs Display */}
          <div className="lg:col-span-7">
            {isLoading ? (
              // Lens Focus Loading Screen
              <div className="bg-charcoal-dark/30 border border-white/5 rounded-2xl h-[480px] flex flex-col justify-center items-center space-y-4 shadow-xl">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-4 border-gold/30 border-t-gold animate-spin" />
                  <Camera className="w-6 h-6 text-gold absolute inset-0 m-auto" />
                </div>
                <div className="text-center">
                  <h4 className="text-sm font-extrabold text-white font-display">Aperture Calibrating...</h4>
                  <p className="text-[10px] text-zinc-500 font-mono mt-1">Generating unique director prompt & querying Gemini Flash-2.5...</p>
                </div>
              </div>
            ) : result ? (
              // Plan results
              <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300 text-left">
                
                {/* Concept Header Card */}
                <div className="glass-card rounded-2xl p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute right-0 top-0 w-32 h-32 rounded-full bg-gold/5 blur-xl pointer-events-none" />
                  <span className="text-[9px] font-extrabold text-gold-light uppercase tracking-widest bg-gold/10 px-2.5 py-1 rounded-full border border-gold/20">
                    Cinematic Concept Created
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white font-display mt-3">
                    🎥 {result.conceptTitle}
                  </h3>
                  <p className="text-zinc-350 text-xs sm:text-sm mt-3 leading-relaxed font-sans">
                    {result.moodboardSummary}
                  </p>
                </div>

                {/* Sub row 1: Color Palette & Team */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Swatches */}
                  <div className="glass-card rounded-2xl p-5 shadow-lg">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wide flex items-center gap-2 mb-3 font-display">
                      <Palette className="w-4 h-4 text-gold" />
                      <span>Director’s Color Palette</span>
                    </h4>
                    <div className="grid grid-cols-4 gap-2">
                      {result.colorPalette.map((color, i) => (
                        <div key={i} className="flex flex-col items-center gap-1">
                          <div
                            className="w-full aspect-square rounded-lg border border-white/5 shadow"
                            style={{ backgroundColor: color }}
                          />
                          <span className="text-[9px] font-bold text-white font-mono mt-0.5">{color}</span>
                          <span className="text-[8px] text-zinc-500 font-bold tracking-tight text-center leading-tight">
                            {result.paletteNames ? result.paletteNames[i] : `Tone ${i+1}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommended Crew size */}
                  <div className="glass-card rounded-2xl p-5 shadow-lg flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wide flex items-center gap-2 mb-3 font-display">
                        <Users className="w-4 h-4 text-gold" />
                        <span>Recommended Crew</span>
                      </h4>
                      <p className="text-xs text-zinc-200 leading-relaxed font-semibold">
                        {result.estimatedTeamSize}
                      </p>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono mt-3">
                      *Crew tailored for premium cinematic coverage and rapid delivery.
                    </div>
                  </div>

                </div>

                {/* Must Have Shots checklist */}
                <div className="glass-card rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide flex items-center gap-2 mb-4 font-display">
                    <CheckCircle2 className="w-4.5 h-4.5 text-gold" />
                    <span>Must-Have Shot List (अनिवार्य शॉट सूची)</span>
                  </h4>
                  <div className="space-y-3.5">
                    {result.mustHaveShots.map((shot, idx) => (
                      <div key={idx} className="flex items-start gap-3 bg-charcoal-dark/60 p-3 rounded-xl border border-white/5">
                        <div className="w-5 h-5 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-[10px] text-gold-light font-black shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <h5 className="text-xs font-extrabold text-white font-display">{shot.title}</h5>
                          <p className="text-[11px] text-zinc-350 mt-1 leading-relaxed">{shot.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instagram Reel Concept */}
                <div className="glass-card rounded-2xl p-6 shadow-lg space-y-4">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide flex items-center gap-2 font-display">
                    <Film className="w-4.5 h-4.5 text-gold" />
                    <span>Viral Instagram Reel Blueprint</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-charcoal-dark/60 border border-white/5 p-4 rounded-xl space-y-1.5">
                      <span className="text-[9px] font-bold text-gold-light uppercase tracking-widest block">3-Sec Hook</span>
                      <p className="text-xs text-white leading-relaxed font-semibold">
                        "{result.reelConcept.hook}"
                      </p>
                    </div>
                    <div className="bg-charcoal-dark/60 border border-white/5 p-4 rounded-xl space-y-1.5">
                      <span className="text-[9px] font-bold text-gold-light uppercase tracking-widest block">Music Alignment</span>
                      <p className="text-xs text-white leading-relaxed font-semibold">
                        "{result.reelConcept.trendingAudioStyle}"
                      </p>
                    </div>
                  </div>
                  <div className="bg-charcoal-dark/80 border border-white/5 p-4 rounded-xl space-y-1">
                    <span className="text-[9px] font-bold text-gold-light uppercase tracking-widest block">Reel Storyline Blueprint</span>
                    <p className="text-xs text-zinc-350 leading-relaxed">
                      {result.reelConcept.storyline}
                    </p>
                  </div>
                </div>

                {/* Recommended Gear */}
                <div className="glass-card rounded-2xl p-5 shadow-lg">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide flex items-center gap-2 mb-3 font-display">
                    <ShoppingBag className="w-4 h-4 text-gold" />
                    <span>Director's Recommended Camera & Grip Rig</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.recommendedGear.map((gear, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-charcoal-dark border border-white/10 text-xs text-zinc-350 font-mono"
                      >
                        🎥 {gear}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Final Quote action linking back to WhatsApp */}
                <div className="p-1 bg-gradient-to-r from-gold to-gold-light rounded-2xl shadow-xl">
                  <a
                    href={`https://wa.me/918287615770?text=Hello!%20I%20just%20designed%20a%20gorgeous%20AI%20shoot%20concept%20called%20"${result.conceptTitle}"%20on%2520your%20website%20using%20your%20AI%20Creative%20Planner.%20I%20would%20love%20to%20reserve%20this%20shoot!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-4 bg-charcoal-dark hover:bg-charcoal-light rounded-xl text-xs sm:text-sm font-black text-gold-light hover:text-white transition-all flex items-center justify-center gap-2.5 font-display"
                  >
                    <MessageSquare className="w-4.5 h-4.5" />
                    <span>Lock in this AI Concept on WhatsApp</span>
                  </a>
                </div>

              </div>
            ) : (
              // Default/Initial view
              <div className="bg-charcoal-dark/30 border border-white/5 border-dashed rounded-2xl h-[480px] flex flex-col justify-center items-center p-6 space-y-4 shadow-xl">
                <Sparkles className="w-12 h-12 text-zinc-750 animate-pulse" />
                <div className="text-center max-w-sm">
                  <h4 className="text-sm font-extrabold text-white font-display">No Plan Generated Yet</h4>
                  <p className="text-xs text-zinc-450 mt-1 leading-relaxed">
                    Choose your event parameters on the left pane and click "Generate Custom Shoot Plan" to let the AI director design your moodboard.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
