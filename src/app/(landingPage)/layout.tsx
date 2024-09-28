


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <div>
        <span> landing page layout </span>
        {children}
    </div>
  );
}

