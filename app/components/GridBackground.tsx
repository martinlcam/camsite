export default function GridBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(#ccccccff 1px, transparent 1px),
          linear-gradient(90deg, #ccccccff 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}
    />
  );
}