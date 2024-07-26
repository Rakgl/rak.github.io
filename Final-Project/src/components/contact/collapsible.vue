<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
    <div class="row">
        <div class="include-collap">
            <h1 class="header-collap">Popular Question and Answer</h1>
            <div v-for="(item, index) in faqs" :key="index" class="container-collapsible">
                <button class="collapsible" @click="toggleCollapse(index)">
                    <span>{{ item.question }}</span>
                    <i :class="[item.active ? 'fa-chevron-up' : 'fa-plus', 'icon', 'fa-solid']"></i>
                </button>
                <div :ref="'content-' + index" class="content" :style="{ maxHeight: item.active ? item.maxHeight + 'px' : null }">
                    <p>{{ item.answer }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        faqs: [
            {
            question: 'How can I set up an ecommerce store?',
            answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy.',
            active: false,
            maxHeight: 0
            },
            {
            question: 'What are the best platforms for building an ecommerce store?',
            answer: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
            active: false,
            maxHeight: 0
            },
            {
            question: 'How can I optimize my ecommerce store for search engines?',
            answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.',
            active: false,
            maxHeight: 0
            },
            {
            question: 'What are the most effective strategies for driving traffic to an ecommerce store?',
            answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
            active: false,
            maxHeight: 0
            },
            {
            question: 'How can I improve the conversion rate of my ecommerce store?',
            answer: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure',
            active: false,
            maxHeight: 0
            }
        ]
        };
    },
    methods: {
        toggleCollapse(index) {
        this.faqs.forEach((item, i) => {
            if (i === index) {
            item.active = !item.active;
            this.$nextTick(() => {
                item.maxHeight = item.active ? this.$refs['content-' + index][0].scrollHeight : 1;
            });
            } 
            else{
                item.active = false;
                item.maxHeight = 500;
            }
        });
        }
    }
};
</script>