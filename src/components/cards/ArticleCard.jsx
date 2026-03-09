const ArticleCard = ({ article }) => (
    <div className="relative flex flex-col min-h-80 min-w-65">
        {/* Full-card clickable overlay */}
        <a
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={article.title}
            className="absolute inset-0 z-10 rounded-2xl transition-opacity duration-150 hover:opacity-[0.88]"
        />

        {/* Image — 16:9 aspect ratio */}
        <div className="w-full shrink-0 rounded-2xl overflow-hidden bg-gray-15">
            <div className="w-full" style={{ aspectRatio: '16/9' }}>
                <img
                    src={article.image}
                    alt={article.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
            </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col gap-3 pt-4 flex-1">
            <h3 className="text-[1.125rem] leading-6 font-semibold text-gray-100 line-clamp-3 m-0">
                {article.title}
            </h3>
            <p className="text-[0.875rem] leading-5.5 font-normal text-gray-60 line-clamp-3 m-0">
                {article.description}
            </p>
        </div>
    </div>
);

export default ArticleCard;

