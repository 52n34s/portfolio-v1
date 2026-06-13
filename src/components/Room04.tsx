"use client";

const PEERS = [
  {
    id: "yuki",
    name: "Yuki",
    city: "Tokyo",
    tag: "🚀 Building a startup",
    img: "/peers/peeranimo_asia_woman.jpg",
    positionClass: "peer-node-yuki",
    floatClass: "peer-float-yuki",
  },
  {
    id: "marcus",
    name: "Marcus",
    city: "Lagos",
    tag: "💼 Career change",
    img: "/peers/peeranimo_asia_men_african.jpg",
    positionClass: "peer-node-marcus",
    floatClass: "peer-float-marcus",
  },
  {
    id: "sofia",
    name: "Sofia",
    city: "Vienna",
    tag: "🌍 Moving abroad",
    img: "/peers/peeranimo_european_woman.jpg",
    positionClass: "peer-node-sofia",
    floatClass: "peer-float-sofia",
  },
  {
    id: "diego",
    name: "Diego",
    city: "Buenos Aires",
    tag: "🎨 Creative project",
    img: "/peers/peeranimo_pepe_latino_woman.jpg",
    positionClass: "peer-node-diego",
    floatClass: "peer-float-diego",
  },
];

const FEATURES = [
  {
    icon: "👥",
    title: "Same chapter",
    subtitle: "People in the exact same moment of life.",
  },
  {
    icon: "❤️",
    title: "Real connection",
    subtitle: "Share. Support. Show up for each other.",
  },
  {
    icon: "✦",
    title: "Your moment",
    subtitle: "This is where your next chapter begins.",
  },
];

const WAITING_AVATARS = ["Y", "M", "S", "D"];

interface Room04Props {
  visible: boolean;
}

export default function Room04({ visible }: Room04Props) {
  return (
    <section
      id="room-04"
      className={`room-04 ${visible ? "room-04-visible" : ""}`}
    >
      <div className="room-04-blob room-04-blob-purple" aria-hidden="true" />
      <div className="room-04-blob room-04-blob-orange" aria-hidden="true" />

      <div className="room-04-inner">
        {/* Left — Text */}
        <div className="room-04-content">
          <span className="room-04-badge">✦ A peer-to-peer community</span>

          <h2 className="room-04-headline">
            Find people
            <br />
            <span className="room-04-headline-accent">who get it</span>
            <span className="room-04-dot">.</span>
          </h2>

          <p className="room-04-intro">
            The people standing exactly where you are.
            <br />
            Building something. Changing something.
            <br />
            Becoming something.
          </p>

          <div className="room-04-divider" />

          <ul className="room-04-features">
            {FEATURES.map((f) => (
              <li key={f.title} className="room-04-feature">
                <span className="room-04-feature-icon">{f.icon}</span>
                <div>
                  <p className="room-04-feature-title">{f.title}</p>
                  <p className="room-04-feature-sub">{f.subtitle}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="room-04-actions">
            <a
              href="https://peeranimo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="room-04-btn-primary"
            >
              Join Peeranimo →
            </a>
          </div>

          <div className="room-04-waiting">
            <div className="room-04-avatars">
              {WAITING_AVATARS.map((initial, i) => (
                <span
                  key={initial}
                  className="room-04-avatar"
                  style={{ zIndex: WAITING_AVATARS.length - i }}
                >
                  {initial}
                </span>
              ))}
            </div>
            <span className="room-04-waiting-text">
              250+ people are already waiting
            </span>
          </div>
        </div>

        {/* Right — Network */}
        <div className="room-04-network-wrap">
          <div className="room-04-network">
            <svg
              className="room-04-lines"
              viewBox="0 0 500 500"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <line
                x1="250"
                y1="250"
                x2="250"
                y2="80"
                stroke="#5B4FCF"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                className="animated-line"
              />
              <line
                x1="250"
                y1="250"
                x2="70"
                y2="220"
                stroke="#5B4FCF"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                className="animated-line"
                style={{ animationDelay: "0.5s" }}
              />
              <line
                x1="250"
                y1="250"
                x2="430"
                y2="220"
                stroke="#5B4FCF"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                className="animated-line"
                style={{ animationDelay: "1s" }}
              />
              <line
                x1="250"
                y1="250"
                x2="250"
                y2="415"
                stroke="#5B4FCF"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                className="animated-line"
                style={{ animationDelay: "1.5s" }}
              />
            </svg>

            <div className="room-04-you">YOU</div>

            {PEERS.map((peer) => (
              <div
                key={peer.id}
                className={`peer-node ${peer.positionClass}`}
              >
                <div className={`peer-float ${peer.floatClass}`}>
                  <img
                    src={peer.img}
                    alt={peer.name}
                    className="peer-photo"
                  />
                  <p className="peer-name">{peer.name}</p>
                  <p className="peer-city">{peer.city}</p>
                  <span className="peer-tag">{peer.tag}</span>
                </div>
              </div>
            ))}

            <div className="room-04-info-card">
              <span className="room-04-info-icon">👥</span>
              <div>
                <p className="room-04-info-title">People like you.</p>
                <p className="room-04-info-sub">All over the DACH region.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
