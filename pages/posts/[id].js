import Layout from '../../components/layout'
import layoutStyles from "../../components/layout.module.css"
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import {Heading} from "../../components/mdx/Headings/heading";
import {Paragraph} from "../../components/mdx/Headings/paragraph";
import {List} from "../../components/mdx/Headings/list";
import {ListElement} from "../../components/mdx/Headings/listElement";
import {Code} from "../../components/mdx/Headings/code";

const components = {
  h1: (props) => <Heading {...props} variant="h1" />,
  p: (props) => <Paragraph {...props} />,
  ul: (props) => <List {...props} />,
  li: (props) => <ListElement {...props} />,
  code: (props) => <Code {...props} />
}

export default function Post({ postData }) {
  return (
    <Layout className={layoutStyles.mainBorder} postData={postData} >
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <MDXRemote {...postData.content} components={components}>
        </MDXRemote>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  postData.content = await serialize(postData.content)

  return {
    props: {
      postData,
    }
  }
}
