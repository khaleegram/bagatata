import type { ProductSlug } from "@/content/products";

// These are the original Concept 01 interface directions, recreated as isolated
// decorative components. Every containing view displays an illustrative caption.
export function ProductArt({ slug }: { slug: ProductSlug }) {
  if (slug === "loomis")
    return (
      <div className="product-art loomis-art" aria-hidden="true">
        <div className="school-window">
          <div className="school-top">
            <span className="school-wordmark">
              loomis<span>.</span>
            </span>
            <span className="school-workspace">School workspace</span>
            <span className="window-dots">
              <i />
              <i />
              <i />
            </span>
          </div>
          <div className="school-body">
            <div className="school-sidebar">
              <span className="sidebar-active" />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className="school-main">
              <span className="art-kicker">YOUR SCHOOL, CONNECTED.</span>
              <h4>
                Good morning, Admin<span>.</span>
              </h4>
              <p>Here’s your school at a glance.</p>
              <div className="school-metrics">
                {["Students", "Attendance", "School finance"].map((item) => (
                  <div key={item}>
                    <span>{item}</span>
                    <i />
                  </div>
                ))}
              </div>
              <div className="school-chart">
                <div className="school-chart-label">
                  <strong>Attendance overview</strong>
                  <span>Illustrative data</span>
                </div>
                <div className="school-bars">
                  {[42, 65, 51, 78, 62, 88, 73, 95, 80, 90].map((height, i) => (
                    <i key={i} style={{ height: `${height}%` }} />
                  ))}
                </div>
                <div className="chart-axis">
                  <span>MON</span>
                  <span>TUE</span>
                  <span>WED</span>
                  <span>THU</span>
                  <span>FRI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  if (slug === "eventticketsng")
    return (
      <div className="product-art event-art" aria-hidden="true">
        <div className="event-orbit orbit-one" />
        <div className="event-orbit orbit-two" />
        <div className="event-ticket">
          <div className="ticket-top">
            <strong>
              EventTickets<span>NG</span>
            </strong>
            <span>ADMIT ONE</span>
          </div>
          <div className="ticket-graphic">
            <span className="ticket-graphic-circle" />
            <strong>
              GOOD
              <br />
              TIMES.
              <br />
              <span>GREAT ACCESS.</span>
            </strong>
            <span className="ticket-sample">SAMPLE EVENT / DEMO PASS</span>
          </div>
          <div className="ticket-perforation" />
          <div className="ticket-base">
            <div>
              <span className="art-kicker">YOUR ENTRY, SORTED.</span>
              <strong>You’re in.</strong>
              <span className="ticket-code">ETNG / SAMPLE PASS</span>
            </div>
            <div className="ticket-qr">
              {Array.from({ length: 81 }, (_, i) => (
                <i
                  key={i}
                  className={
                    (i * 13 + Math.floor(i / 9) * 7) % 11 < 6 ? "qr-dark" : ""
                  }
                />
              ))}
            </div>
          </div>
        </div>
        <span className="event-small-label">
          FROM FIRST SALE
          <br />
          TO FINAL CHECK-IN.
        </span>
      </div>
    );

  if (slug === "chatcart")
    return (
      <div className="product-art commerce-art" aria-hidden="true">
        <div className="commerce-orbit" />
        <div className="commerce-message">
          <span>Discover. Discuss. Deal.</span>
          <span>One connected experience.</span>
        </div>
        <div className="commerce-phone">
          <div className="phone-camera" />
          <div className="phone-status">
            <span>9:41</span>
            <span>••• ▰</span>
          </div>
          <div className="phone-chat-header">
            <span>←</span>
            <div className="seller-avatar">S</div>
            <div>
              <strong>Conversation with seller</strong>
              <small>ChatCart / illustrative chat</small>
            </div>
            <span>⋮</span>
          </div>
          <span className="chat-date">TODAY</span>
          <div className="chat-bubble">
            Hi! Is this still available?<small>10:24</small>
          </div>
          <div className="chat-bubble outgoing">
            Yes, ready to order.<small>10:25 ✓✓</small>
          </div>
          <div className="chat-product">
            <div className="product-parcel">
              <span />
            </div>
            <div>
              <small>YOUR NEXT FIND</small>
              <strong>Everyday essentials</strong>
              <span>
                Make an offer <span>↗</span>
              </span>
            </div>
          </div>
          <div className="chat-bubble">
            Perfect. Let’s make a deal.<small>10:26</small>
          </div>
          <div className="chat-input">
            <span>Your message</span>
            <span>↗</span>
          </div>
        </div>
      </div>
    );

  return (
    <div className="product-art gaming-art" aria-hidden="true">
      <div className="gaming-crosshair" />
      <span className="gaming-watermark">AV</span>
      <div className="gaming-scoreboard">
        <div className="scoreboard-top">
          <span>
            AREWAVANTA<span className="scoreboard-slash"> / BR</span>
          </span>
          <span className="scoreboard-demo">DEMO MATCH</span>
        </div>
        <div className="scoreboard-label">
          <span>THE COMMUNITY. THE COMPETITION.</span>
          <strong>
            Every match counts<span>.</span>
          </strong>
        </div>
        <div className="scoreboard-columns">
          <span>RANK</span>
          <span>SQUAD</span>
          <span>PLACEMENT</span>
        </div>
        {["Squad Alpha", "Squad Bravo", "Squad Charlie"].map((squad, i) => (
          <div className="scoreboard-row" key={squad}>
            <span className="scoreboard-rank">0{i + 1}</span>
            <div>
              <strong>{squad}</strong>
              <span
                className="squad-bar"
                style={{ width: `${87 - i * 23}%` }}
              />
            </div>
            <strong>0{i + 1}</strong>
          </div>
        ))}
        <div className="scoreboard-bottom">
          <span>ILLUSTRATIVE STANDINGS</span>
          <span>BUILT FOR THE AREWA COMMUNITY ↗</span>
        </div>
      </div>
    </div>
  );
}
