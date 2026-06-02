import { getSortedPostsData } from '@/lib/posts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';

export const metadata = {
  title: 'Journal - CHO-JU',
  description: '暮らしを整えるアイデアと、CHO-JUのある風景。',
};

export default function BlogIndex() {
  const allPosts = getSortedPostsData();

  return (
    <div className="min-h-screen bg-kinari flex flex-col">
      <Header />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <div className="inline-flex items-center text-sumi-soft text-sm tracking-[0.3em] uppercase mb-5">
              <span className="w-6 h-px bg-shu mr-3" />
              Journal
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-sumi">
              暮らしを整える読みもの
            </h1>
            <p className="mt-4 text-base leading-8 text-sumi-soft">
              All Stories
            </p>
          </div>

          <BlogList posts={allPosts} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
