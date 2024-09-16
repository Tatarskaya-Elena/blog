<template>
  <div class="footer">
    <div class="footer__copyright">
      Copyright by <span class="footer__copyright__highlight"> Arnas Jonkas </span>,
      theme of <span class="footer__copyright__highlight"> africans traveler </span> blog
    </div>
    <nav class="footer__nav-links">
      <RouterLink
        :to="{ name: routeNames.BLOGHOME }"
        class="footer__nav-link"
        :class="{ 'footer__nav-link--active': $route.name === routeNames.BLOG_HOME }"
      >
        Blog
      </RouterLink>
      <RouterLink
        to="/categories" 
        class="footer__nav-link"
        :class="{ 'footer__nav-link--active': $route.path === '/categories' }"
      >
        Categories
      </RouterLink>
      <RouterLink
        to="/gallery"
        class="footer__nav-link"
        :class="{ 'footer__nav-link--active': $route.path === '/gallery' }"
      >
        Gallery
      </RouterLink>
      <RouterLink
        to="/contact"
        class="footer__nav-link"
        :class="{ 'footer__nav-link--active': $route.path === '/contact' }"
      >
        Contact
      </RouterLink>
    </nav>
  </div>
</template>

<script>
import { RouteNames } from "@/router/routes";

export default {
  name: "FooterBlog",
  computed: {
    routeNames() {
      return RouteNames
    }
  }
}
</script>

<style scoped lang="less">
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 20px 30px;
  margin-top: 60px;
  background-color: white;
  color: gray;
  font-family: "Calibri", sans-serif;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;

  &__copyright {
    display: flex;
    align-items: center;

    &__highlight {
      color: black;
      margin: 0 3px;
    }
  }

  &__nav-links {
    display: flex;
  }

  &__nav-link {
    margin-left: 18px;
    color: gray;
    font-weight: 600;

    &--active {
      color: black;
    }
  }
}
</style>
