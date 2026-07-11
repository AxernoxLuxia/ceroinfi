// Site-wide ambient background: soft cyan gradient blobs that slowly drift on
// their own. Fixed behind all content; purely decorative. Motion is disabled
// under prefers-reduced-motion (see index.css).
function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="cero-bg">
      <span className="cero-blob cero-blob--1" />
      <span className="cero-blob cero-blob--2" />
      <span className="cero-blob cero-blob--3" />
    </div>
  )
}

export default AnimatedBackground
