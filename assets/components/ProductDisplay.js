application.component('product-display', {
    props: {
        prm: {
            type: Boolean,
            required: true,
        },
        det: {
            type: Object,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <a v-bind:href=url  :class="{'out-of-stock-img': !inStock}">
              <img :src=image >
            </a>
            <!-- image goes here -->
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <!-- <p>{{ description }}</p> -->
            <p v-if="inStock">in Stock</p>
            <!-- <p v-else-if="inventory <= 10 && inventory > 0">Almost Sold Out!</p> -->
            <p v-else="inStock">Out od Stock</p>
            <p v-show="onSale"><b>Item on Sale!!</b></p>

            <p>Shipping : {{shipping}}</p>
            
            <ul>
              <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <ul>
              <li v-for="detail in det">{{ detail }}</li>
            </ul>

            <div 
              v-for="(variant, index) in variants" 
              :key="variant.id" 
              @mouseover="upadteVarient(index)"
              class="color-circle"
              :style="{ backgroundColor: variant.color}"></div>
            
            <ul>
              <span v-for="size in sizes" key="size.id">{{ size.size + " . " }}</span>
            </ul>

            <button 
              class="button"
              @:click="addToCart"
              :class=" {disabledButton: !inStock} "
              :disabled="!inStock">
              Add to Cart
            </button>

            <button class="button" @click=removeCart>Remove from Cart</button>
            </div>

            <review-list :reviews="reviews" v-if="reviews.length"></review-list>
            <review-form @review-submitted="addReview"></review-form>
        </div>
      </div>`,
    data(){
        return {
            product: 'Socks',
            brand: 'Lemon',
            onSale: true,
            selectedVariant: 1,
            url: '#',
            inventory: 0,
            onSale: false,
            details: ["Cotton 50%", "Wool 30%", "Polyister 10%"],
            variants:[
                {id:"2234", color:"green", image: './assets/images/socks_green.jpg', quantity: 0},
                {id:"2235", color:"blue", image: './assets/images/socks_blue.jpg', quantity: 50},
            ],
            sizes:[
                {id:2345, size:"S"},
                {id:2346, size:"M"},
                {id:2347, size:"L"},
                {id:2348, size:"XL"},
                {id:2349, size:"XXL"},
            ],
            description: 'this is my Socks description',
            reviews: [],
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeCart() {
            // if (this.cart > 0) {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
            // }
        },
        upadteVarient(index) {
            this.selectedVariant = index

            // console.log(index);
        },
        addReview(review) {
          this.reviews.push(review)
        },
    },
    computed: {
        title() {
            return this.onSale ? this.brand + ' ' + this.product + ' is on Sale' : this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping() {
            return this.prm ? 'free shipping' : '10$'
        },
    },
})