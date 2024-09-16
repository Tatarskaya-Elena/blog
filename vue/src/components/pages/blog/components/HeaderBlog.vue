<template>
  <div class="header">
    <div class="header__logo">
      <span class="header__logo__circle">T</span>ravaler
    </div>
    <nav class="header__nav-links">
      <RouterLink
        :to="{ name: routeNames.BLOG_HOME }"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.name === routeNames.BLOG_HOME }"
      >
        Blog
      </RouterLink>
      <RouterLink
        to="/articles"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.path === '/articles' }"
      >
        Articles
      </RouterLink>
      <RouterLink
        to="/gallery"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.path === '/gallery' }"
      >
        Gallery
      </RouterLink>
      <RouterLink
        to="/contact"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.path === '/contact' }"
      >
        Contact
      </RouterLink>
      <RouterLink
        :to="{ name: routeNames.CREATE_NEWS_BLOG }"
        class="header__nav-link"
        :class="{ 'header__nav-link--active': $route.name === routeNames.CREATE_NEWS_BLOG }"
      >
        Create Post
      </RouterLink>
    </nav>
  </div>
</template>

<script>
import { RouteNames } from "@/router/routes";

export default {
  name: "HeaderBlog",
  computed: {
    routeNames() {
      return RouteNames
    }
  }
}
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 20px 30px;
  background-color: white;
  color: gray;
  font-family: "Calibri", sans-serif;
  text-transform: uppercase;
  letter-spacing: 1px;

  &__logo {
    display: flex;
    align-items: center;
    font-size: 18px;

    &__circle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      height: 30px;
      margin-right: 7px;
      border-radius: 50%;
      background-color: dimgray;
      color: white;
      font-weight: 530;
    }
  }

  &__nav-links {
    display: flex;
  }

  &__nav-link {
    margin-left: 18px;
    color: gray;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: 12px;

    &--active {
      color: black;
    }
  }
}
</style>
