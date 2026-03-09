import { Link } from 'react-router-dom';
import ArticleCard from '../cards/ArticleCard.jsx';
import { learnSectionArticles, learnSectionContent } from '../../data/learnData.js';

/* ── Main section ── */
const LearnSection = () => (
    <section className="flex flex-col items-center bg-gray-10 w-full">
        <div className="w-full max-w-400 px-6 py-12 md:px-8 md:py-16 md:max-w-307 lg:px-12 lg:py-20 lg:max-w-400">

            {/* Section header — heading left, description + CTA right */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10 md:mb-12">
                {/* Left: headline */}
                <div className="w-full md:max-w-200">
                    <h2 className="text-display-3 font-semibold text-gray-100 m-0">
                        {learnSectionContent.headingLineOne}<br />{learnSectionContent.headingLineTwo}
                    </h2>
                </div>

                {/* Right: description + button */}
                <div className="flex flex-col items-start gap-6 w-full md:max-w-lg">
                    <p className="text-base leading-6 text-gray-60 m-0">
                        {learnSectionContent.description}
                    </p>
                    <Link
                        to={learnSectionContent.ctaTo}
                        className="inline-flex items-center justify-center px-6 h-12 rounded-full bg-gray-100 text-white font-semibold text-[0.875rem] leading-5 no-underline transition-opacity duration-200 hover:opacity-[0.88] whitespace-nowrap"
                    >
                        {learnSectionContent.ctaLabel}
                    </Link>
                </div>
            </div>

            {/* Article card grid — 1 col mobile → 2 col tablet → 3 col desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {learnSectionArticles.map((article) => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>

        </div>
    </section>
);

export default LearnSection;
