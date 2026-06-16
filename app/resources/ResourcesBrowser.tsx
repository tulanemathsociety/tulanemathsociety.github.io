import Link from "next/link";
import type { Resource, ResourceCategory } from "@/lib/types";

const CATEGORIES: ResourceCategory[] = [
  "Coursework",
  "Proofs",
  "LaTeX",
  "Putnam",
  "Research",
  "Grad School",
  "Careers",
  "Books",
];

function categoryId(category: ResourceCategory) {
  return category.toLowerCase().replace(/[^a-z]+/g, "-");
}

export function ResourcesBrowser({ resources }: { resources: Resource[] }) {
  return (
    <div className="space-y-10">
      {CATEGORIES.map((category) => {
        const items = resources.filter((resource) => resource.category === category);

        if (items.length === 0) {
          return null;
        }

        return (
          <section key={category} id={categoryId(category)} className="scroll-mt-24">
            <h2 className="font-serif text-2xl text-tulane-navy">{category}</h2>
            <ul className="mt-4 divide-y divide-tulane-warm-gray border border-tulane-warm-gray bg-white">
              {items.map((resource) => {
                const isExternal =
                  resource.href.startsWith("http") ||
                  resource.href.startsWith("mailto:");

                return (
                  <li key={resource.id} className="p-5 sm:p-6">
                    {isExternal ? (
                      <a
                        href={resource.href}
                        target={resource.href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          resource.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-lg font-medium text-tulane-green hover:text-tulane-secondary-green"
                      >
                        {resource.title}
                      </a>
                    ) : (
                      <Link
                        href={resource.href}
                        className="text-lg font-medium text-tulane-green hover:text-tulane-secondary-green"
                      >
                        {resource.title}
                      </Link>
                    )}
                    <p className="mt-2 max-w-3xl text-sm leading-relaxed text-tulane-charcoal/80">
                      {resource.description}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
