import CircleScroll from "@/components/CircleScroll";
import IsometricStack from "@/components/Isometric";
import RunningManRipple from "@/components/RunningManRipple";
import ScrollIndicator from "@/components/supportingComponents/ScrollIndicator";
import SmoothScrollText from "@/components/SmoothScrollText";

function page() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <section className="relative flex h-screen flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 px-6 text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.3em] text-neutral-400">
            Motion Studies
          </p>
          <h1 className="mb-8 text-[clamp(3rem,10vw,8rem)] font-light leading-[0.9] tracking-tight text-neutral-900">
            Motion
            <br />
            <span className="font-medium">Experiments</span>
          </h1>
          <p className="mx-auto max-w-md text-base text-neutral-500">
            A curated collection of interactive animations and
            micro-interactions built with Next.js and Framer Motion.
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <ScrollIndicator />
        </div>
      </section>
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col justify-center py-20 lg:col-span-4 lg:pr-12">
              <span className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                01
              </span>
              <h2 className="mb-4 text-3xl font-medium tracking-tight text-neutral-900">
                Ripple Motion
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                Line-by-line SVG animation with ripple hover effects. Each
                stroke responds independently to cursor proximity.
              </p>
              <div className="flex gap-3">
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  SVG
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Hover
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Interactive
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center border-neutral-200 lg:col-span-8 lg:border-l">
              <RunningManRipple />
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
            <div className="order-2 flex items-center justify-center border-neutral-200 lg:order-1 lg:col-span-8 lg:border-r">
              <IsometricStack />
            </div>
            <div className="order-1 flex flex-col justify-center py-20 lg:order-2 lg:col-span-4 lg:pl-12">
              <span className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                02
              </span>
              <h2 className="mb-4 text-3xl font-medium tracking-tight text-neutral-900">
                Isometric Layers
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                Stacked isometric cards that expand on hover. Each layer
                highlights individually with depth perception.
              </p>
              <div className="flex gap-3">
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  3D
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Layers
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Spring
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col justify-center py-20 lg:col-span-4 lg:pr-12">
              <span className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                03
              </span>
              <h2 className="mb-4 text-3xl font-medium tracking-tight text-neutral-900">
                Scroll Text
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                Scroll-driven text carousel with blur and opacity transitions.
                Corner brackets animate to frame the active item.
              </p>
              <div className="flex gap-3">
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Scroll
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Blur
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Focus
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center border-neutral-200 lg:col-span-8 lg:border-l">
              <div className="h-[400px] w-full">
                <SmoothScrollText infinite={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
            <div className="order-2 flex items-center justify-center border-neutral-200 lg:order-1 lg:col-span-8 lg:border-r">
              <CircleScroll />
            </div>
            <div className="order-1 flex flex-col justify-center py-20 lg:order-2 lg:col-span-4 lg:pl-12">
              <span className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                04
              </span>
              <h2 className="mb-4 text-3xl font-medium tracking-tight text-neutral-900">
                Circle Orbit
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                Orbital circle animation with scroll-driven focus. Active node
                scales and highlights while others fade.
              </p>
              <div className="flex gap-3">
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  SVG
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Orbit
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Scale
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="border-t border-neutral-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
            <div className="flex flex-col justify-center py-20 lg:col-span-4 lg:pr-12">
              <span className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
                05
              </span>
              <h2 className="mb-4 text-3xl font-medium tracking-tight text-neutral-900">
                Prism Effect
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                Card slicing animation with staggered reveal. Geometric
                decomposition with smooth transitions.
              </p>
              <div className="flex gap-3">
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Slicing
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Stagger
                </span>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
                  Geometric
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center border-neutral-200 lg:col-span-8 lg:border-l">
              <PrismAnimation />
            </div>
          </div>
        </div>
      </section> */}

      <footer className="border-t border-neutral-200 bg-neutral-900">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <p className="text-sm text-neutral-400">
                Built with Next.js + Framer Motion
              </p>
            </div>
            <div className="flex items-center gap-8">
              <span className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Motion Experiments
              </span>
              <div className="h-4 w-px bg-neutral-700" />
              <span className="text-xs text-neutral-500">2026</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default page;
