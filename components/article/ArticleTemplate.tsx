import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface heroImageProps {
  src: string;
  alt: string;
}

interface relatedArticlesProps {
  link: string;
  title: string;
  description: string;
}

interface ArticleProps {
  title: string;
  subtitle: string;
  author: string;
  date: string;
  heroImage: heroImageProps;
  content: string;
  category: string;
  tags: string[];
  relatedArticles: relatedArticlesProps[];
}

const ArticleTemplate = ({
  title,
  subtitle,
  author,
  date,
  heroImage,
  content,
  category,
  tags,
  relatedArticles,
}: ArticleProps) => {
  return (
    <div className="container mx-auto p-4 md:p-8 max-w-4xl font-sans">
      {/* Hero Section: Image and Title */}
      <article className="mb-8">
        {heroImage && (
          <img
            src={heroImage.src}
            alt={heroImage.alt || title}
            className="w-full h-150 object-cover rounded-lg shadow-lg mb-6"
          />
        )}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-3">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-gray-600 font-light mb-4">
            {subtitle}
          </p>
        )}
        <div className="flex items-center text-gray-500 text-sm">
          {author && <span className="font-semibold">{author}</span>}
          {date && (
            <>
              <span className="mx-2">•</span>
              <span>{date}</span>
            </>
          )}
          {category && (
            <>
              <span className="mx-2">•</span>
              <span className="text-teal-600 font-medium">{category}</span>
            </>
          )}
        </div>
        <hr className="my-6 border-t-2 border-gray-200" />
      </article>
      {/* Main Content */}
      <article className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </article>
      {/* Tags Section */}
      {tags && tags.length > 0 && (
        <section className="mt-10 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-bold text-[var(--deep-sage)] mb-3">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[var(--outback)] text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>
      )}
      Related Articles
      {relatedArticles && relatedArticles.length > 0 && (
        <section className="mt-10 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-bold text-gray-700 mb-4">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((article, index) => (
              <a
                key={index}
                href={article.link}
                className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <h4 className="text-md font-semibold text-gray-800 mb-1">
                  {article.title}
                </h4>
                <p className="text-sm text-gray-600">{article.description}</p>
              </a>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleTemplate;
