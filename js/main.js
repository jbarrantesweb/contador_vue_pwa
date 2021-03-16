const app = Vue.createApp({
    data() {
        return {
            title: "Contador App - Vue",
            count: 0
        };
    },
    methods: {
        //Refactorizamos en una sola funcion
        modCount(ins = 'add', limit = 1) {
            (ins === 'dis') ? this.count -= limit : this.count += limit;
        }
        /*
        addCount(){
            ++this.count;
        },
        disCount(){
            --this.count;
        }
        */
    }
});
