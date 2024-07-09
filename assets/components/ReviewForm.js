application.component('review-form', {
    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <label for="rec">would you recommend thid product?</label>
        <input id="rec" v-model="rec">

        <input class="button" type="submit" value="Submit">  

    </form>
    `,
    data() {
        return {
            name: 'cc',
            review: '',
            rating: '',
            rec: '',
        }

    },
    methods: {
        onSubmit() {
            if(this.name === '' || this.review === '' || this.rating === null) {
                alert('please fill out all form fields')
                return
            }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                rec: this.rec,
            }

            this.$emit('review-submitted', productReview)

            this.name = '',
            this.review = '',
            this.rating  = null,
            this.rec = ''
        }
    },
})