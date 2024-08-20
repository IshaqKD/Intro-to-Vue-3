app.component("review-form", {
    template: /*html*/ `
  <form class="review-form" @submit.prevent="submitReview">
    <h3></h3>
    <label for="name">Name:</label>
    <input id="name" v-model="name">
    
    <label for="review">Review:</label>
    <textarea name="review" id="review" v-model="review"></textarea>
    
    <label for="rating">Rating:</label>
    <select name="rating" id="rating" v-model.number="rating">
      <option>5</option>
      <option>4</option>
      <option>3</option>
      <option>2</option>
      <option>1</option>
    </select>
    
    <label for="recommend">Would You Recommend This Product:</label>
    <input id="recommend" v-model="recommend">


    <button class="button" type="submit" value="submit">Submit</button>
  </form>
  `,
    data() {
        return {
            name: "",
            review: "",
            rating: null,
            recommend: ""
        };
    },
    methods: {
        submitReview() {
          if (this.name === '' || this.review === '' || this.rating === null) {
            alert('all fields are required!')
            return
          }
            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                recommend: this.recommend,
            };

            this.$emit("review-submitted", productReview);

            this.name =  ""
            this.review =  ""
            this.rating =  null
            this.recommend =  ""
        },
    },
});
