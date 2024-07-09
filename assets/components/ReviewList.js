application.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true,
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
        <h3>Reviews:</h3>
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
            {{ console.log(review) }}
            {{ review.name }} gave this {{ review.rating }} stars
            <br/>
            "{{ review.review }}"
            <br/>
            <!-- solution -->
            Recommended: {{ review.rec }}
            <!-- solution -->
            </li>
        </ul>
    </div>
    `
})