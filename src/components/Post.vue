<template>
 <div class="tm-section tm-section-color-white">
     <div class="aligncenter">
     <h1 v-html="post.title" class="tm-margin-large-bottom aligncenter" />
    <div class="aligncenter" v-html="post.excerpt" />
    <g-link :to="post.path">
      Read More
    </g-link>
  </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
