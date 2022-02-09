<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <input
          type="text"
          v-model.trim="search"
          placeholder="Search people..."
          @keyup="getAllStarWarsPeople"
        /><br />
        <ul v-if="search !=''">
          <li v-for="person in people" :key="person.id">
            {{ person.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarWarsPeopleComponent",

  data() {
    return {
      people: [],
      search: ""
    };
  },

  mounted() {
    console.log("Component mounted.");
  },

  methods: {
    getAllStarWarsPeople() {
      fetch("https://swapi.dev/api/people/?page=1")
        .then(response => response.json())
        .then(res => {
          if (this.search) {
            this.people = res.results.filter(people =>
              people.name.toLowerCase().includes(this.search.toLowerCase())
            );
          } else {
            this.people = res.results;
          }
        });
    }
  },
  created() {
    this.getAllStarWarsPeople();
  }
};
</script>