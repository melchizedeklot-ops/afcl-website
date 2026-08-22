"use client";

import MotionBackground from "./components/MotionBackground";

const AFCL_APP_URL = "https://afcl.netlify.app";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#06130F] text-white">
      {/* ================================================= */}
      {/* 3D MOTION BACKGROUND */}
      {/* ================================================= */}

      <MotionBackground />

      {/* ================================================= */}
      {/* NAVIGATION */}
      {/* ================================================= */}

      <nav className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">

          {/* AFCL Logo */}
          <a href="#" className="flex items-center">
            <img
              src="/afcl-logo.svg"
              alt="AFCL - Afri Food Connect & Logistics"
              className="h-24 w-auto object-contain"
            />
          </a>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 text-sm text-white/70 lg:flex">

            <a
              href="#about"
              className="transition hover:text-white"
            >
              Who We Are
            </a>

            <a
              href="#what-we-do"
              className="transition hover:text-white"
            >
              What We Do
            </a>

            <a
              href="#why-afcl"
              className="transition hover:text-white"
            >
              Why AFCL
            </a>

            <a
              href="#how-it-works"
              className="transition hover:text-white"
            >
              How It Works
            </a>

            <a
              href="#impact"
              className="transition hover:text-white"
            >
              Impact
            </a>

          </div>

          {/* Get Started */}
          <a
            href={AFCL_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-emerald-400"
          >
            Get Started
          </a>

        </div>
      </nav>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative z-10 flex min-h-screen items-center justify-center overflow-hidden">

        <div className="mx-auto max-w-5xl px-6 pt-20 text-center">

          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
            Afri Food Connect & Logistics
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
            Connecting African Agriculture

            <span className="block text-emerald-400">
              to the World.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/70">
            AFCL connects farmers, buyers, businesses, and logistics
            through one technology-driven ecosystem.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <a
              href="#what-we-do"
              className="rounded-full bg-emerald-500 px-7 py-3.5 font-medium text-black transition hover:bg-emerald-400"
            >
              Explore AFCL
            </a>

            <a
              href={AFCL_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-7 py-3.5 font-medium transition hover:bg-white/10"
            >
              Open the Platform →
            </a>

          </div>

        </div>

      </section>

      {/* ================================================= */}
      {/* WHO WE ARE */}
      {/* ================================================= */}

      <section
        id="about"
        className="relative z-10 overflow-hidden py-28 sm:py-36"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
              Who We Are
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Building the infrastructure

              <span className="block text-emerald-400">
                behind Africa's food future.
              </span>
            </h2>

            <p className="mt-7 text-lg leading-8 text-white/65">
              Afri Food Connect & Logistics (AFCL) is a technology-driven
              ecosystem connecting farmers, buyers, businesses, and logistics
              providers across Africa and beyond.
            </p>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">

            <div className="group rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-white/[0.04]">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                <span className="text-xl">01</span>
              </div>

              <h3 className="text-2xl font-semibold">
                Who We Are
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                We are building a connected ecosystem designed to make
                agricultural trade simpler, more transparent, and more
                accessible.
              </p>

            </div>

            <div className="group rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-white/[0.04]">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                <span className="text-xl">02</span>
              </div>

              <h3 className="text-2xl font-semibold">
                The Problem
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                Farmers often struggle with limited market access, fragmented
                supply chains, unreliable logistics, and inefficient trade
                connections.
              </p>

            </div>

            <div className="group rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-emerald-400/30 hover:bg-white/[0.04]">

              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                <span className="text-xl">03</span>
              </div>

              <h3 className="text-2xl font-semibold">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-white/60">
                We envision an Africa where agricultural products can move
                efficiently from farm to market and from local communities to
                the global economy.
              </p>

            </div>

          </div>

          <div className="mt-20 border-t border-white/10 pt-10">

            <p className="max-w-4xl text-2xl font-medium leading-relaxed text-white/80 sm:text-3xl">

              We are not simply building another marketplace.

              <span className="text-emerald-400">
                {" "}We are building the connective infrastructure for
                Africa's agricultural economy.
              </span>

            </p>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* WHAT WE DO */}
      {/* ================================================= */}

      <section
        id="what-we-do"
        className="relative z-10 overflow-hidden py-28 sm:py-36"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
              What We Do
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">

              One ecosystem.

              <span className="block text-emerald-400">
                Multiple possibilities.
              </span>

            </h2>

            <p className="mt-7 text-lg leading-8 text-white/65">
              AFCL brings together the people, products, markets, and
              logistics needed to move African agriculture forward.
            </p>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                number: "01",
                label: "FARM",
                title: "Empower Farmers",
                text: "Give farmers better access to markets, buyers, information, logistics, and opportunities to grow their businesses.",
              },
              {
                number: "02",
                label: "MARKET",
                title: "Connect Markets",
                text: "Create a digital marketplace where agricultural products can be discovered, compared, purchased, and traded more easily.",
              },
              {
                number: "03",
                label: "MOVE",
                title: "Move Products",
                text: "Connect agricultural trade with reliable transportation and logistics solutions from local delivery to international movement.",
              },
              {
                number: "04",
                label: "BUY",
                title: "Connect Buyers",
                text: "Help individuals, businesses, wholesalers, processors, and other buyers find agricultural products and reliable suppliers.",
              },
              {
                number: "05",
                label: "GROW",
                title: "Enable Businesses",
                text: "Give agricultural businesses the tools and connections they need to source products, reach customers, and expand into new markets.",
              },
              {
                number: "06",
                label: "GLOBAL",
                title: "Unlock Global Trade",
                text: "Create pathways for African agricultural products to reach regional and international markets through a connected digital ecosystem.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="group rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-white/[0.04]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                    <span className="text-2xl">
                      {item.number}
                    </span>
                  </div>

                  <span className="text-sm text-white/30">
                    {item.label}
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-white/60">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-20 rounded-3xl border border-emerald-400/20 bg-emerald-400/[0.04] p-8 backdrop-blur-md sm:p-10">

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
              The AFCL Ecosystem
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-lg font-medium text-white/80">

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3">
                Farmers
              </span>

              <span className="text-emerald-400">→</span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3">
                Marketplace
              </span>

              <span className="text-emerald-400">→</span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3">
                Buyers
              </span>

              <span className="text-emerald-400">→</span>

              <span className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-3">
                Logistics
              </span>

              <span className="text-emerald-400">→</span>

              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-5 py-3 text-emerald-400">
                Global Markets
              </span>

            </div>

            <p className="mt-8 max-w-3xl leading-7 text-white/55">
              Every connection creates an opportunity — for farmers to earn
              more, businesses to grow, buyers to source better, and African
              products to reach new markets.
            </p>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* WHY AFCL */}
      {/* ================================================= */}

      <section
        id="why-afcl"
        className="relative z-10 overflow-hidden py-28 sm:py-36"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
              Why AFCL
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">

              Agriculture should not be

              <span className="block text-emerald-400">
                limited by disconnected systems.
              </span>

            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">
              AFCL is designed to bring fragmented parts of the agricultural
              value chain into one connected ecosystem — creating greater
              access, visibility, efficiency, and opportunity.
            </p>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2">

            {[
              {
                number: "01",
                label: "ACCESS",
                title: "Better access to opportunity.",
                text: "Farmers and agricultural businesses can gain greater access to buyers, markets, logistics providers, and new commercial opportunities.",
              },
              {
                number: "02",
                label: "TRANSPARENCY",
                title: "More visibility across the chain.",
                text: "A connected digital environment can make it easier to discover products, understand supply, coordinate transactions, and follow movement.",
              },
              {
                number: "03",
                label: "EFFICIENCY",
                title: "Less friction. Better coordination.",
                text: "By connecting marketplace activity with logistics and business services, AFCL aims to reduce unnecessary friction throughout the trade process.",
              },
              {
                number: "04",
                label: "TECHNOLOGY",
                title: "Technology built around people.",
                text: "AFCL uses technology as an enabler — connecting people, businesses, products, transportation, and markets rather than creating another isolated system.",
              },
            ].map((item) => (

              <div
                key={item.number}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-md transition duration-500 hover:border-emerald-400/30 hover:bg-white/[0.04] sm:p-10"
              >

                <div className="absolute right-8 top-8 text-7xl font-bold text-white/[0.03]">
                  {item.number}
                </div>

                <span className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                  {item.label}
                </span>

                <h3 className="mt-5 text-3xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-5 max-w-xl leading-7 text-white/60">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-20 overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-emerald-400/[0.05] p-8 sm:p-12">

            <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">

              <div>

                <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                  Africa First
                </p>

                <h3 className="mt-5 text-3xl font-semibold sm:text-4xl">

                  Built for Africa.

                  <span className="text-emerald-400">
                    {" "}Connected to the world.
                  </span>

                </h3>

                <p className="mt-6 max-w-2xl leading-8 text-white/60">
                  AFCL is designed with Africa's agricultural realities in
                  mind — while creating pathways for regional commerce,
                  international trade, and global opportunity.
                </p>

              </div>

              <div className="flex justify-start lg:justify-end">

                <div className="rounded-3xl border border-white/10 bg-black/20 px-8 py-7 backdrop-blur-md">

                  <p className="text-sm text-white/40">
                    OUR PRINCIPLE
                  </p>

                  <p className="mt-3 text-xl font-medium leading-8 text-white/80">
                    Connect the people.
                    <br />
                    Move the products.
                    <br />
                    Open the markets.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* HOW IT WORKS */}
      {/* ================================================= */}

      <section
        id="how-it-works"
        className="relative z-10 overflow-hidden py-28 sm:py-36"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-4xl">

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
              How It Works
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">

              From connection

              <span className="block text-emerald-400">
                to opportunity.
              </span>

            </h2>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/65">
              AFCL simplifies the journey between agricultural producers,
              buyers, businesses, and logistics providers through one
              connected platform.
            </p>

          </div>

          <div className="relative mt-20">

            <div className="absolute left-[28px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-emerald-400/60 via-emerald-400/20 to-transparent lg:block" />

            <div className="space-y-6">

              {[
                {
                  number: "01",
                  label: "JOIN",
                  title: "Create your place in the ecosystem.",
                  text: "Farmers, buyers, businesses, and logistics partners connect to AFCL and create a profile that reflects what they offer or need.",
                },
                {
                  number: "02",
                  label: "DISCOVER",
                  title: "Find products, people, and opportunities.",
                  text: "Discover agricultural products, suppliers, buyers, logistics services, and business opportunities within the AFCL ecosystem.",
                },
                {
                  number: "03",
                  label: "CONNECT",
                  title: "Connect with the right people.",
                  text: "Build relationships between farmers, buyers, businesses, and logistics providers based on real needs and opportunities.",
                },
                {
                  number: "04",
                  label: "TRANSACT",
                  title: "Turn connections into business.",
                  text: "Buyers can source products, farmers can receive orders, and businesses can create commercial relationships through the ecosystem.",
                },
                {
                  number: "05",
                  label: "MOVE",
                  title: "Move products where they need to go.",
                  text: "Logistics connections help coordinate transportation and movement from local delivery to broader regional and international routes.",
                },
                {
                  number: "06",
                  label: "GROW",
                  title: "Create lasting opportunity.",
                  text: "Successful connections create repeat business, stronger supply chains, new markets, and sustainable growth across the ecosystem.",
                },
              ].map((item, index) => (

                <div
                  key={item.number}
                  className={`group relative rounded-3xl border p-7 backdrop-blur-md transition duration-500 sm:p-9 ${
                    index === 5
                      ? "border-emerald-400/20 bg-emerald-400/[0.05] hover:border-emerald-400/40"
                      : "border-white/10 bg-black/20 hover:border-emerald-400/30 hover:bg-white/[0.04]"
                  }`}
                >

                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center">

                    <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-400/10 text-lg font-semibold text-emerald-400">
                      {item.number}
                    </div>

                    <div className="flex-1">

                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-400">
                        {item.label}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-3xl leading-7 text-white/60">
                        {item.text}
                      </p>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

          <div className="mt-24">

            <div className="max-w-3xl">

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                Built For Everyone In The Chain
              </p>

              <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">
                Where do you fit?
              </h3>

            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  label: "FARMERS",
                  title: "Grow & Sell",
                  text: "Reach buyers, list products, and access logistics.",
                },
                {
                  label: "BUYERS",
                  title: "Discover & Source",
                  text: "Find products and connect with reliable suppliers.",
                },
                {
                  label: "BUSINESSES",
                  title: "Connect & Grow",
                  text: "Expand sourcing, sales, partnerships, and market access.",
                },
                {
                  label: "LOGISTICS",
                  title: "Move & Deliver",
                  text: "Connect transportation capacity with real agricultural demand.",
                },
              ].map((item) => (

                <div
                  key={item.label}
                  className="rounded-3xl border border-white/10 bg-black/20 p-7 backdrop-blur-md transition hover:-translate-y-1 hover:border-emerald-400/30"
                >

                  <span className="text-sm text-emerald-400">
                    {item.label}
                  </span>

                  <h4 className="mt-4 text-xl font-semibold">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-white/55">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* START USING AFCL */}
      {/* ================================================= */}

      <section
        id="platform"
        className="relative z-10 overflow-hidden py-28 sm:py-40"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-8">

          <div className="relative overflow-hidden rounded-[2.5rem] border border-emerald-400/20 bg-emerald-400/[0.04]">

            {/* Background Glow */}
            <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="relative px-7 py-20 text-center sm:px-12 sm:py-28 lg:px-20">

              {/* Label */}
              <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-5 py-2.5">

                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />

                <span className="text-xs font-medium uppercase tracking-[0.25em] text-emerald-400">
                  The AFCL Platform
                </span>

              </div>

              {/* Heading */}
              <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">

                Ready to become part of

                <span className="block text-emerald-400">
                  the AFCL ecosystem?
                </span>

              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60">
                Join farmers, buyers, businesses, and logistics partners
                building a more connected agricultural future for Africa.
              </p>

              {/* Main CTA */}
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                <a
                  href={AFCL_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 py-4 font-semibold text-black transition duration-300 hover:bg-emerald-400 hover:shadow-[0_0_40px_rgba(52,211,153,0.25)]"
                >

                  <span>
                    Register & Start Using AFCL
                  </span>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </a>

                <a
                  href="#how-it-works"
                  className="rounded-full border border-white/15 px-8 py-4 font-medium text-white transition hover:bg-white/10"
                >
                  See How It Works
                </a>

              </div>

              {/* External Platform Notice */}
              <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 text-xs text-white/35">

                <span>↗</span>

                <span>
                  You will be redirected to the AFCL platform
                </span>

              </div>

              {/* Ecosystem */}
              <div className="mx-auto mt-16 max-w-3xl border-t border-white/10 pt-12">

                <p className="text-sm uppercase tracking-[0.25em] text-white/30">
                  One ecosystem
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">

                  <span className="rounded-full border border-white/10 bg-black/20 px-5 py-2.5 text-sm text-white/60">
                    Farmers
                  </span>

                  <span className="text-emerald-400">
                    •
                  </span>

                  <span className="rounded-full border border-white/10 bg-black/20 px-5 py-2.5 text-sm text-white/60">
                    Buyers
                  </span>

                  <span className="text-emerald-400">
                    •
                  </span>

                  <span className="rounded-full border border-white/10 bg-black/20 px-5 py-2.5 text-sm text-white/60">
                    Businesses
                  </span>

                  <span className="text-emerald-400">
                    •
                  </span>

                  <span className="rounded-full border border-white/10 bg-black/20 px-5 py-2.5 text-sm text-white/60">
                    Logistics
                  </span>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* IMPACT */}
      {/* ================================================= */}

      <section
        id="impact"
        className="relative z-10 overflow-hidden py-28 sm:py-40"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">

            <div>

              <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
                The Vision
              </p>

              <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">

                Built to create

                <span className="block text-emerald-400">
                  measurable impact.
                </span>

              </h2>

            </div>

            <p className="max-w-xl text-lg leading-8 text-white/60 lg:justify-self-end">
              AFCL is being built with a long-term ambition: to create a
              connected agricultural ecosystem capable of generating
              opportunities for millions of people across Africa and beyond.
            </p>

          </div>

          {/* Impact Numbers */}
          <div className="mt-20 grid gap-px overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">

            <div className="bg-[#06130F] p-8 sm:p-10">

              <p className="text-sm uppercase tracking-[0.2em] text-white/30">
                Farmers
              </p>

              <div className="mt-6 flex items-end gap-2">

                <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
                  1M
                </span>

                <span className="mb-2 text-emerald-400">
                  +
                </span>

              </div>

              <p className="mt-4 leading-6 text-white/45">
                Long-term farmer network target.
              </p>

            </div>

            <div className="bg-[#06130F] p-8 sm:p-10">

              <p className="text-sm uppercase tracking-[0.2em] text-white/30">
                Markets
              </p>

              <div className="mt-6 flex items-end gap-2">

                <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
                  100
                </span>

                <span className="mb-2 text-emerald-400">
                  +
                </span>

              </div>

              <p className="mt-4 leading-6 text-white/45">
                Markets and commercial connections we aim to unlock.
              </p>

            </div>

            <div className="bg-[#06130F] p-8 sm:p-10">

              <p className="text-sm uppercase tracking-[0.2em] text-white/30">
                Countries
              </p>

              <div className="mt-6 flex items-end gap-2">

                <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
                  54
                </span>

              </div>

              <p className="mt-4 leading-6 text-white/45">
                Our continental ambition across Africa.
              </p>

            </div>

            <div className="bg-[#06130F] p-8 sm:p-10">

              <p className="text-sm uppercase tracking-[0.2em] text-white/30">
                Global Reach
              </p>

              <div className="mt-6 flex items-end gap-2">

                <span className="text-5xl font-semibold tracking-tight sm:text-6xl">
                  ∞
                </span>

              </div>

              <p className="mt-4 leading-6 text-white/45">
                Connecting African supply with global opportunity.
              </p>

            </div>

          </div>

          {/* Main Vision Card */}
          <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-emerald-400/[0.04]">

            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_0.7fr] lg:p-16">

              <div>

                <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                  Our Long-Term Ambition
                </p>

                <h3 className="mt-6 max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">

                  A stronger agricultural economy begins with

                  <span className="text-emerald-400">
                    {" "}better connections.
                  </span>

                </h3>

                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
                  We believe Africa has enormous agricultural potential.
                  The challenge is not simply production — it is the ability
                  to efficiently connect producers with markets, buyers,
                  transportation, technology, and global opportunity.
                </p>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/60">
                  AFCL exists to help build that connection.
                </p>

              </div>

              <div className="flex items-center lg:justify-end">

                <div className="w-full max-w-md rounded-3xl border border-white/10 bg-black/20 p-7 backdrop-blur-md sm:p-9">

                  <div className="flex items-center gap-3">

                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.6)]" />

                    <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                      AFCL Vision
                    </span>

                  </div>

                  <p className="mt-7 text-2xl font-medium leading-relaxed text-white/85 sm:text-3xl">

                    “Turning agricultural potential into

                    <span className="text-emerald-400">
                      {" "}economic opportunity.
                    </span>”

                  </p>

                  <div className="mt-8 border-t border-white/10 pt-6">

                    <p className="text-sm leading-6 text-white/40">
                      Connect the people.
                      <br />
                      Move the products.
                      <br />
                      Open the markets.
                      <br />
                      Build the future.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Impact Pillars */}
          <div className="mt-20">

            <div className="mb-10">

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-emerald-400">
                What Impact Means To Us
              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-3">

              <div className="group rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-emerald-400/30">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                  <span className="text-lg font-semibold">
                    $
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold">
                  Economic Opportunity
                </h3>

                <p className="mt-4 leading-7 text-white/55">
                  Help create new income opportunities by connecting
                  agricultural producers with buyers and markets.
                </p>

              </div>

              <div className="group rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-emerald-400/30">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                  <span className="text-lg font-semibold">
                    +
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold">
                  Food System Strength
                </h3>

                <p className="mt-4 leading-7 text-white/55">
                  Strengthen agricultural supply chains by improving
                  connections between production, markets, and logistics.
                </p>

              </div>

              <div className="group rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-emerald-400/30">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                  <span className="text-lg font-semibold">
                    ↗
                  </span>
                </div>

                <h3 className="mt-7 text-2xl font-semibold">
                  Global Opportunity
                </h3>

                <p className="mt-4 leading-7 text-white/55">
                  Create pathways for African agricultural products and
                  businesses to participate in larger regional and global
                  markets.
                </p>

              </div>

            </div>

          </div>

          {/* Final Impact Statement */}
          <div className="mt-24 text-center">

            <p className="mx-auto max-w-4xl text-2xl font-medium leading-relaxed text-white/70 sm:text-3xl md:text-4xl">

              The future of African agriculture will not be built by one
              farmer, one business, or one technology.

              <span className="mt-3 block text-emerald-400">
                It will be built by connection.
              </span>

            </p>

          </div>

        </div>
      </section>

      {/* ================================================= */}
      {/* FINAL CTA */}
      {/* ================================================= */}

      <section
        id="get-started"
        className="relative z-10 overflow-hidden py-28 sm:py-36"
      >
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-400">
            Your Opportunity Starts Here
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">

            Join the movement

            <span className="block text-emerald-400">
              connecting Africa to the world.
            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Whether you are a farmer, buyer, business, logistics provider,
            or strategic partner, there is a place for you in the AFCL
            ecosystem.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            {/* Open Real App */}
            <a
              href={AFCL_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-emerald-500 px-8 py-3.5 font-medium text-black transition hover:bg-emerald-400"
            >
              Start Using AFCL

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            {/* Back to About */}
            <a
              href="#about"
              className="rounded-full border border-white/15 px-8 py-3.5 font-medium transition hover:bg-white/10"
            >
              Learn About AFCL
            </a>

          </div>

          <p className="mt-6 text-xs text-white/30">
            You will be redirected to the AFCL application.
          </p>

        </div>
      </section>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="relative z-10 border-t border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">

          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* Logo */}
            <a href="#" className="flex items-center">

              <img
                src="/afcl-logo.svg"
                alt="AFCL - Afri Food Connect & Logistics"
                className="h-20 w-auto object-contain"
              />

            </a>

            {/* Footer Links */}
            <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/45">

              <a
                href="#about"
                className="transition hover:text-white"
              >
                Who We Are
              </a>

              <a
                href="#what-we-do"
                className="transition hover:text-white"
              >
                What We Do
              </a>

              <a
                href="#why-afcl"
                className="transition hover:text-white"
              >
                Why AFCL
              </a>

              <a
                href="#impact"
                className="transition hover:text-white"
              >
                Impact
              </a>

              <a
                href={AFCL_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-emerald-400"
              >
                Open App →
              </a>

            </div>

          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} Afri Food Connect & Logistics.
              All rights reserved.
            </p>

            <p>
              Connecting African Agriculture to the World.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}