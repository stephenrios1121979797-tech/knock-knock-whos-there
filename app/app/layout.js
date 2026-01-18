export const metadata = {
  title: "Knock Knock, Who’s There",
  description: "Door to door sales tracking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont",
          background: "#020617",
          color: "#f8fafc",
        }}
      >
        {children}
      </body>
    </html>
  );
}
