import { reactive } from "vue";
const store = reactive({
  score: {
    points: 0,
    valid: false,
  },
  data: { category: String, elements: [] },
  quizzLoading: false,
  nbQuestions: 5,
});
const setStateProp = (propName, newValue) => {
  store[propName] = newValue;
};
export default { state: store, setStateProp };
