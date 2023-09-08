<script>
export default {
  data() {
    return {
      navLinks: [
        {
          text: "About Me",
          url: "#about-me",
        },
        {
          text: "Tech Stacks",
          url: "#tech-stacks",
        },
        {
          text: "My Projects",
          url: "#my-projects",
        },
        {
          text: "Contact Me",
          url: "#contact-me",
        },
      ]
    }
  }
}
</script>

<template>
  <div class="flex flex-row items-center w-full gap-4 px-4 py-4 border-b border-gray-800 bg-gray-950">
    <ul class="flex flex-row">
      <li v-for="link in navLinks" :key="link.text">
        <a :href="link.url" class="block px-4">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>