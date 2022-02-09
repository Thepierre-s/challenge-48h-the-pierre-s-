<script setup>
import { ref, computed, onMounted, watch } from "vue";
import Vehicle from "../../service/module/vehicle";

const props = defineProps({
  id: String,
});

let loading = ref(true);
let oneVehicle = ref(null);

onMounted(async () => {
  let data = await Vehicle.getVehicleById(props.id);
  oneVehicle.value = data.data;
  loading.value = false;
});

watch(async (id) => {
  loading.value = true;
  let data = await Vehicle.getVehicleById(props.id);
  oneVehicle.value = data.data;
  loading.value = false;
});
const urlImg = computed(
  () => "../src/assets/img/vehicles/" + props.id + ".png"
);
</script>

<template>
  <div v-if="loading == true">loading</div>
  <div
    v-else-if="oneVehicle != null"
    id="vehicle"
    class="container px-1 md:px-10 md:py-10 flex flex-col-reverse sm:flex-row justify-between mx-auto"
  >
    <div class="sm:w-1/2 flex flex-col justify-end">
      <h2 class="text-[30px] items-center">{{ oneVehicle.name }}</h2>
      <ul class="m-2 text-[15px]">
        <li class="m-2">model : {{ oneVehicle.model }}</li>
        <li class="m-2">manufacturer : {{ oneVehicle.manufacturer }}</li>
        <li class="m-2" v-if="oneVehicle.cost_in_credits != 'unknown'">
          cost in credits : {{ oneVehicle.cost_in_credits }}
        </li>
        <li class="m-2">length : {{ oneVehicle.length }}</li>
        <li class="m-2">
          max atmosphering speed : {{ oneVehicle.max_atmosphering_speed }}
        </li>

        <li class="m-2">crew : {{ oneVehicle.crew }}</li>
        <li class="m-2" v-if="oneVehicle.average_lifespan != null">
          average lifespan : {{ oneVehicle.average_lifespan }}
        </li>
        <li class="m-2" v-if="oneVehicle.passengers != 0">
          passengers : {{ oneVehicle.passengers }}
        </li>
        <li class="m-2" v-if="oneVehicle.cargo_capacity != 0">
          cargo capacity : {{ oneVehicle.cargo_capacity }}
        </li>
        <li class="m-2" v-if="oneVehicle.consumables != 'none'">
          consumables : {{ oneVehicle.consumables }}
        </li>
        <li class="m-2" v-if="oneVehicle.vehicle_class != 'n/a'">
          vehicle class : {{ oneVehicle.vehicle_class }}
        </li>
      </ul>
    </div>
    <img
      class="max-h-[500px] max-w-[420px] object-cover"
      :src="urlImg"
      alt=""
    />
  </div>
</template>

<style scoped>
#vehicule {
  position: relative;
}
@media screen(sm) {
  #vehicule {
    --left-position: 55%;
    --font-txt-bg: 6rem;
  }
}
@media screen(md) {
  #vehicule {
    --left-position: 55%;
    --font-txt-bg: 7rem;
  }
}
#vehicule::after {
  font-family: "Star Jhol";
  content: "vehicule";
  position: absolute;
  top: var(--top-position);
  left: var(--left-position);
  font-size: var(--font-txt-bg);
  z-index: -3;
}
</style>
