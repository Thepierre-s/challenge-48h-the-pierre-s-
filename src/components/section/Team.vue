<template>
  <div class="bg-transparent">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
        <div class="space-y-5 sm:space-y-4">
          <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Meet our young jedi
          </h2>
          <p class="text-xl text-gray-500">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae
            elementum enim vitae ullamcorper suspendisse. Vivamus fringilla.
          </p>
        </div>
        <div class="lg:col-span-2">
          <ul
            role="list"
            class="space-y-12 grid justify-center sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
          >
            <li v-for="person in people" :key="person.name">
              <div class="flex items-center space-x-4 lg:space-x-6">
                <img
                  class="w-16 h-16 rounded-full lg:w-20 lg:h-20"
                  :src="person.imageUrl"
                  alt=""
                />
                <div class="font-medium text-lg leading-6 space-y-1">
                  <h3 class="truncate text-left">{{ person.name }}</h3>
                  <p class="text-red-700 text-left">{{ person.role }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const people = [
  {
    name: "Bertyn Boulikou",
    role: "B3 Web",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Faconnier Pierre",
    role: "B3 Security",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "MOREAU Olivia",
    role: "B2 Informatique",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "YASSER mohamed",
    role: "B2 Informatique",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "CHEVALIER Maxime",
    role: "B1 Informatique",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "quicy Florien",
    role: "B1 Informatique",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default {
  setup() {
    return {
      people,
    };
  },
};
</script>
