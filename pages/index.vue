<template>
    <section class="container">
        <div>
            <h2>Write to Firestore.</h2>
            <div>
                <button @click="writeToFirestore" :disabled="writeSuccessful">
                    <span v-if="!writeSuccessful">Write now</span>
                    <span v-else>Successful!</span>
                </button>
                <v-btn>Hello</v-btn>
            </div>
        </div>
    </section>
</template>
<script>
    import { fireDb } from '~/plugins/firebase.js'

    export default {
        data() {
            return {
                writeSuccessful: false
            }
        },
        methods: {
            async writeToFirestore() {
                const ref = fireDb.collection('test').doc('test')
                const document = {
                    text: 'This is a test message. 3'
                }
                try {
                    await ref.set(document)
                } catch (e) {
                    // TODO: error handling
                    console.error(e)
                }
                this.writeSuccessful = true
            }
        }
    }
</script>
<style>
    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
</style>
