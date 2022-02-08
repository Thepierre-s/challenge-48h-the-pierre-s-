import { reactive } from "vue";
const store = reactive({
  score: [],
  data: { category: String, elements: [{ name: String, id: Number }] },
  quizzLoading: false,
});
const setStateProp = (propName, newValue) => {
  store[propName] = newValue;
};
export default { state: store, setStateProp };
