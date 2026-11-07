"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MoveHorizontal, TrendingUp } from "lucide-react";

interface Transformation {
  category: string;
  before: string;
  after: string;
  metric: string;
  image1: string;
  image2: string;
}

const TRANSFORMATIONS: Transformation[] = [
  {
    category: "Emotional Range",
    before:
      'Technically competent but emotionally contained. Casting directors noted "safe" choices and lack of risk.',
    after:
      'Full-spectrum emotional access on demand. Performances described as "electric," "raw," and "unforgettable."',
    metric: "340% range expansion",
    image1:
      "https://images.pexels.com/photos/37054807/pexels-photo-37054807.jpeg?auto=compress&cs=tinysrgb&w=1920",
    image2:
      "https://images.pexels.com/photos/6899928/pexels-photo-6899928.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    category: "Stage Presence",
    before:
      "Strong material but audience connection was inconsistent. Energy would dip in longer performances.",
    after:
      "Magnetic, sustained presence that commands attention from first moment to last bow. No energy dips.",
    metric: "100% consistency",
    image1:
      "https://images.pexels.com/photos/6899928/pexels-photo-6899928.jpeg?auto=compress&cs=tinysrgb&w=1920",
    image2:
      "https://images.pexels.com/photos/37054807/pexels-photo-37054807.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
  {
    category: "Vocal Endurance",
    before:
      "Vocal strain by midweek. Eight-show weeks felt unsustainable. Doctor recommended reducing schedule.",
    after:
      "Completes full show weeks with zero vocal incidents. Recovery time between performances cut by 60%.",
    metric: "60% faster recovery",
    image1:
      "https://images.pexels.com/photos/37054807/pexels-photo-37054807.jpeg?auto=compress&cs=tinysrgb&w=1920",
    image2:
      "https://images.pexels.com/photos/6899928/pexels-photo-6899928.jpeg?auto=compress&cs=tinysrgb&w=1920",
  },
];

function BeforeAfterSlider({
  image1,
  image2,
}: {
  image1: string;
  image2: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = clientX - rect.left;
    const percent = (x / rect.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, percent)));
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  useEffect(() => {
    const onMouseUp = () => {
      isDragging.current = false;
    };
    const onMouseMove = (e: MouseEvent) => {
      if (isDragging.current) {
        handleMove(e.clientX);
      }
    };
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [handleMove]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none border-glass"
      onMouseDown={(e) => {
        isDragging.current = true;
        handleMove(e.clientX);
      }}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full background) */}
      <img
        src={image2}
        alt="After transformation"
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />
      <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-accent-500/90 text-white text-xs font-semibold z-10 uppercase tracking-wider">
        AFTER
      </div>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={image1}
          alt="Before transformation"
          className="absolute inset-0 h-full object-cover"
          style={{
            width: containerRef.current?.offsetWidth ?? "100%",
            maxWidth: "none",
          }}
          draggable={false}
        />
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-ink-900/90 text-ink-100 text-xs font-semibold uppercase tracking-wider">
          BEFORE
        </div>
      </div>

      {/* Center Draggable Gold Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 gradient-gold pointer-events-none"
        style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full gradient-gold flex items-center justify-center shadow-gold-lg">
          <MoveHorizontal className="w-5 h-5 text-ink-950" />
        </div>
      </div>
    </div>
  );
}

export default function TransformationsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const current = TRANSFORMATIONS[activeTab];

  return (
    <section className="relative py-24 lg:py-32 noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 to-ink-850" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 text-gold-400 text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            <span className="h-px w-8 bg-gold-400/50" />
            Transformations
            <span className="h-px w-8 bg-gold-400/50" />
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-ink-50 leading-[1.1] tracking-tight">
            Drag to see the{" "}
            <span className="text-gradient-gold">difference</span>
          </h2>
          <p className="mt-6 text-lg text-ink-300 leading-relaxed max-w-2xl mx-auto">
            Real client transformations. Drag the slider to see the before and
            after of each performance dimension.
          </p>
        </div>

        {/* Dimension Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {TRANSFORMATIONS.map((item, idx) => (
            <button
              key={item.category}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === idx
                  ? "gradient-gold text-ink-950 shadow-gold"
                  : "bg-glass-light border-glass text-ink-300 hover:text-gold-300 hover:border-gold-400/25"
              }`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* Comparison Grid */}
        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-center">
          {/* Interactive Image Slider */}
          <div>
            <BeforeAfterSlider
              key={activeTab}
              image1={current.image1}
              image2={current.image2}
            />
          </div>

          {/* Details & Metrics */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/10 border border-gold-400/20">
              <TrendingUp className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 font-semibold text-sm">
                {current.metric}
              </span>
            </div>

            <div className="space-y-5">
              {/* BEFORE Card */}
              <div className="rounded-2xl bg-glass-light border-glass p-5">
                <div className="text-xs text-ink-400 uppercase tracking-wider mb-2 font-semibold">
                  Before
                </div>
                <p className="text-ink-200 leading-relaxed">
                  {current.before}
                </p>
              </div>

              {/* AFTER Card */}
              <div className="rounded-2xl bg-gold-400/5 border border-gold-400/20 p-5">
                <div className="text-xs text-gold-400 uppercase tracking-wider mb-2 font-semibold">
                  After
                </div>
                <p className="text-ink-100 leading-relaxed">{current.after}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

