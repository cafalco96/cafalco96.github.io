<template>
  <div class="portfolio-about">
    <masthead
      image-src="https://i.ibb.co/TxyQM7Jk/entorno.webp"
      image-alt="Carlos Falconi"
      title="About Me"
      description="I am a passionate web developer with a knack for creating dynamic and responsive web applications."
    />
    <div class="portfolio-about__content">
      <h2>Hi, I'm Carlos</h2>
      <p>
        With four years of formal education in programming and four years of
        hands-on professional experience, I bring a balanced mix of academic
        knowledge and practical expertise to every project. This unique
        combination allows me to approach challenges with both a solid
        foundation and a results-driven mindset.
      </p>

      <p>
        On the front end, I specialize in JavaScript with a strong focus on
        Vue.js, while also being proficient in React.js, and having experience
        with Angular and Svelte. On the back end, I have worked with Java and
        Spring, but my core expertise lies in PHP and the Laravel framework.
        This fullstack versatility enables me to deliver robust and scalable web
        applications.
      </p>

      <p>
        Beyond traditional development, I actively explore emerging technologies
        such as Artificial Intelligence, Blockchain, and Big Data. I leverage
        Python for neural networks, deep learning, and machine learning
        projects, and utilize tools like Orange, Power BI, and Scikit-learn for
        advanced data analysis and business intelligence.
      </p>

      <p>
        I also focus on the development and maintenance of WordPress websites,
        creating custom plugins, themes, and templates. Whether building from
        scratch or customizing frameworks such as Astra, Elementor, or Divi, I
        deliver tailored solutions that meet client needs with precision and
        creativity.
      </p>

      <p>
        Feel free to explore my portfolio to see some of the projects I’ve
        worked on. If you’re interested in collaborating or discussing new
        opportunities, I’d love to connect.
      </p>
      <br />
      <h2>Beyond Code</h2>

      <p>
        Outside of my professional life, music is a big part of who I am. I
        enjoy playing guitar, singing, and exploring the piano — it’s my way of
        staying creative and balanced.
      </p>

      <p>
        I’m also passionate about staying active. Whether it’s going to the gym,
        watching soccer, or heading out for a mountain hike and camping trip, I
        love challenging myself physically and enjoying nature.
      </p>

      <p>
        Technology has always been more than just work for me — it’s something I
        genuinely enjoy exploring in my free time. My curiosity drives me to
        constantly learn new tools and approaches, while discipline and teamwork
        help me bring ideas to life effectively.
      </p>
    </div>
  </div>
  <timeline
    title="The Road So Far"
    :milestones="[
      {
        date: '2022',
        milestone: 'Inspired to Start Programming',
        description:
          'Met an inspiring person who motivated me to pursue programming. Began learning web development with HTML and CSS through YouTube tutorials.',
      },
      {
        date: '2022',
        milestone: 'First Web Development Course',
        description:
          'Completed the Responsive Web Design certification on FreeCodeCamp, mastering HTML and CSS in depth and gaining an introduction to JavaScript.',
      },
      {
        date: '2022',
        milestone: 'Deepening JavaScript Knowledge',
        description:
          'Enhanced my JavaScript skills through online courses and tutorials, building a stronger foundation in front-end development.',
      },
      {
        date: '2022',
        milestone: 'First Professional Role',
        description:
          'Landed my first job as a web developer, editing and managing content on WordPress websites.',
      },
      {
        date: '2023',
        milestone: 'Joining Platzi',
        description:
          'Received a Platzi membership and focused on several web development schools. Specialized in JavaScript and advanced front-end with Vue.js.',
      },
      {
        date: '2023',
        milestone: 'Exploring Back-End Development',
        description:
          'Started learning PHP and Laravel, laying the foundation for my fullstack career.',
      },
      {
        date: '2023',
        milestone: 'Custom Development Projects',
        description:
          'Built my first custom projects using PHP, SCSS, and Vue.js, combining front-end and back-end skills.',
      },
      {
        date: '2024',
        milestone: 'Strengthening Fullstack Expertise',
        description:
          'Advanced my knowledge of Vue.js, back-end development, and both relational and non-relational databases.',
      },
      {
        date: '2024',
        milestone: 'Learning React.js',
        description:
          'Explored React.js and contributed to projects using this technology, broadening my front-end expertise.',
      },
      {
        date: '2025',
        milestone: 'Building Impactful Applications',
        description:
          'Took part in significant web and application development projects, expanding my professional portfolio.',
      },
      {
        date: '2025',
        milestone: 'The Archive Project',
        description:
          'Contributed to the front-end development of The Archive Project app, collaborating with a skilled team.',
      },
      {
        date: '2025',
        milestone: 'Exploring Emerging Technologies',
        description:
          'Dove into deep learning, machine learning, artificial intelligence, big data, and business intelligence.',
      },
      {
        date: '2025',
        milestone: 'The Journey Continues',
        description:
          'Continuing to grow and explore new technologies, constantly learning and taking on new challenges to advance my skills and impact.',
      },
    ]"
  />
</template>
<script setup lang="ts">
definePageMeta({
  layout: "masthead-layout",
});
</script>
<style lang="scss" scoped>
@use "~/assets/scss/variables/_sass-variables.scss" as vars;
@use "~/assets/scss/mixins/_media-queries.scss" as mixins;
.portfolio-about {
  color: vars.$portfolio-white-text;
  &__content {
    max-width: 850px;
    margin: 50px auto;
    padding: 0 16px;
  }
}
</style>
