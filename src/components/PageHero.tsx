import { Link } from 'react-router-dom';

interface Breadcrumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  title: string;
  image: string;
  breadcrumbs: Breadcrumb[];
}

export default function PageHero({ title, image, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative h-[40vh] md:h-[45vh] flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 text-center px-4">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-4">
          {title}
        </h1>
        <nav className="flex items-center justify-center gap-2 text-sm font-body uppercase tracking-wider">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/50">/</span>}
              {crumb.to ? (
                <Link
                  to={crumb.to}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-white">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
