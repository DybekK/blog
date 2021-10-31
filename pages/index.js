import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import layoutStyles from '../components/layout.module.css'
import {CategoryButton} from "../components/buttons/categoryButton";
import classNames from "classnames";

export default function Home({ allPostsData }) {
  return (
    <Layout className={layoutStyles.mainBorder} home>
      <section className="flex justify-between flex-col-reverse sm:flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2">
              <h2 data-aos="fade-down" className="font-bold text-4xl my-5 secondColor">Latest added</h2>
              <ul className={utilStyles.list}>
                  {allPostsData.map(({ id, date, title }) => (
                      <li data-aos="fade-down" className={utilStyles.listItem} key={id}>
                          <Link href={`/posts/${id}`}>
                              <a>{title}</a>
                          </Link>
                          <p className="text-xs my-2">
                              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                          </p>
                          <small className={utilStyles.lightText}>
                              <Date dateString={date} />
                          </small>
                      </li>
                  ))}
              </ul>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-start sm:items-start md:items-end">
              <h2 data-aos="fade-down" className="font-bold text-4xl my-5 secondColor">Categories</h2>
              <div data-aos="fade-down" className="flex justify-start sm:justify-start md:justify-end flex-wrap">
                  <CategoryButton className="mr-3 mt-4" text={`Category`} />
                  <CategoryButton className="mr-3 mt-4" text={`Category`} />
                  <CategoryButton className="mr-3 mt-4" text={`Category`} />
                  <CategoryButton className="mr-3 mt-4" text={`Category`} />
                  <CategoryButton className="mr-3 mt-4" text={`Category`} />
                  <CategoryButton className="mr-3 mt-4" text={`Category`} />
              </div>
          </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
