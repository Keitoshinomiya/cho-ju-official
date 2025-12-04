import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export interface PostData {
  id: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  category?: string;
  relatedProduct?: string; // 関連商品ID
  contentHtml?: string;
}

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // excerptをdescriptionとして使用、imageとcategoryも取得
    const description = matterResult.data.excerpt || matterResult.data.description || '';
    
    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: description,
      image: matterResult.data.image,
      category: matterResult.data.category,
      relatedProduct: matterResult.data.productId, // productIdをrelatedProductとして扱う
    } as PostData;
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const description = matterResult.data.excerpt || matterResult.data.description || '';

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    description: description,
    image: matterResult.data.image,
    category: matterResult.data.category,
    relatedProduct: matterResult.data.productId,
  } as PostData;
}
