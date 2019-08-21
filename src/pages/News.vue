<template>
  <Layout>
   <div class="tm-section tm-section-color-white">
     <div class="uk-container uk-container-center uk-text-center">

     <h1 class="tm-margin-large-bottom">Welcome to Vue UIKit Wordpress blog</h1>
    <ul class="post-list">
      <li v-for="{ node } in $page.allWordPressPost.edges" :key="node.id">
        <Post :post="node" />
      </li>
    </ul>
    <Pager :info="$page.allWordPressPost.pageInfo"/>
    </div>
</div>
  </Layout>
</template>

<page-query>
query Home ($page: Int) {
  allWordPressPost (page: $page, perPage: 10) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        excerpt
      }
    }
  }
}
</page-query>


<script>
import { Pager } from 'gridsome'
import Post from '~/components/Post.vue'

export default {
  components: {
    Pager,
    Post
  },
  metaInfo: {
    title: 'Welcome to Vue UIKit :)'
  }
}
</script>
<style>
li {
list-style:none;
}
</style>
