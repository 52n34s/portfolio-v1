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
    h1: "You have an idea. You can't build it yourself.",
    summary:
      "From raw idea to a shipped product in the hands of real users.",
    serviceName:
      "From Idea to MVP — App Development for Non-Technical Founders",
    sections: [
      {
        type: "paragraphs",
        body: [
          "That's the most common message in my inbox, and it's the one I like most.",
          "You've been carrying this thing around for months. You've explained it to friends. Maybe you've sketched screens in Figma or clicked something together in a no-code tool. But there's a gap between the thing in your head and something real that people can download, and you don't have the vocabulary to cross it.",
          "The instinct is to find someone who can code and hand them the idea. That's usually the wrong first move, because the idea in your head isn't a spec yet — and if you hand an unfinished idea to a developer, you get an expensive, well-built version of something nobody wants.",
        ],
      },
      {
        type: "bullets",
        heading: "This is you if",
        items: [
          "You've described your idea ten times and it comes out slightly different every time",
          "You don't know whether you need an app, a web platform, or neither",
          "You've been quoted €40k by an agency and have no idea if that's fair",
          "You're not sure which parts of your idea are essential and which are decoration",
          'Someone told you to "just build an MVP" and you don\'t know what that means for your idea',
        ],
      },
      {
        type: "steps",
        heading: "How it works",
        steps: [
          {
            title: "We take the idea apart.",
            body: "One long conversation, no slides. I ask uncomfortable questions: who pays, why now, what happens if nobody shows up. Most ideas shrink by half in this step, and that's the point. The half that survives is the one worth building.",
          },
          {
            title: "I write the shape of it.",
            body: "Not a 40-page spec — a short document with the data model, the core user flows, the stack, and an honest list of what we are deliberately not building in version one. You'll understand every line of it.",
          },
          {
            title: "We build in visible increments.",
            body: "You see something running within the first two weeks. Not a mockup — something on your phone. Every week after that, it does more.",
          },
          {
            title: "It ships.",
            body: "App Store submission, review, the boring parts. I've been through Apple review enough times to know where it bites.",
          },
        ],
      },
      {
        type: "heading-block",
        heading: "What you get",
        body: [
          "A working product in the hands of real users. Source code you own, in a repo you control. A data model that doesn't collapse when you add the second feature. And a clear-eyed view of whether the business underneath it actually works — which is sometimes the more valuable output.",
        ],
      },
      {
        type: "heading-block",
        heading: "What I don't do",
        body: [
          "I don't build the full vision in one go. If your idea only works with all fourteen features, it isn't an MVP, it's a bet — and I'll tell you that before you spend the money rather than after.",
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
          "It depends almost entirely on scope, and scope is what we settle in the first conversation. A focused MVP with one core loop, authentication and a payment flow is a very different project from a two-sided marketplace. I give a fixed number after we've defined scope, not before — a quote given before scope is a guess dressed up as a number.",
      },
      {
        question: "Do I need a technical co-founder?",
        answer:
          "Not to get to a working product and first users. You need one when the product has traction and the technical decisions become daily rather than occasional. Plenty of founders reach a funded seed round without one.",
      },
      {
        question: "Should I build for iOS, Android, or web first?",
        answer:
          "Whichever platform your first hundred users are already on. If you don't know who those hundred people are, that's the question to answer before the platform question.",
      },
      {
        question: "What happens after launch?",
        answer:
          "You own the code and can take it anywhere. If you'd rather not, I stay on — see technical partner.",
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
    h1: "You need to know what you're buying before you buy it.",
    summary:
      "A written architecture you can hand to any developer or agency.",
    serviceName: "Technical Blueprint & Product Architecture Before You Hire",
    sections: [
      {
        type: "paragraphs",
        body: [
          "You're about to spend a lot of money on development. Maybe you've got quotes from three agencies and they're €20k apart, and you can't tell why. Maybe you've got budget approved and a deadline, and the only thing missing is a clear description of the thing itself.",
          "This is the cheapest possible moment to get it right. Every ambiguity you leave in the brief becomes a change request later, at ten times the price.",
        ],
      },
      {
        type: "bullets",
        heading: "This is you if",
        items: [
          "You have three quotes with wildly different numbers and no way to compare them",
          "You have budget but no technical person to sanity-check what you're being sold",
          "You're hiring your first developer and don't know what to ask for",
          "An agency handed you a proposal full of words you'd have to Google",
          "You want to build in-house but nobody has mapped the system yet",
        ],
      },
      {
        type: "steps",
        heading: "How it works",
        steps: [
          {
            title: "Discovery.",
            body: "Two to three sessions. I learn the business, not just the feature list — what makes money, what has to scale, what's actually fixed versus what everyone assumes is fixed.",
          },
          {
            title: "I write the blueprint.",
            body: "A document that covers: the data model, system architecture, third-party services and what they'll cost monthly, the build sequence in phases, the risks nobody mentioned, and a scope boundary that says explicitly what is out.",
          },
          {
            title: "We walk through it.",
            body: "You need to be able to defend every decision in it to a developer who pushes back. So we go through it until you can.",
          },
        ],
      },
      {
        type: "heading-block",
        heading: "What you get",
        body: [
          "A document you own and can hand to anyone. Use it to brief an agency, to compare quotes on equal terms, to onboard your first hire, or to build it yourself. It's vendor-neutral — nothing in it assumes I'm the one who builds it.",
        ],
      },
      {
        type: "heading-block",
        heading: "Why this saves money",
        body: [
          "A quote against a vague brief is priced for risk. The agency doesn't know what you'll ask for in month three, so they pad. A quote against a precise blueprint is priced for work. In my experience the blueprint pays for itself in the delta between those two numbers, before a single line of code is written.",
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
          "A spec lists features. A blueprint explains the system: how data is structured, why those structures, what breaks at scale, what each decision costs you later. A spec tells a developer what to build. A blueprint tells you what you're buying.",
      },
      {
        question: "Can I use this to get quotes from other developers?",
        answer: "Yes, that's the point. It's written to be handed over.",
      },
      {
        question: "What if I decide to build it in-house?",
        answer:
          "Then you have a document your team can work from on day one instead of spending their first month discovering it.",
      },
      {
        question: "Do you review existing quotes or proposals?",
        answer:
          "Yes. Send me what you've got and I'll tell you what's missing, what's padded, and what's a red flag. It's the fastest version of this engagement.",
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
    h1: "You paid for something. It doesn't work.",
    summary:
      "Audit what's there, salvage what's worth it, take it forward.",
    serviceName:
      "Rescue a Broken Build — Take Over a Failed Development Project",
    sections: [
      {
        type: "paragraphs",
        body: [
          "Maybe the freelancer stopped answering. Maybe the agency delivered on the invoice but not on the product. Maybe it technically runs but crashes on real users, or nobody can add a feature without breaking three others.",
          "This is more common than anyone admits publicly, and it is not a reflection on you. It's what happens when the person paying can't evaluate the work being done.",
          "The first thing you need isn't a developer. It's an honest answer to one question: is this worth saving?",
        ],
      },
      {
        type: "bullets",
        heading: "This is you if",
        items: [
          "Your developer stopped responding and you don't know what you actually own",
          "The app works in demos and falls over with real users",
          "Every new feature breaks something that used to work",
          'You\'ve been told "we need to rebuild from scratch" and you don\'t know if that\'s true or convenient',
          "Nobody can tell you where the code is, who has access, or what's in the database",
        ],
      },
      {
        type: "steps",
        heading: "How it works",
        steps: [
          {
            title: "The audit.",
            body: "I go through the codebase, the infrastructure, the database and the deployment. Three to five days. At the end you get a written verdict: what's solid, what's broken, what's dangerous, and what it would cost to fix versus rebuild.",
          },
          {
            title: "The honest recommendation.",
            body: "Sometimes the answer is that 70% is fine and the problem is three specific things. Sometimes the answer is that the data model is unsalvageable and rebuilding is genuinely cheaper. I've said both. I'll say whichever is true, including when it means less work for me.",
          },
          {
            title: "Stabilise first.",
            body: "If we go forward: security holes, data integrity, deployment. Nothing new gets built on a foundation that's still moving.",
          },
          {
            title: "Then forward.",
            body: "Once it's stable, we get back to the roadmap.",
          },
        ],
      },
      {
        type: "heading-block",
        heading: "What you get",
        body: [
          "The audit is a standalone deliverable. Even if you never work with me again, you'll know exactly what you own, what it's worth, and what it needs. Founders have used it to renegotiate with the original developer and to justify pulling the plug.",
        ],
      },
      {
        type: "heading-block",
        heading: "First: get control of your own assets",
        body: [
          "Before anything else you need control of the repo, the hosting, the domain, the database and the App Store account. If a former developer holds any of these, that's the first thing we fix. I'll walk you through recovering each one.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you take over code written by someone else?",
        answer:
          "Usually yes. Bad code is still readable code. The genuinely hard cases are missing access credentials and undocumented production data — not messy code.",
      },
      {
        question: "How do I know if it should be rebuilt?",
        answer:
          "The data model is the deciding factor, not the code quality. Messy code on a sound data model is a cleanup. Clean code on a broken data model is a rebuild. That's what the audit determines.",
      },
      {
        question: "What if my developer still has access to everything?",
        answer:
          "Then we lock it down first. Repo access, deployment keys, database credentials, DNS, App Store. This is standard, it's not an accusation, and it should happen the moment a working relationship ends.",
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
    h1: "You don't need a contractor. You need a counterpart.",
    summary:
      "A technical counterpart on retainer — not a contractor.",
    serviceName: "Technical Partner & Fractional CTO for Founders",
    sections: [
      {
        type: "paragraphs",
        body: [
          "Some products aren't a project with an end date. They're a thing you're going to build for years, and what you're missing isn't a pair of hands for eight weeks — it's someone who holds the technical side of the business with you.",
          "That's a different relationship. A contractor executes decisions. A partner argues with you before the decision gets made.",
        ],
      },
      {
        type: "bullets",
        heading: "This is you if",
        items: [
          "You're non-technical and every technical decision currently rests on hope",
          "You have developers, but nobody who decides what they should build",
          "You're raising and need someone who can answer technical due diligence",
          'You want someone who says "that\'s a bad idea" before you spend three months on it',
          "Your product is live and the roadmap decisions are getting expensive",
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
            body: "Stack, data model, build-versus-buy, what to fix now and what to leave. Documented, so you're never dependent on remembering a conversation.",
          },
          {
            title: "Hands-on building.",
            body: "I'm not a strategist who stopped writing code. The features I specify, I can build.",
          },
          {
            title: "Managing developers.",
            body: "Reviewing work, setting standards, doing the technical part of hiring. If you have or want a team, I'm the person they can be honest with.",
          },
          {
            title: "Business thinking.",
            body: 'Pricing, retention, what the numbers mean, which feature actually moves revenue. This is the part most technical people leave out, and it\'s why the positioning on this site is "I build businesses, not just software."',
          },
          {
            title: "Investor conversations.",
            body: "Technical diligence, architecture questions, why the stack is what it is.",
          },
        ],
      },
      {
        type: "heading-block",
        heading: "What I bring that a hired CTO doesn't",
        body: [
          "I've shipped my own products end to end — App Store, Google Play, paying users, the whole unglamorous middle. I know what breaks after launch because it broke on mine. And I've done it four times over, which means I've made the expensive mistakes on my own money rather than yours.",
        ],
      },
      {
        type: "heading-block",
        heading: "What I need from you",
        body: [
          "Real decision-making access, honest numbers, and a willingness to be told no. This arrangement only works if I can disagree with you.",
        ],
      },
    ],
    faqs: [
      {
        question:
          "What's the difference between this and hiring a freelancer?",
        answer:
          "A freelancer takes your decisions and executes them. A partner is accountable for whether the decisions were right. Different work, different relationship, different price.",
      },
      {
        question: "Are you available full-time or exclusive?",
        answer:
          "No. I run my own products, and that's precisely what makes this useful — you get someone who's currently shipping, not someone who did once. I take a small number of partnerships at a time.",
      },
      {
        question: "Can this convert into a co-founder arrangement?",
        answer:
          "It's happened. It's not the default and I won't discuss equity in a first conversation — it should follow from working together, not precede it.",
      },
      {
        question: "Can I start smaller?",
        answer:
          "Yes. Most partnerships start as a blueprint or a single build. That's the sensible way to find out whether we work well together.",
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
    h1: "You have a product. It needs one more thing.",
    summary:
      "One well-defined feature, scoped, priced, and shipped.",
    serviceName: "Feature Development — Add One Thing to an Existing Product",
    sections: [
      {
        type: "paragraphs",
        body: [
          "Payments. Authentication. An AI feature everyone's asking for. An integration with the tool your customers already use. A migration you've been putting off.",
          "The product works. You don't need a partner or a rebuild. You need one well-defined thing built properly by someone who won't leave a mess in your codebase.",
        ],
      },
      {
        type: "bullets",
        heading: "This is you if",
        items: [
          "Your team is at capacity and this keeps getting pushed",
          "It's outside your stack and hiring for it doesn't make sense",
          "You've tried twice internally and it's still not right",
          "You need it done in weeks, not quarters",
          "It touches payments or auth and you'd rather it were done by someone who's done it before",
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
            body: "Email, OAuth, Apple Sign-In, magic links, session handling that doesn't log people out at random.",
          },
          {
            title: "AI features.",
            body: "Not a chatbot bolted onto a sidebar — features where a model does something specific and useful. I've shipped photo-to-calorie recognition (Kolibi) and natural-language document search (Orivela). I know where these break: cost, latency, and what happens on the bad response.",
          },
          {
            title: "Integrations.",
            body: "Third-party APIs, webhooks, the retry logic and idempotency nobody budgets for.",
          },
          {
            title: "Data migrations.",
            body: "Moving off the schema that made sense at the start, without losing anything.",
          },
        ],
      },
      {
        type: "heading-block",
        heading: "How it works",
        body: [
          "Fixed scope, fixed price, fixed date. I look at your codebase first and give you a number — if I can't scope it confidently, I say so rather than padding the quote. You get a pull request that matches your existing conventions, with tests, and a handover document your team can read.",
        ],
      },
      {
        type: "heading-block",
        heading: "What I won't do",
        body: [
          "Ship something that only I can maintain. If a feature needs a pattern nobody on your team knows, either it gets built in a way they can extend, or I explain the trade-off before we start.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can you work in our existing codebase?",
        answer:
          "Yes. I match your conventions rather than importing mine — the goal is a change your team can maintain after I'm gone.",
      },
      {
        question: "What stacks do you work in?",
        answer:
          "Primarily TypeScript: Next.js, React, React Native, Node, Postgres, Supabase. Native iOS and Android where it's warranted. If your stack is far outside that, I'll tell you rather than learn it on your budget.",
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
    h1: "Everyone's told you something different.",
    summary:
      "An honest stack recommendation with no vendor incentive.",
    serviceName:
      "Which Tech Stack Should You Use? Independent Technical Advice",
    sections: [
      {
        type: "paragraphs",
        body: [
          "One person says React Native. Someone else says native or don't bother. A no-code consultant says you don't need developers at all. Everyone sounds certain, everyone has an incentive, and you have no way to tell who's right.",
          "Here's the uncomfortable truth: for most early products, the stack matters far less than anyone selling you a stack wants to admit. What matters is whether the data model survives contact with your second feature. That's the decision worth agonising over, and almost nobody frames it that way.",
        ],
      },
      {
        type: "bullets",
        heading: "This is you if",
        items: [
          "You've had four recommendations and they contradict each other",
          "You're choosing between no-code and custom and can't tell where the ceiling is",
          "You need to know if a decision is reversible before you commit",
          "You're worried about being locked in",
          'Someone quoted you double for "native" and you don\'t know if that\'s justified',
        ],
      },
      {
        type: "heading-block",
        heading: "How this works",
        body: [
          "A short engagement — a call, sometimes two, plus a written recommendation. I look at what you're building, who it's for, how fast it needs to move, and what your realistic budget is. Then I give you a specific answer, not a list of options with pros and cons.",
          'I have no reseller relationships and no partnership with any vendor. Sometimes the honest answer is "start on Bubble, you\'ll know within six months whether you need to move."',
        ],
      },
      {
        type: "named-list",
        heading: "Questions that actually decide it",
        items: [
          {
            title: "Does it need to work offline?",
            body: "This narrows things fast.",
          },
          {
            title: "Are you doing anything heavy on-device?",
            body: "Camera, audio, real-time — this is where cross-platform starts costing more than it saves.",
          },
          {
            title: "How many platforms on day one?",
            body: "Usually the answer should be one.",
          },
          {
            title: "What can you hire for later?",
            body: "A stack you can't staff is a trap, however good it is.",
          },
          {
            title: "What's reversible?",
            body: "The frontend framework, mostly. The data model, no. Spend your worry there.",
          },
        ],
      },
      {
        type: "heading-block",
        heading: "My default, and when I break it",
        body: [
          "For most products: TypeScript, Next.js on the web, React Native or Expo on mobile, Postgres via Supabase. It's fast, it's staffable, and almost nothing about it is a one-way door.",
          "I break it for heavy on-device work, for anything with serious offline requirements, and when an existing team already knows something else well. A team's existing knowledge usually beats a marginally better tool.",
        ],
      },
    ],
    faqs: [
      {
        question: "Is React Native good enough for a real product?",
        answer:
          "For most products, yes. It stops being enough when you're doing heavy on-device processing, complex gestures, or need platform features at the moment they launch. Kolibi does real-time photo analysis and works fine — so the line is further out than most people assume.",
      },
      {
        question: "Supabase or Firebase?",
        answer:
          "Supabase if you want SQL, relational data and a clean exit path. Firebase if you're deep in Google's ecosystem and your data is genuinely document-shaped. Most products I see are relational and people discover this too late.",
      },
      {
        question: "Can I start with no-code and migrate later?",
        answer:
          "Yes, and it's often the right call. The migration cost is real but it's paid later with better information — and plenty of products never need to migrate at all.",
      },
      {
        question: "What's the most expensive mistake at this stage?",
        answer:
          "Not the framework. It's a data model that only fits version one. Changing the frontend is a project. Changing the data model after you have real users is surgery.",
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
