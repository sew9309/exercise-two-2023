import Image from 'next/image'
//import styles from './page.module.css'
import styles from '../app/components/globals.css'
import Data from "../app/components/data"
import ArticleCard from "../app/components/ArticleCard"

export default function Home() {
  const projectName = "Exercise Two"

  console.log(Data);

  return (
    <main>
        <h1>{projectName}</h1>
        <ArticleCard title = "Cool Title" description = "Cool Description"/>
        <ArticleCard title = "Another Title"/>
        </main>
  );
}



// ./ access same level directory
// ../acces a file one level up in directory