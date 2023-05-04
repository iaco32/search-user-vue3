<template>
    <div class="row">
        <div class="col-md-5">
            <div class="search hstack gap-2 mb-4 sticky-top">
                <input class="form-control mt-4" type="text" v-model="searchKey"
                    placeholder="Search (First Name, Last Name or Gender)..." />
                <button type="button" class="btn btn-primary col-md-3 mt-4" @click="getUsers">
                    Refresh
                </button>
            </div>

            <div v-if="spinner">
                <div class="d-flex justify-content-center">
                    <div id="loader"></div>
                </div>
            </div>
            <div v-else>
                <div v-for="(person, index) in searchedWidgets" :key="index"
                    class="row row-cols-2 my-4 d-flex justify-content-center">
                    <div class="col-md-auto">
                        <img :src="person.picture.thumbnail" :alt="person.name.first + ' ' + person.name.last"
                            class="border border-dark rounded-circle cursor-pointer" @click="getUserDetails(person)" />
                        <!-- <button type="button" @click="getUserDetails(person)" class="btn btn-sm">
                            <img class="border border-dark rounded-circle" :src="person.picture.thumbnail"
                                :alt="person.name.first + ' ' + person.name.last" /></button> -->
                    </div>
                    <div class="col-md-6">
                        <div class="fw-bold">
                            {{ person.name.first }}
                            {{ person.name.last }}
                        </div>
                        <div class="fst-italic">
                            <a :href="'mailto:' + person.email">{{ person.email }}</a>
                        </div>
                    </div>
                </div>
                <div class="scrollTop" v-if="showScrollTopButton()">
                    <button type="button" class="btn btn-danger" @click="goToTop">
                        Scroll to Top
                    </button>
                </div>
            </div>
        </div>
        <div v-if="!spinner && userDetail !== null" class="col-md-6">
            <UserDetail :user="userDetail" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { User } from "../types/UserInterface";
import UserDetail from "../components/UserDetail.vue";
// default api call
const results = 25;
const apiCall = "https://randomuser.me/api/?results=" + results;

const spinner = ref(false);
const searchKey = ref("");
const users = ref<User[]>([]);
const userDetail = ref<User | null>(null);

const searchedWidgets = computed(() => {
    return users.value.filter((user) => {
        return user.name.first.toLowerCase().indexOf(searchKey.value.toLowerCase()) != -1 ||
            user.name.last.toLowerCase().indexOf(searchKey.value.toLowerCase()) != -1 ||
            user.gender === searchKey.value.toLowerCase();
    });
});
// function to add a Scroll to Top button at the bottom of the page
const showScrollTopButton = () => {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        return true;
    }
    return false;
};

const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/**
 * this function implements the infinite scroll and adds new 25 users at once
 * window.innerHeight: the number of pixels for the height of the screen;
 * window.scrollY: returns the number of pixels that the document is currently scrolled vertically.
 * document.documentElement.offsetHeight: the amount of pixels for the entire height of the document element;
 * if window.innerHeight + window.scrollY is greater than document.documentElement.offsetHeight, the end of the page has been reached and the endOfPage variable is true
 */
const addNewResults = () => {
    let endOfPage =
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight;

    if (endOfPage) {
        axios.get(apiCall).then((response) => {
            // ECMAScript 6 spread operator
            users.value.push(...response.data.results);
        });
    }
};

// Api call that returns a message if the API service is offline or there are server issues
const getUsers = async () => {
    userDetail.value = null;
    try {
        spinner.value = true;
        const response = await axios.get(apiCall);
        users.value = response.data.results;
        console.log("UserLIST: ", users.value, " - userDetail: ", userDetail.value);
        spinner.value = false;
    } catch (err) {
        alert("There was an error while receiving data!! " + (err as Error).message);
        spinner.value = false;
    } finally {
        spinner.value = false;
    }
};

// This function passes data props to the UserDetail component
const getUserDetails = (user: User) => {
    userDetail.value = user;
}

onMounted(() => {
    // event listener for scrolling
    window.addEventListener("scroll", addNewResults);
    getUsers();
});
</script>

<style scoped>
.search {
    background: white;
}

.cursor-pointer {
    cursor: pointer;
}

.scrollTop {
    position: fixed;
    bottom: 1.2rem;
    right: 3rem;
    z-index: 99;
}
</style>