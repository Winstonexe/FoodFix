import "../styles/global.css"

export default function RootLayout(
  {children,}: Readonly<{children: React.ReactNode;}>
) {
  return (
    <html lang="en">
      <body color="black">
        {children}
      </body>
    </html>
  );
}
