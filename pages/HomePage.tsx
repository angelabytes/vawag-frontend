import { Link } from "react-router-dom";

const stats = [
  {
    id: 1,
    name: "Women Experiencing Intimate Partner Violence Who Are Native Hawaiian",
    value: "Over 20%",
  },
  {
    id: 2,
    name: "of Sex Trafficking Victims are Native Hawaiian",
    value: "64%",
  },
  {
    id: 3,
    name: "Missing Girls in Hawaiʻi Who Are Native Hawaiian",
    value: "Over 25%",
  },
];

export default function HomePage() {
  return (
    <div className="font-libre-baskerville">
      {/* 1. Hero Image Section */}
      {/* This section contains the image and its credit, and the shape divider. */}
      <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden">
        {" "}
        <img
          src="/assets/hero/gama-films-group.jpg"
          alt="group of women on the beach"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        {/* Text and CTA Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(var(--umber-rgb), 0.8)] to-[rgba(var(--umber-rgb),0.4)] font-Courgette"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 z-20">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Stronger Together: Nurturing a Safe Hawaiʻi for Every Woman and
            Girl.
          </h1>
          <p className="text-lg sm:text-xl mb-8 max-w-3xl text-white drop-shadow-xl">
            Inspired by the spirit of 'ohana and aloha, we stand united to end
            violence and cultivate a future where every individual in our
            islands thrives in safety and dignity.
          </p>
          <div className="flex justify-center space-x-4 gap-2">
            <Link to="/resources">
              <button className="bg-[var(--pastel-pink)] hover:bg-[var(--sage-green)] font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                Learn How You Can Help
              </button>
            </Link>

            <Link to="/support">
              <button className="bg-[var(--lavendar)] border-2 border-[var(--pastel-pink)] hover:text-[var(--sage-green)] text-[var(--deep-sage)] font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
                Get Support Now
              </button>
            </Link>
          </div>
        </div>
        {/* Photo credit text */}
        <p className="text-xs text-blue-950 text-right pr-4 pb-2">
          Photo by{" "}
          <Link
            to="https://unsplash.com/@gamafilms1703?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Gama. Films
          </Link>{" "}
          on{" "}
          <Link
            to="https://unsplash.com/photos/2-women-in-white-dress-sitting-on-white-sand-beach-during-daytime-Ad6O8Bt0Lm4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Unsplash
          </Link>
        </p>
        {/* Shape Divider*/}
        <div className="absolute bottom-0 left-0 w-full z-10 shape-divider-height">
          <svg
            className="block w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100" // SVG's internal coordinate system
            preserveAspectRatio="none"
          >
            {/* The fill color matches the section below it to show */}
            <g fill="var(--cream)">
              {" "}
              <path
                opacity=".5"
                d="M0 13.2v12.2l220.7 19.2L0 70.9v11.3l250-38.1L0 13.2z"
              />
              <path
                opacity=".5"
                d="M0 25.4v8.8l145.2 12.6L0 64.1v6.8l220.7-26.3L0 25.4z"
              />
              <path
                opacity=".5"
                d="M0 25.4v8.8l145.2 12.6L0 64.1v6.8l220.7-26.3L0 25.4z"
              />
              <path opacity=".5" d="M0 34.2v29.9l145.2-17.3L0 34.2z" />
              <path opacity=".5" d="M0 34.2v29.9l145.2-17.3L0 34.2z" />
              <path opacity=".75" d="M0 34.2v29.9l145.2-17.3L0 34.2z" />
              <path
                opacity=".5"
                d="M750 44.1l250 38.1V69.9L779.3 43.6 1000 24.4V13.2L750 44.1zM750 44.1l-250-31-250 31 250 38zM500 24.4l220.7 19.3L500 69.8 279.3 43.6z"
              />
              <path d="M500 82.2L250 44.1 0 82.2v18h1000v-18L750 44.1 500 82.2z" />
              <path
                d="M720.7 43.6L500 24.4 279.3 43.7 500 69.8zM500 30.3l164.6 14.3L500 64.1 335.4 44.5z"
                opacity=".5"
              />
              <path
                d="M720.7 43.6L500 24.4 279.3 43.7 500 69.8zM500 30.3l164.6 14.3L500 64.1 335.4 44.5z"
                opacity=".5"
              />
              <path
                opacity=".5"
                d="M664.6 44.5L500 30.2 335.4 44.5 500 64.1l164.6-19.6z"
              />
              <path
                opacity=".5"
                d="M664.6 44.5L500 30.2 335.4 44.5 500 64.1l164.6-19.6z"
              />
              <path
                opacity=".75"
                d="M664.6 44.5L500 30.2 335.4 44.5 500 64.1l164.6-19.6z"
              />
              <path
                opacity=".5"
                d="M1000 69.9v-5.8L854.9 46.8 1000 34.2v-9.8L779.3 43.6 1000 69.9z"
              />
              <path
                opacity=".5"
                d="M1000 69.9v-5.8L854.9 46.8 1000 34.2v-9.8L779.3 43.6 1000 69.9z"
              />
              <path opacity=".5" d="M1000 64.1V34.2L854.9 46.8 1000 64.1z" />
              <path opacity=".5" d="M1000 64.1V34.2L854.9 46.8 1000 64.1z" />
              <path opacity=".75" d="M1000 64.1V34.2L854.9 46.8 1000 64.1z" />
            </g>
          </svg>
        </div>
      </div>
      {/* Stats */}
      <div className="bg-[var(--cream)] py-24 sm:py-32 relative z-20">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-[var(--sage-green)] font-bold mb-8 drop-shadow-lg">
          Quick Facts
        </h1>
        <div className="mt-20 mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 mb-20">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4"
              >
                <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        {/* Shape Divider*/}
        <div className="absolute bottom-0 left-0 w-full z-30 shape-divider-height">
          <svg
            className="block w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100" // SVG's internal coordinate system
            preserveAspectRatio="none"
          >
            {/* The fill color matches the section below it to show */}
            <g fill="var(--lavendar)">
              {" "}
              <path
                opacity=".5"
                d="M0 13.2v12.2l220.7 19.2L0 70.9v11.3l250-38.1L0 13.2z"
              />
              <path
                opacity=".5"
                d="M0 25.4v8.8l145.2 12.6L0 64.1v6.8l220.7-26.3L0 25.4z"
              />
              <path
                opacity=".5"
                d="M0 25.4v8.8l145.2 12.6L0 64.1v6.8l220.7-26.3L0 25.4z"
              />
              <path opacity=".5" d="M0 34.2v29.9l145.2-17.3L0 34.2z" />
              <path opacity=".5" d="M0 34.2v29.9l145.2-17.3L0 34.2z" />
              <path opacity=".75" d="M0 34.2v29.9l145.2-17.3L0 34.2z" />
              <path
                opacity=".5"
                d="M750 44.1l250 38.1V69.9L779.3 43.6 1000 24.4V13.2L750 44.1zM750 44.1l-250-31-250 31 250 38zM500 24.4l220.7 19.3L500 69.8 279.3 43.6z"
              />
              <path d="M500 82.2L250 44.1 0 82.2v18h1000v-18L750 44.1 500 82.2z" />
              <path
                d="M720.7 43.6L500 24.4 279.3 43.7 500 69.8zM500 30.3l164.6 14.3L500 64.1 335.4 44.5z"
                opacity=".5"
              />
              <path
                d="M720.7 43.6L500 24.4 279.3 43.7 500 69.8zM500 30.3l164.6 14.3L500 64.1 335.4 44.5z"
                opacity=".5"
              />
              <path
                opacity=".5"
                d="M664.6 44.5L500 30.2 335.4 44.5 500 64.1l164.6-19.6z"
              />
              <path
                opacity=".5"
                d="M664.6 44.5L500 30.2 335.4 44.5 500 64.1l164.6-19.6z"
              />
              <path
                opacity=".75"
                d="M664.6 44.5L500 30.2 335.4 44.5 500 64.1l164.6-19.6z"
              />
              <path
                opacity=".5"
                d="M1000 69.9v-5.8L854.9 46.8 1000 34.2v-9.8L779.3 43.6 1000 69.9z"
              />
              <path
                opacity=".5"
                d="M1000 69.9v-5.8L854.9 46.8 1000 34.2v-9.8L779.3 43.6 1000 69.9z"
              />
              <path opacity=".5" d="M1000 64.1V34.2L854.9 46.8 1000 64.1z" />
              <path opacity=".5" d="M1000 64.1V34.2L854.9 46.8 1000 64.1z" />
              <path opacity=".75" d="M1000 64.1V34.2L854.9 46.8 1000 64.1z" />
            </g>
          </svg>
        </div>
      </div>

      {/* Our Mission */}
      <div className="bg-[var(--lavendar)] flex flex-col justify-center items-center text-center p-10">
        <h1 className="mt-10 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 drop-shadow-lg">
          Our Mission
        </h1>
        <div className="mt-20 grid grid-cols-2 gap-10 items-center">
          <img
            src="/assets/mission_img/family.jpg"
            alt="family"
            className="w-full h-100 object-cover rounded-lg shadow-lg mb-6"
          />
          <div className="mt-6 h-80 bg-[var(--sand)] rounded-2xl shadow-2xl border-l-6 border-[var(--pastel-pink)] p-8 flex items-center mb-8">
            <p className="text-2xl text-left text-[var(--deep-sage)] max-w-lg mx-auto">
              We strive to bring communial traditions in order to cultivate a
              stronger Hawaiʻi. By empowering our women and girls we are
              creating a brighter future for us all. <br /> Please join us in
              our cause.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
