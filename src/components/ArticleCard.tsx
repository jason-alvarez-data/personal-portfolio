import Image from 'next/image';
import Link from 'next/link';

interface ArticleProps {
    article: {
        id: number;
        title: string;
        slug: string;
        image: string;
    };
}

export default function ArticleCard({ article }: ArticleProps) {
    return (
        <Link href={`/post/${article.slug}`} className="block">
      <div className="glass overflow-hidden transition-all duration-300 h-72 w-full hover:ring-4 hover:ring-white hover:transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255, 255, 255, 0.5)]">
        <div className="relative h-48 w-full">
          <Image
            src={article.image}
            alt={article.title}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold line-clamp-2 h-14">{article.title}</h3>
        </div>
      </div>
    </Link>
    );
}