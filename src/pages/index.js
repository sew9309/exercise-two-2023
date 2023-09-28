import Image from 'next/image'
//import styles from './page.module.css'
import Data from "../app/components/data"
import ArticleCard from "../app/components/ArticleCard"
//import styles from "../app/components/ArticleCard.articleCard.module.css";

export default function Home() {
  const projectName = "Exercise Two"
  
//console.log(Data);
//console.log(date);

  return (
    <main>
        <h1>{projectName}</h1>

        {Data.map((article) => (
        <ArticleCard
        id={article.id}
        key={article.id}
        date={new Date(article.publishedDate).toDateString()}
        description={article.blurb}
        imageAlt={article.image.alt}
        imageSrc={article.image.url}
        title={article.title}
        />
  ))}
        </main>
  );
}



// ./ access same level directory
// ../acces a file one level up in directory