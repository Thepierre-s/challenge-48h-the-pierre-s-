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
    class="container px-1 md:px-10 md:py-10 flex justify-between mx-auto"
  >
    <div class="flex flex-col justify-end">
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
        <li class="m-2">Home World : {{ oneVehicle.homeworld.name }}</li>
      </ul>
    </div>
    <img class="max-h-[500px] max-w-[420px]" :src="urlImg" alt="" />
  </div>
</template>

<style scoped>
#vehicle {
  position: relative;
}
#vehicle::after {
  font-family: "Star Jhol";
  content: "Vehicule";
  position: absolute;
  left: 45%;
  font-size: 6rem;
  z-index: -3;
}
</style>
