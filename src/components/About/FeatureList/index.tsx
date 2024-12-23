import React from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const FEATURE_LIST = [
  {
    id: "01",
    title: "Humans First",
    description:
      "I never forget that there are real people behind the screens. When I choose and switch tech, it’s not just about tech functionality.",
    features: [
      "Tailored Tech",
      "Clear Communication",
      "Understanding Needs",
    ],
    bottomDescription:
      "I’m thinking about the team's comfort and experience as well.",
    imageurl: "/img/about/humansfirst.jpeg",
  },
  {
    id: "02",
    title: "Fast and Secure",
    description:
      "Spot-on, fast, and secure – these 3 deliverables are a guarantee in all my projects which is why companies come to me. I double-check everything to make sure their data’s locked down tight and their systems are solid, so they don't have to worry about it.",
    features: ["Quick Results", "Strong Security", "Reliable Performance"],
    imageurl: "/img/about/fastandsecure.jpeg",
  },
  {
    id: "03",
    title: "Partner, Not A Freelancer",
    description:
      "I am not here to just provide a service, send invoice, and leave. I am a partner who makes sure my clients are always covered, ahead of the curve, and ready for what's next.",
    features: ["Long-Term Plans", "Ongoing Help", "Staying Ahead"],
    imageurl: "/img/about/humansfirst.jpeg",
  },
  {
    id: "04",
    title: "Battle-Tested And Proven",
    description:
      "If my results aren’t built to last, my business won’t either. I find and set up tech that doesn’t just solve the present issue but one that’s going to keep them going strong into the future.",
    features: [
      "Durable Solutions",
      "Trusted Experience",
      "Strong Infrastructure",
    ],
    imageurl: "/img/about/humansfirst.jpeg",
  },
  {
    id: "05",
    title: "Planned Growth, Not Accidental Luck",
    description:
      "I help my clients make informed technology decisions that seamlessly align with their business strategies.",
    features: ["Aligned Technology", "Supportive Growth", "Smart Choices"],
    bottomDescription:
      "My focus is on ensuring that each new technological component complements their overarching goals, enabling them to remain aligned and progress effectively.",
    imageurl: "/img/about/humansfirst.jpeg",
  },

];

export default function FeatureList() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
        {FEATURE_LIST.map((option, index) => (
          <div
            className="gap-8 items-center grid lg:grid-cols-2 xl:gap-16"
            key={`feature-${option.id}`}
          >
            <div
              className={`text-gray-500 sm:text-lg dark:text-gray-400 order-2 ${index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                }`}
            >
              <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extra-bold text-gray-900 dark:text-white flex gap-x-2">
                <span className="text-primary-700 block">{option.id}. </span>
                <span className="block">{option.title}</span>
              </h2>
              <p className="mb-8 font-regular text-[20px] lg:text-xl border-b border-solid border-t-0 border-x-0 pb-8 border-gray-200">
                {option.description}
              </p>
              <ul
                role="list"
                className="my-7 space-y-5 border-t border-gray-200 dark:border-gray-700 pl-0"
              >
                {option.features &&
                  option.features.length > 0 &&
                  option.features.map((feature) => (
                    <li 
                      key={`${option.id}-feature-${feature}`}
                      className="flex space-x-3 items-center"
                    >
                      <div className="w-4 h-4 bg-primary-700 flex items-center justify-center rounded-full">
                        <CheckIcon className="flex-shrink-0 w-3 h-3 text-white" />
                      </div>
                      <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                        {feature}
                      </span>
                    </li>
                  ))}
              </ul>
              <p className="mb-8 font-regular text-[20px]">
                {option.bottomDescription}
              </p>
            </div>
            <img
              className={`mb-4 h-[300px] lg:h-auto w-full lg:mb-0 lg:flex rounded-lg order-1 ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                }`}
              src={option.imageurl}
              alt={`${option.title} illustration`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
