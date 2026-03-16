const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="font-display text-xl font-bold text-primary">Zoovo</span>
          <p className="text-sm text-muted-foreground mt-1">
            The all-in-one platform for pet parents · Utrecht, Netherlands
          </p>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="mailto:info@zoovo.eu" className="hover:text-primary transition-colors">
            info@zoovo.eu
          </a>
          <a href="https://www.zoovo.eu" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            zoovo.eu
          </a>
        </div>
      </div>
      <div className="container mt-8 pt-6 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Zoovo. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
