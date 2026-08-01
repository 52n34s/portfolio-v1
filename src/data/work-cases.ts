export type WorkFaq = {
  question: string;
  answer: string;
};

export type WorkSection =
  | { type: "paragraphs"; body: string[] }
  | { type: "bullets"; heading: string; items: string[] }
  | {
      type: "steps";
      heading: string;
      steps: { title: string; body: string }[];
    }
  | { type: "heading-block"; heading: string; body: string[] }
  | {
      type: "named-list";
      heading: string;
      intro?: string;
      items: { title: string; body: string }[];
    };

export type WorkCase = {
  slug: string;
  command: string;
  title: string;
  description: string;
  h1: string;
  summary: string;
  /** Service schema name — page title without "| 52N34S" */
  serviceName: string;
  sections: WorkSection[];
  faqs: WorkFaq[];
  cta: { lead: string };
  related: { slug: string; label: string }[];
};

export const workCases: WorkCase[] = [
  {
    slug: "idea-to-mvp",
    command: "./i-have-an-idea",
    title:
      "From Idea to MVP — App Development for Non-Technical Founders | 52N34S",
    description:
      "You have an idea and no technical co-founder. I take it apart, find the smallest version that proves the business, and ship it to the App Store. Berlin-based, remote worldwide.",
    h1: "Your idea, shipped.",
    summary: "From spark to product, in your users' hands.",
    serviceName:
      "From Idea to MVP — App Development for Non-Technical Founders",
    sections: [
      {
        type: "paragraphs",
        body: [
          "That's the message I like most in my inbox: an idea, and the will to make it real.",
          "You've carried this thing around for months. You've explained it to friends, sketched screens, maybe clicked something together in a no-code tool. The product in your head is ready. Now it wants to exist.",
          "The fastest path there starts with a sharp definition, and that's exactly where we begin.",
        ],
      },
      {
        type: "bullets",
        heading: "This is you if",
        items: [
          "Your idea comes out slightly different every time you explain it",
          "App, web platform, or both: still an open question",
          "An agency quoted €40k and you want a second opinion",
          "The essential features and the nice-to-haves are still one big list",
          '"Just build an MVP" sounds right, and you want to know what that means for your idea',
        ],
      },
      {
        type: "steps",
        heading: "How it works",
        steps: [
          {
            title: "We sharpen the idea.",
            body: "One long conversation. Who pays, why now, what makes people come back. The idea gets smaller and stronger in this step. What survives is the part worth building.",
          },
          {
            title: "I write the shape of it.",
            body: "A short document: data model, core flows, stack, and a clear line around version one. You'll understand every word of it.",
          },
          {
            title: "You see it grow, week by week.",
            body: "Something runs on your phone within two weeks. Real, tappable, yours. Every week after, it does more.",
          },
          {
            title: "It ships.",
            body: "App Store submission, review, launch. I've been through Apple review often enough to keep it smooth.",
          },
        ],
      },
      {
        type: "heading-block",
        heading: "What you get",
        body: [
          "A working product in the hands of real users. Source code you own, in a repo you control. A data model built to carry feature two, three, and ten. And a clear view of the business underneath, which is often the most valuable output of all.",
        ],
      },
      {
        type: "heading-block",
        heading: "Where I draw the line",
        body: [
          "Version one stays focused. If an idea only works with all fourteen features at once, I'll say so before you spend the money. That honesty is part of the service.",
        ],
      },
      {
        type: "heading-block",
        heading: "Timeline",
        body: [
          "Most MVPs run six to twelve weeks from first conversation to submitted build.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does it cost to build an MVP?",
        answer:
          "Scope decides the price, and scope is what we settle in the first conversation. A focused MVP with one core loop, authentication and payments is a very different project from a two-sided marketplace. You get a fixed number after we've defined scope. A quote before scope is a guess dressed up as a number.",
      },
      {
        question: "Do I need a technical co-founder?",
        answer:
          "A working product and first users are fully reachable without one. The moment for a co-founder comes later, when technical decisions become daily rather than occasional. Plenty of founders reach a funded seed round solo.",
      },
      {
        question: "Should I build for iOS, Android, or web first?",
        answer:
          "Whichever platform your first hundred users are already on. Knowing who those hundred people are is the real question, and we answer it together.",
      },
      {
        question: "What happens after launch?",
        answer:
          "You own the code and can take it anywhere. If you'd rather keep building together, that's what a technical counterpart is for.",
      },
    ],
    cta: {
      lead: "Pitch me your idea. We'll take it apart together.",
    },
    related: [
      { slug: "choose-tech-stack", label: "Which tech stack?" },
      { slug: "technical-partner", label: "Technical partner" },
    ],
  },
  {
    slug: "technical-blueprint",
    command: "./i-need-a-blueprint",
    title:
      "Technical Blueprint & Product Architecture Before You Hire | 52N34S",
    description:
      "A written architecture, data model and scope document you can hand to any developer or agency. Know what you're buying before you spend the budget.",
    h1: "Know what you're building.",
    summary: "The architecture, mapped before a line of code.",
    serviceName: "Technical Blueprint & Product Architecture Before You Hire",
    sections: [
      {
        type: "paragraphs",
        body: [
          "You're about to invest serious money in development. Three agency quotes sit on your desk, €20k apart, and comparing them feels like comparing three different languages.",
          "This is the cheapest moment in the whole project to get clarity. Every ambiguity you resolve now saves you a change request later, at a tenth of the price.",
        ],
      },
      {
        type: "bullets",
        heading: "This is you if",
        items: [
          "Three quotes, wildly different numbers, and you want to compare them on equal terms",
          "Budget is approved, and a technical sanity-check would help you sleep better",
          "Your first developer hire deserves a clear brief",
          "An agency proposal landed on your desk full of words you'd have to Google",
          "The in-house build starts soon and the system map is still in someone's head",
        ],
      },
      {
        type: "steps",
        heading: "How it works",
        steps: [
          {
            title: "Discovery.",
            body: "Two to three sessions. I learn the business behind the feature list: what makes money, what has to scale, what's truly fixed.",
          },
          {
            title: "I write the blueprint.",
            body: "Data model, system architecture, third-party services with their monthly costs, the build sequence in phases, the risks worth knowing, and a clear scope boundary.",
          },
          {
            title: "We walk through it together.",
            body: "Until you can defend every decision in it to a developer who pushes back.",
          },
        ],
      },
      {
        type: "heading-block",
        heading: "What you get",
        body: [
          "A document you own and can hand to anyone. Brief an agency with it, compare quotes on equal terms, onboard your first hire, or build it yourself. It's vendor-neutral by design: nothing in it assumes I'm the one who builds it.",
        ],
      },
      {
        type: "heading-block",
        heading: "Why this saves money",
        body: [
          "A quote against a vague brief is priced for risk. The agency pads it, because month three is a mystery to them. A quote against a precise blueprint is priced for work. The difference between those two numbers usually pays for the blueprint before a single line of code exists.",
        ],
      },
      {
        type: "heading-block",
        heading: "Timeline",
        body: ["One to two weeks."],
      },
    ],
    faqs: [
      {
        question: "What's the difference between a blueprint and a spec?",
        answer:
          "A spec lists features. A blueprint explains the system: how data is structured, why, what breaks at scale, what each decision costs later. A spec tells a developer what to build. A blueprint tells you what you're buying.",
      },
      {
        question: "Can I use this to get quotes from other developers?",
        answer: "Yes, that's the point. It's written to be handed over.",
      },
      {
        question: "What if I decide to build it in-house?",
        answer:
          "Then your team works from a clear document on day one instead of spending their first month discovering the system.",
      },
      {
        question: "Do you review existing quotes or proposals?",
        answer:
          "Yes. Send me what you've got and I'll tell you what's solid, what's padded, and what's missing. It's the fastest version of this engagement.",
      },
    ],
    cta: {
      lead: "Send me what you have. I'll tell you what's missing.",
    },
    related: [
      { slug: "idea-to-mvp", label: "Idea to MVP" },
      { slug: "choose-tech-stack", label: "Which tech stack?" },
    ],
  },
  {
    slug: "rescue-broken-build",
    command: "./my-build-is-broken",
    title:
      "Rescue a Broken Build — Take Over a Failed Development Project | 52N34S",
    description:
      "Your agency disappeared, your freelancer ghosted, or the codebase you paid for doesn't work. I audit what's there, tell you honestly what's salvageable, and take it forward.",
    h1: "Bring it back to life.",
    summary: "A clear audit, then a working product.",
    serviceName:
      "Rescue a Broken Build — Take Over a Failed Development Project",
    sections: [
      {
        type: "paragraphs",
        body: [
          "The freelancer went quiet. The agency delivered on the invoice, less so on the product. Or it runs in demos and stumbles with real users.",
          "This happens far more often than anyone admits publicly, and it says nothing about you. It's what happens when the person paying has no way to evaluate the work.",
          "The path forward starts with one honest answer: what's worth saving?",
        ],
      },
      {
        type: "bullets",
        heading: "This is you if",
        items: [
          "Your developer went quiet and you want clarity on what you actually own",
          "The app shines in demos and struggles with real users",
          "Every new feature breaks something that used to work",
          '"We have to rebuild from scratch" landed on the table, and a second opinion would be worth a lot',
          "Repo, database, App Store account: someone else holds the keys",
        ],
      },
      {
        type: "steps",
        heading: "How it works",
        steps: [
          {
            title: "The audit.",
            body: "Codebase, infrastructure, database, deployment. Three to five days. You get a written verdict: what's solid, what's broken, what it costs to fix versus rebuild.",
          },
          {
            title: "The honest recommendation.",
            body: "Sometimes 70% is fine and three specific things are the problem. Sometimes rebuilding is genuinely cheaper. You get whichever is true, including when it means less work for me.",
          },
          {
            title: "Stabilise.",
            body: "Security, data integrity, deployment. The foundation gets solid before anything new goes on top.",
          },
          {
            title: "Forward.",
            body: "With stable ground under it, the roadmap comes back to life.",
          },
        ],
      },
      {
        type: "heading-block",
        heading: "What you get",
        body: [
          "The audit stands on its own. Even as a one-off, you'll know exactly what you own, what it's worth, and what it needs. Founders have used it to renegotiate with the original developer, and to make the pull-the-plug decision with confidence.",
        ],
      },
      {
        type: "heading-block",
        heading: "First: get control of your own assets",
        body: [
          "Repo, hosting, domain, database, App Store account. If a former developer holds any of these, that's step one, and I'll walk you through recovering each.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you take over code written by someone else?",
        answer:
          "Usually yes. Bad code is still readable code. The genuinely hard cases are missing credentials and undocumented production data, rarely the code itself.",
      },
      {
        question: "How do I know if it should be rebuilt?",
        answer:
          "The data model decides, more than code quality. Messy code on a sound data model is a cleanup. Clean code on a broken data model is a rebuild. The audit settles it.",
      },
      {
        question: "What if my developer still has access to everything?",
        answer:
          "Then we lock it down first. Repo, deployment keys, database, DNS, App Store. This is standard practice the moment a working relationship ends, and it protects everyone involved.",
      },
      {
        question: "Do you do the audit without taking over the project?",
        answer: "Yes. Plenty of people just want to know where they stand.",
      },
    ],
    cta: {
      lead: "Tell me what happened. I'll tell you where you stand.",
    },
    related: [
      { slug: "technical-blueprint", label: "Technical blueprint" },
      { slug: "technical-partner", label: "Technical partner" },
    ],
  },
  {
    slug: "technical-partner",
    command: "./i-need-a-partner",
    title: "Technical Partner & Fractional CTO for Founders | 52N34S",
    description:
      "Long-term product partnership for founders who need a technical counterpart, not a contractor. Architecture, delivery and business thinking on retainer.",
    h1: "Your technical counterpart.",
    summary: "Someone who builds the business with you, for years.",
    serviceName: "Technical Partner & Fractional CTO for Founders",
    sections: [
      {
        type: "paragraphs",
        body: [
          "Some products are a project. Yours is a company. What it's missing is someone who holds the technical side of the business with you, for years, not weeks.",
          "That's a different relationship. A contractor executes decisions. A counterpart argues with you before the decision gets made.",
        ],
      },
      {
        type: "bullets",
        heading: "This is you if",
        items: [
          "Every technical decision currently rests on hope, and you'd rather it rested on experience",
          "Developers are on board, and someone still has to decide what they build",
          "Investors are asking technical due diligence questions, and you want solid answers",
          '"That\'s a bad idea" said early would save you three months, and you want someone who says it',
          "The product is live and every roadmap decision now moves real money",
        ],
      },
      {
        type: "named-list",
        heading: "What this looks like",
        intro:
          "Ongoing engagement, typically a set number of days per month. Within that:",
        items: [
          {
            title: "Architecture and decisions.",
            body: "Stack, data model, build versus buy, fix now versus later. Documented, so decisions outlive conversations.",
          },
          {
            title: "Hands-on building.",
            body: "The features I specify, I build. Strategy and keyboard, same person.",
          },
          {
            title: "Managing developers.",
            body: "Reviewing work, setting standards, running the technical side of hiring. Your team gets someone they can be honest with.",
          },
          {
            title: "Business thinking.",
            body: 'Pricing, retention, which feature actually moves revenue. This is the part most technical people skip, and it\'s why this site says "I build businesses, not just software."',
          },
          {
            title: "Investor conversations.",
            body: "Technical diligence, architecture questions, the story behind the stack.",
          },
        ],
      },
      {
        type: "heading-block",
        heading: "What I bring",
        body: [
          "Products of my own, shipped end to end: App Store, Google Play, paying users, the whole unglamorous middle. I know what breaks after launch because it broke on mine first. The expensive mistakes are already made, on my own money.",
        ],
      },
      {
        type: "heading-block",
        heading: "What makes it work",
        body: [
          "Real decision-making access, honest numbers, and room to disagree. The whole value of a counterpart is that he can tell you no.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "What's the difference between this and hiring a freelancer?",
        answer:
          "A freelancer takes your decisions and executes them. A counterpart is accountable for whether the decisions were right. Different work, different relationship, different price.",
      },
      {
        question: "Are you available full-time or exclusive?",
        answer:
          "I run my own products alongside, and that's precisely what makes this valuable: you get someone who's currently shipping. I take a small number of partnerships at a time.",
      },
      {
        question: "Can this convert into a co-founder arrangement?",
        answer:
          "It's happened. Equity follows from working together well, so the first conversation stays about the work.",
      },
      {
        question: "Can I start smaller?",
        answer:
          "Yes. Most partnerships start as a blueprint or a single build. That's the sensible way to find out how we work together.",
      },
    ],
    cta: {
      lead: "Let's find out if this fits.",
    },
    related: [
      { slug: "idea-to-mvp", label: "Idea to MVP" },
      { slug: "feature-development", label: "Feature development" },
    ],
  },
  {
    slug: "feature-development",
    command: "./i-need-a-feature",
    title:
      "Feature Development — Add One Thing to an Existing Product | 52N34S",
    description:
      "You have a working product and need one specific thing built: payments, auth, an AI feature, an integration. Scoped, priced, shipped.",
    h1: "One feature, done right.",
    summary: "Scoped, built, shipped, fast.",
    serviceName: "Feature Development — Add One Thing to an Existing Product",
    sections: [
      {
        type: "paragraphs",
        body: [
          "Payments. Authentication. The AI feature everyone's asking for. The integration your customers already expect.",
          "The product works. What it wants is one well-defined thing, built properly, by someone who leaves your codebase cleaner than he found it.",
        ],
      },
      {
        type: "bullets",
        heading: "This is you if",
        items: [
          "The team is at capacity and this keeps sliding to next quarter",
          "The feature sits outside your stack, and hiring for it would be overkill",
          "Two internal attempts later, a specialist starts to look like the faster path",
          "Weeks is the timeline, quarters is what you're being quoted",
          "It touches payments or auth, and experience matters there",
        ],
      },
      {
        type: "named-list",
        heading: "What I build most often",
        items: [
          {
            title: "Payments and subscriptions.",
            body: "Stripe, RevenueCat, App Store and Play billing. Including the parts that only hurt later: proration, refunds, failed renewals, receipt validation.",
          },
          {
            title: "Authentication.",
            body: "Email, OAuth, Apple Sign-In, magic links, and sessions that keep people logged in.",
          },
          {
            title: "AI features.",
            body: "Features where a model does something specific and useful. Photo-to-calorie recognition and natural-language document search are both live in my own products. Cost, latency, and the bad response are solved problems here.",
          },
          {
            title: "Integrations.",
            body: "Third-party APIs, webhooks, and the retry logic nobody budgets for.",
          },
          {
            title: "Data migrations.",
            body: "Moving off the schema that made sense at the start, with every record intact.",
          },
        ],
      },
      {
        type: "heading-block",
        heading: "How it works",
        body: [
          "Fixed scope, fixed price, fixed date. I look at your codebase first, then give you a number. You get a pull request that matches your conventions, with tests, and a handover document your team can read.",
        ],
      },
      {
        type: "heading-block",
        heading: "Built to last",
        body: [
          "Everything ships in a way your team can maintain and extend. If a feature needs a pattern that's new to your team, you'll know the trade-off before we start.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you work in our existing codebase?",
        answer:
          "Yes. I match your conventions, so the change stays maintainable long after I'm gone.",
      },
      {
        question: "What stacks do you work in?",
        answer:
          "Primarily TypeScript: Next.js, React, React Native, Node, Postgres, Supabase. Native iOS and Android where it's warranted. If your stack is far outside that, you'll hear it from me straight away.",
      },
      {
        question: "How fast can you start?",
        answer:
          "Usually one to two weeks. Small scoped features sometimes sooner.",
      },
      {
        question: "Do you sign NDAs?",
        answer: "Yes, routinely.",
      },
    ],
    cta: {
      lead: "Send me the feature. I'll send you a number.",
    },
    related: [{ slug: "technical-partner", label: "Technical partner" }],
  },
  {
    slug: "choose-tech-stack",
    command: "./i-dont-know-the-stack",
    title:
      "Which Tech Stack Should You Use? Independent Technical Advice | 52N34S",
    description:
      "Native or cross-platform, Supabase or Firebase, no-code or custom. An honest answer for your specific product, from someone with no vendor incentive.",
    h1: "The right stack, no guesswork.",
    summary: "Independent advice, zero bias.",
    serviceName:
      "Which Tech Stack Should You Use? Independent Technical Advice",
    sections: [
      {
        type: "paragraphs",
        body: [
          "One person says React Native. Another says native or nothing. A no-code consultant promises you'll never write code at all. Everyone sounds certain, and everyone has an incentive.",
          "Here's what a decade of shipping teaches: for most early products, the framework matters far less than the data model underneath it. That's the decision worth agonising over, and it's the one we'll get right.",
        ],
      },
      {
        type: "bullets",
        heading: "This is you if",
        items: [
          "Four recommendations so far, and they contradict each other",
          "No-code or custom is the question, and the ceiling of each is unclear",
          "Reversibility matters to you before you commit",
          "Lock-in worries you, and rightly so",
          '"Native" doubled the quote, and you want to know if that\'s justified',
        ],
      },
      {
        type: "heading-block",
        heading: "How this works",
        body: [
          "A short engagement: a call, sometimes two, plus a written recommendation. I look at what you're building, who it's for, how fast it needs to move, and your realistic budget. You get a specific answer, tailored to your product.",
          'Zero reseller relationships, zero vendor partnerships. Sometimes the honest answer is "start on Bubble, you\'ll know within six months whether you\'ve outgrown it."',
        ],
      },
      {
        type: "named-list",
        heading: "The questions that actually decide it",
        items: [
          {
            title: "Offline requirements?",
            body: "This narrows things fast.",
          },
          {
            title: "Heavy on-device work?",
            body: "Camera, audio, real-time. This is where cross-platform starts costing more than it saves.",
          },
          {
            title: "How many platforms on day one?",
            body: "One is usually the right answer.",
          },
          {
            title: "Who can you hire later?",
            body: "A stack you can staff beats a stack that benchmarks well.",
          },
          {
            title: "What's reversible?",
            body: "The frontend, mostly. The data model, no. Spend your worry there.",
          },
        ],
      },
      {
        type: "heading-block",
        heading: "My default, and when I break it",
        body: [
          "For most products: TypeScript, Next.js on the web, React Native or Expo on mobile, Postgres via Supabase. Fast, staffable, and almost every door stays open.",
          "I break it for heavy on-device work, serious offline requirements, and teams that already know something else well. A team's existing knowledge usually beats a marginally better tool.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is React Native good enough for a real product?",
        answer:
          "For most products, yes. My own app does real-time photo analysis on React Native and runs beautifully. The line where native becomes necessary sits further out than most people assume.",
      },
      {
        question: "Supabase or Firebase?",
        answer:
          "Supabase for SQL, relational data and a clean exit path. Firebase if you're deep in Google's ecosystem and your data is genuinely document-shaped. Most products turn out relational, and it pays to know that early.",
      },
      {
        question: "Can I start with no-code and migrate later?",
        answer:
          "Yes, and it's often the right call. The migration cost is real, but you pay it later with better information. Plenty of products never need to migrate at all.",
      },
      {
        question: "What's the most expensive mistake at this stage?",
        answer:
          "A data model that only fits version one. Changing the frontend is a project. Changing the data model with real users on it is surgery. Getting it right early is the whole game.",
      },
    ],
    cta: {
      lead: "Tell me what you're building. I'll tell you what to use.",
    },
    related: [
      { slug: "technical-blueprint", label: "Technical blueprint" },
      { slug: "idea-to-mvp", label: "Idea to MVP" },
    ],
  },
];

export function getWorkCase(slug: string): WorkCase | undefined {
  return workCases.find((c) => c.slug === slug);
}

export const workCaseSlugs = workCases.map((c) => c.slug);
