<template>
    <div class="userDetail">
        <!-- <div class="card shadow position-fixed top-50 start-50">
            <div class="card-body p-4">
                <img :src="user.picture.large" class="picture float-start border border-dark rounded-circle me-3" />
                <div id="full-name" class="fw-bold">{{ user.name.first }} {{ user.name.last }}</div>
                <div id="username">
                    <strong>Username: </strong> {{ user.login.username }}
                </div>
                <div>
                    <strong>Id: </strong> {{ user.id.name }} - {{ user.id.value }}
                </div>
                <div>
                    <strong>Age: </strong>{{ user.dob.age }} <strong>Gender: </strong>{{ user.gender }}
                </div>
                <div><strong>Email: </strong> <span class="fst-italic">
                        <a :href="'mailto:' + user.email">{{ user.email }}</a>
                    </span></div>
                <div>
                    <strong>Street: </strong> {{ user.location.street.name }}
                    <strong>Number: </strong> {{ user.location.street.number }}
                    <strong>City: </strong> {{ user.location.city }}
                </div>
                <div>
                    <strong>State: </strong> {{ user.location.state }}
                    <strong>Country: </strong> {{ user.location.country }}
                    <strong> Postcode: </strong> {{ user.location.postcode }}
                    <strong>Nationality: </strong> {{ user.nat }}
                </div>
                <div>
                    <strong>Phone: </strong> {{ user.phone }} - <strong>Cell: </strong>
                    {{ user.cell }} <strong>Registered for: </strong>
                    {{ user.registered.age }} years
                </div>
            </div>
        </div> -->
        <div class="widget shadow-lg p-3">
            <div class="p-4">
                <div class="ms-1">
                    <img :src="user.picture.large" class="float-start border border-dark rounded-circle me-3" />
                    <div class="fw-bold">{{ user.name.first }} {{ user.name.last }}</div>
                    <div class="mb-2">
                        <strong>Username: </strong> {{ user.login.username }}
                    </div>
                    <div>
                        <strong>Id: </strong> {{ user.id.name }} - {{ user.id.value }}
                    </div>
                    <div>
                        <strong>Age: </strong>{{ user.dob.age }} <strong>Gender: </strong>{{ user.gender }}
                    </div>
                    <div><strong>Email: </strong> <span class="fst-italic">
                            <a :href="'mailto:' + user.email">{{ user.email }}</a>
                        </span></div>
                    <div class="mt-3">
                        <strong>Street: </strong> {{ user.location.street.name }}
                        <strong>Number: </strong> {{ user.location.street.number }}
                        <strong>City: </strong> {{ user.location.city }}
                    </div>
                    <div>
                        <strong>State: </strong> {{ user.location.state }}
                        <strong>Country: </strong> {{ user.location.country }}
                        <strong> Postcode: </strong> {{ user.location.postcode }}
                        <strong>Nationality: </strong> {{ user.nat }}
                    </div>
                    <div>
                        <strong>Phone: </strong> {{ user.phone }} - <strong>Cell: </strong>
                        {{ user.cell }} <strong>Registered for: </strong>
                        {{ user.registered.age }} years
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { computed } from "vue";
import { User } from "../types/UserInterface";


defineProps<{ user: User; }>();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.userDetail {
    height: 100%;
}

.widget {
    position: sticky;
    top: 20vh;
    border-radius: 10px;
}
</style>