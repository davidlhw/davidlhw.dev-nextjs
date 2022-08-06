import { Experience } from "./types";

const experiences: Experience[] = [
  {
    iconUrl: "/static/experiences/proofpoint.svg",
    company: "Proofpoint Inc.",
    companyUrl: "https://www.proofpoint.com/us",
    duration: "Feb 2022 - Aug 2022",
    jobPosition: "Software Engineer Intern (Backend)",
    achievements: [
      `Developed and implemented a new data processing workflow using Prefect, to pre-train AI model with seeding data, improving the accuracy of the model.`,
      `Researched and developed a solution to improve client authentication leveraging JWKS following IETF standards, ensuring a more secure handling of secrets.`,
      `Increased test coverage by 23% as measured using testing frameworks by working closely with test engineers to formulate effective test plans for new features.`,
      `Technology stack used include Python Flask, Django, PostgreSQL, Prefect, Docker, Hadoop, Hbase, RabbitMQ, following a Behaviour-Driven and Tests-Driven Development framework.`,
    ],
  },
  {
    iconUrl: "/static/experiences/dathena.svg",
    company: "Dathena",
    companyUrl: "https://www.dathena.io/company/about",
    duration: "Dec 2021 - Feb 2022",
    jobPosition: "Software Engineer Intern (Backend)",
    achievements: [
      `Developed a backend job script to export hundreds of dictionaries to an integrated endpoint through the data analytics pipeline used to train AI model, reducing friction between data bank and an internal service.`,
      `Spearheaded the integration of an endpoint to support data migration of a new data model for an internal service.`,
      `Created end-to-end automated tests for 3 internal services, increasing overall automated test coverage by 9%.`,
      `Technology stack used include Python Flask, PostgreSQL, Prefect and Docker.`,
    ],
  },
  {
    iconUrl: "/static/experiences/zeemerce.svg",
    company: "Zeemerce",
    companyUrl: "https://zeemerce.com/",
    duration: "Apr 2021 - Present",
    jobPosition: "Co-Founder",
    achievements: [
      `Engineered backend systems from scratch to enable low latency, high throughput web scrapping with hundreds of millions of items processed daily with speeds of 100k items per minute on average, stored to an in-house hosted MongoDB.`,
      `Designed, built, and optimised the Telegram chatbot interface. Services include notifying users of their tracked product price change alerts, user account management, user account verification and many other services using webhooks and REST APIs.`,
      `Technology stack used include MEAN stack, written entirely using TypeScript, Python Flask for the Telegram bot APIs, ELK stack for the text-based search engine and Redis for caching.`,
    ],
  },
];

export default experiences;
