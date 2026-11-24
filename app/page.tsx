import Link from "next/link";
import ContactForm from "./components/ContactForm";

const AFCL_APP_URL = "https://app.afrifoodconnect.com";
const FACEBOOK_URL = "https://www.facebook.com/share/1Fx2MPAZ5o/";
const WHATSAPP_URL = "https://chat.whatsapp.com/HpmEr4mBl7MBtNHwysjyxj";

/* ---------- small building blocks ---------- */

function Icon({ name }: { name: "shield" | "truck" | "pin" | "leaf" | "check" }) {
  const paths: Record<string, string> = {
    shield: "M12 3l7 3v5c0 4.5-3 8.2-7 10-4-1.8-7-5.5-7-10V6l7-3z M9 12l2 2 4-4",
    truck:
      "M3 7h11v9H3z M14 10h4l3 3v3h-7z M7 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z M17 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z",
    pin: "M12 21s7-6.2 7-11a7 7 0 10-14 0c0 4.8 7 11 7 11z M12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
    leaf: "M5 19c0-8 5-14 15-14 0 10-6 15-14 15 M5 19c3-4 6-6 10-8",
    check: "M5 12l4 4 10-10",
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.28em] ${
        light ? "text-[#d9bd7a]" : "text-[#8a6d26]"
      }`}
    >
      {children}
    </p>
  );
}

const NAV = [
  { href: "#about", label: "Who we are" },
  { href: "#audiences", label: "What we do" },
  { href: "#app", label: "The app" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const AUDIENCES = [
  {
    img: "/images/buyer.jpg",
    alt: "Fresh tomatoes, peppers, onions and greens at a market",
    label: "Buyers",
    title: "Fresh food, straight from the farm",
    points: [
      "Browse produce from local farmers and sellers",
      "Pay online with Paystack or from your AFCL wallet",
      "Follow your driver live on the map",
      "Send parcels across town with the same drivers",
    ],
  },
  {
    img: "/images/farmer.jpg",
    alt: "A smiling farmer harvesting leafy greens in a field",
    label: "Farmers and sellers",
    title: "Reach buyers without the middleman",
    points: [
      "List products with photos and your own prices",
      "Quick checks so good listings go live fast",
      "Receive orders and manage them in one place",
      "Get paid into your AFCL wallet",
    ],
  },
  {
    img: "/images/driver.jpg",
    alt: "A delivery driver handing a parcel to a customer",
    label: "Drivers",
    title: "Deliver nearby and earn",
    points: [
      "Accept delivery jobs close to you",
      "Map directions to pickup and drop-off",
      "Clear earnings for every delivery",
      "Verified accounts keep everyone safe",
    ],
  },
];

const STEPS = [
  {
    title: "Create your account",
    text: "Join as a buyer, a farmer or seller, or a driver. It takes a few minutes.",
  },
  {
    title: "Browse or list",
    text: "Buyers discover fresh produce. Sellers add products with photos and prices.",
  },
  {
    title: "Order and pay securely",
    text: "Pay online through Paystack or from your wallet. Cash on delivery may be available on approved orders.",
  },
  {
    title: "Delivered and tracked",
    text: "A nearby driver collects the order and brings it to your door, and you can follow the trip live.",
  },
];

const WHY = [
  {
    title: "Better access to opportunity",
    text: "Farmers and agricultural businesses gain access to buyers, markets and logistics they could not easily reach before.",
  },
  {
    title: "Visibility across the chain",
    text: "A connected platform makes it easier to find products, understand supply, coordinate orders and follow movement.",
  },
  {
    title: "Less friction, better coordination",
    text: "By joining the marketplace with delivery, AFCL cuts the unnecessary steps between a farm and a table.",
  },
  {
    title: "Technology built around people",
    text: "Technology is the tool, not the point. AFCL connects people, products, transport and markets in one place.",
  },
];

const FAQ = [
  {
    q: "Which areas do you serve?",
    a: "We are opening city by city, starting in Kaduna. If your area is not open yet, you can join the waitlist in the app and we will email you when we launch there.",
  },
  {
    q: "How do I pay?",
    a: "Online through Paystack, or from your AFCL wallet. Cash on delivery may be offered on orders we approve. We never store your card details.",
  },
  {
    q: "How do I sell on AFCL?",
    a: "Open the app and register as a farmer or seller, then add products with a photo and a price. Listings are checked quickly. Most go live straight away, and anything unusual is reviewed by our team first.",
  },
  {
    q: "How do drivers join?",
    a: "Register as a driver in the app and add your vehicle and documents. Once your account is verified you can accept delivery jobs near you. See the next question for what you need.",
  },
  {
    q: "What do I need to register as a driver?",
    a: "A valid driver's licence, a government ID (NIN, international passport, voter's card or national ID card), a working phone number, and a vehicle you may legally use. In the app you enter your licence number and expiry date, your ID type and number, and your vehicle details (type, brand, model, colour and load capacity), and say whether the vehicle is yours, borrowed or a company's. You then upload a photo of your ID, a photo of your licence and a photo of your vehicle, and take a live selfie with the camera, because gallery photos are not accepted for the selfie. If the vehicle is borrowed or belongs to a company, you may be asked for an ownership or authorisation document. Insurance details are optional. Our team compares your selfie with your ID and checks your documents, and you are notified when you are verified. If something is not approved, we tell you why and you can upload it again. Only verified drivers can accept delivery jobs.",
  },
  {
    q: "What can I not send as a parcel?",
    a: "Weapons, drugs, illegal or dangerous goods, cash, jewellery and live animals are not allowed.",
  },
  {
    q: "Is it safe to pay outside the app?",
    a: "No. Keep every deal on AFCL. If you pay outside the platform, we cannot protect you, refund you or help settle a dispute.",
  },
  {
    q: "How do I delete my account?",
    a: "Follow the steps on our Delete account page, or email info@afrifoodconnect.com.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbf8f1] text-[#1e2a23]">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-[#e4ddcc] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
          <a href="#" className="flex items-center" aria-label="AFCL home">
            <img
              src="/AFCL-logo.svg"
              alt="AFCL - Afri Food Connect & Logistics"
              className="h-16 w-auto object-contain"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[#3b4740] lg:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="transition hover:text-[#0f3d2b]">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <details className="relative lg:hidden">
              <summary className="cursor-pointer list-none rounded-full border border-[#d9d2c0] px-4 py-2 text-sm font-medium text-[#0f3d2b]">
                Menu
              </summary>
              <div className="absolute right-0 mt-3 w-56 rounded-2xl border border-[#e4ddcc] bg-white p-2 shadow-xl">
                {NAV.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    className="block rounded-xl px-4 py-3 text-sm text-[#1e2a23] hover:bg-[#eef4ee]"
                  >
                    {n.label}
                  </a>
                ))}
              </div>
            </details>

            <a
              href={AFCL_APP_URL}
              className="rounded-full bg-[#0f3d2b] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0b2e20]"
            >
              Open the app
            </a>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 85% 10%, #e9efe3 0, transparent 45%), radial-gradient(circle at 5% 90%, #f3ecd9 0, transparent 40%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8">
          <div>
            <Eyebrow>Afri Food Connect &amp; Logistics</Eyebrow>
            <h1 className="mt-6 font-serif text-5xl leading-[1.08] tracking-tight text-[#0f3d2b] sm:text-6xl lg:text-7xl">
              Fresh from the farm,
              <span className="block text-[#8a6d26]">delivered to your door.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#4a554e]">
              AFCL is a farm-to-table marketplace and delivery service. Buy
              directly from farmers, pay securely, and follow your order on
              the map. Now opening in Kaduna.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a
                href={AFCL_APP_URL}
                className="rounded-full bg-[#0f3d2b] px-8 py-4 text-center font-semibold text-white transition hover:bg-[#0b2e20]"
              >
                Open the app
              </a>
              <a
                href="#how-it-works"
                className="rounded-full border border-[#0f3d2b]/30 px-8 py-4 text-center font-semibold text-[#0f3d2b] transition hover:bg-[#0f3d2b]/5"
              >
                See how it works
              </a>
            </div>
            <p className="mt-6 text-sm text-[#5b6760]">
              Registered in Nigeria · RC 9258113
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-[#e4ddcc] bg-white shadow-2xl">
              <img
                src="/images/hero.jpg"
                alt="A smiling farmer holding a crate of fresh tomatoes, peppers and greens"
                className="aspect-[4/3] w-full object-cover object-top"
                width={1600}
                height={941}
              />
            </div>
            <div className="absolute -bottom-5 left-6 rounded-2xl bg-[#0f3d2b] px-5 py-3 text-sm font-medium text-white shadow-xl">
              <span className="text-[#d9bd7a]">Now opening</span> in Kaduna
            </div>
          </div>
        </div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <section className="border-y border-[#e4ddcc] bg-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            { i: "shield" as const, t: "Secure payments", d: "Handled by Paystack. We never store your card details." },
            { i: "pin" as const, t: "Live delivery tracking", d: "Follow your driver on the map from pickup to your door." },
            { i: "leaf" as const, t: "Products checked first", d: "Listings are screened before they reach buyers." },
            { i: "truck" as const, t: "Local drivers", d: "Delivery by drivers near you, from farm to table." },
          ].map((x) => (
            <div key={x.t} className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0f3d2b] text-[#d9bd7a]">
                <Icon name={x.i} />
              </span>
              <span>
                <span className="block font-serif text-lg text-[#0f3d2b]">{x.t}</span>
                <span className="mt-1 block text-sm leading-6 text-[#5b6760]">{x.d}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="border-y border-[#e4ddcc] bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Who we are</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#0f3d2b] sm:text-5xl">
              Building the infrastructure behind Africa&apos;s food future.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#4a554e]">
              Afri Food Connect &amp; Logistics (AFCL) is a technology-driven
              ecosystem connecting farmers, buyers, businesses and logistics
              providers. We are building a connected platform that makes
              agricultural trade simpler, more transparent and more
              accessible.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#4a554e]">
              We are not simply building another marketplace. We are building
              the connection between the farm, the market and the home.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-[#e4ddcc] bg-[#fbf8f1] p-7">
              <p className="font-serif text-xl text-[#0f3d2b]">The problem</p>
              <p className="mt-3 leading-7 text-[#4a554e]">
                Farmers often struggle with limited market access, fragmented
                supply chains and unreliable logistics, while buyers struggle
                to find fresh produce they can trust.
              </p>
            </div>
            <div className="rounded-2xl border border-[#e4ddcc] bg-[#fbf8f1] p-7">
              <p className="font-serif text-xl text-[#0f3d2b]">Our vision</p>
              <p className="mt-3 leading-7 text-[#4a554e]">
                An Africa where agricultural products move efficiently from
                farm to market, and from local communities to the wider
                economy. We start with one city and grow from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= AUDIENCES ================= */}
      <section id="audiences" className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#0f3d2b] sm:text-5xl">
              One platform for everyone in the chain.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4a554e]">
              Whether you buy, grow, sell or drive, AFCL gives you the tools
              to take part.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {AUDIENCES.map((a) => (
              <article
                key={a.label}
                className="flex flex-col overflow-hidden rounded-3xl border border-[#e4ddcc] bg-white shadow-sm"
              >
                <img src={a.img} alt={a.alt} className="h-52 w-full object-cover" width={800} height={450} />
                <div className="flex flex-1 flex-col p-8">
                <Eyebrow>{a.label}</Eyebrow>
                <h3 className="mt-4 font-serif text-2xl leading-snug text-[#0f3d2b]">
                  {a.title}
                </h3>
                <ul className="mt-6 space-y-3">
                  {a.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[#4a554e]">
                      <span className="mt-0.5 text-[#1f6b46]">
                        <Icon name="check" />
                      </span>
                      <span className="leading-7">{p}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={AFCL_APP_URL}
                  className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#0f3d2b] hover:underline"
                >
                  Get started →
                </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= APP SCREENS ================= */}
      <section id="app" className="bg-[#eef4ee] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>The app</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#0f3d2b] sm:text-5xl">
              Simple to use, from the first tap.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#4a554e]">
              Shop fresh produce, follow your delivery live, and manage your
              farm&apos;s orders, all in one app that works in your browser.
            </p>
          </div>

          <div className="mt-14 grid items-start gap-10 sm:grid-cols-3">
            {[
              { src: "/images/app-shop.jpg", alt: "App screen showing a shop of fresh produce", t: "Shop fresh produce", d: "Browse what local farmers have today." },
              { src: "/images/app-track.jpg", alt: "App screen showing live tracking of a delivery on a map", t: "Track your delivery", d: "Watch your driver on the map, step by step." },
              { src: "/images/app-seller.jpg", alt: "App screen showing a seller's products and new orders", t: "Run your farm shop", d: "List products and manage orders in one place." },
            ].map((x, i) => (
              <figure key={x.t} className={`mx-auto max-w-[270px] text-center ${i === 1 ? "sm:mt-10" : ""}`}>
                <div className="rounded-[2.2rem] bg-[#10201a] p-2.5 shadow-[0_24px_40px_-12px_rgba(15,61,43,0.45)]">
                  <img src={x.src} alt={x.alt} className="aspect-[1024/1250] w-full rounded-[1.7rem] object-cover object-top" width={640} height={781} />
                </div>
                <figcaption className="mt-6">
                  <span className="block font-serif text-xl text-[#0f3d2b]">{x.t}</span>
                  <span className="mt-1 block text-sm leading-6 text-[#5b6760]">{x.d}</span>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-[#7a857d]">
            Screens shown use sample data.
          </p>

          <div className="mt-8 text-center">
            <a
              href={AFCL_APP_URL}
              className="inline-block rounded-full bg-[#0f3d2b] px-8 py-4 font-semibold text-white transition hover:bg-[#0b2e20]"
            >
              Open the app
            </a>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section id="how-it-works" className="border-y border-[#e4ddcc] bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#0f3d2b] sm:text-5xl">
              From the farm to your table in four steps.
            </h2>
          </div>

          <ol className="mt-14 grid gap-8 sm:grid-cols-2">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-5">
                <span className="font-serif text-5xl leading-none text-[#b08d3c]">
                  {i + 1}
                </span>
                <span>
                  <span className="block font-serif text-xl text-[#0f3d2b]">{s.title}</span>
                  <span className="mt-2 block leading-7 text-[#4a554e]">{s.text}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ================= WHY AFCL ================= */}
      <section id="why-afcl" className="bg-[#0f3d2b] py-20 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <Eyebrow light>Why AFCL</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Agriculture should not be held back by disconnected systems.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/15 sm:grid-cols-2">
            {WHY.map((w) => (
              <div key={w.title} className="bg-[#0f3d2b] p-8 sm:p-10">
                <h3 className="font-serif text-2xl">{w.title}</h3>
                <p className="mt-4 leading-7 text-white/70">{w.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-14 text-center font-serif text-2xl leading-relaxed text-[#d9bd7a] sm:text-3xl">
            Connect the people. Move the products. Open the markets.
          </p>
        </div>
      </section>

      {/* ================= WHERE ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Eyebrow>Where we are</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-[#0f3d2b] sm:text-5xl">
            Kaduna first. Your city next.
          </h2>
          <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-3xl border border-[#e4ddcc] shadow-xl">
            <img src="/images/kaduna.jpg" alt="The Kaduna State gateway arch on a sunny day" className="aspect-[16/8] w-full object-cover" width={1600} height={800} loading="lazy" />
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#4a554e]">
            We are opening one city at a time so every order is delivered
            well. Not in Kaduna yet? Tell us where you are and we will let
            you know the day we arrive.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={AFCL_APP_URL}
              className="rounded-full bg-[#0f3d2b] px-8 py-4 font-semibold text-white transition hover:bg-[#0b2e20]"
            >
              Open the app
            </a>
            <a
              href="#contact"
              className="rounded-full border border-[#0f3d2b]/30 px-8 py-4 font-semibold text-[#0f3d2b] transition hover:bg-[#0f3d2b]/5"
            >
              Tell us where you are
            </a>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="border-y border-[#e4ddcc] bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#0f3d2b] sm:text-5xl">
              Questions, answered.
            </h2>
          </div>

          <div className="mt-12 divide-y divide-[#e4ddcc] rounded-3xl border border-[#e4ddcc] bg-[#fbf8f1]">
            {FAQ.map((f) => (
              <details key={f.q} className="group px-6 py-5 sm:px-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-[#0f3d2b]">
                  {f.q}
                  <span className="text-2xl text-[#b08d3c] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-[#4a554e]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <Eyebrow>Contact us</Eyebrow>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-[#0f3d2b] sm:text-5xl">
                Let&apos;s talk.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#4a554e]">
                Questions about selling, buying, delivering or partnering with
                AFCL? Send us a message and we will reply by email.
              </p>

              <div className="mt-8 space-y-3 text-[#4a554e]">
                <p>
                  General:{" "}
                  <a
                    href="mailto:info@afrifoodconnect.com"
                    className="font-medium text-[#0f3d2b] underline-offset-4 hover:underline"
                  >
                    info@afrifoodconnect.com
                  </a>
                </p>
                <p>
                  Support:{" "}
                  <a
                    href="mailto:support@afrifoodconnect.com"
                    className="font-medium text-[#0f3d2b] underline-offset-4 hover:underline"
                  >
                    support@afrifoodconnect.com
                  </a>
                </p>
                <p>Saminaka 811104, Kaduna State, Nigeria</p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#0f3d2b] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0b2e20]"
                >
                  Join our WhatsApp community
                </a>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-[#0f3d2b]/30 px-6 py-3 text-sm font-medium text-[#0f3d2b] transition hover:bg-[#0f3d2b]/5"
                >
                  Follow us on Facebook
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-[#e4ddcc] bg-white p-6 shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#e4ddcc] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <img
                src="/AFCL-logo.svg"
                alt="AFCL - Afri Food Connect & Logistics"
                className="h-20 w-auto object-contain"
              />
              <p className="mt-5 max-w-sm text-sm leading-6 text-[#5b6760]">
                AFRI-FOOD CONNECT AND LOGISTICS LTD
                <br />
                RC 9258113 · Saminaka 811104, Kaduna State, Nigeria
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#0f3d2b]">Explore</p>
              <ul className="mt-4 space-y-2 text-sm text-[#5b6760]">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a href={n.href} className="hover:text-[#0f3d2b]">
                      {n.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={AFCL_APP_URL} className="hover:text-[#0f3d2b]">
                    Open the app
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#0f3d2b]">Legal and social</p>
              <ul className="mt-4 space-y-2 text-sm text-[#5b6760]">
                <li>
                  <Link href="/privacy" className="hover:text-[#0f3d2b]">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#0f3d2b]">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/delete-account" className="hover:text-[#0f3d2b]">Delete account</Link>
                </li>
                <li>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#0f3d2b]">Facebook</a>
                </li>
                <li>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#0f3d2b]">WhatsApp</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-2 border-t border-[#e4ddcc] pt-6 text-sm text-[#7a857d] sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Afri Food Connect &amp; Logistics. All rights reserved.</p>
            <p>Connecting African agriculture to the world.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
