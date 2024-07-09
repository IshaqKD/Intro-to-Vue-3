const application = Vue.createApp({
    data(){
        return {
            cart: [],
            premium: false,
            details :[
                'desc: nice product',
                'height: high enough',
                'width: wont be a problem'
            ]
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id) {
            this.cart.pop(id)
        }
    },
})